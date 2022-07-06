using InternationalNumbers.WebApp.Api.Helpers.Excel;
using InternationalNumbers.WebApp.Api.Helpers.Excel.Attributes;
using InternationalNumbers.WebApp.Api.Helpers.Excel.Models;
using System.Collections.Generic;

namespace InternationalNumbers.WebApp.Api.Repositories.SolomonDemonSource
{
    /// <summary>
    /// 各種ソロモンの悪魔に関する説明情報を扱う。（Excel 情報抽出時のバッファ）
    /// </summary>
    public class SolomonDemonSourceDescriptionBuffer
        : ExcelListConversionBuffer<SolomonDemonSourceDescriptionBuffer>
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

        [ExcelListColumnName("名称")]
        public string Name;

        [ExcelListColumnName("立場")]
        public string Position;

        [ExcelListColumnName("順序")]
        public string OrderNo;

        #endregion フィールド
        #region 抽出処理

        /// <summary>
        /// 一覧形式の Excel からのデータ抽出・変換呼び出し。
        /// </summary>
        /// <param name="excelReader"></param>
        /// <returns></returns>
        public new static List<SolomonDemonSourceDescriptionBuffer> ConvertAsList(
            ExcelReader excelReader)
        {
            return excelReader.ConvertAsList<SolomonDemonSourceDescriptionBuffer>(SheetName);
        }

        #endregion 抽出処理
    }
}
