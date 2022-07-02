using System.Collections.Generic;

namespace InternationalNumbers.WebApp.Api.Repositories.InternationalNumberSource.Models
{
    /// <summary>
    /// 各種数字に関する情報を扱う。（Excel から情報抽出時のバッファ含む
    /// ）
    /// </summary>
    public class InternationalNumberSourceContainer
    {
        #region フィールド

        /// <summary>
        /// 各種数字の分類キー名
        /// </summary>
        public readonly string Key;

        /// <summary>
        /// 各種数字の説明情報
        /// </summary>
        public List<InternationalNumberSourceShape> Shapes { get; }

        /// <summary>
        /// 各種数字の文字形の情報
        /// </summary>
        public InternationalNumberSourceDescription Description { get; private set; }

        #endregion フィールド
        #region 初期化

        public InternationalNumberSourceContainer(
            InternationalNumberSourceContainerBuffer buffer)
        {
            Key = buffer.Key;
            Shapes = new List<InternationalNumberSourceShape>();
        }

        #endregion 初期化
        #region 値の追加

        /// <summary>
        /// 説明情報の追加。
        /// </summary>
        /// <param name="buffers">ファイル取得値</param>
        public void AddRange(
            IEnumerable<InternationalNumberSourceDescriptionBuffer> buffers)
        {
            foreach (var buffer in buffers)
            {
                if (Description == null)
                {
                    Description = new InternationalNumberSourceDescription(buffer);
                }
                else
                {
                    Description.Add(buffer);
                }
            }
        }

        /// <summary>
        /// 文字形に関する情報情報の追加。
        /// </summary>
        /// <param name="buffers">ファイル取得値</param>
        public void AddRange(
            IEnumerable<InternationalNumberSourceShapeBuffer> buffers)
        {
            foreach (var buffer in buffers)
            {
                Shapes.Add(new InternationalNumberSourceShape(buffer));
            }
        }

        #endregion 値の追加
    }
}
