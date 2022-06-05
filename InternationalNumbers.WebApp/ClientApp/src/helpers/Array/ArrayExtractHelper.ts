export class ArrayExtractHelper {
    /**
     * 配列要素から無作為に１つ取得する。
     * @param array
     */
    static takeOne<T>(
        array: any[]
    ): T {
        const index = Math.floor(Math.random() * array.length)
        return array[index];
    }
}
