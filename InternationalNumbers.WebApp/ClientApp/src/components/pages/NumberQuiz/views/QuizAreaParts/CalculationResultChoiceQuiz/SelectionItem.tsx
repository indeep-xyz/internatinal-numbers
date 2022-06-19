import * as React from 'react';

// 辞書「数」系のヘルパー共通
import { NumberSymbolFace } from '../../../../../../helpers/Dictionary/NumberDictionary/NumberSymbolFace';

// 画面固有（本クイズモード用）
import { CalculationResultChoiceQuiz } from '../../../models/Quiz/CalculationResultChoiceQuiz/CalculationResultChoiceQuiz';

// 部品固有
import styles from './SelectionItem.module.scss';

type propsType = {
    /** 現在の問題 */
    quiz: CalculationResultChoiceQuiz;

    /** 現在の問題中の選択肢 */
    quizSelection: NumberSymbolFace;

    /** 正答時の処理 */
    answerGenerally(isCorrect: boolean): void;
};

/**
 * クイズの問題の選択肢を表すコンポーネント。
 */
export const SelectionItem: React.VFC<propsType> = ({
    quiz,
    quizSelection,
    answerGenerally,
}) => {
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // 補助処理

    /**
     * 正答か否かの判定処理。
     */
    const isCorrect = (
    ): boolean => quiz.isCorrect(quizSelection);

    /**
     * 数の「形」用のクラス名の生成。
     */
    const createShapeClassName = (
    ): string => {
        const classNameArray = [styles.numberShape];

        if (quizSelection.value < 0) {
            classNameArray.push(styles.negativeNumberShape);
        }

        return classNameArray.join(" ");
    }

    /**
     * 回答「後」時の描画。
     */
    const renderWhenAnswered = (
    ): JSX.Element => {
        const classNameForCorrectNumber = isCorrect() ? styles.isCorrectNumber : "";

        return (
            <div className={`${styles.quizSelectionItem} ${classNameForCorrectNumber}`}>
                <div className={styles.numberValue}>{quizSelection.value}</div>
                <div className={createShapeClassName()}>{quizSelection.shape}</div>
                <div className={styles.label}>{quizSelection.dictionary.label}</div>
            </div>
        );
    }

    /**
     * 回答「前」時の描画。
     */
    const renderWhenNotAnswered = (
    ): JSX.Element => {
        const label = quiz.doesViewHint ? quizSelection.dictionary.label : null;

        return (
            <div className={styles.quizSelectionItem}>
                <div
                    className={createShapeClassName()}
                    onClick={() => answerGenerally(isCorrect())}
                >
                    {quizSelection.shape}
                </div>
                <div className={styles.label}>{label}</div>
            </div>
        );
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // main

    return quiz.isAnswered
        ? renderWhenAnswered()
        : renderWhenNotAnswered();
}