import * as React from 'react';

// 部品固有
import styles from './NextQuizButton.module.scss';

type propsType = {
    /** 現在の問題が回答済みか否か */
    isAnswered: boolean;

    /** 次の問題の初期化 */
    nextQuiz(): void;
};

/**
 * 次の問題に進むためのボタン。
 */
export const NextQuizButton: React.VFC<propsType> = ({
    isAnswered,
    nextQuiz,
}) => {
    if (!isAnswered) {
        return <React.Fragment />;
    }

    return (
        <button
            className={styles.nextQuizButton}
            onClick={() => nextQuiz()}
        >
            次の問題へ
        </button>
    );
}
