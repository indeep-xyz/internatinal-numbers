export class ObjectMapExtractHelper {
    /**
     * マップ形式のオブジェクトから無作為に１つ取得する。
     * @param array
     */
    static takeOne<T>(
        objectMap: any
    ): T {
        const keys = Object.keys(objectMap);
        const key = keys[Math.floor(Math.random() * keys.length)];

        return objectMap[key];
    }
}
