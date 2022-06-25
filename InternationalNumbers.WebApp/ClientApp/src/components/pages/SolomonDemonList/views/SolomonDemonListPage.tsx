import * as React from 'react';

import styles from './SolomonDemonListPage.module.scss';
import { SolomonDemonShapeTable } from '../../../organisms/SolomonDemonShapeTable/views/SolomonDemonShapeTable';

type propsType = {
};

/**
 * ソロモンの悪魔の一覧表示画面。
 * @param props
 */
export const SolomonDemonListPage: React.VFC<propsType> = (
    props: propsType,
) => {
    return (
        <div>
            <h1>List</h1>

            <div className={styles.tableWrapper}>
                <SolomonDemonShapeTable />
            </div>
        </div>
    );
}
