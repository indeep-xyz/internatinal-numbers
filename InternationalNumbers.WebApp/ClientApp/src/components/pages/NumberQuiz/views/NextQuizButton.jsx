import React, { Component } from 'react';

import * as styles from './NextQuizButton.module.scss';

export class NextQuizButton extends Component {
    static displayName = NextQuizButton.name;

    render() {
        if (!this.props.isAnswered) {
            return <React.Fragment />;
        }

        return (
            <button
                className={styles.nextQuizButton}
                onClick={() => this.props.initializeQuiz()}
            >
                次の問題へ
            </button>
        );
    }
}
