import * as React from 'react';

// �����u���v�n�̃w���p�[����
import { NumberSymbolFace } from '../../../../../../helpers/Dictionary/NumberDictionary/NumberSymbolFace';

// ��ʌŗL�i�{�N�C�Y���[�h�p�j
import { CalculationResultChoiceQuiz } from '../../../models/Quiz/CalculationResultChoiceQuiz/CalculationResultChoiceQuiz';

// ���i�ŗL
import styles from './SelectionItem.module.scss';

type propsType = {
    /** ���݂̖�� */
    quiz: CalculationResultChoiceQuiz;

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
    ): boolean => quiz.isCorrect(quizSelection);

    /**
     * ���́u�`�v�p�̃N���X���̐����B
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
     * �񓚁u��v���̕`��B
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
     * �񓚁u�O�v���̕`��B
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