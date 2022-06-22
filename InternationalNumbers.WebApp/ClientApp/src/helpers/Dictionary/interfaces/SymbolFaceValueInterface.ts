import { SymbolDictionaryPresentationInterface } from "./SymbolDictionaryPresentationInterface";

/**
 * 辞書情報のうち「目に見える表現」に注目したデータのインターフェイス。
 */
export interface SymbolFaceValueInterface {
    /** 辞書データ */
    dictionary: SymbolDictionaryPresentationInterface;

    /** 文字の「値」の文字列表現（常に英数字 or 一般的な記号） */
    readonly valueAsString: string;

    /** 文字の「形」を表す文字列 */
    shape: string;
};
