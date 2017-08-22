using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Delegates
{
    /// <summary>
    /// 2 Examples of using delegates
    /// </summary>
    class Program
    {
        static void Main()
        {
            // Very simple use of delegates - easy to understand
            MyClass delegateOne = new MyClass();
            delegateOne.Example();
            Console.WriteLine("\n");

            // More practical use
            Test test = new Test();

            Console.ReadLine();
        }
    }
}
