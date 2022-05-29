/**
 * 値と文字を単一に絞った数字辞書データ。
 */
export default class ReducedNumberDictionary {

    /**
     * プログラム上の管理名。
     * @member {string}
     */
    name;

    /**
     * 所属する数字の分類名。
     * @member {string}
     */
    label;

    /**
     * 所属する数字の言語圏。
     * @member {string}
     */
    language;

    /**
     * 値。
     * @member {number}
     */
    value;

    /**
     * 文字。
     * @member {string}
     */
    character;

    /**
     * コンストラクタ。
     * @param {NumberDictionary} sourceDictionary 辞書データ
     * @param {number} numberValue 値
     * @param {string} numberCharacter 文字
     */
    constructor(
        sourceDictionary,
        numberValue,
        numberCharacter,
    ) {

        this.name = sourceDictionary.name;
        this.label = sourceDictionary.label;
        this.language = sourceDictionary.language;
        this.character = sourceDictionary.character;

        this.numberValue = numberValue;
        this.numberCharacter = numberCharacter;
    }

    /**
     * コンストラクタ。
     * @param {NumberDictionary} sourceDictionary 辞書データ
     * @param {number} numberValue 値
     * @param {string} numberCharacter 文字
     */
    static reduce(sourceDictionaries) {
        const dictionaryKeys = Object.keys(sourceDictionaries);

        const numberValue = Math.floor(Math.random() * 9);
        const dictionary = sourceDictionaries[dictionaryKeys[Math.floor(Math.random() * dictionaryKeys.length)]];
        const dictionaryCharacterList = dictionary.characters[String(numberValue)];

        const numberCharacter = Array.isArray(dictionaryCharacterList)
            ? dictionaryCharacterList[Math.floor(Math.random() * dictionaryCharacterList.length)]
            : dictionaryCharacterList;

        return new ReducedNumberDictionary(dictionary, numberValue, numberCharacter);
    }
}
