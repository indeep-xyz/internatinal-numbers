import * as React from 'react';

// 辞書系のヘルパー共通
import { FourArithmeticExpressionSymbolFaceType } from '../../../../../../types/ArithmeticType';
import { NumberSymbolFace } from '../../../../../../helpers/Dictionary/NumberDictionary/NumberSymbolFace';

// 画面固有（本クイズモード用）
import { CalculationResultChoiceQuiz } from '../../../models/Quiz/CalculationResultChoiceQuiz/CalculationResultChoiceQuiz';

// 部品固有
import styles from './ExpressionItem.module.scss';


type propsType = {
    /** 現在の問題中の計算式 */
    expressionSymbolFace?: FourArithmeticExpressionSymbolFaceType;

    /** 現在の問題 */
    quiz: CalculationResultChoiceQuiz;

    /** 部品が二項関係演算子（=, <, > 等) を表すものか否か */
    isBinaryOperator?: boolean;

    /** 部品が計算結果を表すものか否か */
    isCalculationResult?: boolean;
};

/**
 * クイズの問題（計算式）を包括するコンポーネント。
 */
export const ExpressionItem: React.VFC<propsType> = ({
    expressionSymbolFace,
    quiz,
    isCalculationResult = false,
    isBinaryOperator = false,
}) => {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // 計算式用

    const renderCalculationFormulaWhenAnswered = (
    ): JSX.Element => {
        const answer = (expressionSymbolFace instanceof NumberSymbolFace) ? expressionSymbolFace.value : expressionSymbolFace!.operator;

        return (
            <div className={`${styles.container} ${styles.calculationFormulaContainer}`}>
                <div className={styles.readableShape}>{answer}</div>
                <div className={styles.internationalShape}>{expressionSymbolFace!.shape}</div>
                {renderLabel(true)}
            </div>
        );
    }

    const renderCalculationFormulaWhenNotAnswered = (
    ): JSX.Element => {
        return (
            <div className={`${styles.container} ${styles.calculationFormulaContainer}`}>
                <div className={styles.internationalShape}>{expressionSymbolFace!.shape}</div>
                {renderLabel(quiz.doesViewHint)}
            </div>
        );
    }

    const renderLabel = (
        isVisible: boolean
    ): JSX.Element => {
        if (isVisible
            && expressionSymbolFace instanceof NumberSymbolFace) {
            return <div className={styles.label}>{expressionSymbolFace.dictionary.label}</div>;
        }

        return <React.Fragment />;
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // 二項関係演算子用

    const renderBinaryOperator = (
    ): JSX.Element => {
        return (
            <div className={`${styles.container} ${styles.binaryOperatorContainer}`}>
                <div className={styles.binaryOperatorShape}>=</div>
            </div>
        );
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // 計算結果用

    const renderCalculationResult = (
    ): JSX.Element => {
        return (
            <div className={`${styles.container} ${styles.calculationOperatorContainer}`}>
                <div className={styles.calculationOperatorShape}>?</div>
            </div>
        );
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // main

    if (isBinaryOperator) {
        return renderBinaryOperator();
    }

    if (isCalculationResult) {
        return renderCalculationResult();
    }

    return quiz.isAnswered
        ? renderCalculationFormulaWhenAnswered()
        : renderCalculationFormulaWhenNotAnswered();

}
