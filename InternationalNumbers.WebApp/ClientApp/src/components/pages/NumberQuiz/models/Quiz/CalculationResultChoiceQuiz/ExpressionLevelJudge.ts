// PJ共通
import { FourArithmeticOperatorType } from "../../../../../../types/ArithmeticType";
import { ArrayJudge } from "../../../../../../helpers/Array/ArrayJudge";

// 計算式を構成する部品の型
type expressionPartType = number | FourArithmeticOperatorType;

/**
 * 計算式の生成・管理用のオブジェクト。
 * ※表示系の情報は扱わない
 */
export class ExpressionLevelJudge {

    /** 計算式 */
    readonly expressionParts: expressionPartType[];

    /**
     * コンストラクタ。
     */
    constructor(
        expressionParts: expressionPartType[]
    ) {
        this.expressionParts = expressionParts;
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // 問題の低レベル判定処理

    /**
     * 計算式が簡単すぎるか否かを判定する。
     */
    isTooEasy(
    ): boolean {
        return this.isMultipliedZero();
    }

    /**
     * ゼロを含む乗算or除算かを判定する。
     */
    isMultipliedZero(
    ): boolean {
        const operators = this.expressionParts.filter(ep => typeof ep === "string");
        const numbers = this.expressionParts.filter(ep => typeof ep === "number");

        return (
            ArrayJudge.isDuplicated(operators, ["*", "/"])
            && numbers.includes(0)
        );
    }
}
