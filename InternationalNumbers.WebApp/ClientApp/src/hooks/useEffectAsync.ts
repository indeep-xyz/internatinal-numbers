import { useEffect } from 'react';

type functionArgumentType = {
    (): Promise<any>;
}

type finallyFunctionArgumentType = {
    (): void;
}

/**
 * useEffectで非同期処理を行う。
 * 
 * @param functionAsync 非同期処理
 * @param deps 非同期処理の実行開始のきっかけとなる依存値
 */
export const useEffectAsync = (
    functionAsync: functionArgumentType,
    deps: Array<any>,
    finallyFunctionAsync?: finallyFunctionArgumentType,
): void => {

    useEffect(
        () => {
            let isLive = true;

            (async () => {
                if (isLive) {
                    await functionAsync();
                }
            })();

            return () => {
                isLive = false;
                finallyFunctionAsync?.();
            };
        },

        // 必ずしも関数の状態に依存して実行したいとは限らないため、無視する
        // eslint-disable-next-line react-hooks/exhaustive-deps
        deps
    );
}
