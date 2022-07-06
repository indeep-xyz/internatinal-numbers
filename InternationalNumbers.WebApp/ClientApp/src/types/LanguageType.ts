/**
 * 言語コードを表す型。
 * システム内で扱うもののみを登録する。
 */
export type LanguageCodeType = "en" | "ja";

/**
 * 言語コードをキーとした型。
 */
export type LanguageCodeMapType<TType> = Record<LanguageCodeType, TType>;
