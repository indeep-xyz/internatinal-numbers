using InternationalNumbers.WebApp.Api.Helpers.Excel.Models;
using NPOI.SS.UserModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace InternationalNumbers.WebApp.Api.Helpers.Excel
{
    /// <summary>
    /// Excel ファイルから値を読み出すための処理。
    /// </summary>
    public class ExcelReader
    {
        #region フィールド

        /// <summary>
        /// Excel のブックデータ
        /// </summary>
        private readonly IWorkbook Workbook;

        /// <summary>
        /// Excel のシートデータ
        /// シート名をキーに、シートデータを保持する
        /// </summary>
        private readonly Dictionary<string, ISheet> SheetMap;

        #endregion フィールド
        #region 初期化処理

        /// <summary>
        /// コンストラクタ
        /// </summary>
        /// <param name="fileName">読み出すファイル名</param>
        /// <param name="workbook"></param>
        public ExcelReader(
            string fileName)
        {
            Workbook = CreateWorkbook(fileName);
            SheetMap = CreateSheetMap();
        }

        /// <summary>
        /// 読み出す Excel のブックデータを作成する。
        /// </summary>
        /// <param name="fileName">読み出すファイル名</param>
        /// <returns></returns>
        private IWorkbook CreateWorkbook(
            string fileName)
        {
            try
            {
                var assm = Assembly.GetExecutingAssembly();
                using (var stream = assm.GetManifestResourceStream(fileName))
                {
                    return  WorkbookFactory.Create(stream);
                }
            }
            catch
            {
                throw new ApplicationException($"The Excel file \"{fileName}\" is not found.");
            }
        }

        /// <summary>
        /// シート名からシートデータを引き当て可能なマップを作成する。
        /// </summary>
        /// <returns></returns>
        private Dictionary<string, ISheet> CreateSheetMap()
        {
            var sheetMap = new Dictionary<string, ISheet>();

            for (var i = 0; i < Workbook.NumberOfSheets; i++)
            {
                var sheet = Workbook.GetSheetAt(i);
                sheetMap.Add(sheet.SheetName, sheet);
            }

            return sheetMap;
        }

        #endregion 初期化処理
        #region 抽出・変換処理

        /// <summary>
        /// Excel ファイルデータからデータを抽出し、指定クラスのインスタンスに変換する。
        /// </summary>
        /// <typeparam name="TClass">変換結果のクラス</typeparam>
        /// <param name="sheetName">抽出対象の Excel 上のシート名</param>
        /// <param name="conversionMapRowIndex">変換の紐付け基準になる情報が書かれた行番号</param>
        /// <param name="startContentRowIndex">データ行の開始行番号</param>
        /// <returns></returns>
        internal List<TClass> ConvertAsList<TClass>(
            string sheetName,
            int conversionMapRowIndex = 0,
            int startContentRowIndex = 1
            ) where TClass : new()
        {
            if (SheetMap.TryGetValue(sheetName, out var sheet) == false)
            {
                // 指定のシート名がなければエラー
                throw new ArgumentException($"The Excel sheet name \"{sheetName}\" is not found.");
            }

            // 抽出・変換
            var headerRow = new ExcelListConversionMap<TClass>(sheet, conversionMapRowIndex);
            return ExcelListContentRow<TClass>
                       .CreateList(sheet, headerRow, startContentRowIndex)
                       .Select(contentRow => contentRow.Convert())
                       .ToList();
        }

        #endregion 抽出・変換処理
    }
}
