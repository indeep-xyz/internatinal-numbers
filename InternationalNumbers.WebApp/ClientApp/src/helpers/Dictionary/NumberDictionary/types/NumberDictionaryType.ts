// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// 記号形式の「数」

/**
 * 記号形式の「数」の値のうち「形」のマップ。
 */
export type SymbolDictionaryShapeMap = {
    [key: string]: string[];
};

/**
 * 記号形式の「数」の辞書データ素材値。
 */
export type SymbolDictionarySource = {
    "name": string;
    "label": string;
    "language": string;
    "shapeMap": SymbolDictionaryShapeMap;
};

/**
 * 記号形式の「数」の辞書データ素材値のマップ。
 */
export type SymbolDictionarySourceMap = {
    [key: string]: SymbolDictionarySource;
};
