// PJ共通
import { FourArithmeticOperatorType } from "../../../../../../types/ArithmeticType";
import { ArrayExtraction } from "../../../../../../helpers/Array/ArrayExtraction";
import { BooleanFactory } from "../../../../../../helpers/Boolean/BooleanFactory";
import { ExpressionLevelJudge } from "./ExpressionLevelJudge";

// 計算式を構成する部品の型
type expressionPartType = number | FourArithmeticOperatorType;

/**
 * 計算式の生成・管理用のオブジェクト。
 * ※表示系の情報は扱わない
 */
export class Expression {

    /** 計算式 */
    readonly expressionParts: expressionPartType[];

    /** 計算結果 */
    readonly calculationResult: number;

    /** 計算結果の最大桁数 */
    readonly maxResultDigits: number;

    /**
     * コンストラクタ。
     */
    constructor() {
        this.maxResultDigits = 1;

        this.expressionParts = this.createCalculationFormula();
        this.calculationResult = this.calculate(this.expressionParts) ?? 0;
    }

    /**
     * 渡された選択肢が、正解かを判定する。
     * 
     * @param answeredNumberItemValue 回答した選択肢の数の値
     */
    isCorrect(
        answeredNumberItemValue: number
    ): boolean {
        return this.calculationResult === answeredNumberItemValue;
    }

    /**
     * 計算式に引き算を含むか否か。
     * @returns {boolean} 計算式に引き算を含む場合true
     */
    hasSubtraction() {
        return this.expressionParts.includes("-");
    }

    /**
     * 計算式の初期化を行う。
     */
    private createCalculationFormula(
    ): expressionPartType[] {
        let expressionParts: expressionPartType[] = [this.createRandomNumberValue()];

        // 計算式の組み立て (桁数は maxResultDigits 未満)
        while (true) {
            const operator: FourArithmeticOperatorType = this.createRandomOperator();
            const value: number = this.createRandomNumberValue();
            const tempolaryExpressionParts: expressionPartType[] = [...expressionParts, operator, value];

            const result = this.calculate(tempolaryExpressionParts);

            if (result === null) {
                // 計算不能値の場合、次の候補へ
                continue;
            }

            if (new ExpressionLevelJudge(tempolaryExpressionParts).isTooEasy()
                && BooleanFactory.atRandom(50, 49)) {
                // 簡単すぎる問題の場合、確率で次の候補へ
                continue;
            }

            if (String(Math.abs(result)).length <= this.maxResultDigits) {
                expressionParts = tempolaryExpressionParts;
                break;
            }
        }

        return expressionParts;
    }

    /**
     * 計算を行う。
     * @param expressionParts 計算式
     */
    private calculate(
        expressionParts: readonly expressionPartType[]
    ): number | null{
        let lastOperator: FourArithmeticOperatorType | null = null;
        let result = 0;

        for (const valueOrOperator of expressionParts) {
            if (typeof valueOrOperator === "number") {

                switch (lastOperator) {
                    case "-":
                        result -= valueOrOperator;
                        break;

                    case "*":
                        result *= valueOrOperator;
                        break;

                    case "/":
                        if (valueOrOperator === 0) {
                            return null;
                        }

                        result /= valueOrOperator;
                        break;

                    default:
                        result += valueOrOperator;
                }

                continue;
            }

            lastOperator = valueOrOperator;
        }

        return result;
    }

    /**
     * 計算式を構成する「数値」をランダムに生成する。
     */
    private createRandomNumberValue(
    ): number {
        return Math.floor(Math.random() * 10);
    }

    /**
     * 計算式を構成する「演算子」をランダムに生成する。
     */
    private createRandomOperator(
    ): FourArithmeticOperatorType {
        return ArrayExtraction.atRandom<FourArithmeticOperatorType>(["+", "-", "*", "/"]);
    }
}
