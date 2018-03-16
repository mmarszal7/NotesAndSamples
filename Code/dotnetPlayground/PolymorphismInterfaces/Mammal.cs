namespace PolymorphismInterfaces
{
    class Mammal : Animal
    {
        public Mammal(string name) : base(name)
        {
        }

        override public string WhatDoesTheAnimalSay()
        {
            return "cokolwiek";
        }
    }
}
