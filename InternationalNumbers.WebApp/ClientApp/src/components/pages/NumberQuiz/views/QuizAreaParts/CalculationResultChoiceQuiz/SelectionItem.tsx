import * as React from 'react';

// 画面固有
import { SymbolPresenter } from '../../../models/Quiz/SymbolPresenter';

// 画面固有（本クイズモード用）
import { CalculationResultChoiceQuiz } from '../../../models/Quiz/CalculationResultChoiceQuiz/CalculationResultChoiceQuiz';

// 部品固有
import styles from './SelectionItem.module.scss';
import { SymbolView } from '../SymbolView/SymbolView';

type propsType = {
    /** 現在の問題 */
    quiz: CalculationResultChoiceQuiz;

    /** 現在の問題中の選択肢 */
    quizSelection: SymbolPresenter;

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

        if (quizSelection.valueAsNumber < 0) {
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
                <div className={styles.numberValue}>{quizSelection.valueAsString}</div>
                <div className={createShapeClassName()}>
                    <SymbolView
                        symbolPresenter={quizSelection}
                    />
                </div>
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
                    <SymbolView
                        symbolPresenter={quizSelection}
                    />
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