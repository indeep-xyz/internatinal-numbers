import React, { Component } from 'react';

import * as styles from './HintViewerCheckbox.module.scss';

export class HintViewerCheckbox extends Component {
    static displayName = HintViewerCheckbox.name;

    render() {
        const { doesViewHint, isAnswered } = this.props;

        if (isAnswered) {
            return <React.Fragment />;
        }

        return (
            <div className={styles.wrapper}>
                <label>
                    <input
                        type="checkbox"
                        checked={doesViewHint}
                        onChange={() => this.props.updateHintMode(true)}
                    />
                    ヒントを表示する
                </label>
            </div>
        );
    }
}
