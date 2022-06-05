import type * as OperatorDictionaryType from '../../types/OperatorDictionaryType';

export const japanese: OperatorDictionaryType.DictionarySource = {
  "name": "japanese",
  "label": "日本",
  "language": "Japanese",
  "isWord": true,
  "shapes": {
    "+": ["たす", "足す"],
    "-": ["ひく", "引く"],
    "*": ["かける", "掛ける"],
    "/": ["わる", "割る"],
  },
};