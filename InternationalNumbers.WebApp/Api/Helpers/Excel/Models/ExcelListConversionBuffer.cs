using System;
using System.Collections.Generic;

namespace InternationalNumbers.WebApp.Api.Helpers.Excel.Models
{
    /// <summary>
    /// 一覧形式の Excel からのデータ抽出・変換呼び出し処理および、変換結果の一時保持機能をもつクラスの抽象型。
    /// </summary>
    /// <typeparam name="TClass">変換結果のクラス</typeparam>
    public abstract class ExcelListConversionBuffer<TClass> where TClass : new()
    {
        /// <summary>
        /// 一覧形式の Excel からのデータ抽出・変換呼び出し。
        /// </summary>
        /// <param name="excelReader"></param>
        /// <returns></returns>
        public static IEnumerable<TClass> ConvertAsList(ExcelReader excelReader)
        {
            throw new NotImplementedException();
        }
    }
}
