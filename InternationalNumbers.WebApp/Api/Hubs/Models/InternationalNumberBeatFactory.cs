using InternationalNumbers.WebApp.Api.Repositories.InternationalNumberSource;
using InternationalNumbers.WebApp.Api.Repositories.InternationalNumberSource.Models;

namespace InternationalNumbers.WebApp.Api.Hubs.Models
{
    /// <summary>
    /// 各種数字に関する情報のファクトリ。（ビート処理用）
    /// </summary>
    public static class InternationalNumberBeatFactory
    {
        /// <summary>
        /// 辞書データから作成する。
        /// </summary>
        /// <returns></returns>
        public static IEnumerable<InternationalNumberBeat> CreateList(
            IEnumerable<InternationalNumberSourceContainer> containers)
        {
            var list = new List<InternationalNumberBeat>();

            foreach (var container in containers)
            {
                foreach (var shape in container.Shapes)
                {
                    list.Add(new InternationalNumberBeat(container.Key, shape.Value, shape.String));
                }
            }

            return list;
        }

        /// <summary>
        /// 辞書データを取得し、その全量を用いて作成する。
        /// </summary>
        /// <returns></returns>
        public static IEnumerable<InternationalNumberBeat> CreateList()
        {
            return CreateList(new InternationalNumberSourceRepository().ExtractAll());
        }
    }
}
