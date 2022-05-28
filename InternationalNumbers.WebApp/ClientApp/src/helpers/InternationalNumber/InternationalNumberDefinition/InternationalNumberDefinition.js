import * as numberDefinitions from './constants';

export default class InternationalNumberDefinition {

    static getNumberNames() {
        return Object.keys(numberDefinitions);
    }

    constructor(name, outputMode) {
        const numberDefinition = numberDefinitions[name];

        this.name = name;
        this.label = numberDefinition.label;
        this.language = numberDefinition.language;
        this.character = numberDefinition.character;

        this.outputMode = outputMode;
    }
}
