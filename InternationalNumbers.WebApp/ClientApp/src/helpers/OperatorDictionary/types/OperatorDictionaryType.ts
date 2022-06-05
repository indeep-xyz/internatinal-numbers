/**
 * 値の形。
 */
export type DictionaryShapeMap = {
    [key: string]: string[];
};

/**
 * 辞書素材値。
 */
export type DictionarySource = {
    "name": string;
    "label": string;
    "language": string;
    "isWord": boolean;
    "shapes": DictionaryShapeMap;
};

/**
 * 辞書素材値のマップ。
 */
export type DictionarySourceMap = {
    [key: string]: DictionarySource;
};
