using System;

namespace Compare
{
    /// <summary>
    /// Experiments with comparing and cloning objects
    /// </summary>
    class Program
    {
        static void Main(string[] args)
        {

            /// All classes have to be Serializable
            Animal x1 = new Animal("Krokodyl", 20);
            Animal x2 = x1;
            Console.WriteLine("Przykadek w którym obiekt x = y: \n" +
                "{0}1 ma lat {1}, a {2}2 ma lat {3}\n", x1.Name, x1.Age, x2.Name, x2.Age);

            x1.Age = 0;
            Console.WriteLine("Zmiana wieku {0}a1 na 0 lat...", x1.Name);
            Console.WriteLine("{0}1 ma lat {1}, a {2}2 ma lat {3}", x1.Name, x1.Age, x2.Name, x2.Age);
            Console.WriteLine("Teraz oba krokodyle maja po 0 lat :(\n\n\n");

            Console.WriteLine("Zmiana wieku {0}a1 na 20 lat...", x1.Name);
            x1.Age = 20;
            Console.WriteLine("{0}1 ma lat {1}, a {2}2 ma lat {3}\n", x1.Name, x1.Age, x2.Name, x2.Age);

            x2 = ObjectCopier.CloneJson<Animal>(x1);
            x1.Age = 0;
            Console.WriteLine("Przykadek w którym obiekt x = y.Clone(): \n" +
                "{0}1 ma lat {1}, a {2}2 ma lat {3}\n", x1.Name, x1.Age, x2.Name, x2.Age);

            Console.ReadLine();
        }
    }
}
