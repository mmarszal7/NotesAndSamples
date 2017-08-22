using System;
using System.Collections.Generic;

namespace PolymorphismInterfaces
{
    class Program
    {
        static void Main(string[] args)
        {
            //List<Animal> zwierzeta = new List<Animal>
            List<IAnimal> zwierzeta = new List<IAnimal>
            {
                new Fish("Rybka", 5),
                new Fish("Ryba", 2),
                new Fish("Szczupak", 30),
                new Mammal("Czlowiek"),
                new Mammal("Koń"),
                new Mammal("Czupakabra")
            };

            zwierzeta.ForEach(x => Console.WriteLine(x.WhatDoesTheAnimalSay()));

            Console.ReadLine();
        }
    }
}
