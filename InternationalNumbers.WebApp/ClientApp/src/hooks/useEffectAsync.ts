import { useEffect } from 'react';

type functionArgumentType = {
    (): Promise<any>;
}

/**
 * useEffectで非同期処理を行う。
 */
export const useEffectAsync = (
    functionAsync: functionArgumentType,
    deps?: Array<any>,
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
            };
        },
        deps
    );
}
