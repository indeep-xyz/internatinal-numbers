// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// 記号形式の「演算子」

/**
 * 記号形式の「演算子」の値のうち「形」のマップ。
 */
export type OperatorSymbolDictionaryShapeMapType = Readonly<{
    [key: string]: Readonly<string[]>;
}>;

/**
 * 記号形式の「演算子」の辞書データ素材値。
 */
export type OperatorSymbolDictionarySourceType = Readonly<{
    "name": string;
    "label": string;
    "language": string;
    "shapeMap": OperatorSymbolDictionaryShapeMapType;
}>;

/**
 * 記号形式の「演算子」の辞書データ素材値のマップ。
 */
export type OperatorSymbolDictionarySourceMapType = Readonly<{
    [key: string]: OperatorSymbolDictionarySourceType;
}>;
