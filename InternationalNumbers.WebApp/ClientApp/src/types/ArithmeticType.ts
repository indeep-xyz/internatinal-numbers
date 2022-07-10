// 辞書系のヘルパー共通
import { NumberSymbolFace } from "../helpers/Dictionary/NumberDictionary/NumberSymbolFace";
import { OperatorSymbolFace } from "../helpers/Dictionary/OperatorDictionary/OperatorSymbolFace";

/**
 * 四則演算を表す型。
 */
export type FourArithmeticOperatorType = "+" | "-" | "*" | "/";

/**
 * 数字と四則演算の形を表す型。
 */
export type FourArithmeticExpressionSymbolFaceType = NumberSymbolFace | OperatorSymbolFace;
