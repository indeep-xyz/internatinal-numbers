"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberShape = void 0;
var ObjectMapExtractHelper_1 = require("../Object/ObjectMapExtractHelper");
var ArrayExtractHelper_1 = require("../Array/ArrayExtractHelper");
/**
 * 単一の文字形ベースの情報に絞った数字データ。
 */
var NumberShape = /** @class */ (function () {
    /**
     * コンストラクタ。
     * @param sourceDictionary 辞書データ
     * @param value 数の値
     * @param shape 文字形
     */
    function NumberShape(sourceDictionary, value, shape) {
        this.dictionary = sourceDictionary;
        this.value = value;
        this.shape = shape;
    }
    /**
     * 同値比較。
     * @param another 判定対象データ
     * @returns 同値ならtrue
     */
    NumberShape.prototype.equals = function (another) {
        return this.shape === another.shape;
    };
    /**
     * 数が表す値をネガポジ変換する。
     */
    NumberShape.prototype.invertNumberValue = function () {
        return this.value = -this.value;
    };
    /**
     * コンストラクタ。
     * @param sourceDictionaries 辞書データ。言語等の縛りがある場合は事前に取り除いておく
     * @returns
     */
    NumberShape.reduce = function (sourceDictionaries) {
        var value = Math.floor(Math.random() * 10);
        return NumberShape.reduceWithNumber(sourceDictionaries, value);
    };
    /**
     * コンストラクタ。
     * @param sourceDictionaries 辞書データ。言語等の縛りがある場合は事前に取り除いておく
     * @param value 数の値
     * @returns
     */
    NumberShape.reduceWithNumber = function (sourceDictionaries, value) {
        var dictionary = ObjectMapExtractHelper_1.ObjectMapExtractHelper.takeOne(sourceDictionaries);
        var dictionaryShapes = dictionary.shapes[String(Math.abs(value))];
        return new NumberShape(dictionary, value, ArrayExtractHelper_1.ArrayExtractHelper.takeOne(dictionaryShapes));
    };
    return NumberShape;
}());
exports.NumberShape = NumberShape;
//# sourceMappingURL=NumberShape.js.map