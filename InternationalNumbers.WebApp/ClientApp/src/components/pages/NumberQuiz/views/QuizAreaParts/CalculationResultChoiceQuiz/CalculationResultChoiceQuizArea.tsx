import * as React from 'react';

// 画面固有
import styles from './CalculationResultChoiceQuizArea.module.scss';
import { HintViewerCheckbox } from './HintViewerCheckbox';
import { QuizInstructionMessage } from '../QuizInstructionMessage';

// 画面固有（本クイズモード用）
import { CalculationResultChoiceQuiz } from '../../../models/Quiz/CalculationResultChoiceQuiz/CalculationResultChoiceQuiz';
import { AnswerCorrectNumbersSeveralButton } from './AnswerCorrectNumbersSeveralButton';
import { ExpressionItem } from './ExpressionItem';
import { SelectionItem } from './SelectionItem';

type propsType = {
    /** 現在の問題 */
    quiz: CalculationResultChoiceQuiz;

    /** 正答時の処理（一般回答） */
    answerGenerally(isCorrect: boolean): void;

    /** 正答時の処理（特殊回答） */
    answerSpecially(isCorrect: boolean): void;

    /** ヒント表示モードの更新処理 */
    updateHintMode(doesViewHint: boolean): void;
}

/**
 * クイズの問題および選択肢を包括するコンポーネント。
 */
export const CalculationResultChoiceQuizArea: React.VFC<propsType> = ({
    quiz,
    answerGenerally,
    answerSpecially,
    updateHintMode,
}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.quizInstructionMessageWrapper} >
                <QuizInstructionMessage quiz={quiz} sideMessage="※負数は白黒反転になります" />
            </div>

            <div className={styles.quizExpressionArea}>
                {quiz.quizExpressionSymbolFaces.map((expressionSymbolFace, expressionSymbolFaceIndex) => (
                    <ExpressionItem
                        key={expressionSymbolFaceIndex}
                        quiz={quiz}
                        symbolPresenter={expressionSymbolFace}
                    />
                ))}
                <ExpressionItem
                    quiz={quiz}
                    isBinaryOperator
                />
                <ExpressionItem
                    quiz={quiz}
                    isCalculationResult
                />
            </div>

            <div className={styles.quizSelectionAreaWrapper}>
                <div className={styles.quizSelectionArea}>
                    {quiz.quizSelections.map((quizSelection, quizSelectionIndex) => (
                        <SelectionItem
                            key={quizSelectionIndex}
                            answerGenerally={answerGenerally}
                            quiz={quiz}
                            quizSelection={quizSelection}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.hintOperatorArea}>
                <HintViewerCheckbox
                    quiz={quiz}
                    updateHintMode={updateHintMode}
                />
            </div>

            <div className={styles.specialAnswerArea}>
                <AnswerCorrectNumbersSeveralButton
                    quiz={quiz}
                    answerSpecially={answerSpecially}
                />
            </div>
        </div >
    );
}
