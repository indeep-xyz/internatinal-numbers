import NumberDictionary from './NumberDictionary';

export default class NumberDictionaryFactory {

    static createAll(outputMode) {
        const numberNames = NumberDictionary.getNumberNames();
        return numberNames.map(name => new NumberDictionary(name, outputMode));
    }
}
