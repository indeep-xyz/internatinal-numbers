"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArraySortHelper = void 0;
var ArraySortHelper = /** @class */ (function () {
    function ArraySortHelper() {
    }
    /**
     * 配列要素から無作為に１つ取得する。
     * @param array
     */
    ArraySortHelper.pickOne = function (array) {
        var index = Math.floor(Math.random() * array.length);
        return array[index];
    };
    /**
     * 配列要素のシャッフルを行う。 (Fisher–Yates shuffle)
     * @param array
     */
    ArraySortHelper.shuffle = function (array) {
        var _a;
        for (var i = array.length - 1; i >= 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
        }
        return array;
    };
    return ArraySortHelper;
}());
exports.ArraySortHelper = ArraySortHelper;
//# sourceMappingURL=ArraySortHelper.js.map