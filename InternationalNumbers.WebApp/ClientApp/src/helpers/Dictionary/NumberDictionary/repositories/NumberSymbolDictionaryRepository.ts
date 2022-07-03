import type * as NumberDictionaryType from '../types/NumberDictionaryType';

/**
 * 記号形式の「数」の情報を扱うクラスのサーバー取得処理。
 */
export class NumberSymbolDictionaryRepository {

    static fetchAllCache?: NumberDictionaryType.SymbolDictionarySource[];

    /**
     * 存在する辞書データすべてのインスタンスを生成する。
     * @param outputMode
     */
    static async fetchAll(
    ): Promise<NumberDictionaryType.SymbolDictionarySource[]> {
        if (NumberSymbolDictionaryRepository.fetchAllCache === undefined) {
            const response = await fetch("/internationalNumberSource");
            NumberSymbolDictionaryRepository.fetchAllCache = await response.json();
        }

        return NumberSymbolDictionaryRepository.fetchAllCache!;
    }
}
