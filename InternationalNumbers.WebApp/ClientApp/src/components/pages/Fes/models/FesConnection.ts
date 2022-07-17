import { HubConnection, HubConnectionBuilder, HubConnectionState, LogLevel } from '@microsoft/signalr';

// 画面固有
import { NumberBeatType } from '../types/FesType';

// ファイル固有
type setNumberShapeType = React.Dispatch<React.SetStateAction<Readonly<NumberBeatType> | undefined>>;

/** 再接続対象の切断エラー */
const reconnectableMessages: string[] = [
    "Server timeout elapsed without receiving a message from the server.",
    "Failed to complete negotiation with the server: Error: A timeout occurred.",
];

/**
 * フェス画面の通信処理の管理。
 * @param props
 */
export class FesConnection {

    /** SignalR による接続情報 */
    readonly connection: HubConnection;

    /** State 管理している表示値の更新処理 */
    readonly setNumberShape: setNumberShapeType;


    /**
     * コンストラクタ。
     * @param setNumberShape State 管理している表示値の更新処理
     */
    public constructor(
        setNumberShape: setNumberShapeType,
    ) {
        this.connection = new HubConnectionBuilder()
            .withUrl("/api/ws/fes")
            .configureLogging(LogLevel.Warning)
            .build();

        this.setNumberShape = setNumberShape;
    }

    /**
     * コネクションの初期設定を行う。
     */
    public async setup(
    ): Promise<void> {
        await this.start();

        // 接続解除時の処理
        this.connection.onclose(
            (e?: Error) => {
                if (this.tryReconnect(e)) {
                    console.log("SignalR Disconnected.", e);
                }
            }
        );

        // 数値受信時の処理
        this.connection.on(
            "ReceiveNumber",
            (numberShape: NumberBeatType) => {
                this.setNumberShape(numberShape);
            }
        );
    }

    /**
     * 接続の開始。
     */
    public async start(
    ): Promise<void> {
        if (this.connection.state !== HubConnectionState.Disconnected) {
            // 未接続時、かつ、接続処理中でない場合のみ接続を行う
            return;
        }

        // 接続処理
        this.connection.start()
            .then(() => {
                console.log("SignalR Connected.");
            })
            .catch(e => {
                console.log(e);
                console.log("SignalR Connection Errored.");

                // 失敗時、再接続
                this.tryReconnect(e);
            });
    }

    /**
     * 接続の停止。
     */
    public stop(
    ): void {
        this.connection.stop();
    }

    /**
     * 再接続の試行。
     * @returns 再接続の試行時true (再接続が成功するか否かは問わない)
     */
    public tryReconnect(
        e?: Error,
    ): boolean {
        if (e instanceof Error
            && reconnectableMessages.includes(e.message)
        ) {
            this.start();
            console.log("SignalR Disconnected And Be Reconnecting.", e);
            return true;
        }

        return false;
    }

    /**
     * 情報の更新。
     */
    public updateBeat = (
        interval: number
    ): void => {
        if (this.connection.state === HubConnectionState.Connected) {
            this.connection.send("UpdateBeat", interval);
        }
    }
}
