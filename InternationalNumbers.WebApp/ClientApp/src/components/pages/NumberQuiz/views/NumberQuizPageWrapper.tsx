import * as React from 'react';

// システム共通
import { LoadingIndicator } from '../../../atoms/LoadingIndicator/views/LoadingIndicator';

// システム共通－辞書「数」
import { NumberSymbolDictionary } from '../../../../helpers/Dictionary/NumberDictionary/NumberSymbolDictionary';
import { NumberSymbolDictionaryFactory } from '../../../../helpers/Dictionary/NumberDictionary/NumberSymbolDictionaryFactory';
import { NumberQuizMode } from '../../../../helpers/Dictionary/NumberDictionary/constants/generals';

// 画面固有
import { NumberQuizPage } from './NumberQuizPage';

type propsType = {
};

/**
 * 数字のクイズ画面。
 */
export const NumberQuizPageWrapper: React.VFC<propsType> = ({
}) => {
    const [isLive, setIsLive] = React.useState<boolean>(true);
    const [numberDictionaries, setNumberDictionaries] = React.useState<NumberSymbolDictionary[]>([]);

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // 初期化処理

    React.useEffect(
        () => {
            const main = async () => {
                setNumberDictionaries(await NumberSymbolDictionaryFactory.createAll(NumberQuizMode.SingleChoiceShape));
            }

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
        return <LoadingIndicator baseWidth={80} />;
    }

    return (
        <NumberQuizPage
            numberDictionaries={numberDictionaries}
        />
    );
}
