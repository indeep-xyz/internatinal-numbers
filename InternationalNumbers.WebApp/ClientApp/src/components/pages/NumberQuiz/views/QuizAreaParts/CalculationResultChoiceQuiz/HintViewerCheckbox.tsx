import * as React from 'react';

// 画面固有（本ゲームモード用）
import { CalculationResultChoiceQuiz } from '../../../models/Quiz/CalculationResultChoiceQuiz/CalculationResultChoiceQuiz';

// 部品固有
import styles from './HintViewerCheckbox.module.scss';

type propsType = {
    /** 現在の問題 */
    quiz: CalculationResultChoiceQuiz;

    /** ヒント表示モードの更新処理 */
    updateHintMode(isCorrect: boolean): void;
};

/**
 * クイズの問題のヒント状態を表示・更新するためのコンポーネント。
 */
export const HintViewerCheckbox: React.VFC<propsType> = ({
    quiz,
    updateHintMode,
}) => {
    if (quiz.isAnswered) {
        return <React.Fragment />;
    }

    return (
        <div className={styles.wrapper}>
            <label>
                <input
                    type="checkbox"
                    checked={quiz.doesViewHint}
                    onChange={() => updateHintMode(true)}
                />
                ヒントを表示する
            </label>
        </div>
    );
}
