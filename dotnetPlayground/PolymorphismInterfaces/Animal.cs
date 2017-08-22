using System;

namespace PolymorphismInterfaces
{
    [Serializable]
    class Animal: IAnimal
    {
        public string Name { get; set; }

        public Animal(string name)
        {
            this.Name = name;
        }

        public virtual string WhatDoesTheAnimalSay()
        {
            return "";
        }
    }
}
