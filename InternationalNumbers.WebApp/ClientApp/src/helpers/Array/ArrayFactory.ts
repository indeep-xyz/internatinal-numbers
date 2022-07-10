export class ArrayFactory {
    /**
     * 最小値～最大値の連続値をもつ配列を作成する。
     * @param array
     */
    static createRange(
        min: number,
        max: number,
    ): number[] {
        const numberValues: number[] = [];

        for (let i = min; i <= max; i++) {
            numberValues.push(i);
        }

        return numberValues;
    }
}
