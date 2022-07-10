// PJ共通
import { ComparableInterface } from '../../../interfaces/ComparableInterface';
import { PublicImageFile } from '../../../types/PublicFileType';

// 辞書「ソロモンの悪魔」系のヘルパー共通
import { SolomonDemonSymbolImageDir, SolomonDemonSymbolImageWidthList } from './constants/generals';
import { SolomonDemonSymbolDictionaryShapeType, SolomonDemonSymbolDictionarySourceType } from './types/SolomonDemonDictionaryType';
import { SolomonDemonSymbolDictionary } from './SolomonDemonSymbolDictionary';

/**
 * ソロモンの悪魔の情報のうち「目に見える表現」に注目したデータ。
 */
export class SolomonDemonSymbolFace
    implements ComparableInterface<SolomonDemonSymbolFace> {

    /** 辞書データ */
    readonly dictionary: SolomonDemonSymbolDictionary;

    /** ソロモンの悪魔のシジルの「形」を表す文字列 */
    readonly symbolShape: PublicImageFile;

    /**
     * コンストラクタ。
     * @param dictionary 辞書データ
     * @param orderNo 序列番号
     * @param shape 文字形
     */
    constructor(
        dictionary: SolomonDemonSymbolDictionary,
        symbolShape: SolomonDemonSymbolDictionaryShapeType,
    ) {
        this.symbolShape = this.convertShapeSourceToPublicFile(symbolShape);
        this.dictionary = dictionary;
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

    /**
     * 同値比較。
     * @param another 判定対象データ
     * @returns 同値ならtrue
     */
    private convertShapeSourceToPublicFile(
        shape: SolomonDemonSymbolDictionaryShapeType,
    ): PublicImageFile {
        return {
            fileSourceLicense: "publicDomain",
            fileSourceUrl: shape.sourceFilePath,
            fileUrl: `${SolomonDemonSymbolImageDir}/[[width]]px/${shape.publicFileName}`,
            widthList: SolomonDemonSymbolImageWidthList,
        };
    }
}
