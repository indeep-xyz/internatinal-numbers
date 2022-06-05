"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorShape = void 0;
var ArrayExtractHelper_1 = require("../Array/ArrayExtractHelper");
var ObjectMapExtractHelper_1 = require("../Object/ObjectMapExtractHelper");
/**
 * 単一の文字形ベースの情報に絞った数字データ。
 */
var OperatorShape = /** @class */ (function () {
    /**
     * コンストラクタ。
     * @param sourceDictionary 辞書データ
     * @param operator 演算子の値 (+, -, *, /)
     * @param shape 文字形
     */
    function OperatorShape(sourceDictionary, operator, shape) {
        this.dictionary = sourceDictionary;
        this.operator = operator;
        this.shape = shape;
    }
    /**
     * 同値比較。
     * @param another 判定対象データ
     * @returns 同値ならtrue
     */
    OperatorShape.prototype.equals = function (another) {
        return this.shape === another.shape;
    };
    /**
     * コンストラクタ。
     * @param sourceDictionaries 辞書データ。言語等の縛りがある場合は事前に取り除いておく
     * @param operator 演算子
     */
    OperatorShape.reduce = function (sourceDictionaries, operator) {
        var dictionary = ObjectMapExtractHelper_1.ObjectMapExtractHelper.takeOne(sourceDictionaries);
        var dictionaryShapes = dictionary.shapes[operator];
        return new OperatorShape(dictionary, operator, ArrayExtractHelper_1.ArrayExtractHelper.takeOne(dictionaryShapes));
    };
    /**
     * コンストラクタ。
     * @param sourceDictionaries 辞書データ。言語等の縛りがある場合は事前に取り除いておく
     * @param operator 演算子の値
     * @returns
     */
    OperatorShape.reduceWithOperator = function (sourceDictionaries, operator) {
        var dictionary = ObjectMapExtractHelper_1.ObjectMapExtractHelper.takeOne(sourceDictionaries);
        var dictionaryShapes = dictionary.shapes[operator];
        return new OperatorShape(dictionary, operator, ArrayExtractHelper_1.ArrayExtractHelper.takeOne(dictionaryShapes));
    };
    return OperatorShape;
}());
exports.OperatorShape = OperatorShape;
//# sourceMappingURL=OperatorShape.js.map