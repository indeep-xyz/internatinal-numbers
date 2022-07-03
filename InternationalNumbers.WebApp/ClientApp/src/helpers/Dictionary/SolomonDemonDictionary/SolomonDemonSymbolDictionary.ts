// PJ共通
import { PublicImageFile } from '../../../types/PublicFileType';

// 辞書「ソロモンの悪魔」系のヘルパー共通
import { DictionarySourceMap } from './constants/symbols/index';
import { SolomonDemonPositionJaType, SolomonDemonPositionType, SolomonDemonSymbolDictionarySourceType } from './types/SolomonDemonDictionaryType';


/**
 * ソロモンの悪魔の情報を扱うクラス。
 */
export class SolomonDemonSymbolDictionary {

    static getDictionaryNames()
        : string[] {
        return Object.keys(DictionarySourceMap);
    }

    readonly name: string;
    readonly label: string;
    readonly labelJa: string;
    readonly position: SolomonDemonPositionType[];
    readonly positionJa: SolomonDemonPositionJaType[];
    readonly symbolShapes: PublicImageFile[];
    readonly orderNumber: number;
    readonly numberOfdemonLegions: string;

    constructor(
        name: string,
    ) {
        const ds: SolomonDemonSymbolDictionarySourceType = DictionarySourceMap[name];

        this.name = ds.name;
        this.label = ds.label;
        this.labelJa = ds.labelJa;
        this.position = ds.position;
        this.positionJa = ds.positionJa;
        this.symbolShapes = ds.symbolShapes;
        this.orderNumber = ds.orderNumber;
        this.numberOfdemonLegions = ds.numberOfdemonLegions;
    }


}
