using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Enumerable
{
    /// <summary>
    /// Two ways of making Enumerable class by implementing IEnumerable
    /// and IEnumerator interfaces
    /// </summary>
    class Program
    {
        static void Main(string[] args)
        {
            // Zagadnienia dodatkowe ////////////////////////////////
            // Iteracja po klasie Enumerable
            EnumerableClass y = new EnumerableClass();
            foreach(int yy in y) { Console.WriteLine(yy); }

            Kolekcja kolekcja = new Kolekcja();
            foreach(var x in kolekcja) { Console.WriteLine(x); }


            // Mind blowing przyklad z kolekcjami - lista referencji do tego
            // samego obiektu
            //Pilka p = new Pilka("czarna");
            //List<Pilka> list = new List<Pilka>() { p, p, p, p, p };
            //
            //list.ForEach(pp => Console.WriteLine(pp.Kolor));
            //p.Kolor = "zielony";
            //list.ForEach(pp => Console.WriteLine(pp.Kolor));

            Console.ReadLine();
        }
    }
}
