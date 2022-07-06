using InternationalNumbers.WebApp.Api.Helpers.Excel;
using InternationalNumbers.WebApp.Api.Helpers.Excel.Attributes;
using InternationalNumbers.WebApp.Api.Helpers.Excel.Models;
using System.Collections.Generic;

namespace InternationalNumbers.WebApp.Api.Repositories.SolomonDemonSource.Models
{
    /// <summary>
    /// 各種ソロモンの悪魔のシンボル情報（シジル）に関する情報。（Excel 情報抽出時のバッファ）
    /// </summary>
    public class SolomonDemonSourceShapeBuffer
        : ExcelListConversionBuffer<SolomonDemonSourceShapeBuffer>
    {
        #region フィールド

        /// <summary>
        /// 抽出対象のシート名
        /// </summary>
        private const string SheetName = "shape";

        [ExcelListColumnName("分類キー")]
        public string Key;

        [ExcelListColumnName("表示用の画像ファイル名")]
        public string PublicFileName;

        [ExcelListColumnName("画像取得ソース")]
        public string SourceFilePath;

        #endregion フィールド
        #region 抽出処理

        /// <summary>
        /// 一覧形式の Excel からのデータ抽出・変換呼び出し。
        /// </summary>
        /// <param name="excelReader"></param>
        /// <returns></returns>
        public new static List<SolomonDemonSourceShapeBuffer> ConvertAsList(
            ExcelReader excelReader)
        {
            return excelReader.ConvertAsList<SolomonDemonSourceShapeBuffer>(SheetName);
        }

        #endregion 抽出処理
    }
}
