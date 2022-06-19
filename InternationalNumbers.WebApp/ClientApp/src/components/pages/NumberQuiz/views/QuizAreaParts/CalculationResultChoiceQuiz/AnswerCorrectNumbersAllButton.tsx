import * as React from 'react';

// 画面固有（本ゲームモード用）
import { CalculationResultChoiceQuiz } from '../../../models/Quiz/CalculationResultChoiceQuiz/CalculationResultChoiceQuiz';

// 部品固有
import styles from './AnswerCorrectNumbersAllButton.module.scss';

type propsType = {
    /** 現在の問題 */
    quiz: CalculationResultChoiceQuiz;

    /** 正答時の処理 */
    answerSpecially(isCorrect: boolean): void;
};

/**
 * クイズの問題がすべて正答であることを回答するためのコンポーネント。
 */
export const AnswerCorrectNumbersAllButton: React.VFC<propsType> = ({
    quiz,
    answerSpecially,
}) => {
    if (quiz.isAnswered) {
        return <React.Fragment />;
    }

    return (
        <button
            className={styles.button}
            onClick={() => answerSpecially(quiz.isCorrectNumbersAll())}
        >
            すべて同じ数字
        </button>
    );
}
