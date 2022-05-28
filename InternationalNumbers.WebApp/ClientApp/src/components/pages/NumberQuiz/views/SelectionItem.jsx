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
        const { numberItem, numberItemIndex, isBiggestNumber } = this.props;
        const classNameForBiggestNumber = isBiggestNumber ? styles.isBiggestNumber : "";

        return (
            <div
                key={numberItemIndex}
                className={`${styles.quizSelectionItem} ${classNameForBiggestNumber}`}
            >
                <div className={styles.correctNumber}>{numberItem.numberValue}</div>
                <div className={styles.numberCharacter}>{numberItem.numberCharacter}</div>
                <div className={styles.label}>{numberItem.label}</div>
            </div>
        );
    }

    renderWhenNotAnswered() {
        const { numberItem, numberItemIndex, answerBiggestNumber, isBiggestNumber, doesViewHint } = this.props;

        return (
            <div
                key={numberItemIndex}
                className={styles.quizSelectionItem}
            >
                <div
                    className={styles.numberCharacter}
                    onClick={() => answerBiggestNumber(isBiggestNumber)}
                >
                    {numberItem.numberCharacter}
                </div>
                <div className={styles.label}>{doesViewHint ? numberItem.label : null}</div>
            </div>
        );
    }
}
