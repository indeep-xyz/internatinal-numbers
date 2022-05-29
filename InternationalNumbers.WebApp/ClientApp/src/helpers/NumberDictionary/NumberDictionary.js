import * as numberDefinitions from './dictionaries';

export default class NumberDictionary {

    static getNumberNames() {
        return Object.keys(numberDefinitions);
    }

    constructor(name, outputMode) {
        const numberDefinition = numberDefinitions[name];

        this.name = name;
        this.label = numberDefinition.label;
        this.language = numberDefinition.language;
        this.characters = numberDefinition.character;

        this.outputMode = outputMode;
    }


}
