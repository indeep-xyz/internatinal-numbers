// 辞書のヘルパー共通
import { SymbolDictionaryPresentationInterface } from '../../../../../helpers/Dictionary/interfaces/SymbolDictionaryPresentationInterface';
import { SymbolFaceValueInterface } from '../../../../../helpers/Dictionary/interfaces/SymbolFaceValueInterface';


// 辞書「数」系のヘルパー共通
import { NumberSymbolFace } from '../../../../../helpers/Dictionary/NumberDictionary/NumberSymbolFace';

// 画面固有
import { BooleanFactory } from '../../../../../helpers/Boolean/BooleanFactory';
import { OperatorSymbolFace } from '../../../../../helpers/Dictionary/OperatorDictionary/OperatorSymbolFace';

/**
 * 形の出力表現を表すオブジェクト。
 */
export class SymbolPresenter {

    static readonly fontStyle: Record<string, string> = {
        "normal": "normal",
        "italic": "fontStyleItalic",
        "oblique": "fontStyleOblique",
    };

    static readonly fontWeight: Record<string, string> = {
        "normal": "normal",
        "bold": "fontWeightBold",
        "bolder": "fontWeightBolder",
        "light": "fontWeightLight",
    };

    /** 文字の「値」の数値表現 */
    get valueAsNumber(): number {
        if (this.symbolFaceValue instanceof NumberSymbolFace) {
            return this.symbolFaceValue.valueAsNumber;
        }

        if (this.symbolFaceValue instanceof OperatorSymbolFace) {
            throw new Error("OperatorSymbolFace does not suppot valueAsNumber().");
        }

        return NaN;
    }

    /** 文字の「値」の文字列表現（常に英数字 or 一般的な記号） */
    get valueAsString(): string {
        return this.symbolFaceValue.valueAsString;
    }

    /** 文字形 */
    get shape(): string { return this.symbolFaceValue.shape; }

    /** 辞書データ */
    get dictionary(): SymbolDictionaryPresentationInterface { return this.symbolFaceValue.dictionary; }

    /** 字形 */
    readonly symbolFaceValue: SymbolFaceValueInterface;

    /** 文字の斜体設定 */
    readonly fontStyle: string;

    /** 文字の太さ設定 */
    readonly fontWeight: string;

    /**
     * コンストラクタ。
     * @param symbolFace 現在スコア。この点数によってクイズの選択肢数が変化する
     */
    constructor(
        symbolFace: SymbolFaceValueInterface,
    ) {
        this.symbolFaceValue = symbolFace;
        this.fontWeight = this.createFontWeight();
        this.fontStyle = this.createFontWeight();
    }

    /**
     * 文字の太さ設定をランダムに返却する。
     */
    createFontWeight(
    ): string {

        if (BooleanFactory.atRandom(4)) {
            return SymbolPresenter.fontWeight.bold;
        } else if (BooleanFactory.atRandom(4)) {
            return SymbolPresenter.fontWeight.light;
        }
        else if (BooleanFactory.atRandom(4)) {
            return SymbolPresenter.fontWeight.bolder;
        }

        return SymbolPresenter.fontWeight.normal;
    }

    /**
     * 文字の太さ設定をランダムに返却する。
     */
    createFontStyle(
    ): string {

        if (BooleanFactory.atRandom(4)) {
            return SymbolPresenter.fontStyle.italic;
        } else if (BooleanFactory.atRandom(4)) {
            return SymbolPresenter.fontStyle.oblique;
        }

        return SymbolPresenter.fontStyle.normal;
    }
}
