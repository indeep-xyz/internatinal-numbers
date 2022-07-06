import * as React from 'react';

// システム共通
import { SolomonDemonShapeTable } from '../../../organisms/SolomonDemonShapeTable/views/SolomonDemonShapeTable';

// システム共通－辞書「ソロモンの悪魔」
import { SolomonDemonSymbolDictionary } from '../../../../helpers/Dictionary/SolomonDemonDictionary/SolomonDemonSymbolDictionary';

// 画面固有
import styles from './SolomonDemonListPage.module.scss';

type propsType = {
    solomonDemonDictionaries: SolomonDemonSymbolDictionary[]
};

/**
 * ソロモンの悪魔の一覧表示画面。
 * @param props
 */
export const SolomonDemonListPage: React.VFC<propsType> = ({
    solomonDemonDictionaries,
}
) => {
    return (
        <div>
            <h1>List</h1>

            <div className={styles.tableWrapper}>
                <SolomonDemonShapeTable
                    solomonDemonDictionaries={solomonDemonDictionaries}
                />
            </div>
        </div>
    );
}
