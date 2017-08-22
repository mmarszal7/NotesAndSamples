using System;
using System.Collections.Generic;
using System.IO;

namespace RegularExpresions
{
    class Program
    {
        static void Main(string[] args)
        {
            using (StreamReader sr = File.OpenText("C:\\Users\\Komputer\\Documents\\Visual Studio 2017\\Projects\\aPlayground\\RegularExpresions\\sample.txt"))
            {
                string test = sr.ReadToEnd();
                Console.WriteLine(test + "\n\n\n\n");
            }






            Console.Read();
        }
    }
}
