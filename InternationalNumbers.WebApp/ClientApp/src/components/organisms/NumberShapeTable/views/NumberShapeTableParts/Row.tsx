﻿import * as React from 'react';

import styles from './Row.module.scss';
import { NumberSymbolDictionary } from '../../../../../helpers/Dictionary/NumberDictionary/NumberSymbolDictionary';
import { ArrayFactory } from '../../../../../helpers/Array/ArrayFactory';
import { ShapeCell } from './ShapeCell';

type propsType = {
    /** 数字の辞書データ */
    dictionary: NumberSymbolDictionary;

    /** 表示する数の最小値 */
    min: number;

    /** 表示する数の最大値 */
    max: number;
};

/**
 * 数字の形を扱う一覧表のうち、数字のデータを扱う行。
 * @param props
 */
export const Row: React.VFC<propsType> = ({
    dictionary,
    min,
    max,
}) => {

    const numberValues = ArrayFactory.createRange(min, max);

    return (
        <tr>
            <td className={`${styles.cell} ${styles.cellLabel}`}>{dictionary.label}</td>
            <td className={`${styles.cell} ${styles.cellLanguage}`}>{dictionary.language}</td>
            {numberValues.map((n, index) => (
                <ShapeCell
                    key={index}
                    dictionary={dictionary}
                    numberValue={n}
                />
            ))}
        </tr>
    );
}
