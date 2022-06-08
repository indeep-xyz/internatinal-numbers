"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberSymbolFace = void 0;
/**
 * 記号形式の「数」の情報のうち「目に見える表現」に注目したデータ。
 */
var NumberSymbolFace = /** @class */ (function () {
    /**
     * コンストラクタ。
     * @param sourceDictionary 辞書データ
     * @param value 数の値
     * @param shape 文字形
     */
    function NumberSymbolFace(sourceDictionary, value, shape) {
        this.dictionary = sourceDictionary;
        this.shape = shape;
        this._value = value;
    }
    Object.defineProperty(NumberSymbolFace.prototype, "value", {
        get: function () { return this._value; },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * 同値比較。
     * @param another 判定対象データ
     * @returns 同値ならtrue
     */
    NumberSymbolFace.prototype.equals = function (another) {
        return this.shape === another.shape;
    };
    /**
     * 数が表す値をネガポジ変換する。
     */
    NumberSymbolFace.prototype.invertNumberValue = function () {
        return this._value = -this._value;
    };
    return NumberSymbolFace;
}());
exports.NumberSymbolFace = NumberSymbolFace;
//# sourceMappingURL=NumberSymbolFace.js.map