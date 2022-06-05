import { NumberSymbolDictionary } from './NumberSymbolDictionary';

/**
 * 記号形式の「数」の情報を扱うクラスの生成処理。
 */
export class NumberSymbolDictionaryFactory {

    /**
     * 存在する辞書データすべてのインスタンスを生成する。
     * @param outputMode
     */
    static createAll(
        outputMode: number
    ): NumberSymbolDictionary[] {
        const numberNames = NumberSymbolDictionary.getDictionaryNames();
        return numberNames.map(name => new NumberSymbolDictionary(name, outputMode));
    }
}
