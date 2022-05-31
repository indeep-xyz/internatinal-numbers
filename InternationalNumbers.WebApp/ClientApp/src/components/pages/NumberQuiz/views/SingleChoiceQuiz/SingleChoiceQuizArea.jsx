import React, { Component } from 'react';

import { SelectionItem } from './SelectionItem';
import { HintViewerCheckbox } from './HintViewerCheckbox';
import { AnswerSameNumberButton } from './AnswerSameNumberButton';
import * as styles from './SingleChoiceQuizArea.module.scss';

export class SingleChoiceQuizArea extends Component {
    static displayName = SingleChoiceQuizArea.name;

    render() {
        const { quiz } = this.props;

        return (
            <div className={styles.wrapper}>
                <div className={styles.quizSelectionArea}>
                    {quiz.quizSelections.map((quizSelection, quizSelectionIndex) => (
                        <SelectionItem
                            key={quizSelectionIndex}
                            quizSelection={quizSelection}
                            quizSelectionIndex={quizSelectionIndex}
                            isBiggestNumber={quiz.isBiggestNumber(quizSelection)}
                            isAnswered={quiz.isAnswered}
                            doesViewHint={quiz.doesViewHint}
                            answerBiggestNumber={this.props.answerBiggestNumber}
                        />
                    ))}
                </div>

                <div className={styles.hintOperatorArea}>
                    <HintViewerCheckbox
                        doesViewHint={quiz.doesViewHint}
                        isAnswered={quiz.isAnswered}
                        updateHintMode={this.props.updateHintMode}
                    />
                </div>

                <div className={styles.specialAnswerArea}>
                    <AnswerSameNumberButton
                        isAnswered={quiz.isAnswered}
                        answerSameNumbers={this.props.answerSameNumbers}
                    />
                </div>
            </div>
        );
    }
}
