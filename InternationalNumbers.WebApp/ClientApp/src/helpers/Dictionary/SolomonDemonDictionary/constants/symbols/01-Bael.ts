import { SolomonDemonSymbolDictionarySourceType } from '../../types/SolomonDemonDictionaryType';
import { SolomonDemonSymbolImageDir, SolomonDemonSymbolImageWidthList } from '../generals';

export const bael: SolomonDemonSymbolDictionarySourceType = {
    'name': 'bael',
    'label': 'Bael',
    'labelJa': 'バエル',
    'position': ['king'],
    'positionJa': ['王'],
    'orderNumber': 1,
    'numberOfdemonLegions': '32以上',
    'symbolShapes': [
        {
            fileSourceUrl: 'https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:01-Bael_seal.png',
            fileSourceLicense: 'publicDomain',
            fileUrl: `${SolomonDemonSymbolImageDir}/[[width]]px/01-Bael-01.png`,
            widthList: SolomonDemonSymbolImageWidthList,
        }
    ],
};
