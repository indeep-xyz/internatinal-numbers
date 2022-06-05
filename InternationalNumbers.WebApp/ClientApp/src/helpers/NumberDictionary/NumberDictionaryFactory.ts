import { NumberDictionary } from './NumberDictionary';

export class NumberDictionaryFactory {

    static createAll(
        outputMode: number
    ): NumberDictionary[] {
        const numberNames = NumberDictionary.getNumberNames();
        return numberNames.map(name => new NumberDictionary(name, outputMode));
    }
}
