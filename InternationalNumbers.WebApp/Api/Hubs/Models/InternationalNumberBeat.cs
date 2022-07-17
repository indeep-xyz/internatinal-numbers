using System.Collections.Generic;

namespace InternationalNumbers.WebApp.Api.Hubs.Models
{
    /// <summary>
    /// 各種数字に関する情報を扱う。（ビート処理用）
    /// </summary>
    public class InternationalNumberBeat
    {
        #region フィールド

        /// <summary>
        /// 各種数字の分類キー名
        /// </summary>
        public readonly string Key;

        /// <summary>
        /// 数値
        /// </summary>
        public readonly string Value;

        /// <summary>
        /// 数値の表示文字
        /// </summary>
        public readonly string String;

        #endregion フィールド
        #region 初期化

        public InternationalNumberBeat(
            string key,
            string value,
            string str)
        {
            Key = key;
            Value = value;
            String = str;
        }

        #endregion 初期化
    }
}
