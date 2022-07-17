using InternationalNumbers.WebApp.Api.Hubs.Models;

namespace InternationalNumbers.WebApp.Api.Hubs
{
    /// <summary>
    /// フェスのビート処理に関する処理。
    /// ※本システムにおけるビート処理とは、設定された時間間隔で定期的に数字をクライアント側に送信する処理と定義する。
    /// </summary>
    public class FesBeatTicker
    {
        /// <summary>
        /// 数値の一覧。
        /// </summary>
        private readonly IEnumerable<InternationalNumberBeat> BeatList;

        /// <summary>
        /// 乱数生成処理。
        /// </summary>
        private readonly Random Random;

        /// <summary>
        /// Hub クラス側で定義されたビート処理。
        /// Hub クラス側では、送信先のクライアント制御と送信のみを取り扱う。
        /// </summary>
        private Action? HubBeatAction;

        /// <summary>
        /// タイマー。
        /// </summary>
        private Timer? Timer;

        /// <summary>
        /// コンストラクタ。
        /// </summary>
        public FesBeatTicker()
        {
            BeatList = InternationalNumberBeatFactory.CreateList();
            Random = new Random();
        }

        /// <summary>
        /// 数値をランダムでひとつ返却する。
        /// </summary>
        /// <returns></returns>
        public InternationalNumberBeat GetOneShape()
        {
            return BeatList.ToArray()[Random.Next(BeatList.Count())];
        }

        /// <summary>
        /// サーバーからの定期送信を管理するタイマーの設定。
        /// </summary>
        /// <param name="interval"></param>
        /// <param name="hubAction"></param>
        public void SetBeatTimer(
            int interval, 
            Action hubAction)
        {
            HubBeatAction = hubAction;

            if (Timer != null)
            {
                Timer.Dispose();
            }

            Timer = new Timer(SendBeat, null, interval, interval);
        }

        /// <summary>
        /// ビート処理の実施。
        /// </summary>
        /// <param name="state"></param>
        private void SendBeat(object? state)
        {
            if (HubBeatAction != null)
            {
                HubBeatAction();
            }
        }
    }
}
