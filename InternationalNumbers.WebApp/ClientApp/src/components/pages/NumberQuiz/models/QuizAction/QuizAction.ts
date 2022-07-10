/**
 * クイズゲームの進行状況を保持する。
 */
export class GameAction {

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
    }
}
