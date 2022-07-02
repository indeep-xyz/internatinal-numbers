using InternationalNumbers.WebApp.Api.Helpers.Excel;
using InternationalNumbers.WebApp.Api.Repositories.InternationalNumberSource.Models;
using NPOI.SS.UserModel;
using System.Collections.Generic;
using System.Linq;

namespace InternationalNumbers.WebApp.Api.Repositories.InternationalNumberSource
{
    public class InternationalNumberSourceRepository
    {
        static readonly string excelFilePath = $"{typeof(InternationalNumberSourceRepository).Namespace}.Files.InternationalNumberSource.xlsx";

        public InternationalNumberSourceRepository()
        {
        }

        public IEnumerable<InternationalNumberSourceContainer> ExtractAll()
        {
            var containers = new List<InternationalNumberSourceContainer>();
            var excelReader = new ExcelReader(excelFilePath);

            // ファイル内から一時データの形で抽出
            var containerBuffers = InternationalNumberSourceContainerBuffer.ConvertAsList(excelReader);
            var descriptionBuffers = InternationalNumberSourceDescriptionBuffer.ConvertAsList(excelReader);
            var shapeBuffers = InternationalNumberSourceShapeBuffer.ConvertAsList(excelReader);

            // 抽出した値を返却データの形に加工
            foreach(var containerBuffer in containerBuffers)
            {
                var container = new InternationalNumberSourceContainer(containerBuffer);

                container.AddRange(descriptionBuffers.Where(d => d.Key == container.Key));
                container.AddRange(shapeBuffers.Where(s => s.Key == container.Key));

                containers.Add(container);
            }

            return containers;
        }
    }
}
