import * as React from 'react';
import { ChangeEvent, useState } from 'react';

// 画面固有
import styles from './FesPage.module.scss';

type propsType = {
    sendBeatInterval(interval: number): void,
};

/**
 * ビート処理の設定機能群。
 * @param props
 */
export const BeatOperator: React.VFC<propsType> = ({
    sendBeatInterval,
}) => {
    const [interval, setInterval] = useState<number>(2000);

    /**
     * ビート処理設定の更新内容を送信する。
     */
    const sendBeatSetting = React.useCallback(
        (
        ): void => {
            sendBeatInterval(interval);
        },
        [interval, sendBeatInterval]
    );

    /**
     * ビート処理の更新間隔を更新する、チェンジハンドラ。
     * 正常な値が入っていない場合は無視する。
     */
    const tryUpdateInterval = React.useCallback(
        /**
         * @param event イベントオブジェクト
         */
        (
            event: ChangeEvent<HTMLInputElement>
        ): void => {
            const intervalSource = Number(event.target.value);

            if (isFinite(intervalSource)) {
                setInterval(intervalSource);
            }
        },
        [setInterval]
    );


    return (
        <div className={styles.wrapper}>
            <input
                className={styles.intervalInput}
                type="number"
                value={interval}
                onChange={tryUpdateInterval}
            />

            <button
                className={styles.intervalButton}
                disabled={interval < 20}
                onClick={sendBeatSetting}
            >beat</button>
        </div>
    );
}
