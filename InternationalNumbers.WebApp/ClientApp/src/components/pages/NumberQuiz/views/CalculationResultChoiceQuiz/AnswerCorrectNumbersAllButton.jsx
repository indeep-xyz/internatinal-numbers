import React, { Component } from 'react';

import * as styles from './AnswerCorrectNumbersAllButton.module.scss';

export class AnswerCorrectNumbersAllButton extends Component {
    static displayName = AnswerCorrectNumbersAllButton.name;

    render() {
        if (this.props.isAnswered) {
            return <React.Fragment />;
        }

        return (
            <button
                className={styles.button}
                onClick={() => this.props.answerSpecially(this.props.quiz.isCorrectNumbersAll())}
            >
                すべて同じ数字
            </button>
        );
    }
}
