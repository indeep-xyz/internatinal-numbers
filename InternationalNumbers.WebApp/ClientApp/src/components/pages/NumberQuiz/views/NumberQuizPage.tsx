import * as React from 'react';

// 画面固有
import { GameState } from '../models/GameState';
import { NextQuizButton } from './NextQuizButton';

// 部品固有
import styles from './NumberQuizPage.module.scss';
import { QuizArea } from './QuizArea';

type propsType = {
};

/**
 * 数字のクイズ画面。
 */
export const NumberQuizPage: React.VFC<propsType> = ({
}) => {
    const [state, setState] = React.useState({ game: new GameState() });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // 補助処理

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
    // main

    const classNameIsLastAnswerIncorrect = state.game.isLastAnswerIncorrect ? styles.isLastAnswerIncorrect : "";

    return (
        <div className={classNameIsLastAnswerIncorrect}>
            <h1>Quiz</h1>

            <div className={styles.score}>
                {state.game.score}点
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
