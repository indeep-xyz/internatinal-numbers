// システム共通－辞書「数」
import { NumberSymbolDictionary } from './NumberSymbolDictionary';
import { NumberSymbolDictionaryRepository } from './repositories/NumberSymbolDictionaryRepository';

/**
 * 記号形式の「数」の情報を扱うクラスの生成処理。
 */
export class NumberSymbolDictionaryFactory {

    /**
     * 存在する辞書データすべてのインスタンスを生成する。
     * @param outputMode
     */
    static async createAll (
        outputMode: number
    ): Promise<NumberSymbolDictionary[]> {
        const dictionarySources = await NumberSymbolDictionaryRepository.fetchAll();
        return dictionarySources.map(ds => new NumberSymbolDictionary(ds, outputMode));
    }
}
