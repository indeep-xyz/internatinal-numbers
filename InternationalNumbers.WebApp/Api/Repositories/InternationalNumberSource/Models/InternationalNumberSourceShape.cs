
using System.Collections.Generic;
using System.Linq;

namespace InternationalNumbers.WebApp.Api.Repositories.InternationalNumberSource.Models
{
    /// <summary>
    /// 各種数字の文字形に関する情報。
    /// </summary>
    public class InternationalNumberSourceShape
    {
        public string Value { get; }

        public string String { get; }

        public IEnumerable<int> Unicodes { get; }

        public InternationalNumberSourceShape(
            InternationalNumberSourceShapeBuffer buffer)
        {
            Value = buffer.Value;
            String = buffer.String;
            Unicodes = ExtractUnicodes(buffer);
        }

        private IEnumerable<int> ExtractUnicodes(
            InternationalNumberSourceShapeBuffer buffer)
        {
            return new List<string>()
            {
                buffer.Unicode1,
                buffer.Unicode2,
                buffer.Unicode3,
            }
                .Where(u => !string.IsNullOrWhiteSpace(u))
                .Select(u => int.Parse(buffer.Unicode1))
                .ToList();
        }
    }
}
