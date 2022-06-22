﻿// 辞書系のヘルパー共通
import { SymbolDictionaryPresentationInterface } from '../interfaces/SymbolDictionaryPresentationInterface';

// 辞書「演算子」系のヘルパー共通
import type * as NumberDictionaryType from './types/NumberDictionaryType';
import { DictionarySourceMap } from './constants/symbols/index';

/**
 * 記号形式の「数」の情報を扱うクラス。
 */
export class NumberSymbolDictionary
    implements SymbolDictionaryPresentationInterface {

    static getDictionaryNames() {
        return Object.keys(DictionarySourceMap);
    }

    readonly name: string;
    readonly label: string;
    readonly language: string;
    readonly shapeMap: NumberDictionaryType.SymbolDictionaryShapeMap;
    readonly outputMode: number;

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
