import React, { Component } from 'react';

import * as styles from './NumberQuiz.module.scss';
import { InternationalNumberOutputMode } from '../../../../helpers/InternationalNumber/constants/generals';
import InternationalNumberItemFactory from '../../../../helpers/InternationalNumber/InternationalNumberDefinition/InternationalNumberDefinitionFactory';
import { SelectionItem } from './SelectionItem';
import { NextQuizButton } from './NextQuizButton';
import { HintViewerCheckbox } from './HintViewerCheckbox';
import { AnswerSameNumberButton } from './AnswerSameNumberButton';

export class NumberQuiz extends Component {
    static displayName = NumberQuiz.name;

    constructor(props) {
        super(props);

        this.numberItems = InternationalNumberItemFactory.createAll(InternationalNumberOutputMode.Character);

        this.state = {
            quizNumberItems: this.createQuizSelections(0),
            score: 0,
            isAnswered: false,
            answerdCount: 0,
            doesViewHint: false,
            isLastAnswerCorrect: false,
            isLastAnswerIncorrect: false,
        };
    }

    initializeQuiz = () => {
        this.setState({
            ...this.state,
            quizNumberItems: this.createQuizSelections(this.state.score),
            isAnswered: false,
            doesViewHint: false,
        });
    }

    createQuizSelections(currentScore) {
        const numberOfItems = Math.max(2, Math.floor(currentScore / 2));
        const numberItems = [];

        let i = 0;
        while (i < numberOfItems) {
            const numberIitem = this.getNumberItem();

            if (numberItems.find(ni => ni.numberCharacter === numberIitem.numberCharacter) === undefined) {
                numberItems.push(numberIitem);
                i++;
            }
        }

        return numberItems;
    }

    getNumberItem() {
        const numberValue = Math.floor(Math.random() * 9);
        const numberItemKeys = Object.keys(this.numberItems);

        const numberItem = this.numberItems[numberItemKeys[Math.floor(Math.random() * numberItemKeys.length)]];
        const numberCharacterList = numberItem.character[String(numberValue)];

        const numberCharacter = Array.isArray(numberCharacterList)
            ? numberCharacterList[Math.floor(Math.random() * numberCharacterList.length)]
            : numberCharacterList;

        return {
            ...numberItem,
            numberValue: numberValue,
            numberCharacter: numberCharacter
        };
    }

    isBiggestNumber(answeredNumberItem) {
        return this.state.quizNumberItems.every(qni => qni.numberValue <= answeredNumberItem.numberValue);
    }

    render() {
        const classNameIsLastAnswerIncorrect = this.state.isLastAnswerIncorrect ? styles.isLastAnswerIncorrect : "";

        return (
            <div className={classNameIsLastAnswerIncorrect}>
                <h1>Quiz</h1>

                <div className={styles.score}>
                    {this.state.score}点
                </div>

                <div className={styles.quizSelectionArea}>
                    {this.state.quizNumberItems.map((numberItem, numberItemIndex) => (
                        <SelectionItem
                            key={numberItemIndex}
                            numberItem={numberItem}
                            numberItemIndex={numberItemIndex}
                            isBiggestNumber={this.isBiggestNumber(numberItem)}
                            isAnswered={this.state.isAnswered}
                            doesViewHint={this.state.doesViewHint}
                            answerBiggestNumber={this.answerBiggestNumber}
                        />
                    ))}
                </div>

                <HintViewerCheckbox
                    doesViewHint={this.state.doesViewHint}
                    updateHintMode={this.updateHintMode}
                />

                <div className={styles.operator}>
                    <NextQuizButton
                        isAnswered={this.state.isAnswered}
                        initializeQuiz={this.initializeQuiz}
                    />

                    <AnswerSameNumberButton
                        isAnswered={this.state.isAnswered}
                        answerSameNumbers={this.answerSameNumbers}
                    />
                </div>
            </div>
        );
    }

    answerBiggestNumber = (isBiggestNumber) => {
        const { doesViewHint, answerdCount } = this.state;
        let score = this.state.score;
        let isLastAnswerCorrect = false;
        let isLastAnswerIncorrect = false;

        if (isBiggestNumber) {
            score += doesViewHint ? 1 : 2;
            isLastAnswerCorrect = true;
        } else {
            score = 0;
            isLastAnswerIncorrect = true;
        }

        this.setState({
            ...this.state,
            isAnswered: true,
            answerdCount: answerdCount + 1,
            score,
            isLastAnswerCorrect,
            isLastAnswerIncorrect,
        });
    }
    

    answerSameNumbers = () => {
        const { doesViewHint, answerdCount, quizNumberItems } = this.state;
        let score = this.state.score;
        let isLastAnswerCorrect = false;
        let isLastAnswerIncorrect = false;

        if (quizNumberItems.every(ni => ni.numberValue === quizNumberItems[0].numberValue)) {
            score += doesViewHint ? 1 : 10;
            isLastAnswerCorrect = true;
        } else {
            score = 0;
            isLastAnswerIncorrect = true;
        }

        this.setState({
            ...this.state,
            isAnswered: true,
            answerdCount: answerdCount + 1,
            score,
            isLastAnswerCorrect,
            isLastAnswerIncorrect,
        });
    }

    updateHintMode = (doesViewHint) => {
        if (doesViewHint !== this.state.doesViewHint) {
            this.setState({
                ...this.state,
                doesViewHint: doesViewHint,
            });
        }
    }
}
