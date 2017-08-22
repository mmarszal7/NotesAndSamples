using System;

namespace AMC
{
    static class ExtensionMethodClass
    {
        public static string Reverse(this string str)
        {
            char[] charArray = str.ToCharArray();
            Array.Reverse(charArray);
            return new string(charArray);
        }
            public static int WordCounter(this string str)
        {
            // pobrany łańcuch znaków dzielimy na pojedyczne wyrazy. Są one dzielone po znakach spacji,
            // kropki oraz znaku zapytania. Jeżeli pojawią się puste ciągi znaków będą ignorowane
            string[] userText = str.Split(new char[] { ' ', '.', '?' }, StringSplitOptions.RemoveEmptyEntries);
            // sprawdzamy liczbę wystąpień naszych słów
            int counter = userText.Length;
            return counter;
        }
        public static int TotalCharactersWithoutSpace(this string str)
        {
            int counter = 0;
            // w tej metodzie pobrany łańcuch znaków dzielimy na wyrazy jedynie po znaku spacji
            // Dlaczego tak? Chcemy policzyć wszystkie znaki, włącznie z ',' czy '.'
            string[] userText = str.Split(' ');
            // pobieramy każdy z wyrazów a następnie sprawadzamy ilość znaków
            foreach (var item in userText)
            {
                counter += item.Length;
            }
            return counter;
        }
        public static int TwoSentences(this string str, string str2)
        {
            // łączymy dwa ciągi znaków w jeden
            string completeSentence = String.Concat(str, str2);
            // pobrany łańcuch znaków dzielimy na pojedyczne wyrazy. Są one dzielone po znakach spacji,
            // kropki oraz znaku zapytania. Jeżeli pojawią się puste ciągi znaków będą ignorowane
            string[] text = completeSentence.Split(new char[] { ' ', '.', '?' }, StringSplitOptions.RemoveEmptyEntries);
            // sprawdzamy liczbę wystąpień naszych słów
            int counter = text.Length;
            return counter;
        }
        // Może niezbyt udany przykład ale pokazuje użycie większej liczby parametrów różnych typów
        public static string ConcatParameters(this string str, string str2, bool flaga, int number)
        {
            string myOwnText = string.Empty;
            myOwnText = String.Concat(str, str2, "Przekazana flaga: " + flaga, "\nPrzekazana liczba: " + number);
            return myOwnText;
        }

    }
}
