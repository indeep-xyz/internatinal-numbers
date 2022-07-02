﻿using InternationalNumbers.WebApp.Api.Helpers.Excel;
using InternationalNumbers.WebApp.Api.Helpers.Excel.Attributes;
using InternationalNumbers.WebApp.Api.Helpers.Excel.Models;
using System.Collections.Generic;

namespace InternationalNumbers.WebApp.Api.Repositories.InternationalNumberSource.Models
{
    /// <summary>
    /// 各種数字の文字形に関する情報。（Excel 情報抽出時のバッファ）
    /// </summary>
    public class InternationalNumberSourceShapeBuffer
        : ExcelListConversionBuffer<InternationalNumberSourceShapeBuffer>
    {
        #region フィールド

        /// <summary>
        /// 抽出対象のシート名
        /// </summary>
        private const string SheetName = "shape";

        [ExcelListColumnName("分類キー")]
        public string Key;

        [ExcelListColumnName("数値")]
        public string Value;

        [ExcelListColumnName("文字表現")]
        public string String;

        [ExcelListColumnName("ユニコード（１文字目）")]
        public string Unicode1;

        [ExcelListColumnName("ユニコード（２文字目）")]
        public string Unicode2;

        [ExcelListColumnName("ユニコード（３文字目）")]
        public string Unicode3;

        #endregion フィールド
        #region 抽出処理

        /// <summary>
        /// 一覧形式の Excel からのデータ抽出・変換呼び出し。
        /// </summary>
        /// <param name="excelReader"></param>
        /// <returns></returns>
        public new static List<InternationalNumberSourceShapeBuffer> ConvertAsList(
            ExcelReader excelReader)
        {
            return excelReader.ConvertAsList<InternationalNumberSourceShapeBuffer>(SheetName);
        }

        #endregion 抽出処理
    }
}
