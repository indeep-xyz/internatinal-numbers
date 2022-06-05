import type * as OperatorDictionaryType from '../../types/OperatorDictionaryType';

// symbol
import { arithmetic } from "./arithmetic";
import { computer } from "./computer";
import { deutsch } from "./deutsch";

// symbol map
export const DictionarySourceMap: OperatorDictionaryType.SymbolDictionarySourceMap = {
    arithmetic,
    computer,
    deutsch,
};