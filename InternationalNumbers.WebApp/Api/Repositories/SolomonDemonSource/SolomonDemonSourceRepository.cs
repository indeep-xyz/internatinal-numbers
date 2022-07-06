using InternationalNumbers.WebApp.Api.Helpers.Excel;
using InternationalNumbers.WebApp.Api.Repositories.SolomonDemonSource.Models;
using System.Collections.Generic;
using System.Linq;

namespace InternationalNumbers.WebApp.Api.Repositories.SolomonDemonSource
{
    public class SolomonDemonSourceRepository
    {
        static readonly string excelFilePath = $"{typeof(SolomonDemonSourceRepository).Namespace}.Files.SolomonDemonSource.xlsx";

        public SolomonDemonSourceRepository()
        {
        }

        public IEnumerable<SolomonDemonSourceContainer> ExtractAll()
        {
            var containers = new List<SolomonDemonSourceContainer>();
            var excelReader = new ExcelReader(excelFilePath);

            // ファイル内から一時データの形で抽出
            var containerBuffers = SolomonDemonSourceContainerBuffer.ConvertAsList(excelReader);
            var descriptionBuffers = SolomonDemonSourceDescriptionBuffer.ConvertAsList(excelReader);
            var shapeBuffers = SolomonDemonSourceShapeBuffer.ConvertAsList(excelReader);

            // 抽出した値を返却データの形に加工
            foreach(var containerBuffer in containerBuffers)
            {
                var container = new SolomonDemonSourceContainer(containerBuffer);

                container.AddRange(descriptionBuffers.Where(d => d.Key == container.Key));
                container.AddRange(shapeBuffers.Where(s => s.Key == container.Key));

                containers.Add(container);
            }

            return containers;
        }
    }
}
