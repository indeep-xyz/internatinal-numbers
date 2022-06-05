/**
 * 四則演算を表す型。
 */
export type FourArithmeticOperator = "+" | "-" | "*" | "/";

/**
 * 数字（正の値）を表す型。
 */
export type PositiveDecimalNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/**
 * 数字（負の値）を表す型。
 */
export type NegativeDecimalNumber = -1 | -2 | -3 | -4 | -5 | -6 | -7 | -8 | -9;

/**
 * 数字を表す型。
 */
export type DecimalNumber = 0 | PositiveDecimalNumber | NegativeDecimalNumber;

/**
 * 数字と四則演算を表す型。
 */
export type ExpressionPart = FourArithmeticOperator | DecimalNumber;
