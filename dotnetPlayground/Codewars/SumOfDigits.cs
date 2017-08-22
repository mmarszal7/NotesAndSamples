using System.Collections.Generic;
using System.Numerics;

namespace Codewars
{
         
    class SumOfDigits
    {
        /// <summary>
        /// SumDigPow - method is looking for numbers (from a to b) which power of digits equals this number.
        /// Power of digit is connected to its place in number.Example 89 = 8^1 + 9^2 = 89 - ok
        /// </summary>
        /// <param name="a"></param>
        /// <param name="b"></param>
        /// <returns></returns>
        public static long[] SumDigPow(long a, long b)
        {
            List<long> finalArray = new List<long>();
            if (a < b && a > 0)
            {
                BigInteger sumOfDigs = 0;
                long clone;

                for (; a < b; a++)
                {
                    sumOfDigs = 0;
                    clone = a;
                    //Console.Write(a+" "+ b+"\n");
                    //Thread.Sleep(500);
                    for (int i = clone.ToString().Length; clone > 0; i--)
                    {
                        sumOfDigs = sumOfDigs + BigInteger.Pow(clone % 10, i);
                        clone = clone / 10;
                    }
                    if (sumOfDigs == a) finalArray.Add(a);
                }
            }
            return finalArray.ToArray();
        }

        /*
        public static long[] SumDigPow(long a, long b)
        {
            List<long> values = new List<long>();
            for (long x = a; x <= b; x++)
            {
                if (x.ToString().Select((c, i) => Math.Pow(Char.GetNumericValue(c), i + 1)).Sum() == x)
                    values.Add(x);
            }
            return values.ToArray();
        }
        */
    }
}
