/**
 * 辞書情報の説明系の値に注目したデータのインターフェイス。
 */
export interface SymbolDictionaryPresentationInterface {
    /** 辞書データの表示用ラベル */
    readonly label: string;

    /** 辞書データの所属する言語圏 */
    readonly language: string;
};
