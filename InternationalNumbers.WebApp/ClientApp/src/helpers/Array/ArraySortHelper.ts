export class ArraySortHelper {
    /**
     * 配列要素から無作為に１つ取得する。
     * @param array
     */
    static pickOne<T>(
        array: any[]
    ): T {
        const index = Math.floor(Math.random() * array.length)
        return array[index];
    }

    /**
     * 配列要素のシャッフルを行う。 (Fisher–Yates shuffle)
     * @param array
     */
    static shuffle(
        array: any[]
    ): any[] {
        for (let i = array.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }
}
