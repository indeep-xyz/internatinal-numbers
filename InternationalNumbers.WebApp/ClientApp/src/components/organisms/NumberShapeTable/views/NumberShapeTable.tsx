import * as React from 'react';

import styles from './NumberShapeTable.module.scss';
import { NumberQuizMode } from '../../../../helpers/Dictionary/NumberDictionary/constants/generals';
import { NumberSymbolDictionaryFactory } from '../../../../helpers/Dictionary/NumberDictionary/NumberSymbolDictionaryFactory';
import { HeaderRow } from './NumberShapeTableParts/HeaderRow';
import { Row } from './NumberShapeTableParts/Row';

type propsType = {
    /** 表に追加するHTMLクラス名 */
    className?: string;
};

/** 表で扱う数字の形の全データ */
const dictionaries = NumberSymbolDictionaryFactory.createAll(NumberQuizMode.SingleChoiceShape);

/** 表示する数の最小値 */
const min = 0;

/** 表示する数の最大値 */
const max = 9;

/**
 * 数字の形を扱う一覧表。
 * @param props
 */
export const NumberShapeTable: React.VFC<propsType> = ({
    className,
}) => {

    return (
        <table className={`${styles.table} ${className}`}>
            <HeaderRow min={min} max={max} />
            <tbody>
                {dictionaries.map((dictionary, index) => (
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
