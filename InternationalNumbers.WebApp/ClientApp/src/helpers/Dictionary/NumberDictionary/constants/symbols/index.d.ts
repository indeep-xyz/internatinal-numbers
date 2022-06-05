import type * as NumberDictionaryType from '../../types/NumberDictionaryType';

declare module 'index.js' {
    const value: NumberDictionaryType.SymbolDictionarySourceMap;
    export = value;
}

declare module '*.json' {
    const value: NumberDictionaryType.SymbolDictionarySource;
    export = value;
}
