// 辞書「ソロモンの悪魔」系のヘルパー共通
import { SolomonDemonSymbolDictionaryRepository } from './repositories/SolomonDemonSymbolDictionaryRepository';
import { SolomonDemonSymbolDictionary } from './SolomonDemonSymbolDictionary';

/**
 * ソロモンの悪魔の情報を扱うクラスの生成処理。
 */
export class SolomonDemonSymbolDictionaryFactory {

    /**
     * 存在する辞書データすべてのインスタンスを生成する。
     * @param outputMode
     */
    static async createAll(
    ): Promise<SolomonDemonSymbolDictionary[]> {
        const dictionarySources = await SolomonDemonSymbolDictionaryRepository.fetchAll();
        return dictionarySources.map(ds => new SolomonDemonSymbolDictionary(ds));
    }
}
