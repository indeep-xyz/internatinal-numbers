import * as React from 'react';

import styles from './HeaderRow.module.scss';
import { ArrayFactory } from '../../../../../helpers/Array/ArrayFactory';

type propsType = {
    /** 表示する数の最小値 */
    min: number;

    /** 表示する数の最大値 */
    max: number;
};

/**
 * 数字の形を扱う一覧表のうち、ヘッダ行。
 * @param props
 */
export const HeaderRow: React.VFC<propsType> = ({
    min,
    max,
}) => {

    const numberValues = ArrayFactory.createRange(min, max);

    return (
        <thead>
            <tr>
                <th className={`${styles.cell} ${styles.cellLabel} ${styles.headerCell}`}>数字名</th>
                <th className={`${styles.cell} ${styles.cellLanguage} ${styles.headerCell}`}>言語圏</th>
                {numberValues.map(
                    (number, index) => (
                        <th
                            key={index}
                            className={`${styles.cell} ${styles.cellNumber} ${styles.headerCell}`}
                        >
                            {number}
                        </th>
                    ))}
            </tr>
        </thead>
    );
}
