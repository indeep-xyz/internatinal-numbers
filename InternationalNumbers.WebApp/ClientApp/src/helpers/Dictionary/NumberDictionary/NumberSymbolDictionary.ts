// 辞書系のヘルパー共通
import { SymbolDictionaryPresentationInterface } from '../interfaces/SymbolDictionaryPresentationInterface';

// 辞書「数」系のヘルパー共通
import { NumberSymbolDictionaryDictionaryType, NumberSymbolDictionaryShapeType, NumberSymbolDictionarySourceType } from './types/NumberDictionaryType';

/**
 * 記号形式の「数」の情報を扱うクラス。
 */
export class NumberSymbolDictionary
    implements SymbolDictionaryPresentationInterface {

    readonly name: string;
    readonly label: string;
    readonly language: string;
    readonly description: NumberSymbolDictionaryDictionaryType;
    readonly shapes: NumberSymbolDictionaryShapeType[];
    readonly outputMode: number;

    constructor(
        ds: NumberSymbolDictionarySourceType,
        outputMode: number
    ) {
        this.name = ds.key;
        this.label = ds.description.categoryNameMap.ja;
        this.language = ds.description.categoryNameMap.en;
        this.description = ds.description;
        this.shapes = ds.shapes;

        this.outputMode = outputMode;
    }

    /**
     * 値に合致する「形」の情報を抽出する。
     * 
     * @param value 数の値
     * @returns
     */
    extractShapes(
        value: number,
    ): NumberSymbolDictionaryShapeType[] {
        return this
            .shapes
            .filter(s => s.value === String(Math.abs(value)));
    }
}
