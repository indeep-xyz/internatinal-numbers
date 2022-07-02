using System.Collections.Generic;

namespace InternationalNumbers.WebApp.Api.Repositories.InternationalNumberSource
{
    /// <summary>
    /// 各種数字の分類に関する説明情報を扱う。
    /// </summary>
    public class InternationalNumberSourceDescription
    {
        public Dictionary<string, string> CategoryNameMap { get; }

        public InternationalNumberSourceDescription(
            InternationalNumberSourceDescriptionBuffer buffer)
        {
            CategoryNameMap = new Dictionary<string, string>();
            Add(buffer);
        }

        public void Add(
            InternationalNumberSourceDescriptionBuffer buffer)
        {
            CategoryNameMap.Add(buffer.DisplayLanguage, buffer.CategoryName);
        }
    }
}
