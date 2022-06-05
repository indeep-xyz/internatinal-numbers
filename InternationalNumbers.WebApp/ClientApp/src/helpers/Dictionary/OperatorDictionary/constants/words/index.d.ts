import type * as OperatorDictionaryType from '../../types/OperatorDictionaryType';

declare module 'index.js' {
    const value: OperatorDictionaryType.SymbolDictionarySourceMap;
    export = value;
}

declare module '*.json' {
    const value: OperatorDictionaryType.SymbolDictionarySource;
    export = value;
}
