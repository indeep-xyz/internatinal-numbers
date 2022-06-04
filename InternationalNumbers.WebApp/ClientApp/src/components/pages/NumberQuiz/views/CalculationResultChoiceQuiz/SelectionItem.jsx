import React, { Component } from 'react';

import * as styles from './SelectionItem.module.scss';

export class SelectionItem extends Component {
    static displayName = SelectionItem.name;

    render() {
        return this.props.quiz.isAnswered
            ? this.renderWhenAnswered()
            : this.renderWhenNotAnswered();
    }

    isCorrectNumber() {
        const { quiz, quizSelection } = this.props;
        return quiz.isCorrect(quizSelection);
    }

    createShapeClassName() {
        const { quizSelection } = this.props;
        const classNameArray = [styles.numberShape];

        if (quizSelection.value < 0) {
            classNameArray.push(styles.negativeNumberShape);
        }

        return classNameArray.join(" ");
    }

    renderWhenAnswered() {
        const { quizSelection } = this.props;
        const classNameForCorrectNumber = this.isCorrectNumber() ? styles.isCorrectNumber : "";

        return (
            <div className={`${styles.quizSelectionItem} ${classNameForCorrectNumber}`}>
                <div className={styles.numberValue}>{quizSelection.value}</div>
                <div className={this.createShapeClassName()}>{quizSelection.shape}</div>
                <div className={styles.label}>{quizSelection.dictionary.label}</div>
            </div>
        );
    }

    renderWhenNotAnswered() {
        const { quizSelection, answerGenerally } = this.props;
        const { doesViewHint } = this.props.quiz;

        return (
            <div className={styles.quizSelectionItem}>
                <div
                    className={this.createShapeClassName()}
                    onClick={() => answerGenerally(this.isCorrectNumber())}
                >
                    {quizSelection.shape}
                </div>
                <div className={styles.label}>{doesViewHint ? quizSelection.dictionary.label : null}</div>
            </div>
        );
    }
}
