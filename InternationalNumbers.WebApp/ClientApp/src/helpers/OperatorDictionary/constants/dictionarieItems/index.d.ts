import type * as OperatorDictionaryType from '../../types/OperatorDictionaryType';

declare module 'index.js' {
    const value: OperatorDictionaryType.DictionarySourceMap;
    export = value;
}

declare module '*.json' {
    const value: OperatorDictionaryType.DictionarySource;
    export = value;
}
