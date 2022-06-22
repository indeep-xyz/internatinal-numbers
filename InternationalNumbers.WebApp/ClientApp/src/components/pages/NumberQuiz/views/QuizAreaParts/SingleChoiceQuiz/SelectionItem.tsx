import * as React from 'react';

// 画面固有
import { SymbolView } from '../SymbolView/SymbolView';

// 画面固有（本ゲームモード用）
import { SingleChoiceQuiz } from '../../../models/Quiz/SingleChoiceQuiz/SingleChoiceQuiz';

// 部品固有
import styles from './SelectionItem.module.scss';
import { SymbolPresenter } from '../../../models/Quiz/SymbolPresenter';

type propsType = {
    /** 現在の問題 */
    quiz: SingleChoiceQuiz;

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
    ): boolean => quiz.isBiggestNumber(quizSelection);

    /**
     * 回答「後」時の描画。
     */
    const renderWhenAnswered = (
    ): JSX.Element => {
        const classNameForBiggestNumber = isCorrect() ? styles.isBiggestNumber : "";

        return (
            <div
                className={`${styles.quizSelectionItem} ${classNameForBiggestNumber}`}
            >
                <div className={styles.numberValue}>{quizSelection.valueAsString}</div>
                <div className={styles.numberShape}>
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
            <div
                className={styles.quizSelectionItem}
            >
                <div
                    className={styles.numberShape}
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
