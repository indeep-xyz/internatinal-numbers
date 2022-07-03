import * as React from 'react';

// 部品固有
import styles from './LoadingIndicator.module.scss';

type propsType = {
    /** imgタグのalt属性値 */
    alt?: string;

    /** imgタグのwidth属性値 */
    baseWidth?: number,
};

/**
 * ローディング中に表示するアイコンを扱う部品。
 * @param props
 */
export const LoadingIndicator: React.VFC<propsType> = ({
    alt = "",
    baseWidth,
}) => {
    return (
        <img
            alt={alt}
            srcSet="/assets/Loading/loading_general.gif"
            width={baseWidth}
        />
    );
}
