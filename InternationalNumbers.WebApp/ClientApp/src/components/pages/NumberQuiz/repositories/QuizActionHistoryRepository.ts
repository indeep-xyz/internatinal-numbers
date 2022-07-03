/**
 * クイズゲームの操作履歴のリポジトリ。
 */
export class QuizActionHistoryRepository {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // リポジトリ処理（最高得点）

    /** 最高得点を保存するキー */
    static readonly highestScoreKey: string = "highestScore";

    /**
     * 最高得点の保存。
     * @param highestScore 最高得点
     */
    saveHighestScore(
        highestScore: number
    ): void {
        if (highestScore > this.loadHighestScore()) {
            localStorage.setItem(QuizActionHistoryRepository.highestScoreKey, String(highestScore));
        }
    }

    /**
     * 最高得点の読出。
     */
    loadHighestScore(
    ): number {
        return Number(localStorage.getItem(QuizActionHistoryRepository.highestScoreKey) ?? 0);
    }

    /**
     * 最高得点の削除。
     */
    removeHighestScore(
    ): void {
        localStorage.removeItem(QuizActionHistoryRepository.highestScoreKey);
    }
}
