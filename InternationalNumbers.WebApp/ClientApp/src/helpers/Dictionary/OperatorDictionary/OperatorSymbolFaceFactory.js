"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorSymbolFaceFactory = void 0;
var ArrayExtractHelper_1 = require("../../Array/ArrayExtractHelper");
var ObjectMapExtractHelper_1 = require("../../Object/ObjectMapExtractHelper");
var OperatorSymbolFace_1 = require("./OperatorSymbolFace");
/**
 * 記号形式の「演算子」の情報のうち「目に見える表現」に注目したデータ。
 */
var OperatorSymbolFaceFactory = /** @class */ (function () {
    function OperatorSymbolFaceFactory() {
    }
    /**
     * 演算子の「値」から、ランダムに「形」を選んだインスタンスを生成する。
     *
     * @param sourceDictionaries 辞書データ。言語等の縛りがある場合は事前に取り除いておく
     * @param value 数の値
     * @returns
     */
    OperatorSymbolFaceFactory.randomShape = function (sourceDictionaries, operator) {
        var dictionary = ObjectMapExtractHelper_1.ObjectMapExtractHelper.takeOne(sourceDictionaries);
        var dictionaryShapes = dictionary.shapeMap[operator];
        return new OperatorSymbolFace_1.OperatorSymbolFace(dictionary, operator, ArrayExtractHelper_1.ArrayExtractHelper.takeOne(dictionaryShapes));
    };
    return OperatorSymbolFaceFactory;
}());
exports.OperatorSymbolFaceFactory = OperatorSymbolFaceFactory;
//# sourceMappingURL=OperatorSymbolFaceFactory.js.map