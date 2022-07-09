import * as React from 'react';

// システム共通
import { useEffectAsync } from '../../../../hooks/useEffectAsync';
import { LoadingIndicator } from '../../../atoms/LoadingIndicator/views/LoadingIndicator';

// システム共通－辞書「ソロモンの悪魔」
import { SolomonDemonSymbolDictionary } from '../../../../helpers/Dictionary/SolomonDemonDictionary/SolomonDemonSymbolDictionary';
import { SolomonDemonSymbolDictionaryFactory } from '../../../../helpers/Dictionary/SolomonDemonDictionary/SolomonDemonSymbolDictionaryFactory';

// 画面固有
import { SolomonDemonListPage } from './SolomonDemonListPage';

type propsType = {
};

/**
 * 数字の一覧表示画面。
 * @param props
 */
export const SolomonDemonListPageWrapper: React.VFC<propsType> = (
    props: propsType,
) => {
    const [solomonDemonDictionaries, setSolomonDemonDictionaries] = React.useState<SolomonDemonSymbolDictionary[]>([]);

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // 初期化処理

    // 辞書データの初期化
    useEffectAsync(
        async () => setSolomonDemonDictionaries(await SolomonDemonSymbolDictionaryFactory.createAll()),
        []
    );

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // main

    if (solomonDemonDictionaries.length < 1) {
        return <LoadingIndicator baseWidth={80} />;
    }

    return (
        <SolomonDemonListPage
            solomonDemonDictionaries={solomonDemonDictionaries}
        />
    );
}
