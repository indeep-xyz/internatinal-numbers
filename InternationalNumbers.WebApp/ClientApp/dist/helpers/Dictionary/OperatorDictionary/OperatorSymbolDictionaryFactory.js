"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorSymbolDictionaryFactory = void 0;
var OperatorSymbolDictionary_1 = require("./OperatorSymbolDictionary");
/**
 * 記号形式の「演算子」の情報を扱うクラスの生成処理。
 */
var OperatorSymbolDictionaryFactory = /** @class */ (function () {
    function OperatorSymbolDictionaryFactory() {
    }
    /**
     * 存在する辞書データすべてのインスタンスを生成する。
     * @param outputMode
     */
    OperatorSymbolDictionaryFactory.createAll = function (outputMode) {
        var operatorNames = OperatorSymbolDictionary_1.OperatorSymbolDictionary.getDictionaryNames();
        return operatorNames.map(function (name) { return new OperatorSymbolDictionary_1.OperatorSymbolDictionary(name, outputMode); });
    };
    return OperatorSymbolDictionaryFactory;
}());
exports.OperatorSymbolDictionaryFactory = OperatorSymbolDictionaryFactory;
//# sourceMappingURL=OperatorSymbolDictionaryFactory.js.map