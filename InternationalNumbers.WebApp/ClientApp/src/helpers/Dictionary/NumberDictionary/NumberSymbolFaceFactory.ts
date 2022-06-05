// PJ共通
import { ArrayExtractHelper } from '../../Array/ArrayExtractHelper';
import { ObjectMapExtractHelper } from '../../Object/ObjectMapExtractHelper';

// 辞書「数」系のヘルパー共通
import type * as NumberDictionaryType from './types/NumberDictionaryType';
import { NumberSymbolFace } from './NumberSymbolFace';

/**
 * 記号形式の「数」の情報のうち「目に見える表現」に注目したデータの生成処理。
 */
export class NumberSymbolFaceFactory {

    /**
     * ランダムにインスタンスを生成する。
     * 
     * @param sourceDictionaries 辞書データ。言語等の縛りがある場合は事前に取り除いておく
     * @returns
     */
    static random(
        sourceDictionaries: NumberDictionaryType.SymbolDictionarySourceMap,
    ): NumberSymbolFace {
        const value = Math.floor(Math.random() * 10);
        return NumberSymbolFaceFactory.randomShape(sourceDictionaries, value);
    }

    /**
     * 数の「値」から、ランダムに「形」を選んだインスタンスを生成する。
     * 
     * @param sourceDictionaries 辞書データ。言語等の縛りがある場合は事前に取り除いておく
     * @param value 数の値
     * @returns
     */
    static randomShape(
        sourceDictionaries: NumberDictionaryType.SymbolDictionarySourceMap,
        value: number
    ): NumberSymbolFace {
        const dictionary = ObjectMapExtractHelper.takeOne<NumberDictionaryType.SymbolDictionarySource>(sourceDictionaries);
        const dictionaryShapes = dictionary.shapeMap[String(Math.abs(value))];

        return new NumberSymbolFace(
            dictionary,
            value,
            ArrayExtractHelper.takeOne<string>(dictionaryShapes),
        );
    }
}
