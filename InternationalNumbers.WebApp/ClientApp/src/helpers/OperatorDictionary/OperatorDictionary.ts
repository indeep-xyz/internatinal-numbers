import { DictionarySourceMap } from './constants/dictionarieItems';
import type * as OperatorDictionaryType from './types/OperatorDictionaryType';

export class OperatorDictionary {

    static getOperatorNames()
        : string[]
    {
        return Object.keys(DictionarySourceMap);
    }

    name: string;
    label: string;
    isWord: boolean;
    language: string;
    shapes: OperatorDictionaryType.DictionaryShapeMap;
    outputMode: number;

    constructor(
        name: string,
        outputMode: number,
    ) {
        const ds: OperatorDictionaryType.DictionarySource = DictionarySourceMap[name];

        this.name = name;
        this.label = ds.label;
        this.isWord = ds.isWord;
        this.language = ds.language;
        this.shapes = ds.shapes;

        this.outputMode = outputMode;
    }


}
