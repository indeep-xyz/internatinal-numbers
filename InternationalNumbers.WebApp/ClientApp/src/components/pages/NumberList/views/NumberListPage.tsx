import * as React from 'react';

import styles from './NumberListPage.module.scss';
import { NumberShapeTable } from '../../../organisms/NumberShapeTable/views/NumberShapeTable';

type propsType = {
};

/**
 * 数字の一覧表示画面。
 * @param props
 */
export const NumberListPage: React.VFC<propsType> = (
    props: propsType,
) => {
    return (
        <div>
            <h1>List</h1>

            <div className={styles.tableWrapper}>
                <NumberShapeTable />
            </div>
        </div>
    );
}
