import * as React from 'react';

import styles from './Row.module.scss';
import { SolomonDemonSymbolDictionary } from '../../../../../helpers/Dictionary/SolomonDemonDictionary/SolomonDemonSymbolDictionary';
import { SymbolDemonShapeCell } from './SymbolShapeCell';
import { SolomonDemonSymbolFace } from '../../../../../helpers/Dictionary/SolomonDemonDictionary/SolomonDemonSymbolFace';

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
            <td className={`${styles.cell} ${styles.cellLabel}`}>{dictionary.name.ja} ({dictionary.name.en})</td>
            <td className={`${styles.cell} ${styles.cellPosition}`}>{
                dictionary.position.ja.map((posJa, index) => {
                    const posEn = dictionary.position.en[index];
                    return <React.Fragment>{`${posJa} (${posEn})`}<br /></React.Fragment>;
                })
            }
            </td>
            <SymbolDemonShapeCell
                symbolFaces={dictionary.shapes.map(shape => new SolomonDemonSymbolFace(dictionary, shape))}
            />
        </tr>
    );
}
