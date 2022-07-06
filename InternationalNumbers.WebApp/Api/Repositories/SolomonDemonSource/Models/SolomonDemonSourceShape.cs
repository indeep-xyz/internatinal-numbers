using System.Collections.Generic;
using System.Linq;

namespace InternationalNumbers.WebApp.Api.Repositories.SolomonDemonSource.Models
{
    /// <summary>
    /// 各種ソロモンの悪魔のシンボル情報（シジル）に関する情報。
    /// </summary>
    public class SolomonDemonSourceShape
    {
        public string PublicFileName { get; }

        public string SourceFilePath { get; }

        public IEnumerable<int> Unicodes { get; }

        public SolomonDemonSourceShape(
            SolomonDemonSourceShapeBuffer buffer)
        {
            PublicFileName = buffer.PublicFileName;
            SourceFilePath = buffer.SourceFilePath;
        }
    }
}
