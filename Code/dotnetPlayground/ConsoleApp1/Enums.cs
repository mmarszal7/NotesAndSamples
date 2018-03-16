using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    public enum Typ
    {
        X = 5,
        Y = 2
    }

    class Enums
    {
        public Enums()
        {
            Console.WriteLine("sam"+Typ.X);
            Console.WriteLine("toString" + Typ.X.ToString());
            Console.WriteLine("int" + (int)Typ.X);
        }
    }
}
