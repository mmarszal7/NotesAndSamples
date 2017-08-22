using System;

namespace Delegates
{
    // Declare a delegate - void with 1 string as argument
    delegate void MyDelegate(string s);

    class MyClass
    {
        // Implementing 2 void methonds with 1 string argument
        public void Hello(string s)
        {
            Console.WriteLine("  Hello, {0}!", s);
        }

        public void Goodbye(string s)
        {
            Console.WriteLine("  Goodbye, {0}!", s);
        }

        public void Example()
        {
            MyDelegate a, b, c, d;

            a = new MyDelegate(Hello);
            b = new MyDelegate(Goodbye);
            
            c = a + b;
            d = c - a;

            Console.WriteLine("Invoking delegate a:");
            a("A");
            Console.WriteLine("Invoking delegate b:");
            b("B");
            Console.WriteLine("Invoking delegate c:");
            c("C");
            Console.WriteLine("Invoking delegate d:");
            d("D");
        }
    }
}

