// PJ共通
import { ArraySort } from '../../../../../../helpers/Array/ArraySort';

// 辞書系のヘルパー共通
import { FourArithmeticExpressionSymbolFaceType } from '../../../../../../types/ArithmeticType';

// 辞書「数」系のヘルパー共通
import { NumberSymbolFace } from '../../../../../../helpers/Dictionary/NumberDictionary/NumberSymbolFace';
import { NumberSymbolFaceFactory } from '../../../../../../helpers/Dictionary/NumberDictionary/NumberSymbolFaceFactory';
import { NumberSymbolDictionary } from '../../../../../../helpers/Dictionary/NumberDictionary/NumberSymbolDictionary';
import { NumberSymbolDictionaryFactory } from '../../../../../../helpers/Dictionary/NumberDictionary/NumberSymbolDictionaryFactory';
import { NumberQuizMode } from '../../../../../../helpers/Dictionary/NumberDictionary/constants/generals';

// 辞書「演算子」系のヘルパー共通
import { OperatorSymbolFace } from '../../../../../../helpers/Dictionary/OperatorDictionary/OperatorSymbolFace';
import { OperatorSymbolDictionary } from '../../../../../../helpers/Dictionary/OperatorDictionary/OperatorSymbolDictionary';
import { OperatorSymbolFaceFactory } from '../../../../../../helpers/Dictionary/OperatorDictionary/OperatorSymbolFaceFactory';
import { OperatorSymbolDictionaryFactory } from '../../../../../../helpers/Dictionary/OperatorDictionary/OperatorSymbolDictionaryFactory';

// 画面固有
import { QuizInterface } from '../../../Interfaces/QuizInterface';
import { Expression } from './Expression';

/**
 * 計算結果を択一選択させるクイズを表すオブジェクト。
 * 
 * @class
 */
export class CalculationResultChoiceQuiz
    implements QuizInterface {

    /** 計算結果の選択肢 */
    quizSelections: NumberSymbolFace[];
    
    /** 計算式の部品 */
    quizExpressionSymbolFaces: Array<FourArithmeticExpressionSymbolFaceType>;

    /** ヒントが表示中か否か */
    doesViewHint: boolean;

    /** 回答済みか否か */
    isAnswered: boolean;

    /** クイズの回答方法メッセージ */
    readonly instructionMessage: string = "四則演算";

    /** 数式 */
    private expression: Expression;

    /** クイズを作るための「数」の辞書データ */
    private readonly numberDictionaries: NumberSymbolDictionary[];

    /** クイズを作るための「演算子」の辞書データ */
    private readonly operatorDictionaries: OperatorSymbolDictionary[];

    /**
     * コンストラクタ。
     * @param currentScore 現在スコア。この点数によってクイズの選択肢数が変化する
     */
    constructor(
        currentScore:number
    ) {
        this.numberDictionaries = NumberSymbolDictionaryFactory.createAll(NumberQuizMode.SingleChoiceShape);
        this.operatorDictionaries = OperatorSymbolDictionaryFactory.createAll(NumberQuizMode.SingleChoiceShape);
        this.expression = new Expression();

        this.quizSelections = this.createQuizSelections(currentScore);
        this.quizExpressionSymbolFaces = this.createQuizExpressionSymbolFaces();
        this.isAnswered = false;
        this.doesViewHint = false;
    }

    /**
     * 渡された選択肢が、正解かを判定する。
     * @param answeredNumberItem 回答した選択肢
     */
    isCorrect(
        answeredNumberItem: NumberSymbolFace
    ): boolean {
        return this.expression.isCorrect(answeredNumberItem.value);
    }

    /**
     * 選択肢群を作成する。
     * @param currentScore 現在スコア。この点数によって選択肢数が変化する
     */
    createQuizSelections(
        currentScore: number
    ): NumberSymbolFace[] {
        const numberOfSelections = Math.max(2, Math.floor(currentScore / 2));
        const symbolFaces: NumberSymbolFace[] = [
            NumberSymbolFaceFactory.randomShape(this.numberDictionaries, this.expression.calculationResult)
        ];

        let i = 1;
        while (i < numberOfSelections) {
            const quizSelection = NumberSymbolFaceFactory.random(this.numberDictionaries);

            if (symbolFaces.find(ni => ni.equals(quizSelection)) === undefined) {
                if (this.expression.hasSubtraction()
                    && Math.floor(Math.random() * 2) === 0) {
                    // 演算子に引き算が含まれる場合、ランダムで負数化
                    quizSelection.invertNumberValue();
                }

                symbolFaces.push(quizSelection);
                i++;
            }
        }

        return ArraySort.shuffle(symbolFaces);
    }

    /**
     * 表示用の計算結果を作成する。
     */
    createCalculationResult(
    ): NumberSymbolFace {
        return NumberSymbolFaceFactory.randomShape(this.numberDictionaries, this.expression.calculationResult);
    }

    /**
     * 表示用の計算式を作成する。
     */
    createQuizExpressionSymbolFaces(
    ): Array<FourArithmeticExpressionSymbolFaceType> {
        return this.expression.expressionParts.map(ep => {
            if (typeof ep === "number") {
                return NumberSymbolFaceFactory.randomShape(this.numberDictionaries, ep);
            }

            return OperatorSymbolFaceFactory.randomShape(this.operatorDictionaries, ep);
        });
    }

    /**
     * 選択肢内の数値がすべて正解か否かを判定する。
     */
    isCorrectNumbersAll(
    ): boolean {
        return this
            .quizSelections
            .every(ni => ni.value === this.quizSelections[0].value)
            && this.isCorrect(this.quizSelections[0]);
    }

    /**
     * 択一の形で正答した場合の獲得点数を返す。
     */
    getScoreGenerally(
    ): number {
        return this.doesViewHint ? 1 : 2;
    }

    /**
     * すべての選択肢が同じであると正答した場合の獲得点数を返す。
     */
    getScoreSpecially(
    ): number {
        return this.doesViewHint ? 4 : 10;
    }
}
