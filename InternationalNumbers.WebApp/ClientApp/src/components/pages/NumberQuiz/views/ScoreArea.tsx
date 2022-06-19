import * as React from 'react';

// 画面固有
import { GameState } from '../models/GameState';

// 部品固有
import styles from './ScoreArea.module.scss';

type propsType = {
    /** ゲームの進行状況 */
    gameState: GameState;

    /** ゲームの進行状況の更新処理 */
    updateGameState(gameState: GameState): void;
};

/**
 * 得点の表示を扱うコンポーネント。
 */
export const ScoreArea: React.VFC<propsType> = ({
    gameState,
    updateGameState,
}) => {
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // 補助処理

    /**
     * コンポーネントを包括する要素のHTMLクラス属性値の作成。
     */
    const createWrapperClassName = (
    ): string => {
        const classNameArray = [styles.wrapper];

        if (gameState.highestScore < gameState.score) {
            classNameArray.push(styles.overHighestScore);
        }

        return classNameArray.join(" ");
    }

    /**
     * 最高スコア記録の削除。
     */
    const removeHighestScore = (
    ): void => {
        const confirmResult = window.confirm("最高スコアの記録を削除します。\nよろしいですか？");

        if (confirmResult) {
            gameState.removeHighestScore();
            updateGameState(gameState);
        }
    }

    /**
     * 最高スコア欄の表示内容の取得。
     */
    const getHighestScoreText = (
    ): string => {
        if (gameState.highestScore < gameState.score) {
            return "最高スコア更新中！";
        }

        return `最高スコア: ${gameState.highestScore} 点`;
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // main

    return (
        <div className={createWrapperClassName()}>
            <div
                className={styles.currentScore}
                onDoubleClick={removeHighestScore}
            >
                {gameState.score} 点
            </div>
            <br />
            <div
                className={styles.highestScore}
                title="ダブルクリックで最高スコア消去"
                onDoubleClick={removeHighestScore}
            >
                {getHighestScoreText()}
            </div>
        </div >
    );
}
