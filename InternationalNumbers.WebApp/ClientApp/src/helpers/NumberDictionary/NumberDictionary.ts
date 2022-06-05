import type * as NumberDictionaryType from './types/NumberDictionaryType';
import { DictionarySourceMap } from './constants/dictionarieItems';

export class NumberDictionary {

    static getNumberNames() {
        return Object.keys(DictionarySourceMap);
    }

    name: string;
    label: string;
    language: string;
    shapes: NumberDictionaryType.DictionaryShapeMap;
    outputMode: number;

    constructor(
        name: string,
        outputMode: number
    ) {
        const ds: NumberDictionaryType.DictionarySource = DictionarySourceMap[name];

        this.name = name;
        this.label = ds.label;
        this.language = ds.language;
        this.shapes = ds.shapes;

        this.outputMode = outputMode;
    }
}
