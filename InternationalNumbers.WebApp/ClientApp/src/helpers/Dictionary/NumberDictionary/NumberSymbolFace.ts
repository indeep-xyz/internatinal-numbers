// 辞書「数」系のヘルパー共通
import type * as NumberDictionaryType from './types/NumberDictionaryType';
import { NumberFaceInterface } from './interfaces/NumberFaceInterface';

/**
 * 記号形式の「数」の情報のうち「目に見える表現」に注目したデータ。
 */
export class NumberSymbolFace
    implements NumberFaceInterface<NumberSymbolFace, NumberDictionaryType.SymbolDictionarySource> {

    /**
     * 数が表す値。
     */
    private _value: number;
    public get value(): number { return this._value };

    /**
     * 文字形。
     */
    readonly shape: string;

    /**
     * 辞書データ。
     */
    readonly dictionary: NumberDictionaryType.SymbolDictionarySource;

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
