"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectMapExtractHelper = void 0;
var ObjectMapExtractHelper = /** @class */ (function () {
    function ObjectMapExtractHelper() {
    }
    /**
     * マップ形式のオブジェクトから無作為に１つ取得する。
     * @param array
     */
    ObjectMapExtractHelper.takeOne = function (objectMap) {
        var keys = Object.keys(objectMap);
        var key = keys[Math.floor(Math.random() * keys.length)];
        return objectMap[key];
    };
    return ObjectMapExtractHelper;
}());
exports.ObjectMapExtractHelper = ObjectMapExtractHelper;
//# sourceMappingURL=ObjectMapExtractHelper.js.map