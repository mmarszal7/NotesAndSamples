using System;

namespace Events
{
    // Ogólnie wszystko polega na utworzeniu instancji (eventu) pewnego delegata w klasie I, a następnie na subskrybji tej instacji w klasie II
    // 1. Przygotowanie typu eventu/delegata (to to samo, z tyle że event może być tylko dodawany(subskrybowany) +=).
    //public delegate void DelegateEvent(); 
    class Game
    {
        // 2. Utworzenie instancji delegata dla danej klasy. Typ delegate może być custom, ale też Action, Func, EventHandler itp.
        public static event Action OnWin; 
        static int goal;

        private static void Main(string[] args)
        {
            // 3.1. Utworzenie subskrybenta, obiektu który będzie obserwował delegata
            Achievements achievements = new Achievements();
            //OnWin += () => Console.WriteLine("You won!"); // event można też subskrybować z wnętrza klasy
            GameStart();
        }

        static void Won()
        {
            // 4. Raise eventu.
            OnWin?.Invoke();
            goal = new Random().Next(1, 100);
        }

        static void GameStart()
        {
            Console.WriteLine("Hello! Pick number from 1 to 100...");
            string inputString;
            int pick;
            goal = new Random().Next(1, 100);

            while (true)
            {
                inputString = Console.ReadLine();

                if (Int32.TryParse(inputString, out pick))
                {
                    if (pick == goal)
                        Won();
                    else if (pick > goal)
                        Console.WriteLine("A little bit less");
                    else
                        Console.WriteLine("A little bit more");
                }
                else
                    Console.WriteLine("I said number...");
            }
        }
    }
}
