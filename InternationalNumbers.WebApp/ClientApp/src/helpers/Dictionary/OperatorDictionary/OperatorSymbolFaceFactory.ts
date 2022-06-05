// PJ共通
import type * as ArithmeticType from '../../../types/ArithmeticType';
import { ArrayExtractHelper } from '../../Array/ArrayExtractHelper';

// 辞書「演算子」系のヘルパー共通
import type * as OperatorDictionaryType from './types/OperatorDictionaryType';
import { ObjectMapExtractHelper } from '../../Object/ObjectMapExtractHelper';
import { OperatorSymbolFace } from './OperatorSymbolFace';

/**
 * 記号形式の「演算子」の情報のうち「目に見える表現」に注目したデータ。
 */
export class OperatorSymbolFaceFactory {

    /**
     * 演算子の「値」から、ランダムに「形」を選んだインスタンスを生成する。
     * 
     * @param sourceDictionaries 辞書データ。言語等の縛りがある場合は事前に取り除いておく
     * @param value 数の値
     * @returns
     */
    static randomShape(
        sourceDictionaries: OperatorDictionaryType.SymbolDictionarySourceMap,
        operator: ArithmeticType.FourArithmeticOperator,
    ): OperatorSymbolFace {
        const dictionary = ObjectMapExtractHelper.takeOne<OperatorDictionaryType.SymbolDictionarySource>(sourceDictionaries);
        const dictionaryShapes = dictionary.shapeMap[operator];

        return new OperatorSymbolFace(
            dictionary,
            operator,
            ArrayExtractHelper.takeOne<string>(dictionaryShapes),
        );
    }
}
