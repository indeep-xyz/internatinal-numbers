import * as React from 'react';

// システム共通－辞書「数」
import { NumberSymbolDictionary } from '../../../../helpers/Dictionary/NumberDictionary/NumberSymbolDictionary';

// 部品固有
import { HeaderRow } from './NumberShapeTableParts/HeaderRow';
import { Row } from './NumberShapeTableParts/Row';
import styles from './NumberShapeTable.module.scss';

type propsType = {
    // 表示する数の辞書データ
    numberDictionaries: NumberSymbolDictionary[];

    /** 表に追加するHTMLクラス名 */
    className?: string;
};

/** 表示する数の最小値 */
const min = 0;

/** 表示する数の最大値 */
const max = 9;

/**
 * 数字の形を扱う一覧表。
 * @param props
 */
export const NumberShapeTable: React.VFC<propsType> = ({
    numberDictionaries,
    className,
}) => {

    return (
        <table className={`${styles.table} ${className}`}>
            <HeaderRow min={min} max={max} />
            <tbody>
                {numberDictionaries.map((dictionary, index) => (
                    <Row
                        key={index}
                        dictionary={dictionary}
                        min={min}
                        max={max}
                    />
                ))}
            </tbody>
        </table>
    );
}
