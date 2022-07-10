import * as React from 'react';

// システム共通－辞書「ソロモンの悪魔」
import { SolomonDemonSymbolDictionary } from '../../../../helpers/Dictionary/SolomonDemonDictionary/SolomonDemonSymbolDictionary';

// 部品固有
import { HeaderRow } from './SolomonDemonShapeTableParts/HeaderRow';
import { Row } from './SolomonDemonShapeTableParts/Row';
import styles from './SolomonDemonShapeTable.module.scss';

type propsType = {
    /** 表に追加するHTMLクラス名 */
    className?: string;

    /** 表に表示する情報 */
    solomonDemonDictionaries: SolomonDemonSymbolDictionary[];
};

/**
 * ソロモンの悪魔の情報を扱う一覧表。
 * @param props
 */
export const SolomonDemonShapeTable: React.VFC<propsType> = ({
    className,
    solomonDemonDictionaries,
}) => {

    return (
        <table className={`${styles.table} ${className}`}>
            <HeaderRow />
            <tbody>
                {solomonDemonDictionaries.map((dictionary, index) => (
                    <Row
                        key={index}
                        dictionary={dictionary}
                    />
                ))}
            </tbody>
        </table>
    );
}
