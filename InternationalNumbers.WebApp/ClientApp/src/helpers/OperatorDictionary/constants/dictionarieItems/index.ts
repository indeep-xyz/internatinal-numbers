import type * as OperatorDictionaryType from '../../types/OperatorDictionaryType';

// not-word
import { arithmetic } from "./arithmetic";
import { computer } from "./computer";
import { deutsch } from "./deutsch";

// word
import { japanese } from "./japanese";

// map
export const DictionarySourceMap: OperatorDictionaryType.DictionarySourceMap = {
    // not-word
    arithmetic,
    computer,
    deutsch,

    // word
    japanese,
};