import type * as NumberDictionaryType from './types/NumberDictionaryType';
import { DictionarySourceMap } from './constants/symbols';

/**
 * 記号形式の「数」の情報を扱うクラス。
 */
export class NumberSymbolDictionary {

    static getDictionaryNames() {
        return Object.keys(DictionarySourceMap);
    }

    name: string;
    label: string;
    language: string;
    shapeMap: NumberDictionaryType.SymbolDictionaryShapeMap;
    outputMode: number;

    constructor(
        name: string,
        outputMode: number
    ) {
        const ds: NumberDictionaryType.SymbolDictionarySource = DictionarySourceMap[name];

        this.name = name;
        this.label = ds.label;
        this.language = ds.language;
        this.shapeMap = ds.shapeMap;

        this.outputMode = outputMode;
    }
}
