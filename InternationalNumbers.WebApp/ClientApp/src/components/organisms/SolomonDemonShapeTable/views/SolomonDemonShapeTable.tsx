import * as React from 'react';

import styles from './SolomonDemonShapeTable.module.scss';
import { SolomonDemonSymbolDictionaryFactory } from '../../../../helpers/Dictionary/SolomonDemonDictionary/SolomonDemonSymbolDictionaryFactory';
import { HeaderRow } from './SolomonDemonShapeTableParts/HeaderRow';
import { Row } from './SolomonDemonShapeTableParts/Row';

type propsType = {
    /** 表に追加するHTMLクラス名 */
    className?: string;
};

/** 表で扱うソロモンの悪魔の全データ */
const dictionaries = SolomonDemonSymbolDictionaryFactory.createAll();

/**
 * ソロモンの悪魔の情報を扱う一覧表。
 * @param props
 */
export const SolomonDemonShapeTable: React.VFC<propsType> = ({
    className,
}) => {

    return (
        <table className={`${styles.table} ${className}`}>
            <HeaderRow />
            <tbody>
                {dictionaries.map((dictionary, index) => (
                    <Row
                        key={index}
                        dictionary={dictionary}
                    />
                ))}
            </tbody>
        </table>
    );
}
