"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorSymbolFace = void 0;
/**
 * 記号形式の「演算子」の情報のうち「目に見える表現」に注目したデータ。
 */
var OperatorSymbolFace = /** @class */ (function () {
    /**
     * コンストラクタ。
     * @param sourceDictionary 辞書データ
     * @param operator 演算子の値 (+, -, *, /)
     * @param shape 文字形
     */
    function OperatorSymbolFace(sourceDictionary, operator, shape) {
        this.dictionary = sourceDictionary;
        this.operator = operator;
        this.shape = shape;
    }
    /**
     * 同値比較。
     * @param another 判定対象データ
     * @returns 同値ならtrue
     */
    OperatorSymbolFace.prototype.equals = function (another) {
        return this.shape === another.shape;
    };
    return OperatorSymbolFace;
}());
exports.OperatorSymbolFace = OperatorSymbolFace;
//# sourceMappingURL=OperatorSymbolFace.js.map