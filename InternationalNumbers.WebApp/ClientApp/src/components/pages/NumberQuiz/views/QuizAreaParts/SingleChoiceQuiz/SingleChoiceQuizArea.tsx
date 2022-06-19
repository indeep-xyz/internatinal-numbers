import * as React from 'react';

// ��ʌŗL�i�{�Q�[�����[�h�p�j
import { SingleChoiceQuiz } from '../../../models/Quiz/SingleChoiceQuiz/SingleChoiceQuiz';
import { SelectionItem } from './SelectionItem';
import { HintViewerCheckbox } from './HintViewerCheckbox';
import { AnswerSameNumberButton } from './AnswerSameNumberButton';

// ���i�ŗL
import styles from './SingleChoiceQuizArea.module.scss';

type propsType = {
    /** ���݂̖�� */
    quiz: SingleChoiceQuiz;

    /** �������̏����i��ʉ񓚁j */
    answerGenerally(isCorrect: boolean): void;

    /** �������̏����i����񓚁j */
    answerSpecially(isCorrect: boolean): void;

    /** �q���g�\�����[�h�̍X�V���� */
    updateHintMode(doesViewHint: boolean): void;
};

/**
 * �N�C�Y�̖�肨��ёI����������R���|�[�l���g�B
 */
export const SingleChoiceQuizArea: React.VFC<propsType> = ({
    quiz,
    answerGenerally,
    answerSpecially,
    updateHintMode,
}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.quizSelectionArea}>
                {quiz.quizSelections.map((quizSelection, quizSelectionIndex) => (
                    <SelectionItem
                        key={quizSelectionIndex}
                        quiz={quiz}
                        quizSelection={quizSelection}
                        answerGenerally={answerGenerally}
                    />
                ))}
            </div>

            <div className={styles.hintOperatorArea}>
                <HintViewerCheckbox
                    quiz={quiz}
                    updateHintMode={updateHintMode}
                />
            </div>

            <div className={styles.specialAnswerArea}>
                <AnswerSameNumberButton
                    quiz={quiz}
                    answerSpecially={answerSpecially}
                />
            </div>
        </div>
    );
}
