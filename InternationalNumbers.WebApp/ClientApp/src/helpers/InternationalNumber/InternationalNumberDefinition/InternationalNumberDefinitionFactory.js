import InternationalNumberDefinition from './InternationalNumberDefinition';

export default class InternationalNumberItemFactory {

    static createAll(outputMode) {
        const numberNames = InternationalNumberDefinition.getNumberNames();
        return numberNames.map(name => new InternationalNumberDefinition(name, outputMode));
    }
}
