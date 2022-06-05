﻿import { NumberDictionaryFactory } from '../../../../../helpers/NumberDictionary/NumberDictionaryFactory';
import { NumberQuizMode } from '../../../../../helpers/NumberDictionary/constants/generals';
import { NumberShape } from '../../../../../helpers/NumberDictionary/NumberShape';

/**
 * 何らかの条件を満たす値を択一選択させるクイズを表すオブジェクト。
 * 
 * @class
 */
export class SingleChoiceQuiz {

    /**
     * クイズの選択肢。
     * @member {Array<NumberShape>}
     */
    quizSelections;

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

        this.quizSelections = this.createQuizSelections(currentScore);
        this.isAnswered = false;
        this.doesViewHint = false;
    }

    /**
     * 渡された選択肢が、すべての選択肢中で最大値かを判定する。
     * 
     * @param {object} answeredNumberItem 回答した選択肢
     * @returns {boolean}
     */
    isBiggestNumber(answeredNumberItem) {
        return this.quizSelections.every(qni => qni.value <= answeredNumberItem.value);
    }

    /**
     * 選択肢群を作成する。
     * @param {number} currentScore 現在スコア。この点数によって選択肢数が変化する
     * @returns {Array<object>}
     */
    createQuizSelections(currentScore) {
        const numberOfSelections = Math.max(2, Math.floor(currentScore / 2));
        const numberItems = [];

        let i = 0;
        while (i < numberOfSelections) {
            const quizSelection = NumberShape.reduce(this.numberItems);

            if (numberItems.find(ni => ni.equals(quizSelection)) === undefined) {
                numberItems.push(quizSelection);
                i++;
            }
        }

        return numberItems;
    }

    /**
     * 選択肢内の数値がすべて同じか否かを判定する。
     * @returns {boolean}
     */
    isSameNumbersAll() {
        return this
            .quizSelections
            .every(ni => ni.value === this.quizSelections[0].value);
    }

    /**
     * ヒントの表示モードを更新する。
     * @returns {void}
     */
    updateHintMode = (doesViewHint) => {
        if (doesViewHint !== this.doesViewHint) {
            this.doesViewHint= doesViewHint;
        }
    }

    /**
     * 択一の形で正答した場合の獲得点数を返す。
     * @returns {number}
     */
    getScoreWhenAnsweredBiggestNumber() {
        return this.doesViewHint ? 1 : 2;
    }

    /**
     * すべての選択肢が同じであると正答した場合の獲得点数を返す。
     * @returns {number}
     */
    getScoreWhenAnsweredSameNumbers() {
        return this.doesViewHint ? 4 : 10;
    }
}
