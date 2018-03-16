using System.Collections;

namespace Enumerable
{
    /// <summary>
    /// Enumerable Class - simple version
    /// </summary>
    class EnumerableClass: IEnumerable
    {
        public int[] array = new int[5] { 1, 2, 3, 4, 5 };

        // Lame implementation! U should override Enumerator methods: MoveNext, Current and Reset just like on MSDN example
        public IEnumerator GetEnumerator()
        {
            return array.GetEnumerator();
        }
    }
}
