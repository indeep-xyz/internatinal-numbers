import * as React from 'react';

// システム共通－辞書「数」
import { NumberSymbolDictionary } from '../../../../helpers/Dictionary/NumberDictionary/NumberSymbolDictionary';
import { NumberSymbolDictionaryFactory } from '../../../../helpers/Dictionary/NumberDictionary/NumberSymbolDictionaryFactory';
import { NumberQuizMode } from '../../../../helpers/Dictionary/NumberDictionary/constants/generals';

// 画面固有
import { NumberListPage } from './NumberListPage';

type propsType = {
};

/**
 * 数字の一覧表示画面。
 * @param props
 */
export const NumberListPageWrapper: React.VFC<propsType> = (
    props: propsType,
) => {
    const [isLive, setIsLive] = React.useState<boolean>(true);
    const [numberDictionaries, setNumberDictionaries] = React.useState<NumberSymbolDictionary[]>([]);

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // 初期化処理

    React.useEffect(
        () => {
            const main = async () => {
                setNumberDictionaries(await NumberSymbolDictionaryFactory.createAll(NumberQuizMode.SingleChoiceShape));
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

    if (numberDictionaries.length < 1) {
        return <React.Fragment />;
    }

    return (
        <NumberListPage
            numberDictionaries={numberDictionaries}
        />
    );
}
