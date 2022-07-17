import * as React from 'react';

// 画面固有
import { NumberBeatType } from '../types/FesType';
import { BeatOperator } from './BeatOperator';
import styles from './FesPage.module.scss';

type propsType = {
    sendBeatInterval(interval: number): void,
    numberShape?: NumberBeatType,
};

/**
 * フェス画面。
 * @param props
 */
export const FesPage: React.VFC<propsType> = ({
    numberShape,
    sendBeatInterval,
}) => {
    /**
     * 図形の生成処理。
     * 図形変更時に毎回 CSS アニメーションを発生させるため都度生成する。
     */
    const createNumberShape = () => (
        <div className={styles.numberShape} key={Math.random()}>
            {numberShape?.string}
        </div>
        );

    return (
        <div className={styles.wrapper}>
            {createNumberShape()}
            <BeatOperator
                sendBeatInterval={sendBeatInterval}
            />
        </div>
    );
}
