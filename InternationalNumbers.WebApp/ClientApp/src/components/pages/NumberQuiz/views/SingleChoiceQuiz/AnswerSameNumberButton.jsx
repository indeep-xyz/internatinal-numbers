import React, { Component } from 'react';

import * as styles from './AnswerSameNumberButton.module.scss';

export class AnswerSameNumberButton extends Component {
    static displayName = AnswerSameNumberButton.name;

    render() {
        if (this.props.isAnswered) {
            return <React.Fragment />;
        }

        return (
            <button
                className={styles.button}
                onClick={() => this.props.answerSameNumbers()}
            >
                すべて同じ数字
            </button>
        );
    }
}
