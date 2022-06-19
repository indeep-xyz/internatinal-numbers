import * as React from 'react';

// 画面固有
import { GameState } from '../models/GameState';
import { SingleChoiceQuiz } from '../models/Quiz/SingleChoiceQuiz/SingleChoiceQuiz';

// 部品固有
import styles from './QuizArea.module.scss';
import { CalculationResultChoiceQuizArea } from './QuizAreaParts/CalculationResultChoiceQuiz/CalculationResultChoiceQuizArea';
import { SingleChoiceQuizArea } from './QuizAreaParts/SingleChoiceQuiz/SingleChoiceQuizArea';
import { CalculationResultChoiceQuiz } from '../models/Quiz/CalculationResultChoiceQuiz/CalculationResultChoiceQuiz';

type propsType = {
    /** ゲームの進行状況 */
    gameState: GameState;

    /** ゲームの進行状況の更新処理 */
    updateGameState(gameState: GameState): void;
};

/**
 * クイズの表示領域を表すコンポーネント。
 */
export const QuizArea: React.VFC<propsType> = ({
    gameState,
    updateGameState,
}) => {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // 補助処理（ゲーム進行状況の更新）

    /**
     * 一般的な形式での回答を行う。
     * @param isCorrect 回答が正解か否か
     */
    const answerGenerally = (
        isCorrect: boolean
    ): void => {
        gameState.answerGenerally(isCorrect);
        updateGameState(gameState);
    }

    /**
     * 特殊な形式での回答を行う。
     * @param isCorrect 回答が正解か否か
     */
    const answerSpecially = (
        isCorrect: boolean
    ): void => {
        gameState.answerSpecially(isCorrect);
        updateGameState(gameState);
    }

    /**
     * ヒントの表示状態を更新する。
     * @param doesViewHint ヒントを表示するか否か
     */
    const updateHintMode = (
        doesViewHint: boolean
    ): void => {
        gameState.quiz.doesViewHint =doesViewHint;
        updateGameState(gameState);
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // main


    if (gameState.quiz instanceof SingleChoiceQuiz) {
        return <SingleChoiceQuizArea
            quiz={gameState.quiz}
            updateHintMode={updateHintMode}
            answerGenerally={answerGenerally}
            answerSpecially={answerSpecially}
        />;
    }

    if (gameState.quiz instanceof CalculationResultChoiceQuiz) {
        return <CalculationResultChoiceQuizArea
            quiz={gameState.quiz}
            updateHintMode={updateHintMode}
            answerGenerally={answerGenerally}
            answerSpecially={answerSpecially}
        />;
    }

    throw new Error("表示可能なクイズが渡されていません");
}
