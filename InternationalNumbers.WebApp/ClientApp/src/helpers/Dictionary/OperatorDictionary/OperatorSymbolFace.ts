// PJ共通
import type * as ArithmeticType from '../../../types/ArithmeticType';

// 辞書系のヘルパー共通
import { OperatorFaceInterface } from './interfaces/OperatorFaceInterface';

// 辞書「演算子」系のヘルパー共通
import type * as OperatorDictionaryType from './types/OperatorDictionaryType';

/**
 * 記号形式の「演算子」の情報のうち「目に見える表現」に注目したデータ。
 */
export class OperatorSymbolFace
    implements OperatorFaceInterface<OperatorSymbolFace, OperatorDictionaryType.SymbolDictionarySource> {

    /**
     * 演算子の値 (+, -, *, /)。
     */
    operator: ArithmeticType.FourArithmeticOperator;

    /**
     * 文字形。
     */
    shape: string;

    /**
     * 辞書データ。
     */
    dictionary: OperatorDictionaryType.SymbolDictionarySource;

    /**
     * コンストラクタ。
     * @param sourceDictionary 辞書データ
     * @param operator 演算子の値 (+, -, *, /)
     * @param shape 文字形
     */
    constructor(
        sourceDictionary: OperatorDictionaryType.SymbolDictionarySource,
        operator: ArithmeticType.FourArithmeticOperator,
        shape: string,
    ) {
        this.dictionary = sourceDictionary;
        this.operator = operator;
        this.shape = shape;
    }

    /**
     * 同値比較。
     * @param another 判定対象データ
     * @returns 同値ならtrue
     */
    equals(
        another: OperatorSymbolFace
    ): boolean {
        return this.shape === another.shape;
    }
}
