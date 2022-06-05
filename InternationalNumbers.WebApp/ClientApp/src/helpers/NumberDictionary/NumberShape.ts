import type * as NumberDictionaryType from './types/NumberDictionaryType';
import { ObjectMapExtractHelper } from '../Object/ObjectMapExtractHelper';
import { ArrayExtractHelper } from '../Array/ArrayExtractHelper';

/**
 * 単一の文字形ベースの情報に絞った数字データ。
 */
export class NumberShape {

    /**
     * 数が表す値。
     */
    value: number;

    /**
     * 文字形。
     */
    shape: string;

    /**
     * 辞書データ。
     */
    dictionary: NumberDictionaryType.DictionarySource;

    /**
     * コンストラクタ。
     * @param sourceDictionary 辞書データ
     * @param value 数の値
     * @param shape 文字形
     */
    constructor(
        sourceDictionary: NumberDictionaryType.DictionarySource,
        value: number,
        shape: string,
    ) {
        this.dictionary = sourceDictionary;
        this.value = value;
        this.shape = shape;
    }

    /**
     * 同値比較。
     * @param another 判定対象データ
     * @returns 同値ならtrue
     */
    equals(
        another: NumberShape
    ): boolean {
        return this.shape === another.shape;
    }

    /**
     * 数が表す値をネガポジ変換する。
     */
    invertNumberValue(): number {
        return this.value = -this.value;
    }

    /**
     * コンストラクタ。
     * @param sourceDictionaries 辞書データ。言語等の縛りがある場合は事前に取り除いておく
     * @returns
     */
    static reduce(
        sourceDictionaries: NumberDictionaryType.DictionarySourceMap,
    ): NumberShape {
        const value = Math.floor(Math.random() * 10);
        return NumberShape.reduceWithNumber(sourceDictionaries, value);
    }

    /**
     * コンストラクタ。
     * @param sourceDictionaries 辞書データ。言語等の縛りがある場合は事前に取り除いておく
     * @param value 数の値
     * @returns
     */
    static reduceWithNumber(
        sourceDictionaries: NumberDictionaryType.DictionarySourceMap,
        value: number
    ): NumberShape {
        const dictionary = ObjectMapExtractHelper.takeOne<NumberDictionaryType.DictionarySource>(sourceDictionaries);
        const dictionaryShapes = dictionary.shapes[String(Math.abs(value))];

        return new NumberShape(
            dictionary,
            value,
            ArrayExtractHelper.takeOne<string>(dictionaryShapes),
        );
    }
}
