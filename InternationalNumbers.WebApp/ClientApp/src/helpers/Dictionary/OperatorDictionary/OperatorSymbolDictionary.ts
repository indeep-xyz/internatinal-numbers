import { DictionarySourceMap } from './constants/symbols';
import type * as OperatorDictionaryType from './types/OperatorDictionaryType';

/**
 * 記号形式の「演算子」の情報を扱うクラス。
 */
export class OperatorSymbolDictionary {

    static getDictionaryNames()
        : string[]
    {
        return Object.keys(DictionarySourceMap);
    }

    readonly name: string;
    readonly label: string;
    readonly language: string;
    readonly shapeMap: OperatorDictionaryType.SymbolDictionaryShapeMap;
    readonly outputMode: number;

    constructor(
        name: string,
        outputMode: number,
    ) {
        const ds: OperatorDictionaryType.SymbolDictionarySource = DictionarySourceMap[name];

        this.name = name;
        this.label = ds.label;
        this.language = ds.language;
        this.shapeMap = ds.shapeMap;

        this.outputMode = outputMode;
    }


}
