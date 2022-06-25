/**
 * 画像ファイルのライセンス。
 */
export type FileLicense = Readonly<"publicDomain">;

/**
 * 外部からアクセス可能な画像ファイルを扱う型。
 */
export type PublicImageFile = Readonly<{
    /** 
     * ファイル利用時のURL
     * widthList中の値を ${width} にて参照を指定可能
     */
    fileUrl: string;

    /** ファイル取得元のURL */
    fileSourceUrl: string;

    /** 取得したファイルのライセンス */
    fileSourceLicense: FileLicense;

    /**
     * 横幅のリスト。URL埋め込み用
     * 値の設定により画像の横幅の指定が可能になる
     */
    widthList: number[];
}>;
