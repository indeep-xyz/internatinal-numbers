"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorDictionaryFactory = void 0;
var OperatorDictionary_1 = require("./OperatorDictionary");
var OperatorDictionaryFactory = /** @class */ (function () {
    function OperatorDictionaryFactory() {
    }
    OperatorDictionaryFactory.createAll = function (outputMode) {
        var operatorNames = OperatorDictionary_1.OperatorDictionary.getOperatorNames();
        return operatorNames.map(function (name) { return new OperatorDictionary_1.OperatorDictionary(name, outputMode); });
    };
    return OperatorDictionaryFactory;
}());
exports.OperatorDictionaryFactory = OperatorDictionaryFactory;
//# sourceMappingURL=OperatorDictionaryFactory.js.map