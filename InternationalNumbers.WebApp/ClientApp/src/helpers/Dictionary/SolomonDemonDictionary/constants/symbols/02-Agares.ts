import type * as SolomonDemonDictionaryType from '../../types/SolomonDemonDictionaryType';
import { SolomonDemonSymbolImageDir, SolomonDemonSymbolImageWidthList } from '../generals';

export const agares: SolomonDemonDictionaryType.SymbolDictionarySource = {
    'name': 'agares',
    'label': 'Agares',
    'labelJa': 'アガレス',
    'position': ['duke'],
    'positionJa': ['公爵'],
    'orderNumber': 2,
    'numberOfdemonLegions': '31',
    'symbolShapes': [
        {
            fileSourceUrl: 'https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:02-Agares_seal.png',
            fileSourceLicense: 'publicDomain',
            fileUrl: `${SolomonDemonSymbolImageDir}/[[width]]px/02-Agares-01.png`,
            widthList: SolomonDemonSymbolImageWidthList,
        }
    ],
};
