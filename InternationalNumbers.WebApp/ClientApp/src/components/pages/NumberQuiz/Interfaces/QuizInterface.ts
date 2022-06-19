/**
 * クイズを扱うクラスのインターフェイス。
 */
export type QuizInterface = {
    /** クイズの選択肢 */
    quizSelections: any[];

    /** 回答済みか否か */
    isAnswered: boolean;

    /** ヒントが表示中か否か */
    doesViewHint: boolean;

    /** 一般的な形の正答をした際の点数を返す */
    getScoreGenerally(): number;

    /** 特殊な形の正答をした際の点数を返す */
    getScoreSpecially(): number;

    /** クイズの回答方法メッセージ */
    readonly instructionMessage: string;
}