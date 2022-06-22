export class BooleanFactory {
    /**
     * 分母／分子の確率で true を返す。
     * @param denominator 分母
     * @param numerator 分子
     */
    static atRandom(
        denominator: number,
        numerator: number = 1,
    ): boolean {
        return Math.round(Math.random() * denominator) <= numerator;
    }
}
