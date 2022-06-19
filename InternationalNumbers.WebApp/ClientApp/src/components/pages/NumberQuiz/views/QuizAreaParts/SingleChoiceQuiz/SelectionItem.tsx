import * as React from 'react';

// �����u���v�n�̃w���p�[����
import { NumberSymbolFace } from '../../../../../../helpers/Dictionary/NumberDictionary/NumberSymbolFace';

// ��ʌŗL�i�{�Q�[�����[�h�p�j
import { SingleChoiceQuiz } from '../../../models/Quiz/SingleChoiceQuiz/SingleChoiceQuiz';

// ���i�ŗL
import styles from './SelectionItem.module.scss';

type propsType = {
    /** ���݂̖�� */
    quiz: SingleChoiceQuiz;

    /** ���݂̖�蒆�̑I���� */
    quizSelection: NumberSymbolFace;


    /** �������̏��� */
    answerGenerally(isCorrect: boolean): void;
};

/**
 * �N�C�Y�̖��̑I������\���R���|�[�l���g�B
 */
export const SelectionItem: React.VFC<propsType> = ({
    quiz,
    quizSelection,
    answerGenerally,
}) => {
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // �⏕����

    /**
     * �������ۂ��̔��菈���B
     */
    const isCorrect = (
    ): boolean => quiz.isBiggestNumber(quizSelection);

    /**
     * �񓚁u��v���̕`��B
     */
    const renderWhenAnswered = (
    ): JSX.Element => {
        const classNameForBiggestNumber = isCorrect() ? styles.isBiggestNumber : "";

        return (
            <div
                className={`${styles.quizSelectionItem} ${classNameForBiggestNumber}`}
            >
                <div className={styles.numberValue}>{quizSelection.value}</div>
                <div className={styles.numberShape}>{quizSelection.shape}</div>
                <div className={styles.label}>{quizSelection.dictionary.label}</div>
            </div>
        );
    }

    /**
     * �񓚁u�O�v���̕`��B
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
