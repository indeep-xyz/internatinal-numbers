/**
 * 単一の文字形ベースの情報に絞った数字データ。
 */
export default class NumberShape {

    /**
     * 数が表す値。
     * @member {Array<string>}
     */
    value;

    /**
     * 文字形。
     * @member {string}
     */
    shape;

    /**
     * コンストラクタ。
     * @param {NumberDictionary} sourceDictionary 辞書データ
     * @param {number} value 数の値
     * @param {string} shape 文字形
     */
    constructor(
        sourceDictionary,
        value,
        shape,
    ) {
        this.dictionary = sourceDictionary;
        this.value = value;
        this.shape = shape;
    }

    /**
     * 同値比較。
     * @param {NumberShape} another 判定対象データ
     * @returns {boolean} 同値ならtrue
     */
    equals(another) {
        return this.shape === another.shape;
    }

    /**
     * 数が表す値をネガポジ変換する。
     * @returns {void}
     */
    invertNumberValue() {
        return this.value = -this.value;
    }

    /**
     * コンストラクタ。
     * @param {Array<NumberDictionary>} sourceDictionaries 辞書データ。言語等の縛りがある場合は事前に取り除いておく
     * @returns {NumberShape}
     */
    static reduce(sourceDictionaries) {
        const value = Math.floor(Math.random() * 10);
        return NumberShape.reduceWithNumber(sourceDictionaries, value);
    }

    /**
     * コンストラクタ。
     * @param {Array<NumberDictionary>} sourceDictionaries 辞書データ。言語等の縛りがある場合は事前に取り除いておく
     * @param {number} value 数の値
     * @returns {NumberShape}
     */
    static reduceWithNumber(sourceDictionaries, value) {
        const dictionaryKeys = Object.keys(sourceDictionaries);
        const dictionary = sourceDictionaries[dictionaryKeys[Math.floor(Math.random() * dictionaryKeys.length)]];
        const dictionaryShapes = dictionary.shapes[String(Math.abs(value))];

        const shape = Array.isArray(dictionaryShapes)
            ? dictionaryShapes[Math.floor(Math.random() * dictionaryShapes.length)]
            : dictionaryShapes;

        return new NumberShape(dictionary, value, shape);
    }
}
