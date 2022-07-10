import * as React from 'react';

// PJ共通
import { PublicImageFile } from '../../../../types/PublicFileType';

// 部品固有
import styles from './ImageView.module.scss';

type propsType = {
    /** 表示する画像ファイルの参照情報 */
    publicImageFile: PublicImageFile;

    /** imgタグのalt属性値 */
    alt?: string;

    /** imgタグのwidth属性値 */
    baseWidth?: number,
};

/**
 * 画像の表示を扱う部品。
 * @param props
 */
export const ImageView: React.VFC<propsType> = ({
    publicImageFile,
    alt = "",
    baseWidth,
}) => {
    /**
     * 横幅リストから、画像サイズ的に不要なものを除去したものを取得する。
     * srcset属性値の省コスト化が目的。
     */
    const getReducedWidthList = (
    ): number[] => {
        if (baseWidth === undefined) {
            // 基準サイズが不明な場合、すべてを取得する
            return publicImageFile.widthList;
        }

        // 横幅指定を超えるものは１つまでにする
        // 横幅指定を超えるものがなければ、最大のものを利用する（画質対策）
        const maxWidth: number
            = publicImageFile.widthList.find(w => w >= baseWidth) ?? publicImageFile.widthList.at(-1)!;

        // 不要な横幅リスト要素を削除
        return publicImageFile.widthList.filter(w => w <= maxWidth);
    }

    /**
     * srcset属性値のうち、１つの値を作成する。
     * @param urlSource URL部の素材
     * @param width 画像の配置場所を指定するURL、および画像表示条件の指定
     */
    const createSrcSetOne = (
        urlSource: string,
        width: number
    ): string => {
        const finalUrl = urlSource.replace("[[width]]", String(width));
        return `${finalUrl} ${width}w`;
    }

    /**
     * srcset属性値の作成。
     */
    const createSrcSet = (
    ): string => {
        if (publicImageFile.widthList.length < 1) {
            return publicImageFile.fileUrl;
        }

        return getReducedWidthList()
            .map(w => createSrcSetOne(publicImageFile.fileUrl, w))
            .join(",")
    }

    return (
        <img
            alt={alt}
            srcSet={createSrcSet()}
            width={baseWidth}
        />
    );
}
