// 辞書「ソロモンの悪魔」系のヘルパー共通
import { SolomonDemonSymbolDictionary } from './SolomonDemonSymbolDictionary';

/**
 * ソロモンの悪魔の情報を扱うクラスの生成処理。
 */
export class SolomonDemonSymbolDictionaryFactory {

    /**
     * 存在する辞書データすべてのインスタンスを生成する。
     * @param outputMode
     */
    static createAll(
    ): SolomonDemonSymbolDictionary[] {
        const solomonNames = SolomonDemonSymbolDictionary.getDictionaryNames();
        return solomonNames.map(name => new SolomonDemonSymbolDictionary(name));
    }
}
