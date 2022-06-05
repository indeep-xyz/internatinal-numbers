"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberSymbolDictionary = void 0;
var symbols_1 = require("./constants/symbols");
/**
 * 記号形式の「数」の情報を扱うクラス。
 */
var NumberSymbolDictionary = /** @class */ (function () {
    function NumberSymbolDictionary(name, outputMode) {
        var ds = symbols_1.DictionarySourceMap[name];
        this.name = name;
        this.label = ds.label;
        this.language = ds.language;
        this.shapeMap = ds.shapeMap;
        this.outputMode = outputMode;
    }
    NumberSymbolDictionary.getDictionaryNames = function () {
        return Object.keys(symbols_1.DictionarySourceMap);
    };
    return NumberSymbolDictionary;
}());
exports.NumberSymbolDictionary = NumberSymbolDictionary;
//# sourceMappingURL=NumberSymbolDictionary.js.map