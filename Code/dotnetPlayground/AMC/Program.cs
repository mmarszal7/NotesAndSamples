using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AMC
{
    /// <summary>
    /// Testing few issues prepared by AMC
    /// like async race, delegates, extension methods etc.
    /// </summary>
    class Program
    {
        private static string result = "nic";

        static void Main(string[] args)
        {
            // AMC //////////////////////////////
            Console.WriteLine(Fibo(15));

            // Circle delegate + lambda
            Circle x = new Circle();
            Console.WriteLine(x.Calculate(r => 2 * 3.14 * r));

            // Async race
            SaySomething();
            Console.WriteLine(result);

            // Extension methods  - extension of string
            string text = "Some string";
            Console.WriteLine(text.Reverse()); // Reverse to doimplementowana / rozszerzajaca metoda

            // Singleton use
            Console.WriteLine(Singleton.Instance.name.ToString());

            Console.ReadLine();

        }

        static async Task<string> SaySomething()
        {
            await Task.Delay(5);
            result = "Hello";
            return "Something";

        }

        public static int Fibo(int x)
        {
            if (x <= 0) return 0;
            if (x == 1) return 1;
            return Fibo(x - 2) + Fibo(x - 1);

        }

    }


}
