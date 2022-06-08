"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayExtractHelper = void 0;
var ArrayExtractHelper = /** @class */ (function () {
    function ArrayExtractHelper() {
    }
    /**
     * 配列要素から無作為に１つ取得する。
     * @param array
     */
    ArrayExtractHelper.takeOne = function (array) {
        var index = Math.floor(Math.random() * array.length);
        return array[index];
    };
    return ArrayExtractHelper;
}());
exports.ArrayExtractHelper = ArrayExtractHelper;
//# sourceMappingURL=ArrayExtractHelper.js.map