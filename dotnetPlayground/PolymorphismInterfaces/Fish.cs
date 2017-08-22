using System;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;

namespace PolymorphismInterfaces
{
    [Serializable]
    class Fish : Animal, ICloneable
    {
        public int Age { get; set; }
        public Fish(string name, int age) : base(name)
        {
            this.Age = age;
        }

        public object Clone()
        {
            MemoryStream ms = new MemoryStream();
            BinaryFormatter bf = new BinaryFormatter();

            bf.Serialize(ms, this);

            ms.Position = 0;
            object obj = bf.Deserialize(ms);
            ms.Close();

            return obj as Fish;
        }

        override public string WhatDoesTheAnimalSay()
        {
            return "bool bool";
        }
    }
}
