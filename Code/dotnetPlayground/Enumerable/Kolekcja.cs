using System;
using System.Collections;

namespace Enumerable
{
    class Kolekcja: IEnumerable
    {
        public string text { get; set; }
        public Kolekcja()
        {
        }

        public IEnumerator GetEnumerator()
        {
            return new CollectionEnumerator();
        }

        
    }
}