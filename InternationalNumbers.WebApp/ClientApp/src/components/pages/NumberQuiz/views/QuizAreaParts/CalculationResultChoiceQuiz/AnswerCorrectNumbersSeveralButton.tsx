import * as React from 'react';

// 画面固有（本ゲームモード用）
import { CalculationResultChoiceQuiz } from '../../../models/Quiz/CalculationResultChoiceQuiz/CalculationResultChoiceQuiz';

// 部品固有
import styles from './AnswerCorrectNumbersSeveralButton.module.scss';

type propsType = {
    /** 現在の問題 */
    quiz: CalculationResultChoiceQuiz;

    /** 正答時の処理 */
    answerSpecially(isCorrect: boolean): void;
};

/**
 * クイズの問題がすべて正答であることを回答するためのコンポーネント。
 */
export const AnswerCorrectNumbersSeveralButton: React.VFC<propsType> = ({
    quiz,
    answerSpecially,
}) => {
    if (quiz.isAnswered) {
        return <React.Fragment />;
    }

    // ボタンに表示する文字。実質同じ
    const buttonLabel = quiz.quizSelections.length < 3
        ? "すべて同じ数字"
        : "正解の選択肢が２つ以上ある";

    return (
        <button
            className={styles.button}
            onClick={() => answerSpecially(quiz.isCorrectNumbersSeveral())}
        >
            {buttonLabel}
        </button>
    );
}
