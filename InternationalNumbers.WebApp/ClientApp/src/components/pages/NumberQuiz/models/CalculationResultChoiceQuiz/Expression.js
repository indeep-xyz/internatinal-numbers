/**
 * 計算結果を択一選択させるクイズを表すオブジェクト。
 * 
 * @class
 */
export class Expression {

    /**
     * 計算式。
     * @member {Array<ExpressionPart>}
     */
    expressionParts;

    /**
     * コンストラクタ。
     */
    constructor() {
        this.maxResultDigits = 1;

        this.expressionParts = this.createCalculationFormula();
        this.calculationResult = this.createCalculationResult();
    }

    /**
     * 渡された選択肢が、正解かを判定する。
     * 
     * @param {object} answeredNumberItem 回答した選択肢
     * @returns {boolean}
     */
    isCorrect(answeredNumberItem) {
        return this.calculationResult === answeredNumberItem.value;
    }

    getRandomNumber() {
        return Math.floor(Math.random() * 10);
    }

    /**
     * 計算式の初期化を行う。
     * 
     */
    createCalculationFormula() {
        let expressionParts = [this.getRandomNumber()];

        while (true) {
            const operator = this.createOperator();
            const value = Math.floor(Math.random() * 10);
            const tempolaryExpressionParts = [...expressionParts, operator, value];

            const result = this.calculate(tempolaryExpressionParts);

            if (result === null) {
                // 計算不能値の場合、次の候補へ
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
     * 計算結果の初期化を行う。
     * 
     */
    createCalculationResult() {
        return this.calculate(this.expressionParts);
    }

    calculate(expressionParts) {
        let lastOperator = null;
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

    createOperator() {
        return [
            "+",
            "-",
            "*",
            "/",
        ][Math.floor(Math.random() * 4)];
    }
}
