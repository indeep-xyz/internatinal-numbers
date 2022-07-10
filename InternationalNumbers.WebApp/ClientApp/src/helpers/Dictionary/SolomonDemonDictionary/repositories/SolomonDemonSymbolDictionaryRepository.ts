import { SolomonDemonSymbolDictionarySourceType } from '../types/SolomonDemonDictionaryType';

/**
 * 記号形式の「ソロモンの悪魔」の情報を扱うクラスのサーバー取得処理。
 */
export class SolomonDemonSymbolDictionaryRepository {

    static fetchAllCache?: SolomonDemonSymbolDictionarySourceType[];

    /**
     * 存在する辞書データすべてのインスタンスを生成する。
     * @param outputMode
     */
    static async fetchAll(
    ): Promise<SolomonDemonSymbolDictionarySourceType[]> {
        if (SolomonDemonSymbolDictionaryRepository.fetchAllCache === undefined) {
            const response = await fetch("/api/solomonDemonSource");
            SolomonDemonSymbolDictionaryRepository.fetchAllCache = await response.json();
        }

        return SolomonDemonSymbolDictionaryRepository.fetchAllCache!;
    }
}
