using System;
using System.Diagnostics;
using System.IO;

namespace DatesIOAndProperties
{
    /// <summary>
    /// Dates, date formats, IO streams like StreamReader/StreamWriter 
    /// and some experiments with properties
    /// </summary>
    class Program
    {
        static void Main(string[] args)
        {
            Process process = new Process("ProcesPierwszy", new DateTime(2010, 12, 30));

            // Properties (get; set;)
            Console.WriteLine($"Getting things from object 'process': {process.name}, {process.startDate}");
            Console.WriteLine("Changing values of 'process' properties...");
            process.name = "ProcesPierwszy_v2";
            process.startDate = new DateTime(1994, 06, 07);
            Console.WriteLine($"Getting things from object 'process': {process.name}, {process.startDate}\n\n");

            // Date and $string 
            Console.WriteLine(process.ToString());
            Console.WriteLine($"Natomiast dziś jest {DateTime.Now.ToString("yyyy-mm-dd h:mm tt")}\n\n");

            // File IO
            using (StreamReader sr = File.OpenText(process.path))
            {
                string s = "";
                while ((s = sr.ReadLine()) != null)
                {
                    Console.WriteLine(s);
                }
            }

            Console.ReadKey();
        }
    }
}
