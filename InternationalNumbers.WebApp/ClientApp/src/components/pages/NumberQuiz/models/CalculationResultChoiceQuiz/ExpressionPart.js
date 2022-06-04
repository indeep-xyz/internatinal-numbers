import NumberDictionaryFactory from '../../../../../helpers/NumberDictionary/NumberDictionaryFactory';
import { NumberQuizMode } from '../../../../../helpers/NumberDictionary/constants/generals';
import NumberShape from '../../../../../helpers/NumberDictionary/NumberShape';

/**
 * 計算結果を択一選択させるクイズを表すオブジェクト。
 * 
 * @class
 */
export class ExpressionPart {

    /**
     * 数式パーツの種類の定義。
     * @member {number}
     */
    static Type = {
        value: 1,
        operator: 2,
    };

    /**
     * 数式パーツの種類。
     * @member {number}
     */
    type;

    /**
     * 値。
     * @member {NumberShape}
     */
    value;

    /**
     * 演算子。
     * @member {OperatorShape}
     */
    operator;

    /**
     * コンストラクタ。
     * @param {NumberShape | OperatorShape} valueOrOperator 値または演算子
     */
    constructor(valueOrOperator) {
        if (valueOrOperator instanceof NumberShape) {
            this.type = ExpressionPart.value;
            this.value = valueOrOperator;
            return;
        }

        this.type = ExpressionPart.operator;
        this.operator = valueOrOperator;
    }
}
