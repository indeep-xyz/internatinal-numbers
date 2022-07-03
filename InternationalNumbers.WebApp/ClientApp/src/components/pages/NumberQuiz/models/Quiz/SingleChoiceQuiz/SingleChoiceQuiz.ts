// 辞書「数」系のヘルパー共通
import { NumberSymbolFace } from '../../../../../../helpers/Dictionary/NumberDictionary/NumberSymbolFace';
import { NumberSymbolFaceFactory } from '../../../../../../helpers/Dictionary/NumberDictionary/NumberSymbolFaceFactory';
import { NumberSymbolDictionary } from '../../../../../../helpers/Dictionary/NumberDictionary/NumberSymbolDictionary';

// 画面固有
import { QuizInterface } from '../../../Interfaces/QuizInterface';
import { SymbolPresenter } from '../SymbolPresenter';

/**
 * 何らかの条件を満たす値を択一選択させるクイズを表すオブジェクト。
 */
export class SingleChoiceQuiz
    implements QuizInterface
{
    /** クイズの選択肢 */
    quizSelections: SymbolPresenter[];

    /** 回答済みか否か */
    isAnswered: boolean;

    /** ヒントが表示中か否か */
    doesViewHint: boolean;

    /** クイズの回答方法メッセージ */
    readonly instructionMessage: string = "最大値";

    /** クイズを作るための「数」の辞書データ */
    private numberDictionaries: NumberSymbolDictionary[];

    /**
     * コンストラクタ。
     * @param currentScore 現在スコア。この点数によってクイズの選択肢数が変化する
     */
    constructor(
        numberDictionaries: NumberSymbolDictionary[],
        currentScore: number,
    ) {
        this.numberDictionaries = numberDictionaries;

        this.quizSelections = this.createQuizSelections(currentScore);
        this.isAnswered = false;
        this.doesViewHint = false;
    }

    /**
     * 渡された選択肢が、すべての選択肢中で最大値かを判定する。
     * @param answeredNumberItem 回答した選択肢
     */
    isBiggestNumber(
        answeredNumberItem: SymbolPresenter
    ): boolean {
        return this.quizSelections.every(qni => qni.valueAsString <= answeredNumberItem.valueAsString);
    }

    /**
     * 選択肢群を作成する。
     * @param {} currentScore 現在スコア。この点数によって選択肢数が変化する
     * @returns {Array<object>}
     */
    private createQuizSelections(
        currentScore: number
    ): SymbolPresenter[] {
        const numberOfSelections: number = Math.max(2, Math.floor(currentScore / 2));
        const symbolFaces: NumberSymbolFace[] = [];

        let i = 0;
        while (i < numberOfSelections) {
            const quizSelection = NumberSymbolFaceFactory.random(this.numberDictionaries);

            if (symbolFaces.find(ni => ni.equals(quizSelection)) === undefined) {
                symbolFaces.push(quizSelection);
                i++;
            }
        }

        return symbolFaces.map(sf => new SymbolPresenter(sf));
    }

    /**
     * 選択肢内に最大値の数値が複数あるかを判定する。
     */
    isBiggestNumbersSeveral(
    ): boolean {
        const maxNumber = Math.max(...this.quizSelections.map(qs => qs.valueAsNumber));

        return this
            .quizSelections
            .filter(qs => qs.valueAsNumber === maxNumber)
            .length > 1;
    }

    /**
     * 択一の形で正答した場合の獲得点数を返す。
     * @returns {number}
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
