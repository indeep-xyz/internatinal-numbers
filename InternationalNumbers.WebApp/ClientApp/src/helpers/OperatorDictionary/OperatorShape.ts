import type * as ArithmeticType from '../../types/ArithmeticType';
import { ArrayExtractHelper } from '../Array/ArrayExtractHelper';
import { ObjectMapExtractHelper } from '../Object/ObjectMapExtractHelper';
import type * as OperatorDictionaryType from './types/OperatorDictionaryType';

/**
 * 単一の文字形ベースの情報に絞った数字データ。
 */
export class OperatorShape {

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
    dictionary: OperatorDictionaryType.DictionarySource;

    /**
     * コンストラクタ。
     * @param sourceDictionary 辞書データ
     * @param operator 演算子の値 (+, -, *, /)
     * @param shape 文字形
     */
    constructor(
        sourceDictionary: OperatorDictionaryType.DictionarySource,
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
        another: OperatorShape
    ): boolean {
        return this.shape === another.shape;
    }

    /**
     * コンストラクタ。
     * @param sourceDictionaries 辞書データ。言語等の縛りがある場合は事前に取り除いておく
     * @param operator 演算子
     */
    static reduce(
        sourceDictionaries: OperatorDictionaryType.DictionarySourceMap,
        operator: ArithmeticType.FourArithmeticOperator
    ): OperatorShape {
        const dictionary = ObjectMapExtractHelper.takeOne<OperatorDictionaryType.DictionarySource>(sourceDictionaries);
        const dictionaryShapes = dictionary.shapes[operator];

        return new OperatorShape(
            dictionary,
            operator,
            ArrayExtractHelper.takeOne<string>(dictionaryShapes),
        );
    }

    /**
     * コンストラクタ。
     * @param sourceDictionaries 辞書データ。言語等の縛りがある場合は事前に取り除いておく
     * @param operator 演算子の値
     * @returns
     */
    static reduceWithOperator(
        sourceDictionaries: OperatorDictionaryType.DictionarySourceMap,
        operator: ArithmeticType.FourArithmeticOperator,
    ): OperatorShape {
        const dictionary = ObjectMapExtractHelper.takeOne<OperatorDictionaryType.DictionarySource>(sourceDictionaries);
        const dictionaryShapes = dictionary.shapes[operator];

        return new OperatorShape(
            dictionary,
            operator,
            ArrayExtractHelper.takeOne<string>(dictionaryShapes),
        );
    }
}
