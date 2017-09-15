using System;

namespace Events
{
    public class Achievements
    {
        public Achievements()
        {
            // 3.2. Subskrypcja delegata w konstruktorze eventu
            Game.OnWin += () => Console.WriteLine("You won!");
        }
    }
}
