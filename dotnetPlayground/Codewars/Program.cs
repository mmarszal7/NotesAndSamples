using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Codewars
{
    /// <summary>
    /// Tasks made for Codewars - website with programming exercises
    /// </summary>
    class Program
    {
        static void Main(string[] args)
        {
            // Codewise - crypto
            Console.Write(CryptoGraphy.Encrypt("This is a test!", 2));
            Console.Write(CryptoGraphy.Decrypt("s eT ashi tist!", 2));

            // Codewise - sum of digits
            foreach (long c in SumOfDigits.SumDigPow(1, 150)) { Console.Write(c + "\n"); }

        }
    }
}
