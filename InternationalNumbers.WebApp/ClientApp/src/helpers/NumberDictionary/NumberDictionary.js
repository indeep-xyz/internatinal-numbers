"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberDictionary = void 0;
var dictionarieItems_1 = require("./constants/dictionarieItems");
var NumberDictionary = /** @class */ (function () {
    function NumberDictionary(name, outputMode) {
        var ds = dictionarieItems_1.DictionarySourceMap[name];
        this.name = name;
        this.label = ds.label;
        this.language = ds.language;
        this.shapes = ds.shapes;
        this.outputMode = outputMode;
    }
    NumberDictionary.getNumberNames = function () {
        return Object.keys(dictionarieItems_1.DictionarySourceMap);
    };
    return NumberDictionary;
}());
exports.NumberDictionary = NumberDictionary;
//# sourceMappingURL=NumberDictionary.js.map