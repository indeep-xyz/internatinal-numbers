import React, { Component } from 'react';

import { QuestionItem } from './QuestionItem';
import { SelectionItem } from './SelectionItem';
import { HintViewerCheckbox } from './HintViewerCheckbox';
import { AnswerCorrectNumbersAllButton } from './AnswerCorrectNumbersAllButton';
import * as styles from './CalculationResultChoiceQuizArea.module.scss';

export class CalculationResultChoiceQuizArea extends Component {
    static displayName = CalculationResultChoiceQuizArea.name;

    render() {
        const { quiz } = this.props;

        return (
            <div className={styles.wrapper}>
                <div className={styles.quizQuestionArea}>
                    {quiz.quizQuestions.map((quizQuestion, quizQuestionIndex) => (
                        <QuestionItem
                            key={quizQuestionIndex}
                            quizQuestion={quizQuestion}
                            doesViewHint={quiz.doesViewHint}
                            isAnswered={quiz.isAnswered}
                        />
                    ))}
                    <QuestionItem
                        binaryOperator
                        doesViewHint={quiz.doesViewHint}
                        isAnswered={quiz.isAnswered}
                    />
                    <QuestionItem
                        calculationResult
                        doesViewHint={quiz.doesViewHint}
                        isAnswered={quiz.isAnswered}
                    />
                </div>

                <div className={styles.quizSelectionAreaWrapper}>
                    <div className={styles.quizSelectionArea}>
                        {quiz.quizSelections.map((quizSelection, quizSelectionIndex) => (
                            <SelectionItem
                                key={quizSelectionIndex}
                                answerGenerally={this.props.answerGenerally}
                                quiz={quiz}
                                quizSelection={quizSelection}
                                quizSelectionIndex={quizSelectionIndex}
                            />
                        ))}
                    </div>
                    <div className={styles.notification}>
                        ※負数は白黒反転になります。
                    </div>
                </div>

                <div className={styles.hintOperatorArea}>
                    <HintViewerCheckbox
                        doesViewHint={quiz.doesViewHint}
                        isAnswered={quiz.isAnswered}
                        updateHintMode={this.props.updateHintMode}
                    />
                </div>

                <div className={styles.specialAnswerArea}>
                    <AnswerCorrectNumbersAllButton
                        answerSpecially={this.props.answerSpecially}
                        isAnswered={quiz.isAnswered}
                        quiz={quiz}
                    />
                </div>
            </div >
        );
    }
}
