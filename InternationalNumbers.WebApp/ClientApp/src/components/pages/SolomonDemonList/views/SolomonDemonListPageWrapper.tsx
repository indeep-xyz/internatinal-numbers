import * as React from 'react';

// システム共通
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
    const [isLive, setIsLive] = React.useState<boolean>(true);
    const [solomonDemonDictionaries, setNumberDictionaries] = React.useState<SolomonDemonSymbolDictionary[]>([]);

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // 初期化処理

    React.useEffect(
        () => {
            const main = async () => {
                setNumberDictionaries(await SolomonDemonSymbolDictionaryFactory.createAll());
            };

            if (isLive) {
                main();
            }

            return () => {
                setIsLive(false);
            }
        },
        [isLive]
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
