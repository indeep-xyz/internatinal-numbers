using InternationalNumbers.WebApp.Api.Helpers.Excel.Attributes;
using NPOI.SS.UserModel;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace InternationalNumbers.WebApp.Api.Helpers.Excel.Models
{
    /// <summary>
    /// Excel 上のデータと変換結果クラスの紐付け情報。
    /// </summary>
    /// <typeparam name="TClass">変換結果のクラス</typeparam>
    public class ExcelListConversionMap<TClass> where TClass : new()
    {
        #region フィールド

        /// <summary>
        /// Excel 上の列番号と、変換結果クラスのフィールドの紐付け情報。
        /// </summary>
        public readonly Dictionary<int, FieldInfo> FieldMap;

        /// <summary>
        /// Excel 上の列番号と、変換結果クラスのプロパティの紐付け情報。
        /// </summary>
        public readonly Dictionary<int, PropertyInfo> PropertyMap;

        #endregion フィールド
        #region 初期化

        /// <summary>
        /// コンストラクタ
        /// </summary>
        /// <param name="sheet">抽出・変換対象のシート</param>
        /// <param name="rowIndex">変換の紐付け基準になる情報が書かれた行番号</param>
        public ExcelListConversionMap(
            ISheet sheet,
            int rowIndex)
        {
            var columnNames = ExtractHeaderColumnNames(sheet, rowIndex);
            FieldMap = CreateFieldMap(columnNames);
            PropertyMap = CreatePropertyMap(columnNames);
        }

        /// <summary>
        /// ヘッダ行の列名を抽出する。
        /// </summary>
        /// <param name="headerColumnNames">ヘッダ行の列名</param>
        /// <returns></returns>
        private IEnumerable<string> ExtractHeaderColumnNames(
            ISheet sheet,
            int columnNameIndex)
        {
            var headerColumnNames = new List<string>();
            var headerBottomRow = sheet.GetRow(columnNameIndex);
            var columnIndex = 0;
            var headerCell = headerBottomRow.GetCell(columnIndex++);

            // 列名が途切れるまで列データを戻り値に追加する
            while (headerCell != null
                && headerCell.ToString().Length > 0)
            {
                headerColumnNames.Add(headerCell.ToString());
                headerCell = headerBottomRow.GetCell(columnIndex++);
            }

            return headerColumnNames;
        }

        /// <summary>
        /// Excel 上の列番号と、変換結果クラスのフィールドの紐付け情報を作成する。
        /// </summary>
        /// <param name="headerColumnNames">ヘッダ行の列名</param>
        /// <returns></returns>
        private Dictionary<int, FieldInfo> CreateFieldMap(
            IEnumerable<string> headerColumnNames)
        {
            var fieldConversionMap = new Dictionary<int, FieldInfo>();

            foreach (var fieldInfo in typeof(TClass).GetFields())
            {
                var excelColumnNameAttribute = fieldInfo.GetCustomAttribute<ExcelListColumnName>();
                var index = headerColumnNames.ToList().IndexOf(excelColumnNameAttribute?.Value);

                if (index > -1)
                {
                    fieldConversionMap.Add(index, fieldInfo);
                }
            }

            return fieldConversionMap;
        }

        /// <summary>
        /// Excel 上の列番号と、変換結果クラスのプロパティの紐付け情報を作成する。
        /// </summary>
        /// <param name="headerColumnNames">ヘッダ行の列名</param>
        /// <returns></returns>
        private Dictionary<int, PropertyInfo> CreatePropertyMap(
            IEnumerable<string> headerColumnNames)
        {
            var propertyConversionMap = new Dictionary<int, PropertyInfo>();

            foreach (var propertyInfo in typeof(TClass).GetProperties())
            {
                if (!propertyInfo.CanWrite)
                {
                    continue;
                }

                var excelColumnNameAttribute = propertyInfo.GetCustomAttribute<ExcelListColumnName>();
                var index = headerColumnNames.ToList().IndexOf(excelColumnNameAttribute?.Value);

                if (index > -1)
                {
                    propertyConversionMap.Add(index, propertyInfo);
                }
            }

            return propertyConversionMap;
        }

        #endregion 初期化
    }
}
