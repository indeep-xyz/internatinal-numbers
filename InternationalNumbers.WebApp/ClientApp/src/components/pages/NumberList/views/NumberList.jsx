import React, { Component } from 'react';

import * as styles from './NumberList.module.scss';
import { NumberQuizMode } from '../../../../helpers/NumberDictionary/constants/generals';
import NumberDictionaryFactory from '../../../../helpers/NumberDictionary/NumberDictionaryFactory';

export class NumberList extends Component {
    static displayName = NumberList.name;

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
    }

    render() {
        const dictionaries = NumberDictionaryFactory.createAll(NumberQuizMode.Shape);

        const numberValues = [];
        for (let i = 0; i < 10; i++) {
            numberValues.push(i);
        }

        return (
            <div>
                <h1>List</h1>

                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={`${styles.cell} ${styles.cellLabel}`}>数字名</th>
                            <th className={`${styles.cell} ${styles.cellLanguage}`}>言語圏</th>
                            {numberValues.map((nc, index) => <th key={index} className={`${styles.cell} ${styles.cellNumber}`}>{nc}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {dictionaries.map(ni => this.renderRow(ni))}
                    </tbody>
                </table>
            </div>
        );
    }

    renderRow(dictionary) {
        const numberShapes = [];
        for (let i = 0; i < 10; i++) {
            const dictionaryShape = dictionary.shapes[String(i)];

            numberShapes.push(
                dictionaryShape.map(ds => <React.Fragment>{ds}<br /></React.Fragment>)
            );
        }

        return (
            <tr key={dictionary.name}>
                <td className={`${styles.cell} ${styles.cellLabel}`}>{dictionary.label}</td>
                <td className={`${styles.cell} ${styles.cellLanguage}`}>{dictionary.language}</td>
                {numberShapes.map((ds, index) => <td key={index} className={`${styles.cell} ${styles.cellNumber}`}>{ds}</td>)}
            </tr>
        );
    }
}
