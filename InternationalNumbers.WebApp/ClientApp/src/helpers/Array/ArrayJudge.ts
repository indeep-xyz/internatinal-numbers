export class ArrayJudge {
    /**
     * ２つの配列の要素に重複があるかを確認する。
     * @param array1
     * @param array2
     */
    static isDuplicated(
        array1: Readonly<any[]>,
        array2: Readonly<any[]>,
    ): boolean {
        return array1.some(ary1 => array2.includes(ary1));
    }
}
