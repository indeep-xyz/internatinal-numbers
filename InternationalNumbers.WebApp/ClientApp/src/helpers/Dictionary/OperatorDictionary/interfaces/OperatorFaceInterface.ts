/**
 * 「演算子」の情報のうち「目に見える表現」に注目したデータのインターフェイス。
 */
export interface OperatorFaceInterface<TClass, TDictionarySourceType> {
    /**
     * 文字形。
     */
    shape: string;

    /**
     * 辞書データ。
     */
    dictionary: TDictionarySourceType;
};
