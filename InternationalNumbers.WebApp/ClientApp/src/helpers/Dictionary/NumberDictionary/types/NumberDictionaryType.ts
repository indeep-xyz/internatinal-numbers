// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// 記号形式の「数」

/**
 * 記号形式の「数」の値のうち「形」のマップ。
 */
export type SymbolDictionaryShapeMap = Readonly<{
    [key: string]: Readonly<string[]>;
}>;

/**
 * 記号形式の「数」の辞書データ素材値。
 */
export type SymbolDictionarySource = Readonly<{
    "name": string;
    "label": string;
    "language": string;
    "shapeMap": SymbolDictionaryShapeMap;
}>;

/**
 * 記号形式の「数」の辞書データ素材値のマップ。
 */
export type SymbolDictionarySourceMap = Readonly<{
    [key: string]: SymbolDictionarySource;
}>;
