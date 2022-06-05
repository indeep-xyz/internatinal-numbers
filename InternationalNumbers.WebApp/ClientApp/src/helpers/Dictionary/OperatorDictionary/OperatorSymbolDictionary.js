"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorSymbolDictionary = void 0;
var symbols_1 = require("./constants/symbols");
/**
 * 記号形式の「演算子」の情報を扱うクラス。
 */
var OperatorSymbolDictionary = /** @class */ (function () {
    function OperatorSymbolDictionary(name, outputMode) {
        var ds = symbols_1.DictionarySourceMap[name];
        this.name = name;
        this.label = ds.label;
        this.language = ds.language;
        this.shapeMap = ds.shapeMap;
        this.outputMode = outputMode;
    }
    OperatorSymbolDictionary.getDictionaryNames = function () {
        return Object.keys(symbols_1.DictionarySourceMap);
    };
    return OperatorSymbolDictionary;
}());
exports.OperatorSymbolDictionary = OperatorSymbolDictionary;
//# sourceMappingURL=OperatorSymbolDictionary.js.map