// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// 記号形式の「数」

/**
 * 記号形式の「数」の値のうち「形」のマップ。
 */
export type NumberSymbolDictionaryShapeType = Readonly<{
    value: string;
    string: string;
    unicodes: number[];
}>;

/**
 * 記号形式の「数」の値のうち「説明」のマップ。
 */
export type NumberSymbolDictionaryDictionaryType = Readonly<{
    categoryNameMap: Readonly<{
        [key: string]: Readonly<string>;
    }>;
}>;

/**
 * 記号形式の「数」の辞書データ素材値。
 */
export type NumberSymbolDictionarySourceType = Readonly<{
    key: string;
    description: NumberSymbolDictionaryDictionaryType;
    shapes: NumberSymbolDictionaryShapeType[];
}>;

