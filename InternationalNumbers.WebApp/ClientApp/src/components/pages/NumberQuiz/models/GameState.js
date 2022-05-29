import { SingleChoiceQuiz } from './SingleChoiceQuiz';

/**
 * クイズゲームの経過情報を保持する。
 * 
 * @class
 */
export class GameState {

    /**
     * 出題中のクイズ。
     * @member {SingleChoiceQuiz}
     */
    quiz;

    /**
     * 現在のゲーム中で獲得した点数。
     * @member {number}
     */
    score;

    /**
     * 回答回数。
     * @member {number}
     */
    answerdCount;

    /**
     * 直前の回答が正解だったか否か。
     * @member {boolean}
     */
    isLastAnswerCorrect;

    /**
     * 直前の回答が不正解だったか否か。
     * @member {boolean}
     */
    isLastAnswerIncorrect;

    /**
     * コンストラクタ。
     */
    constructor() {
        this.score = 0;
        this.answerdCount = 0;
        this.isLastAnswerCorrect = false;
        this.isLastAnswerIncorrect = false;

        this.nextQuiz();
    }

    /**
     * 出題中のクイズを更新する。
     */
    nextQuiz = () => {
        this.quiz = new SingleChoiceQuiz(this.score);
    }

    /**
     * 最大値を選択する形での回答を行う。
     * @param {boolean} isBiggestNumber 選択された値が最大値であるか否か
     * @returns {void}
     */
    answerBiggestNumber = (isBiggestNumber) => {
        let { score } = this;
        let isLastAnswerCorrect = false;
        let isLastAnswerIncorrect = false;

        if (isBiggestNumber) {
            score += this.quiz.getScoreWhenAnsweredBiggestNumber();
            isLastAnswerCorrect = true;
        } else {
            score = 0;
            isLastAnswerIncorrect = true;
        }

        this.quiz.isAnswered = true;
        this.answerdCount++;
        this.score = score;
        this.isLastAnswerCorrect = isLastAnswerCorrect;
        this.isLastAnswerIncorrect = isLastAnswerIncorrect;
    }

    /**
     * すべての値が同じであるとする形での回答を行う。
     * @returns {void}
     */
    answerSameNumbers = () => {
        let { score } = this;
        let isLastAnswerCorrect = false;
        let isLastAnswerIncorrect = false;

        if (this.quiz.isSameNumbersAll()) {
            score += this.quiz.getScoreWhenAnsweredSameNumbers();
            isLastAnswerCorrect = true;
        } else {
            score = 0;
            isLastAnswerIncorrect = true;
        }

        this.quiz.isAnswered = true;
        this.answerdCount++;
        this.score = score;
        this.isLastAnswerCorrect = isLastAnswerCorrect;
        this.isLastAnswerIncorrect = isLastAnswerIncorrect;
    }

    /**
     * ヒントの表示モードを更新する。
     * @returns {void}
     */
    updateHintMode = (doesViewHint) => {
        this.quiz.updateHintMode(doesViewHint);
    }
}
