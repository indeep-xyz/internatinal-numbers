import * as React from 'react';

// システム共通
import { useEffectAsync } from '../../../../hooks/useEffectAsync';

// 画面固有
import { FesPage } from './FesPage';
import { FesConnection } from '../models/FesConnection';
import { NumberBeatType } from '../types/FesType';

type propsType = {
};

/**
 * フェス画面。
 * @param props
 */
export const FesPageWrapper: React.VFC<propsType> = (
    props: propsType,
) => {
    const [numberShape, setNumberShape] = React.useState<NumberBeatType>();
    const [fesConnection] = React.useState<FesConnection>(new FesConnection(setNumberShape));

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // 初期化処理

    // 通信処理の初期化
    useEffectAsync(
        async () => {
            fesConnection.setup();
        },
        [],
        () => {
            fesConnection.stop();
        }
    );

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // main

    return (
        <FesPage
            sendBeatInterval={fesConnection.updateBeat}
            numberShape={numberShape}
        />
    );
}
