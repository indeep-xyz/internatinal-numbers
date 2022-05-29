import React, { Component } from 'react';

import * as styles from './HintViewerCheckbox.module.scss';

export class HintViewerCheckbox extends Component {
    static displayName = HintViewerCheckbox.name;

    render() {
        const { doesViewHint } = this.props;

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
