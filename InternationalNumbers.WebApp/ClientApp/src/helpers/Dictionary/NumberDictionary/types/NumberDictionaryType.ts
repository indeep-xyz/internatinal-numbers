// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// 記号形式の「数」

/**
 * 記号形式の「数」の値のうち「形」のマップ。
 */
export type SymbolDictionaryShapeSource = Readonly<{
    value: string;
    string: string;
    unicodes: number[];
}>;

/**
 * 記号形式の「数」の値のうち「説明」のマップ。
 */
export type SymbolDictionaryDictionarySource = Readonly<{
    categoryNameMap: Readonly<{
        [key: string]: Readonly<string>;
    }>;
}>;

/**
 * 記号形式の「数」の辞書データ素材値。
 */
export type SymbolDictionarySource = Readonly<{
    key: string;
    description: SymbolDictionaryDictionarySource;
    shapes: SymbolDictionaryShapeSource[];
}>;

/**
 * 記号形式の「数」の辞書データ素材値のマップ。
 */
export type SymbolDictionarySourceMap = Readonly<{
    [key: string]: SymbolDictionarySource;
}>;
