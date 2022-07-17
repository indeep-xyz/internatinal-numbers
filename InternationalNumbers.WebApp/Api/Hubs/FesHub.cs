using Microsoft.AspNetCore.SignalR;

namespace InternationalNumbers.WebApp.Api.Hubs
{
    public class FesHub : Hub
    {
        private readonly IHubContext<FesHub> HubContext;
        private readonly FesBeatTicker BeatTicker;

        public FesHub(
            IHubContext<FesHub> hubContext,
            FesBeatTicker beatTicker)
        {
            HubContext = hubContext;
            BeatTicker = beatTicker;
        }

        /// <summary>
        /// 接続処理。
        /// </summary>
        /// <returns></returns>
        public override async Task OnConnectedAsync()
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, "Non-Regional");
            await base.OnConnectedAsync();
        }

        /// <summary>
        /// ビート処理の更新処理。
        /// </summary>
        /// <param name="interval">ビートの送信間隔（ミリ秒）</param>
        public void UpdateBeat(
            int interval)
        {
            BeatTicker.SetBeatTimer(
                interval ,
                ()=>
            {
                HubContext.Clients.All.SendAsync("ReceiveNumber", BeatTicker.GetOneShape());
            });
        }
    }
}
