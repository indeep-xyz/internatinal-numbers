import * as React from 'react';

// 画面固有
import { SymbolPresenter } from '../../../models/Quiz/SymbolPresenter';

// 部品固有
import styles from './SymbolView.module.scss';

/**
 * 文字装飾用のHTMLクラス属性値を作成する。
 */
const createDecorativeClassName = (
    symbolFace: SymbolPresenter
): string => {
    const classNameArray: string[] = [];

    classNameArray.push(styles[symbolFace.fontStyle]);
    classNameArray.push(styles[symbolFace.fontWeight]);

    return classNameArray.join(" ");
}

type propsType = {
    /** 形の出力表現 */
    readonly symbolPresenter: SymbolPresenter;
};

/**
 * 形の表示を扱うコンポーネント。
 */
export const SymbolView: React.VFC<propsType> = ({
    symbolPresenter,
}) => {
    const [className] = React.useState(createDecorativeClassName(symbolPresenter));

    return (
        <span className={className}>
            {symbolPresenter.shape}
        </span>
    );
}
