using System.Collections.Generic;
using System.Linq;

namespace InternationalNumbers.WebApp.Api.Repositories.SolomonDemonSource
{
    /// <summary>
    /// 各種ソロモンの悪魔に関する説明情報を扱う。
    /// </summary>
    public class SolomonDemonSourceDescription
    {
        public Dictionary<string, string> NameMap { get; }

        public Dictionary<string, List<string>> PositionMap { get; }

        public int OrderNo { get; private set; }

        public SolomonDemonSourceDescription(
            SolomonDemonSourceDescriptionBuffer buffer)
        {
            NameMap = new Dictionary<string, string>();
            PositionMap = new Dictionary<string, List<string>>();
            Update(buffer);
        }

        public void Update(
            SolomonDemonSourceDescriptionBuffer buffer)
        {
            if (string.IsNullOrWhiteSpace(buffer.DisplayLanguage))
            {
                // 表示言語がない場合、数値系の情報を設定する
                OrderNo = int.Parse(buffer.OrderNo);
            }
            else
            {
                // 表示言語がない場合、解説系の情報を設定する
                NameMap.Add(buffer.DisplayLanguage, buffer.Name);
                PositionMap.Add(buffer.DisplayLanguage, buffer.Position.Split("/").ToList());
            }
        }
    }
}
