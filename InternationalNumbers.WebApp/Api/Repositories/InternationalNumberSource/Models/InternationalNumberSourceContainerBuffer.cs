using InternationalNumbers.WebApp.Api.Helpers.Excel;
using InternationalNumbers.WebApp.Api.Helpers.Excel.Attributes;
using InternationalNumbers.WebApp.Api.Helpers.Excel.Models;
using System.Collections.Generic;

namespace InternationalNumbers.WebApp.Api.Repositories.InternationalNumberSource.Models
{
    /// <summary>
    /// 各種数字のキーに関する情報を扱う。（Excel 情報抽出時のバッファ）
    /// </summary>
    public class InternationalNumberSourceContainerBuffer
        : ExcelListConversionBuffer<InternationalNumberSourceContainerBuffer>
    {
        #region フィールド

        /// <summary>
        /// 抽出対象のシート名
        /// </summary>
        private const string SheetName = "key";

        [ExcelListColumnName("分類キー")]
        public string Key;

        #endregion フィールド
        #region 抽出処理

        /// <summary>
        /// 一覧形式の Excel からのデータ抽出・変換呼び出し。
        /// </summary>
        /// <param name="excelReader"></param>
        /// <returns></returns>
        public new static List<InternationalNumberSourceContainerBuffer> ConvertAsList(
            ExcelReader excelReader)
        {
            return excelReader.ConvertAsList<InternationalNumberSourceContainerBuffer>(SheetName);
        }

        #endregion 抽出処理
    }
}
