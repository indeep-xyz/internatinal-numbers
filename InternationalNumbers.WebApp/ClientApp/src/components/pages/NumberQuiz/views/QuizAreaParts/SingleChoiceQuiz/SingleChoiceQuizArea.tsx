import * as React from 'react';

// 画面固有（本ゲームモード用）
import { SingleChoiceQuiz } from '../../../models/Quiz/SingleChoiceQuiz/SingleChoiceQuiz';
import { SelectionItem } from './SelectionItem';
import { HintViewerCheckbox } from './HintViewerCheckbox';
import { AnswerSameNumberButton } from './AnswerSameNumberButton';

// 部品固有
import styles from './SingleChoiceQuizArea.module.scss';
import { QuizInstructionMessage } from '../QuizInstructionMessage';

type propsType = {
    /** 現在の問題 */
    quiz: SingleChoiceQuiz;

    /** 正答時の処理（一般回答） */
    answerGenerally(isCorrect: boolean): void;

    /** 正答時の処理（特殊回答） */
    answerSpecially(isCorrect: boolean): void;

    /** ヒント表示モードの更新処理 */
    updateHintMode(doesViewHint: boolean): void;
};

/**
 * クイズの問題および選択肢を包括するコンポーネント。
 */
export const SingleChoiceQuizArea: React.VFC<propsType> = ({
    quiz,
    answerGenerally,
    answerSpecially,
    updateHintMode,
}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.quizInstructionMessageWrapper} >
                <QuizInstructionMessage quiz={quiz} />
            </div>

            <div className={styles.quizSelectionArea}>
                {quiz.quizSelections.map((quizSelection, quizSelectionIndex) => (
                    <SelectionItem
                        key={quizSelectionIndex}
                        quiz={quiz}
                        quizSelection={quizSelection}
                        answerGenerally={answerGenerally}
                    />
                ))}
            </div>

            <div className={styles.hintOperatorArea}>
                <HintViewerCheckbox
                    quiz={quiz}
                    updateHintMode={updateHintMode}
                />
            </div>

            <div className={styles.specialAnswerArea}>
                <AnswerSameNumberButton
                    quiz={quiz}
                    answerSpecially={answerSpecially}
                />
            </div>
        </div>
    );
}
