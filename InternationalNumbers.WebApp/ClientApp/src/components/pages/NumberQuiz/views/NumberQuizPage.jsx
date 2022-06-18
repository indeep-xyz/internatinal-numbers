import React, { Component } from 'react';

import * as styles from './NumberQuizPage.module.scss';
import { NextQuizButton } from './NextQuizButton';
import { GameState } from '../models/GameState';
import { SingleChoiceQuizArea } from './SingleChoiceQuiz/SingleChoiceQuizArea';
import { SingleChoiceQuiz } from '../models/SingleChoiceQuiz/SingleChoiceQuiz';
import { CalculationResultChoiceQuiz } from '../models/CalculationResultChoiceQuiz/CalculationResultChoiceQuiz';
import { CalculationResultChoiceQuizArea } from './CalculationResultChoiceQuiz/CalculationResultChoiceQuizArea';

export class NumberQuizPage extends Component {
    static displayName = NumberQuizPage.name;

    constructor(props) {
        super(props);
        this.state = {
            game: new GameState(),
        };
    }

    render() {
        const gameState = this.state.game;
        const classNameIsLastAnswerIncorrect = gameState.isLastAnswerIncorrect ? styles.isLastAnswerIncorrect : "";

        return (
            <div className={classNameIsLastAnswerIncorrect}>
                <h1>Quiz</h1>

                <div className={styles.score}>
                    {gameState.score}点
                </div>

                {this.renderQuizArea()}

                <div className={styles.operator}>
                    <NextQuizButton
                        isAnswered={gameState.quiz.isAnswered}
                        initializeQuiz={this.initializeQuiz}
                    />
                </div>
            </div>
        );
    }

    renderQuizArea() {
        const gameState = this.state.game;

        if (gameState.quiz instanceof SingleChoiceQuiz) {
            return <SingleChoiceQuizArea
                quiz={gameState.quiz}
                updateHintMode={this.updateHintMode}
                answerBiggestNumber={this.answerBiggestNumber}
                answerSameNumbers={this.answerSameNumbers}
            />;
        }

        if (gameState.quiz instanceof CalculationResultChoiceQuiz) {
            return <CalculationResultChoiceQuizArea
                quiz={gameState.quiz}
                updateHintMode={this.updateHintMode}
                answerGenerally={this.answerGenerally}
                answerSpecially={this.answerSpecially}
            />;
        }
    }

    initializeQuiz = () => {
        this.state.game.nextQuiz();
        this.setState({ ...this.state });
    }

    answerBiggestNumber = (isBiggestNumber) => {
        this.state.game.answerBiggestNumber(isBiggestNumber);
        this.setState({ ...this.state });
    }

    answerGenerally = (isCorrect) => {
        this.state.game.answerGenerally(isCorrect);
        this.setState({ ...this.state });
    }


    answerSameNumbers = (isBiggestNumber) => {
        this.state.game.answerSameNumbers(isBiggestNumber);
        this.setState({ ...this.state });
    }

    answerSpecially = (isCorrect) => {
        this.state.game.answerSpecially(isCorrect);
        this.setState({ ...this.state });
    }

    updateHintMode = (doesViewHint) => {
        this.state.game.updateHintMode(doesViewHint);
        this.setState({ ...this.state });
    }
}
