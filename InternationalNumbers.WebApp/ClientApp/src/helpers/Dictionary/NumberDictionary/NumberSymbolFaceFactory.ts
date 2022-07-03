// PJ共通
import { ArrayExtraction } from '../../Array/ArrayExtraction';
import { ObjectMapExtraction } from '../../Object/ObjectMapExtraction';

// 辞書「数」系のヘルパー共通
import { NumberSymbolDictionary } from './NumberSymbolDictionary';
import { NumberSymbolFace } from './NumberSymbolFace';
import { NumberSymbolDictionaryShapeType } from './types/NumberDictionaryType';

/**
 * 記号形式の「数」の情報のうち「目に見える表現」に注目したデータの生成処理。
 */
export class NumberSymbolFaceFactory {

    /**
     * ランダムにインスタンスを生成する。
     * 
     * @param numberDictionaries 辞書データ。言語等の縛りがある場合は事前に取り除いておく
     * @returns
     */
    static random(
        numberDictionaries: NumberSymbolDictionary[],
    ): NumberSymbolFace {
        const value = Math.floor(Math.random() * 10);
        return NumberSymbolFaceFactory.randomShape(numberDictionaries, value);
    }

    /**
     * 数の「値」から、ランダムに「形」を選んだインスタンスを生成する。
     * 
     * @param numberDictionaries 辞書データ。言語等の縛りがある場合は事前に取り除いておく
     * @param value 数の値
     * @returns
     */
    static randomShape(
        numberDictionaries: NumberSymbolDictionary[],
        value: number
    ): NumberSymbolFace {
        let dictionary: NumberSymbolDictionary;
        let dictionaryShapes: NumberSymbolDictionaryShapeType[];

        while (true) {
            dictionary = ObjectMapExtraction.atRandom<NumberSymbolDictionary>(numberDictionaries);
            dictionaryShapes = dictionary.extractShapes(value);

            if (dictionaryShapes.length > 0) {
                break;
            }
        }

        return new NumberSymbolFace(
            dictionary,
            value,
            ArrayExtraction.atRandom<NumberSymbolDictionaryShapeType>(dictionaryShapes),
        );
    }
}
