import * as React from 'react';

import styles from './SymbolShapeCell.module.scss';
import { SolomonDemonSymbolDictionary } from '../../../../../helpers/Dictionary/SolomonDemonDictionary/SolomonDemonSymbolDictionary';
import { ImageView } from '../../../../atoms/ImageView/views/ImageView';
import { SolomonDemonSymbolFace } from '../../../../../helpers/Dictionary/SolomonDemonDictionary/SolomonDemonSymbolFace';

type propsType = {
    /** ソロモンの悪魔の辞書データ */
    symbolFaces: SolomonDemonSymbolFace[];
};

/**
 * ソロモンの悪魔を扱う一覧表のうち、シジルの形のデータを扱うセル。
 * @param props
 */
export const SymbolDemonShapeCell: React.VFC<propsType> = ({
    symbolFaces,
}) => {
    const shapeElements = symbolFaces.map((ss, ssIndex) => (
        <ImageView key={ssIndex}
            publicImageFile={ss.symbolShape}
            baseWidth={60}
            alt={ss.dictionary.name.ja}
        />
    ));

    const createClassName = () => {
        const classNameArray = [styles.cell, styles.cellSymbolShape];

        return classNameArray.join(" ");
    }

    return (
        <td className={createClassName()}>
            {shapeElements}
        </td>
    );
}
