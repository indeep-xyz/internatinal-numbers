import NumberDictionaryFactory from '../../../../../helpers/NumberDictionary/NumberDictionaryFactory';
import { NumberQuizMode } from '../../../../../helpers/NumberDictionary/constants/generals';
import NumberShape from '../../../../../helpers/NumberDictionary/NumberShape';
import { Expression } from './Expression';
import OperatorShape from '../../../../../helpers/OperatorDictionary/OperatorShape';
import OperatorDictionaryFactory from '../../../../../helpers/OperatorDictionary/OperatorDictionaryFactory';
import ArraySortHelper from '../../../../../helpers/Array/ArraySortHelper';

/**
 * 計算結果を択一選択させるクイズを表すオブジェクト。
 * 
 * @class
 */
export class CalculationResultChoiceQuiz {

    /**
     * 計算結果の選択肢。
     * @member {Array<NumberShape>}
     */
    quizSelections;

    /**
     * 数式。
     * @member {Array<ExpressionPart>}
     */
    expressionParts;

    /**
     * 回答済みか否か。
     * @member {boolean}
     */
    isAnswered;

    /**
     * ヒントが表示中か否か。
     * @member {boolean}
     */
    doesViewHint;

    /**
     * コンストラクタ。
     * @param {number} currentScore 現在スコア。この点数によってクイズの選択肢数が変化する
     */
    constructor(currentScore) {
        this.numberItems = NumberDictionaryFactory.createAll(NumberQuizMode.Shape);
        this.operatorItems = OperatorDictionaryFactory.createAll(NumberQuizMode.Shape);

        this.expression = new Expression();

        this.quizSelections = this.createQuizSelections(currentScore);
        this.calculationResult = this.createCalculationResult();
        this.quizQuestions = this.createQuizQuestions();
        this.isAnswered = false;
        this.doesViewHint = false;
    }

    /**
     * 渡された選択肢が、正解かを判定する。
     * 
     * @param {object} answeredNumberItem 回答した選択肢
     * @returns {boolean}
     */
    isCorrect(answeredNumberItem) {
        return this.expression.isCorrect(answeredNumberItem);
    }

    /**
     * 選択肢群を作成する。
     * @param {number} currentScore 現在スコア。この点数によって選択肢数が変化する
     * @returns {Array<object>}
     */
    createQuizSelections(currentScore) {
        const numberOfSelections = Math.max(2, Math.floor(currentScore / 2));
        const numberItems = [
            NumberShape.reduceWithNumber(this.numberItems, this.expression.calculationResult)
        ];

        let i = 1;
        while (i < numberOfSelections) {
            const quizSelection = NumberShape.reduce(this.numberItems);

            if (numberItems.find(ni => ni.equals(quizSelection)) === undefined) {
                if (this.expression.hasSubtraction()
                    && Math.floor(Math.random() * 2) === 0) {
                    // 演算子に引き算が含まれる場合、ランダムで負数化
                    quizSelection.invertNumberValue();
                }

                numberItems.push(quizSelection);
                i++;
            }
        }

        return ArraySortHelper.shuffle(numberItems);
    }

    /**
     * 計算結果の初期化を行う。
     * 
     */
    createCalculationResult() {
        return NumberShape.reduceWithNumber(this.numberItems, this.expression.calculationResult);
    }

    /**
     * 計算結果の初期化を行う。
     * 
     */
    createQuizQuestions() {
        return this.expression.expressionParts.map(ep => {
            if (typeof ep === "number") {
                return NumberShape.reduceWithNumber(this.numberItems, ep);
            }

            return OperatorShape.reduceWithOperator(this.operatorItems, ep);
        });

    }

    /**
     * 選択肢内の数値がすべて正解か否かを判定する。
     * @returns {boolean}
     */
    isCorrectNumbersAll() {
        return this
            .quizSelections
            .every(ni => ni.value === this.quizSelections[0].value)
            && this.isCorrect(this.quizSelections[0]);
    }

    /**
     * ヒントの表示モードを更新する。
     * @returns {void}
     */
    updateHintMode = (doesViewHint) => {
        if (doesViewHint !== this.doesViewHint) {
            this.doesViewHint = doesViewHint;
        }
    }

    /**
     * 択一の形で正答した場合の獲得点数を返す。
     * @returns {number}
     */
    getScoreGenerally() {
        return this.doesViewHint ? 1 : 2;
    }

    /**
     * すべての選択肢が同じであると正答した場合の獲得点数を返す。
     * @returns {number}
     */
    getScoreSpecially() {
        return this.doesViewHint ? 4 : 10;
    }
}
