import { PublicImageFile } from "../../../../types/PublicFileType";

/**
 * ソロモンの悪魔の立場。（英語）
 * ※順番はアルファベット順
 */
export type SolomonDemonPositionType = Readonly<"count" | "duke" | "king" | "knight" | "marquis" | "president" | "prince">;

/**
 * ソロモンの悪魔の立場。（日本語）
 * ※順番は立場（英語）と合わせる
 */
export type SolomonDemonPositionJaType = Readonly<"伯爵" | "公爵" | "王" | "騎士" | "侯爵" | "総裁" | "君主">;

/**
 * ソロモンの悪魔のアイコン（シジル）の型。
 */
export type SolomonDemonSymbolDictionaryShapeType = Readonly<{
    publicFileName: string;
    sourceFilePath: string;
}>;

/**
 * ソロモンの悪魔の「説明」のマップ。
 */
export type SolomonDemonSymbolDictionaryDictionaryType = Readonly<{
    nameMap: Readonly<{
        en: Readonly<string>;
        ja: Readonly<string>;
    }>;
    positionMap: Readonly<{
        en: SolomonDemonPositionType[];
        ja: SolomonDemonPositionJaType[];
    }>;

    orderNo: number;
}>;

/**
 * 記号形式の「数」の辞書データ素材値。
 */
export type SolomonDemonSymbolDictionarySourceType = Readonly<{
    key: string;
    description: SolomonDemonSymbolDictionaryDictionaryType;
    shapes: SolomonDemonSymbolDictionaryShapeType[];
}>;

/**
 * ソロモンの悪魔の辞書データ素材値のマップ。
 */
export type SolomonDemonSymbolDictionarySourceMapType = Readonly<{
    [key: string]: SolomonDemonSymbolDictionarySourceType;
}>;
