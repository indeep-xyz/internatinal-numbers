export class ArraySort {
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
