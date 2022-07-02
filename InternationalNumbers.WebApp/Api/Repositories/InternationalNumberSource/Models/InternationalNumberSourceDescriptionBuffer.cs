using InternationalNumbers.WebApp.Api.Helpers.Excel;
using InternationalNumbers.WebApp.Api.Helpers.Excel.Attributes;
using InternationalNumbers.WebApp.Api.Helpers.Excel.Models;
using System.Collections.Generic;

namespace InternationalNumbers.WebApp.Api.Repositories.InternationalNumberSource
{
    /// <summary>
    /// 各種数字の分類に関する説明情報を扱う。（Excel 情報抽出時のバッファ）
    /// </summary>
    public class InternationalNumberSourceDescriptionBuffer
        : ExcelListConversionBuffer<InternationalNumberSourceDescriptionBuffer>
    {
        #region フィールド

        /// <summary>
        /// 抽出対象のシート名
        /// </summary>
        private const string SheetName = "description";

        [ExcelListColumnName("分類キー")]
        public string Key;

        [ExcelListColumnName("表示言語")]
        public string DisplayLanguage;

        [ExcelListColumnName("分類名")]
        public string CategoryName;

        #endregion フィールド
        #region 抽出処理

        /// <summary>
        /// 一覧形式の Excel からのデータ抽出・変換呼び出し。
        /// </summary>
        /// <param name="excelReader"></param>
        /// <returns></returns>
        public new static List<InternationalNumberSourceDescriptionBuffer> ConvertAsList(
            ExcelReader excelReader)
        {
            return excelReader.ConvertAsList<InternationalNumberSourceDescriptionBuffer>(SheetName);
        }

        #endregion 抽出処理
    }
}
