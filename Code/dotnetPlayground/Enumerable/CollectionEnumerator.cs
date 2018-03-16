using System;
using System.Collections;
using System.Collections.Generic;

namespace Enumerable
{
    class CollectionEnumerator : IEnumerator
    {
        public List<string> StringList = new List<string>(4) { "Value One", "Value Two", "Value Three", "Value Four", "Value Five" };
        public int Counter = -1;

        public object Current
        {
            get { return StringList[Counter]; }
        }

        public bool MoveNext()
        {
            Counter++;
            return Counter != StringList.Count;
        }

        public void Reset()
        {
            Counter = 1;
        }
    }
}