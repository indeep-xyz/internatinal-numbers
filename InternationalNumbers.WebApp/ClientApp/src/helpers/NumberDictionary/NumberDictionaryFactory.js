"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberDictionaryFactory = void 0;
var NumberDictionary_1 = require("./NumberDictionary");
var NumberDictionaryFactory = /** @class */ (function () {
    function NumberDictionaryFactory() {
    }
    NumberDictionaryFactory.createAll = function (outputMode) {
        var numberNames = NumberDictionary_1.NumberDictionary.getNumberNames();
        return numberNames.map(function (name) { return new NumberDictionary_1.NumberDictionary(name, outputMode); });
    };
    return NumberDictionaryFactory;
}());
exports.NumberDictionaryFactory = NumberDictionaryFactory;
//# sourceMappingURL=NumberDictionaryFactory.js.map