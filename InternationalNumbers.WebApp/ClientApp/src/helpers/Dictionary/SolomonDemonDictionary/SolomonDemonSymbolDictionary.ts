// PJ共通
import { LanguageCodeMapType } from '../../../types/LanguageType';
import { PublicImageFile } from '../../../types/PublicFileType';

// 辞書「ソロモンの悪魔」系のヘルパー共通
import { SolomonDemonPositionJaType, SolomonDemonPositionType, SolomonDemonSymbolDictionaryShapeType, SolomonDemonSymbolDictionarySourceType } from './types/SolomonDemonDictionaryType';


/**
 * ソロモンの悪魔の情報を扱うクラス。
 */
export class SolomonDemonSymbolDictionary {

    readonly key: string;
    readonly name: LanguageCodeMapType<string>;
    readonly position: LanguageCodeMapType<Array<string>>;
    readonly shapes: SolomonDemonSymbolDictionaryShapeType[];
    readonly orderNumber: number;

    constructor(
        ds: SolomonDemonSymbolDictionarySourceType,
    ) {
        this.key = ds.key;

        this.name = {
            en: ds.description.nameMap.en,
            ja: ds.description.nameMap.ja,
        };
        
        this.position = {
            en: ds.description.positionMap.en,
            ja: ds.description.positionMap.ja,
        };

        this.shapes = ds.shapes;
        this.orderNumber = ds.description.orderNo; // TODO: サーバー側含め Number にする
    }


}
