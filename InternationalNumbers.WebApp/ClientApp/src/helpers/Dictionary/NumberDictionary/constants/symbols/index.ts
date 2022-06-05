import type * as NumberDictionaryType from '../../types/NumberDictionaryType';

// symbol
import { abjad } from "./abjad";
import { arabic_eastern_presian } from "./arabic_eastern_presian";
import { arabic_eastern_urdu } from "./arabic_eastern_urdu";
import { arabic_mideast } from "./arabic_mideast";
import { arabic_western } from "./arabic_western";
import { armenian } from "./armenian";
import { bengali } from "./bengali";
import { burmese } from "./burmese";
import { cyrillic } from "./cyrillic";
import { devanagari } from "./devanagari";
import { ge_ez } from "./ge_ez";
import { glagolitic } from "./glagolitic";
import { greek_modern } from "./greek_modern";
import { gujarati } from "./gujarati";
import { gurmukhi } from "./gurmukhi";
import { hangul_native } from "./hangul_native";
import { hangul_sino } from "./hangul_sino";
import { hebrew } from "./hebrew";
import { kanji_japanese_complex } from "./kanji_japanese_complex";
import { kanji_simple } from "./kanji_simple";
import { kannada } from "./kannada";
import { khmer } from "./khmer";
import { lao } from "./lao";
import { malayalam } from "./malayalam";
import { mongolian } from "./mongolian";
import { n_ko } from "./n_ko";
import { odia } from "./odia";
import { osmanya } from "./osmanya";
import { persian } from "./persian";
import { roman } from "./roman";
import { thai } from "./thai";
import { tai_new_lue } from "./tai_new_lue";
import { tamil } from "./tamil";
import { telugu } from "./telugu";
import { tibetan } from "./tibetan";
import { sinhala_archaic } from "./sinhala_archaic";
import { sinhala_astrological } from "./sinhala_astrological";
import { suzhou } from "./suzhou";
import { vietnamese } from "./vietnamese";

console.log(abjad);

// map
export const DictionarySourceMap: NumberDictionaryType.SymbolDictionarySourceMap = {
    abjad,
    arabic_eastern_presian,
    arabic_eastern_urdu,
    arabic_mideast,
    arabic_western,
    armenian,
    bengali,
    burmese,
    cyrillic,
    devanagari,
    ge_ez,
    glagolitic,
    greek_modern,
    gujarati,
    gurmukhi,
    hangul_native,
    hangul_sino,
    hebrew,
    kanji_japanese_complex,
    kanji_simple,
    kannada,
    khmer,
    lao,
    malayalam,
    mongolian,
    n_ko,
    odia,
    osmanya,
    persian,
    roman,
    tai_new_lue,
    thai,
    tamil,
    telugu,
    tibetan,
    sinhala_archaic,
    sinhala_astrological,
    suzhou,
    vietnamese,
};