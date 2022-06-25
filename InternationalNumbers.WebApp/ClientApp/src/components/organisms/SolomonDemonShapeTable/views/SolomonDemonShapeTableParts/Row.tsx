import * as React from 'react';

import styles from './Row.module.scss';
import { SolomonDemonSymbolDictionary } from '../../../../../helpers/Dictionary/SolomonDemonDictionary/SolomonDemonSymbolDictionary';
import { SymbolDemonShapeCell } from './SymbolShapeCell';

type propsType = {
    /** ソロモンの悪魔の辞書データ */
    dictionary: SolomonDemonSymbolDictionary;
};

/**
 * ソロモンの悪魔の情報を扱う一覧表のうち、数字のデータを扱う行。
 * @param props
 */
export const Row: React.VFC<propsType> = ({
    dictionary,
}) => {

    return (
        <tr>
            <td className={`${styles.cell} ${styles.cellOrderNumber}`}>{dictionary.orderNumber}</td>
            <td className={`${styles.cell} ${styles.cellLabel}`}>{dictionary.labelJa} ({dictionary.label})</td>
            <td className={`${styles.cell} ${styles.cellPosition}`}>{dictionary.positionJa} ({dictionary.position})</td>
            <td className={`${styles.cell} ${styles.cellNumberOfdemonLegions}`}>{dictionary.numberOfdemonLegions}</td>
            <SymbolDemonShapeCell
                dictionary={dictionary}
            />
        </tr>
    );
}
