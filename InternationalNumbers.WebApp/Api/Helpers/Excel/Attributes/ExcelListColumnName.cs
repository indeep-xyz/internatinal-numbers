using System;

namespace InternationalNumbers.WebApp.Api.Helpers.Excel.Attributes
{
    /// <summary>
    /// Excel 上のデータと変換結果クラスの紐付け情報。
    /// Excel 上のヘッダ行にアトリビュートの値が存在があれば、アトリビュート対象のメンバーに情報を設定する。
    /// </summary>
    /// <remarks>
    ///   <seealso cref="ExcelReader"/>
    /// </remarks>
    [AttributeUsage(AttributeTargets.Field | AttributeTargets.Property)]
    public class ExcelListColumnName : Attribute
    {
        public readonly string Value;

        public ExcelListColumnName(
            string value)
        {
            Value = value;
        }
    }
}
