import * as numberDictionaryItems from './constants/dictionarieItems';

export default class OperatorDictionary {

    static getOperatorNames() {
        return Object.keys(numberDictionaryItems);
    }

    constructor(name, outputMode) {
        const numberDefinition = numberDictionaryItems[name];

        this.name = name;
        this.label = numberDefinition.label;
        this.isWord = numberDefinition.isWord;
        this.language = numberDefinition.language;
        this.shapes = numberDefinition.shapes;

        this.outputMode = outputMode;
    }


}
