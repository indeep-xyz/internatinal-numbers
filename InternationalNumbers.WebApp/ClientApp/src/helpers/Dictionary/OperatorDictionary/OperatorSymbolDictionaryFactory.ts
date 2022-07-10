import { OperatorSymbolDictionary } from './OperatorSymbolDictionary';

/**
 * 記号形式の「演算子」の情報を扱うクラスの生成処理。
 */
export class OperatorSymbolDictionaryFactory {

    /**
     * 存在する辞書データすべてのインスタンスを生成する。
     * @param outputMode
     */
    static createAll(
        outputMode: number,
    ): OperatorSymbolDictionary[] {
        const operatorNames = OperatorSymbolDictionary.getDictionaryNames();
        return operatorNames.map(name => new OperatorSymbolDictionary(name, outputMode));
    }
}
