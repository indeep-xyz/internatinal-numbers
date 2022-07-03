// PJ共通
import { ArrayExtraction } from '../../Array/ArrayExtraction';
import { ObjectMapExtraction } from '../../Object/ObjectMapExtraction';
import { PublicImageFile } from '../../../types/PublicFileType';

// 辞書「ソロモンの悪魔」系のヘルパー共通
import { SolomonDemonSymbolDictionary } from './SolomonDemonSymbolDictionary';
import { SolomonDemonSymbolFace } from './SolomonDemonSymbolFace';
import { SolomonDemonSymbolDictionarySourceType } from './types/SolomonDemonDictionaryType';

/**
 * ソロモンの悪魔の情報のうち「目に見える表現」に注目したデータ。
 */
export class SolomonSymbolFaceFactory {

    /**
     * ランダムに選んだインスタンスを生成する。
     * 
     * @param sourceDictionaries 辞書データ。言語等の縛りがある場合は事前に取り除いておく
     * @param value 数の値
     * @returns
     */
    static randomSymbolShape(
        sourceDictionaries: SolomonDemonSymbolDictionary[],
    ): SolomonDemonSymbolFace {
        const dictionary = ObjectMapExtraction.atRandom<SolomonDemonSymbolDictionarySourceType>(sourceDictionaries);
        const dictionarySymbolShapes = dictionary.symbolShapes;

        return new SolomonDemonSymbolFace(
            dictionary,
            ArrayExtraction.atRandom<PublicImageFile>(dictionarySymbolShapes),
        );
    }
}
