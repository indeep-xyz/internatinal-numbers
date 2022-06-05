/**
 * 「数」の情報のうち「目に見える表現」に注目したデータのインターフェイス。
 */
export interface NumberFaceInterface<TClass, TDictionarySourceType> {
    /**
     * 文字形。
     */
    shape: string;

    /**
     * 辞書データ。
     */
    dictionary: TDictionarySourceType;

    /**
     * 同値比較。
     * @param another 判定対象データ
     * @returns 同値ならtrue
     */
    equals(
        another: TClass
    ): boolean;

    /**
     * 数が表す値をネガポジ変換する。
     */
    invertNumberValue(): number;
};
