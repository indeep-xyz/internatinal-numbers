import * as React from 'react';

// システム共通－辞書「数」
import { NumberShapeTable } from '../../../organisms/NumberShapeTable/views/NumberShapeTable';
import { NumberSymbolDictionary } from '../../../../helpers/Dictionary/NumberDictionary/NumberSymbolDictionary';

// 画面固有
import styles from './NumberListPage.module.scss';

type propsType = {
    numberDictionaries: NumberSymbolDictionary[];
};

/**
 * 数字の一覧表示画面。
 * @param props
 */
export const NumberListPage: React.VFC<propsType> = ({
    numberDictionaries,
}) => {
    return (
        <div>
            <h1>List</h1>

            <div className={styles.tableWrapper}>
                <NumberShapeTable
                    numberDictionaries={numberDictionaries}
                />
            </div>
        </div>
    );
}
