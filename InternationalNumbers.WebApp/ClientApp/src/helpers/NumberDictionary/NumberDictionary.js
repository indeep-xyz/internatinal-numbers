import * as numberDictionaryItems from './constants/dictionarieItems';

export default class NumberDictionary {

    static getNumberNames() {
        return Object.keys(numberDictionaryItems);
    }

    constructor(name, outputMode) {
        const numberDefinition = numberDictionaryItems[name];

        this.name = name;
        this.label = numberDefinition.label;
        this.language = numberDefinition.language;
        this.shapes = numberDefinition.shapes;

        this.outputMode = outputMode;
    }


}
