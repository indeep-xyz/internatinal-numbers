import * as React from 'react';

// 画面固有
import { QuizInterface } from '../../Interfaces/QuizInterface';

// 部品固有
import styles from './QuizInstructionMessage.module.scss';

type propsType = {
    /** ゲームの進行状況 */
    readonly quiz: QuizInterface;

    /** 横に添えるメッセージ */
    readonly sideMessage?: string;
};

/**
 * クイズの表示領域を表すコンポーネント。
 */
export const QuizInstructionMessage: React.VFC<propsType> = ({
    quiz,
    sideMessage,
}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.messageWrapper}>
                {quiz.instructionMessage}
            </div>
            <div className={styles.sideMessage}>
                {sideMessage}
            </div>
        </div>
    );
}
