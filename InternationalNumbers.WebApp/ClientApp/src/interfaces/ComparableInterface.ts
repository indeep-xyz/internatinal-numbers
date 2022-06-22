/**
 * 比較可能なデータクラスのインターフェイス。
 */
export interface ComparableInterface<TClass> {
    /**
     * 同値比較。
     * @param another 判定対象データ
     * @returns 同値ならtrue
     */
    equals(
        another: TClass
    ): boolean;
};
