using NPOI.SS.UserModel;
using System.Collections.Generic;

namespace InternationalNumbers.WebApp.Api.Helpers.Excel.Models
{
    /// <summary>
    /// Excel で一覧形式のデータ変換を扱う際のデータ行。
    /// </summary>
    /// <typeparam name="TClass">変換結果のクラス</typeparam>
    public class ExcelListContentRow<TClass> where TClass : new()
    {
        #region フィールド

        private readonly IRow Row;
        private readonly ExcelListConversionMap<TClass> HeaderRow;

        #endregion フィールド
        #region 初期化

        public ExcelListContentRow(
            IRow row,
            ExcelListConversionMap<TClass> headerRow)
        {
            Row = row;
            HeaderRow = headerRow;
        }

        #endregion 初期化
        #region ファクトリ

        /// <summary>
        /// Excel ファイルデータからデータを抽出し、変換結果クラスのインスタンスに変換する。
        /// </summary>
        /// <param name="sheet">Excel のシート情報</param>
        /// <param name="headerRow">ヘッダ行に関する情報、かつ、変換結果クラスの指定</param>
        /// <param name="startContentRowIndex">データ行の開始行番号</param>
        /// <returns></returns>
        public static List<ExcelListContentRow<TClass>> CreateList(
            ISheet sheet,
            ExcelListConversionMap<TClass> headerRow,
            int startContentRowIndex)
        {
            var rows = new List<ExcelListContentRow<TClass>>();
            var rowIndex = startContentRowIndex;

            // 上端の行を取得
            var row = sheet.GetRow(rowIndex++);

            // 左端のセルの値を行IDとして扱う
            var idCell = row.GetCell(0);

            // 行IDのないセルにあたるまで行データを戻り値に追加する
            while (idCell != null
                && idCell.ToString().Length > 0)
            {
                rows.Add(new ExcelListContentRow<TClass>(row, headerRow));

                // 次の行を取得
                row = sheet.GetRow(rowIndex++);
                idCell = row?.GetCell(0);
            }

            return rows;
        }


        #endregion ファクトリ
        #region 抽出・変換処理

        /// <summary>
        /// Excel ファイルの行データから情報を抽出し、変換結果クラスのインスタンスに変換する。
        /// </summary>
        /// <returns></returns>
        public TClass Convert()
        {
            var instance = new TClass();

            ExtractAndSetFromFiled(instance);
            ExtractAndSetFromProperty(instance);

            return instance;
        }

        /// <summary>
        /// 行データ内の各セルから情報を抽出し、変換結果クラスのインスタンスに設定する。（対フィールド）
        /// </summary>
        private void ExtractAndSetFromFiled(TClass instance)
        {
            foreach (var columnNumber in HeaderRow.FieldMap.Keys)
            {
                if (HeaderRow.FieldMap.TryGetValue(columnNumber, out var fieldInfo))
                {
                    var cell = Row.GetCell(columnNumber);

                    if (cell == null)
                    {
                        continue;
                    }

                    // フィールドに値を代入
                    fieldInfo.SetValue(
                        instance,
                        ExtractCellValue(cell));
                }
            }
        }

        /// <summary>
        /// 行データ内の各セルから情報を抽出し、変換結果クラスのインスタンスに設定する。（対プロパティ）
        /// </summary>
        private void ExtractAndSetFromProperty(TClass instance)
        {
            foreach (var columnNumber in HeaderRow.PropertyMap.Keys)
            {
                if (HeaderRow.PropertyMap.TryGetValue(columnNumber, out var propertyInfo))
                {
                    var cell = Row.GetCell(columnNumber);

                    if (cell == null)
                    {
                        continue;
                    }

                    // セッターの実行
                    propertyInfo.SetMethod?.Invoke(
                        instance,
                        new object[] { ExtractCellValue(cell) });
                }
            }
        }

        /// <summary>
        /// セルから情報を抽出する。
        /// </summary>
        /// <param name="cell">抽出対象セル</param>
        /// <returns></returns>
        private object ExtractCellValue(
            ICell cell)
        {
            // 式の場合は計算結果の型を得る
            var cellType = cell.CellType == CellType.Formula
                ? cell.CachedFormulaResultType
                : cell.CellType;

            return cellType switch
            {
                // 真偽値
                CellType.Boolean => cell.BooleanCellValue,

                // 数値の場合。サイズがわからないので、一旦文字列として抽出する
                CellType.Numeric => cell.NumericCellValue.ToString(),

                // それ以外の場合、とりあえず文字列として抽出する
                _ => cell.StringCellValue,
            };
        }

        #endregion 抽出・変換処理
    }
}
