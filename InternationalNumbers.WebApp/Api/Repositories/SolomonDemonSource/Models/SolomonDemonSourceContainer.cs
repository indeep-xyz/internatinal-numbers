using System.Collections.Generic;

namespace InternationalNumbers.WebApp.Api.Repositories.SolomonDemonSource.Models
{
    /// <summary>
    /// 各種ソロモンの悪魔に関する情報を扱う。
    /// </summary>
    public class SolomonDemonSourceContainer
    {
        #region フィールド

        /// <summary>
        /// 各種ソロモンの悪魔の分類キー名
        /// </summary>
        public readonly string Key;

        /// <summary>
        /// 各種ソロモンの悪魔の説明情報
        /// </summary>
        public List<SolomonDemonSourceShape> Shapes { get; }

        /// <summary>
        /// 各種ソロモンの悪魔の文字形の情報
        /// </summary>
        public SolomonDemonSourceDescription Description { get; private set; }

        #endregion フィールド
        #region 初期化

        public SolomonDemonSourceContainer(
            SolomonDemonSourceContainerBuffer buffer)
        {
            Key = buffer.Key;
            Shapes = new List<SolomonDemonSourceShape>();
        }

        #endregion 初期化
        #region 値の追加

        /// <summary>
        /// 説明情報の追加。
        /// </summary>
        /// <param name="buffers">ファイル取得値</param>
        public void AddRange(
            IEnumerable<SolomonDemonSourceDescriptionBuffer> buffers)
        {
            foreach (var buffer in buffers)
            {
                if (Description == null)
                {
                    Description = new SolomonDemonSourceDescription(buffer);
                }
                else
                {
                    Description.Update(buffer);
                }
            }
        }

        /// <summary>
        /// 文字形に関する情報情報の追加。
        /// </summary>
        /// <param name="buffers">ファイル取得値</param>
        public void AddRange(
            IEnumerable<SolomonDemonSourceShapeBuffer> buffers)
        {
            foreach (var buffer in buffers)
            {
                Shapes.Add(new SolomonDemonSourceShape(buffer));
            }
        }

        #endregion 値の追加
    }
}
