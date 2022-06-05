import type * as NumberDictionaryType from '../../types/NumberDictionaryType';

declare module 'index.js' {
    const value: NumberDictionaryType.DictionarySourceMap;
    export = value;
}

declare module '*.json' {
    const value: NumberDictionaryType.DictionarySource;
    export = value;
}
