// 辞書「数」系のヘルパー共通
import { NumberSymbolDictionary } from '../../../../helpers/Dictionary/NumberDictionary/NumberSymbolDictionary';

// 画面固有
import { QuizInterface } from '../Interfaces/QuizInterface';

// 画面固有（各ゲームモード）
import { SingleChoiceQuiz } from './Quiz/SingleChoiceQuiz/SingleChoiceQuiz';
import { CalculationResultChoiceQuiz } from './Quiz/CalculationResultChoiceQuiz/CalculationResultChoiceQuiz';
import { QuizActionHistory } from './QuizAction/QuizActionHistory';

/**
 * クイズゲームの進行状況を保持する。
 */
export class GameState {

    /** 出題中のクイズ */
    quiz!: QuizInterface;

    /** クイズで使用する辞書データ */
    private numberDictionaries: NumberSymbolDictionary[];

    /** 現在のゲーム中の行動履歴 */
    private quizActionHistory: QuizActionHistory;

    /** 現在のゲーム中で獲得した点数 */
    get score(): number { return this.quizActionHistory.score; }

    /** 現在のゲーム中で獲得した最高点数 */
    get highestScore(): number { return this.quizActionHistory.highestScore; }

    /** 直前の回答が正解だったか否か */
    get isLastAnswerCorrect(): boolean { return this.quizActionHistory.isLastAnswerCorrect; }

    /** 直前の回答が不正解だったか否か */
    get isLastAnswerIncorrect(): boolean { return this.quizActionHistory.isLastAnswerIncorrect; }

    /** コンストラクタ */
    constructor(
        numberDictionaries: NumberSymbolDictionary[],
    ) {
        this.numberDictionaries = numberDictionaries;

        this.quizActionHistory = new QuizActionHistory();
        this.nextQuiz();
    }

    /**
     * クローン。
     */
    clone(
    ): GameState {
        const newer = new GameState(this.numberDictionaries);

        newer.quizActionHistory = this.quizActionHistory.clone();
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
        this.quizActionHistory.addQuestionCount();
    }

    /**
     * クイズを生成する。
     */
    private createQuiz = (
    ): QuizInterface => {
        const { score } = this.quizActionHistory;

        switch (Math.floor(Math.random() * 2)) {
            case 0: return new SingleChoiceQuiz(this.numberDictionaries, score);
            case 1: return new CalculationResultChoiceQuiz(this.numberDictionaries, score);
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
        this.quiz.isAnswered = true;

        if (isCorrect) {
            this.quizActionHistory.answerCorrect(this.quiz.getScoreGenerally());
        } else {
            this.quizActionHistory.answerIncorrect();
        }
    }

    /**
     * 特別な回答の判定。
     * @param isCorrect 回答が正解か否か
     */
    answerSpecially = (
        isCorrect: boolean
    ): void => {
        this.quiz.isAnswered = true;

        if (isCorrect) {
            this.quizActionHistory.answerCorrect(this.quiz.getScoreSpecially());
        } else {
            this.quizActionHistory.answerIncorrect();
        }
    }

    /**
     * 最高スコアの記録削除。
     */
    removeHighestScore = (
    ): void => {
        this.quizActionHistory.removeHighestScore();
    }
}
