import { OperatorDictionary }from './OperatorDictionary';

export class OperatorDictionaryFactory {

    static createAll(
        outputMode: number,
    ): OperatorDictionary[] {
        const operatorNames = OperatorDictionary.getOperatorNames();
        return operatorNames.map(name => new OperatorDictionary(name, outputMode));
    }
}
