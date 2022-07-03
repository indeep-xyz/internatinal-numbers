// PJ共通
import { ComparableInterface } from '../../../interfaces/ComparableInterface';
import { PublicImageFile } from '../../../types/PublicFileType';

// 辞書「ソロモンの悪魔」系のヘルパー共通
import { SolomonDemonSymbolDictionarySourceType } from './types/SolomonDemonDictionaryType';

/**
 * ソロモンの悪魔の情報のうち「目に見える表現」に注目したデータ。
 */
export class SolomonDemonSymbolFace
    implements ComparableInterface<SolomonDemonSymbolFace> {

    /** 辞書データ */
    readonly dictionary: SolomonDemonSymbolDictionarySourceType;

    /** ソロモンの悪魔のシジルの「形」を表す文字列 */
    readonly symbolShape: PublicImageFile;

    /**
     * コンストラクタ。
     * @param sourceDictionary 辞書データ
     * @param orderNo 序列番号
     * @param shape 文字形
     */
    constructor(
        sourceDictionary: SolomonDemonSymbolDictionarySourceType,
        symbolShape: PublicImageFile,
    ) {
        this.symbolShape = symbolShape;
        this.dictionary = sourceDictionary;
    }

    /**
     * 同値比較。
     * @param another 判定対象データ
     * @returns 同値ならtrue
     */
    equals(
        another: SolomonDemonSymbolFace
    ): boolean {
        return this.symbolShape === another.symbolShape;
    }
}
