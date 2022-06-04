import React, { Component } from 'react';

import * as styles from './QuestionItem.module.scss';
import NumberShape from '../../../../../helpers/NumberDictionary/NumberShape';

export class QuestionItem extends Component {
    static displayName = QuestionItem.name;

    render() {
        if (this.props.binaryOperator) {
            return this.renderBinaryOperator();
        }

        if (this.props.calculationResult) {
            return this.renderCalculationResult();
        }

        return this.props.isAnswered
            ? this.renderCalculationFormulaWhenAnswered()
            : this.renderCalculationFormulaWhenNotAnswered();
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // 計算式用

    renderCalculationFormulaWhenAnswered() {
        const { quizQuestion } = this.props;
        const answer = (quizQuestion instanceof NumberShape) ? quizQuestion.value : quizQuestion.operator;

        return (
            <div className={`${styles.container} ${styles.calculationFormulaContainer}`}>
                <div className={styles.readableShape}>{answer}</div>
                <div className={styles.internationalShape}>{quizQuestion.shape}</div>
                {this.renderLabel(true)}
            </div>
        );
    }

    renderCalculationFormulaWhenNotAnswered() {
        const { quizQuestion, doesViewHint } = this.props;

        return (
            <div className={`${styles.container} ${styles.calculationFormulaContainer}`}>
                <div className={styles.internationalShape}>{quizQuestion.shape}</div>
                {this.renderLabel(doesViewHint)}
            </div>
        );
    }

    renderLabel(isVisible) {
        const { quizQuestion } = this.props;

        if (isVisible
            && quizQuestion instanceof NumberShape) {
            return <div className={styles.label}>{quizQuestion.dictionary.label}</div>;
        }

        return <React.Fragment />;
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // 二項関係演算子用

    renderBinaryOperator() {
        return (
            <div className={`${styles.container} ${styles.binaryOperatorContainer}`}>
                <div className={styles.binaryOperatorShape}>=</div>
            </div>
        );
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // 計算結果用

    renderCalculationResult() {
        return (
            <div className={`${styles.container} ${styles.calculationOperatorContainer}`}>
                <div className={styles.calculationOperatorShape}>?</div>
            </div>
        );
    }

}
