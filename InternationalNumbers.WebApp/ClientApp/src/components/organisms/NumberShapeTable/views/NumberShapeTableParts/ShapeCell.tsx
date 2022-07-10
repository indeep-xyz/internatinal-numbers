import * as React from 'react';

// システム共通－辞書「数」
import { NumberSymbolDictionary } from '../../../../../helpers/Dictionary/NumberDictionary/NumberSymbolDictionary';

// 部品固有
import styles from './ShapeCell.module.scss';

type propsType = {
    /** 数字の辞書データ */
    dictionary: NumberSymbolDictionary;

    /** 数の値 */
    numberValue: number;
};

/**
 * 数字の形を扱う一覧表のうち、数値の形のデータを扱うセル。
 * @param props
 */
export const ShapeCell: React.VFC<propsType> = ({
    dictionary,
    numberValue,
}) => {
    const dictionaryShapes = dictionary.extractShapes(numberValue);

    const shapeElements = dictionaryShapes.map((ds, dsIndex) => <React.Fragment key={dsIndex}>{ds.string}<br /></React.Fragment>);

    const createClassName = () => {
        const classNameArray = [styles.cell, styles.cellNumber];

        if (shapeElements.length < 1) {
            classNameArray.push(styles.missingCell);
        }

        return classNameArray.join(" ");
    }

    return (
        <td className={createClassName()}>
            {shapeElements}
        </td>
    );
}
