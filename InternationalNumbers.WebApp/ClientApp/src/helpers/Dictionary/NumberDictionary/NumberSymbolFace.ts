// PJ共通
import { ComparableInterface } from '../../../interfaces/ComparableInterface';

// 辞書のヘルパー共通
import { SymbolFaceValueInterface } from '../interfaces/SymbolFaceValueInterface';

// 辞書「数」系のヘルパー共通
import type * as NumberDictionaryType from './types/NumberDictionaryType';

/**
 * 記号形式の「数」の情報のうち「目に見える表現」に注目したデータ。
 */
export class NumberSymbolFace
    implements SymbolFaceValueInterface, ComparableInterface<NumberSymbolFace> {

    /** 辞書データ */
    readonly dictionary: NumberDictionaryType.SymbolDictionarySource;

    /** 文字の「値」 */
    private _value: number;

    /** 文字の「値」の数値表現 */
    public get valueAsNumber(): number { return this._value };

    /** 文字の「値」の文字列表現。（常に英数字 or 一般的な記号） */
    public get valueAsString(): string { return String(this._value) };

    /** 文字の「形」を表す文字列 */
    readonly shape: string;

    /**
     * コンストラクタ。
     * @param sourceDictionary 辞書データ
     * @param value 数の値
     * @param shape 文字形
     */
    constructor(
        sourceDictionary: NumberDictionaryType.SymbolDictionarySource,
        value: number,
        shape: string,
    ) {
        this.dictionary = sourceDictionary;
        this.shape = shape;
        this._value = value;
    }

    /**
     * 同値比較。
     * @param another 判定対象データ
     * @returns 同値ならtrue
     */
    equals(
        another: NumberSymbolFace
    ): boolean {
        return this.shape === another.shape;
    }

    /**
     * 数が表す値をネガポジ変換する。
     */
    invertNumberValue(): number {
        return this._value = -this._value;
    }
}
