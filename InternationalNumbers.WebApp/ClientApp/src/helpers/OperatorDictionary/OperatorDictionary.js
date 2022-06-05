"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorDictionary = void 0;
var dictionarieItems_1 = require("./constants/dictionarieItems");
var OperatorDictionary = /** @class */ (function () {
    function OperatorDictionary(name, outputMode) {
        var ds = dictionarieItems_1.DictionarySourceMap[name];
        this.name = name;
        this.label = ds.label;
        this.isWord = ds.isWord;
        this.language = ds.language;
        this.shapes = ds.shapes;
        this.outputMode = outputMode;
    }
    OperatorDictionary.getOperatorNames = function () {
        return Object.keys(dictionarieItems_1.DictionarySourceMap);
    };
    return OperatorDictionary;
}());
exports.OperatorDictionary = OperatorDictionary;
//# sourceMappingURL=OperatorDictionary.js.map