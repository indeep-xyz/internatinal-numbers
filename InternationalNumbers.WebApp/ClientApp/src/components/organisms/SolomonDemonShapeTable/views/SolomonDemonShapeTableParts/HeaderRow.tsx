import * as React from 'react';

import styles from './HeaderRow.module.scss';

type propsType = {
};

/**
 * ソロモンの悪魔の情報を扱う一覧表のうち、ヘッダ行。
 * @param props
 */
export const HeaderRow: React.VFC<propsType> = ({
}) => {
    return (
        <thead>
            <tr>
                <th className={`${styles.cell} ${styles.cellOrderNumber} ${styles.headerCell}`}>順序</th>
                <th className={`${styles.cell} ${styles.cellLabel} ${styles.headerCell}`}>数字名</th>
                <th className={`${styles.cell} ${styles.cellPosition} ${styles.headerCell}`}>役職</th>
                <th className={`${styles.cell} ${styles.cellSymbolShape} ${styles.headerCell}`}>シジル</th>
            </tr>
        </thead>
    );
}
