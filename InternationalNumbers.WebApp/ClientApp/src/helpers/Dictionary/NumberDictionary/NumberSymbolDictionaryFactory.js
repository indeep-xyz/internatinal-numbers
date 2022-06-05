"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberSymbolDictionaryFactory = void 0;
var NumberSymbolDictionary_1 = require("./NumberSymbolDictionary");
/**
 * 記号形式の「数」の情報を扱うクラスの生成処理。
 */
var NumberSymbolDictionaryFactory = /** @class */ (function () {
    function NumberSymbolDictionaryFactory() {
    }
    /**
     * 存在する辞書データすべてのインスタンスを生成する。
     * @param outputMode
     */
    NumberSymbolDictionaryFactory.createAll = function (outputMode) {
        var numberNames = NumberSymbolDictionary_1.NumberSymbolDictionary.getDictionaryNames();
        return numberNames.map(function (name) { return new NumberSymbolDictionary_1.NumberSymbolDictionary(name, outputMode); });
    };
    return NumberSymbolDictionaryFactory;
}());
exports.NumberSymbolDictionaryFactory = NumberSymbolDictionaryFactory;
//# sourceMappingURL=NumberSymbolDictionaryFactory.js.map