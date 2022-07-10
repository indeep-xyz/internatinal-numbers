// PJ共通
import { ComparableInterface } from '../../../interfaces/ComparableInterface';
import type * as ArithmeticType from '../../../types/ArithmeticType';

// 辞書系のヘルパー共通
import { SymbolFaceValueInterface } from '../interfaces/SymbolFaceValueInterface';

// 辞書「演算子」系のヘルパー共通
import { OperatorSymbolDictionarySourceType } from './types/OperatorDictionaryType';

/**
 * 記号形式の「演算子」の情報のうち「目に見える表現」に注目したデータ。
 */
export class OperatorSymbolFace
    implements SymbolFaceValueInterface, ComparableInterface<OperatorSymbolFace> {

    /** 辞書データ */
    readonly dictionary: OperatorSymbolDictionarySourceType;

    /** 文字の「値」 (+, -, *, /) */
    readonly _value: ArithmeticType.FourArithmeticOperatorType;

    /** 文字の「値」の文字列表現（常に英数字 or 一般的な記号） */
    public get valueAsString(): string { return String(this._value) };

    /** 文字の「形」を表す文字列 */
    readonly shape: string;

    /**
     * コンストラクタ。
     * @param sourceDictionary 辞書データ
     * @param value 演算子の値 (+, -, *, /)
     * @param shape 文字形
     */
    constructor(
        sourceDictionary: OperatorSymbolDictionarySourceType,
        value: ArithmeticType.FourArithmeticOperatorType,
        shape: string,
    ) {
        this.shape = shape;
        this._value = value;
        this.dictionary = sourceDictionary;
    }

    /**
     * 同値比較。
     * @param another 判定対象データ
     * @returns 同値ならtrue
     */
    equals(
        another: OperatorSymbolFace
    ): boolean {
        return this.shape === another.shape;
    }
}
