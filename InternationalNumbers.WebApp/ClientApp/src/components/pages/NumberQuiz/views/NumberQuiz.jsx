import React, { Component } from 'react';

import * as styles from './NumberQuiz.module.scss';
import { NextQuizButton } from './NextQuizButton';
import { GameState } from '../models/GameState';
import { SingleChoiceQuizArea } from './SingleChoiceQuiz/SingleChoiceQuizArea';
import { SingleChoiceQuiz } from '../models/SingleChoiceQuiz';

export class NumberQuiz extends Component {
    static displayName = NumberQuiz.name;

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
    }

    initializeQuiz = () => {
        this.state.game.nextQuiz();
        this.setState({ ...this.state });
    }

    answerBiggestNumber = (isBiggestNumber) => {
        this.state.game.answerBiggestNumber(isBiggestNumber);
        this.setState({ ...this.state });
    }


    answerSameNumbers = (isBiggestNumber) => {
        this.state.game.answerSameNumbers(isBiggestNumber);
        this.setState({ ...this.state });
    }

    updateHintMode = (doesViewHint) => {
        this.state.game.updateHintMode(doesViewHint);
        this.setState({ ...this.state });
    }
}
