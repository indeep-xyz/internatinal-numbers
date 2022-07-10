import { QuizActionHistoryRepository } from "../../repositories/QuizActionHistoryRepository";

/**
 * クイズゲームの進行状況を保持する。
 */
export class QuizActionHistory {

    /** 現在のゲーム中で獲得した点数 */
    private _score: number;
    get score(): number { return this._score; };
    
    /** 現在のゲーム中で獲得した最高点数 */
    private _highestScore: number;
    get highestScore(): number { return this._highestScore; };

    /** 回答回数 */
    private _answerdCount: number;
    get answerdCount(): number { return this._answerdCount; };

    /** 出題回数 */
    private _questionCount: number;
    get questionCount(): number { return this._questionCount; };

    /** 直前の回答が正解だったか否か */
    private _isLastAnswerCorrect: boolean;
    get isLastAnswerCorrect(): boolean { return this._isLastAnswerCorrect; };

    /** 直前の回答が不正解だったか否か */
    private _isLastAnswerIncorrect: boolean;
    get isLastAnswerIncorrect(): boolean { return this._isLastAnswerIncorrect; };

    /** コンストラクタ */
    constructor(
    ) {
        const repository = new QuizActionHistoryRepository();

        this._score = 0;
        this._highestScore = repository.loadHighestScore();
        this._answerdCount = 0;
        this._questionCount = 0;
        this._isLastAnswerCorrect = false;
        this._isLastAnswerIncorrect = false;
    }

    /**
     * クローン。
     */
    clone(
    ): QuizActionHistory {
        const newer = new QuizActionHistory();

        newer._score = this._score;
        newer._answerdCount = this._answerdCount;
        newer._questionCount = this._questionCount;
        newer._isLastAnswerCorrect = this._isLastAnswerCorrect;
        newer._isLastAnswerIncorrect = this._isLastAnswerIncorrect;

        return newer;
    }

    /**
     * 出題回数を加算する。
     */
    addQuestionCount(
    ) {
        this._questionCount++;
    }

    /**
     * 正答時の処理。
     * @param additionalScore 加算する点数
     */
    answerCorrect(
        additionalScore: number
    ): void {
        this._answerdCount++;
        this._score += additionalScore;
        this._isLastAnswerCorrect = true;
        this._isLastAnswerIncorrect = false;
    }

    /**
     * 不正答時の処理。
     */
    answerIncorrect(
    ): void {
        const repository = new QuizActionHistoryRepository();
        repository.saveHighestScore(this._score);

        this._answerdCount++;
        this._score = 0;
        this._isLastAnswerCorrect = false;
        this._isLastAnswerIncorrect = true;
    }

    /**
     * 最高スコア記録の削除。
     */
    removeHighestScore(
    ): void {
        const repository = new QuizActionHistoryRepository();
        repository.removeHighestScore();
    }
}
