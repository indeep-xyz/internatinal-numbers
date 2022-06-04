import OperatorDictionary from './OperatorDictionary';

export default class OperatorDictionaryFactory {

    static createAll(outputMode) {
        const operatorNames = OperatorDictionary.getOperatorNames();
        return operatorNames.map(name => new OperatorDictionary(name, outputMode));
    }
}
