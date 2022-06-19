// 画面固有
import { QuizInterface } from '../Interfaces/QuizInterface';

// 画面固有（各ゲームモード）
import { SingleChoiceQuiz } from './Quiz/SingleChoiceQuiz/SingleChoiceQuiz';
import { CalculationResultChoiceQuiz } from './Quiz/CalculationResultChoiceQuiz/CalculationResultChoiceQuiz';

/**
 * クイズゲームの進行状況を保持する。
 */
export class GameState {

    /** 出題中のクイズ */
    quiz!: QuizInterface;

    /** 現在のゲーム中で獲得した点数 */
    score: number;

    /** 回答回数 */
    answerdCount: number;

    /** 問題回数 */
    questionCount: number;

    /** 直前の回答が正解だったか否か */
    isLastAnswerCorrect: boolean;

    /** 直前の回答が不正解だったか否か */
    isLastAnswerIncorrect: boolean;

    /** コンストラクタ */
    constructor(
    ) {
        this.score = 0;
        this.answerdCount = 0;
        this.questionCount = 0;
        this.isLastAnswerCorrect = false;
        this.isLastAnswerIncorrect = false;

        this.nextQuiz();
    }

    /**
     * クローン。
     */
    clone(
    ): GameState {
        const newer = new GameState();

        newer.score = this.score;
        newer.answerdCount = this.answerdCount;
        newer.questionCount = this.questionCount;
        newer.isLastAnswerCorrect = this.isLastAnswerCorrect;
        newer.isLastAnswerIncorrect = this.isLastAnswerIncorrect;
        newer.quiz = this.quiz;

        return newer;
    }

    // return GameState

    /**
     * 出題中のクイズを更新する。
     */
    nextQuiz = (
    ): void => {
        this.quiz = this.createQuiz();
        this.questionCount++;
    }

    /**
     * クイズを生成する。
     */
    private createQuiz = (
    ): QuizInterface => {
        switch (Math.floor(Math.random() * 2)) {
            case 0: return new SingleChoiceQuiz(this.score);
            case 1: return new CalculationResultChoiceQuiz(this.score);
        }

        throw new Error("対応するクイズオブジェクトがありません");
    }

    /**
     * 標準的な回答の判定。
     * @param isCorrect 回答が正解か否か
     */
    answerGenerally = (
        isCorrect: boolean
    ): void => {
        let { score } = this;
        let isLastAnswerCorrect = false;
        let isLastAnswerIncorrect = false;

        if (isCorrect) {
            score += this.quiz.getScoreGenerally();
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
     * 特別な回答の判定。
     * @param isCorrect 回答が正解か否か
     */
    answerSpecially = (
        isCorrect: boolean
    ): void => {
        let { score } = this;
        let isLastAnswerCorrect = false;
        let isLastAnswerIncorrect = false;

        if (isCorrect) {
            score += this.quiz.getScoreSpecially();
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
}
