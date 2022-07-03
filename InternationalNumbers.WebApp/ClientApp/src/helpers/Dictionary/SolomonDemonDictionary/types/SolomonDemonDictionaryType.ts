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
 * ソロモンの悪魔を表す辞書データ素材値の型。
 */
export type SolomonDemonSymbolDictionarySourceType = Readonly<{
    "name": string;
    "label": string;
    "labelJa": string;
    "position": SolomonDemonPositionType[];
    "positionJa": SolomonDemonPositionJaType[];
    "orderNumber": number;
    "numberOfdemonLegions": string;
    "symbolShapes": PublicImageFile[];
}>;

/**
 * ソロモンの悪魔の辞書データ素材値のマップ。
 */
export type SolomonDemonSymbolDictionarySourceMapType = Readonly<{
    [key: string]: SolomonDemonSymbolDictionarySourceType;
}>;
