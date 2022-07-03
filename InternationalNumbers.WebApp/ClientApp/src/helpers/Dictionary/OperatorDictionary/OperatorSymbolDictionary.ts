// 辞書系のヘルパー共通
import { SymbolDictionaryPresentationInterface } from '../interfaces/SymbolDictionaryPresentationInterface';

// 辞書「演算子」系のヘルパー共通
import { DictionarySourceMap } from './constants/symbols/index';
import { OperatorSymbolDictionaryShapeMapType, OperatorSymbolDictionarySourceType } from './types/OperatorDictionaryType';


/**
 * 記号形式の「演算子」の情報を扱うクラス。
 */
export class OperatorSymbolDictionary
    implements SymbolDictionaryPresentationInterface {

    static getDictionaryNames()
        : string[]
    {
        return Object.keys(DictionarySourceMap);
    }

    readonly name: string;
    readonly label: string;
    readonly language: string;
    readonly shapeMap: OperatorSymbolDictionaryShapeMapType;
    readonly outputMode: number;

    constructor(
        name: string,
        outputMode: number,
    ) {
        const ds: OperatorSymbolDictionarySourceType = DictionarySourceMap[name];

        this.name = name;
        this.label = ds.label;
        this.language = ds.language;
        this.shapeMap = ds.shapeMap;

        this.outputMode = outputMode;
    }


}
