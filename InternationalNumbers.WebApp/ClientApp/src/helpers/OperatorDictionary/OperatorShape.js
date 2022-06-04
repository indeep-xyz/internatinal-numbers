/**
 * 単一の文字形ベースの情報に絞った数字データ。
 */
export default class OperatorShape {

    /**
     * 演算子の値 (+, -, *, /)。
     * @member {string}
     */
    operator;

    /**
     * 文字形。
     * @member {string}
     */
    shape;

    /**
     * コンストラクタ。
     * @param {OperatorDictionary} sourceDictionary 辞書データ
     * @param {string} operator 演算子の値 (+, -, *, /)
     * @param {string} shape 文字形
     */
    constructor(
        sourceDictionary,
        operator,
        shape,
    ) {
        this.dictionary = sourceDictionary;
        this.operator = operator;
        this.shape = shape;
    }

    /**
     * 同値比較。
     * @param {OperatorShape} another 判定対象データ
     * @returns {boolean} 同値ならtrue
     */
    equals(another) {
        return this.shape === another.shape;
    }

    /**
     * コンストラクタ。
     * @param {Array<OperatorDictionary>} sourceDictionaries 辞書データ。言語等の縛りがある場合は事前に取り除いておく
     * @param {string} operator 演算子の値 (+, -, *, /)
     * @returns {OperatorShape}
     */
    static reduce(sourceDictionaries, operator) {
        const dictionaryKeys = Object.keys(sourceDictionaries);

        const dictionary = sourceDictionaries[dictionaryKeys[Math.floor(Math.random() * dictionaryKeys.length)]];
        const dictionaryShapes = dictionary.shapes[String(operator)];

        const shape = Array.isArray(dictionaryShapes)
            ? dictionaryShapes[Math.floor(Math.random() * dictionaryShapes.length)]
            : dictionaryShapes;

        return new OperatorShape(dictionary, operator, shape);
    }

    /**
     * コンストラクタ。
     * @param {Array<OperatorDictionary>} sourceDictionaries 辞書データ。言語等の縛りがある場合は事前に取り除いておく
     * @param {string} operator 演算子の値 (+, -, *, /)
     * @returns {OperatorShape}
     */
    static reduceWithOperator(sourceDictionaries, operator) {
        const dictionaryKeys = Object.keys(sourceDictionaries);

        const dictionary = sourceDictionaries[dictionaryKeys[Math.floor(Math.random() * dictionaryKeys.length)]];
        const dictionaryShapes = dictionary.shapes[String(operator)];

        const shape = Array.isArray(dictionaryShapes)
            ? dictionaryShapes[Math.floor(Math.random() * dictionaryShapes.length)]
            : dictionaryShapes;

        return new OperatorShape(dictionary, operator, shape);
    }
}
