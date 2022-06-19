import * as React from 'react';

// 画面固有
import { GameState } from '../models/GameState';
import { NextQuizButton } from './NextQuizButton';

// 部品固有
import styles from './NumberQuizPage.module.scss';
import { QuizArea } from './QuizArea';
import { ScoreArea } from './ScoreArea';

type propsType = {
};

/**
 * 数字のクイズ画面。
 */
export const NumberQuizPage: React.VFC<propsType> = ({
}) => {
    const [state, setState] = React.useState({ game: new GameState() });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // 補助処理（ステート管理）

    /**
     * 次のクイズを初期化する。
     */
    const nextQuiz = (
    ): void => {
        state.game.nextQuiz();
        updateGameState(state.game);
    }

    /**
     * ゲームの進行状況を更新する。
     * @param gameState ゲームの進行状況
     */
    const updateGameState = (
        gameState: GameState,
    ): void => {
        setState({ ...state, game: gameState.clone() });
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // 補助処理（表示）

    /**
     * コンポーネントを包括する要素のHTMLクラス属性値の作成。
     */
    const createWrapperClassName = (
    ): string => {
        const classNameArray = [styles.wrapper];

        if (state.game.isLastAnswerIncorrect) {
            classNameArray.push(styles.isLastAnswerIncorrect);
        }

        return classNameArray.join(" ");
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // main

    return (
        <div className={createWrapperClassName()}>
            <h1>Quiz</h1>

            <div className={styles.scoreAreaWrapper} >
                <ScoreArea
                    gameState={state.game}
                    updateGameState={updateGameState}
                />
            </div>

            <QuizArea
                gameState={state.game}
                updateGameState={updateGameState}
            />

            <div className={styles.operator}>
                <NextQuizButton
                    isAnswered={state.game.quiz.isAnswered}
                    nextQuiz={nextQuiz}
                />
            </div>
        </div>
    );
}
