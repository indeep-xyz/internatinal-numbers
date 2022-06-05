// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// 記号形式の「演算子」

/**
 * 記号形式の「演算子」の値のうち「形」のマップ。
 */
export type SymbolDictionaryShapeMap = {
    [key: string]: string[];
};

/**
 * 記号形式の「演算子」の辞書データ素材値。
 */
export type SymbolDictionarySource = {
    "name": string;
    "label": string;
    "language": string;
    "shapeMap": SymbolDictionaryShapeMap;
};

/**
 * 記号形式の「演算子」の辞書データ素材値のマップ。
 */
export type SymbolDictionarySourceMap = {
    [key: string]: SymbolDictionarySource;
};
