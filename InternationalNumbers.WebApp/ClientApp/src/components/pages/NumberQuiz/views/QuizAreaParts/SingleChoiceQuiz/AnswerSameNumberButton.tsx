import * as React from 'react';

// 画面固有（本ゲームモード用）
import { SingleChoiceQuiz } from '../../../models/Quiz/SingleChoiceQuiz/SingleChoiceQuiz';

// 部品固有
import styles from './AnswerSameNumberButton.module.scss';

type propsType = {
    /** 現在の問題 */
    quiz: SingleChoiceQuiz;

    /** 正答時の処理 */
    answerSpecially(isCorrect: boolean): void;
};

/**
 * クイズの問題がすべて同じであることを回答するためのコンポーネント。
 */
export const AnswerSameNumberButton: React.VFC<propsType> = ({
    quiz,
    answerSpecially,
}) => {
    if (quiz.isAnswered) {
        return <React.Fragment />;
    }

    // ボタンに表示する文字。実質同じ
    const buttonLabel = quiz.quizSelections.length < 3
        ? "すべて同じ数字"
        : "最大値の選択肢が２つ以上ある";

    return (
        <button
            className={styles.button}
            onClick={() => answerSpecially(quiz.isBiggestNumbersSeveral())}
        >
            {buttonLabel}
        </button>
    );
}
