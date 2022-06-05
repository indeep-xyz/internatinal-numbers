"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberSymbolFaceFactory = void 0;
// PJ共通
var ArrayExtractHelper_1 = require("../../Array/ArrayExtractHelper");
var ObjectMapExtractHelper_1 = require("../../Object/ObjectMapExtractHelper");
var NumberSymbolFace_1 = require("./NumberSymbolFace");
/**
 * 記号形式の「数」の情報のうち「目に見える表現」に注目したデータの生成処理。
 */
var NumberSymbolFaceFactory = /** @class */ (function () {
    function NumberSymbolFaceFactory() {
    }
    /**
     * ランダムにインスタンスを生成する。
     *
     * @param sourceDictionaries 辞書データ。言語等の縛りがある場合は事前に取り除いておく
     * @returns
     */
    NumberSymbolFaceFactory.random = function (sourceDictionaries) {
        var value = Math.floor(Math.random() * 10);
        return NumberSymbolFaceFactory.randomShape(sourceDictionaries, value);
    };
    /**
     * 数の「値」から、ランダムに「形」を選んだインスタンスを生成する。
     *
     * @param sourceDictionaries 辞書データ。言語等の縛りがある場合は事前に取り除いておく
     * @param value 数の値
     * @returns
     */
    NumberSymbolFaceFactory.randomShape = function (sourceDictionaries, value) {
        var dictionary = ObjectMapExtractHelper_1.ObjectMapExtractHelper.takeOne(sourceDictionaries);
        var dictionaryShapes = dictionary.shapeMap[String(Math.abs(value))];
        return new NumberSymbolFace_1.NumberSymbolFace(dictionary, value, ArrayExtractHelper_1.ArrayExtractHelper.takeOne(dictionaryShapes));
    };
    return NumberSymbolFaceFactory;
}());
exports.NumberSymbolFaceFactory = NumberSymbolFaceFactory;
//# sourceMappingURL=NumberSymbolFaceFactory.js.map