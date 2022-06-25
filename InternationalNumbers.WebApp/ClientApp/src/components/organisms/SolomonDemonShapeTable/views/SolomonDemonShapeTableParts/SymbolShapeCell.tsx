import * as React from 'react';

import styles from './SymbolShapeCell.module.scss';
import { SolomonDemonSymbolDictionary } from '../../../../../helpers/Dictionary/SolomonDemonDictionary/SolomonDemonSymbolDictionary';
import { ImageView } from '../../../../atoms/ImageView/views/ImageView';

type propsType = {
    /** ソロモンの悪魔の辞書データ */
    dictionary: SolomonDemonSymbolDictionary;
};

/**
 * ソロモンの悪魔を扱う一覧表のうち、シジルの形のデータを扱うセル。
 * @param props
 */
export const SymbolDemonShapeCell: React.VFC<propsType> = ({
    dictionary,
}) => {

    const symbolShapes = dictionary.symbolShapes;

    const shapeElements = symbolShapes.map((ss, ssIndex) => (
        <ImageView key={ssIndex}
            publicImageFile={ss}
            baseWidth={60}
            alt={dictionary.label}
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
