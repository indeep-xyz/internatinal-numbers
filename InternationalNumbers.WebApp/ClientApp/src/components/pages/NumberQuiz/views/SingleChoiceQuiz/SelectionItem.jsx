import React, { Component } from 'react';

import * as styles from './SelectionItem.module.scss';

export class SelectionItem extends Component {
    static displayName = SelectionItem.name;

    render() {
        return this.props.isAnswered
            ? this.renderWhenAnswered()
            : this.renderWhenNotAnswered();
    }

    renderWhenAnswered() {
        const { quizSelection, quizSelectionIndex, isBiggestNumber } = this.props;
        const classNameForBiggestNumber = isBiggestNumber ? styles.isBiggestNumber : "";

        return (
            <div
                key={quizSelectionIndex}
                className={`${styles.quizSelectionItem} ${classNameForBiggestNumber}`}
            >
                <div className={styles.numberValue}>{quizSelection.value}</div>
                <div className={styles.numberShape}>{quizSelection.shape}</div>
                <div className={styles.label}>{quizSelection.dictionary.label}</div>
            </div>
        );
    }

    renderWhenNotAnswered() {
        const { quizSelection, quizSelectionIndex, answerBiggestNumber, isBiggestNumber, doesViewHint } = this.props;

        return (
            <div
                key={quizSelectionIndex}
                className={styles.quizSelectionItem}
            >
                <div
                    className={styles.numberShape}
                    onClick={() => answerBiggestNumber(isBiggestNumber)}
                >
                    {quizSelection.shape}
                </div>
                <div className={styles.label}>{doesViewHint ? quizSelection.dictionary.label : null}</div>
            </div>
        );
    }
}
