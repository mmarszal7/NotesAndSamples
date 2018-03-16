using System;

namespace Delegates
{
    #region Class to total and average prices of books:
    class PriceTotaller
    {
        int countBooks = 0;
        decimal priceBooks = 0.0m;

        internal void AddBookToTotal(Book book)
        {
            countBooks += 1;
            priceBooks += book.Price;
        }

        internal decimal AveragePrice()
        {
            return priceBooks / countBooks;
        }
    }
    #endregion

    class Test
    {
        public Test()
        {
            // Initialize the database with some books:
            BookDB bookDB = new BookDB();
            AddBooks(bookDB);

            // Print all the titles of paperbacks:
            // Create a new delegate object associated with method Test.PrintTitle:
            Console.WriteLine("(Delegate test1) Paperback Book Titles:");
            bookDB.ProcessPaperbackBooks(new ProcessBookDelegate(PrintTitle));

            // Get the average price of a paperback by using
            // Create a new delegate object associated with 
            // method AddBookToTotal on the object totaller:
            PriceTotaller totaller = new PriceTotaller();
            bookDB.ProcessPaperbackBooks(new ProcessBookDelegate(totaller.AddBookToTotal));
            Console.WriteLine("(Delegate test2) Average Paperback Book Price: ${0:#.##}",
               totaller.AveragePrice());
        }

        // Print the title of the book.
        public void PrintTitle(Book b)
        {
            Console.WriteLine("   {0}", b.Title);
        }

        // Initialize the book database with some test books:
        static void AddBooks(BookDB bookDB)
        {
            bookDB.AddBook("The C Programming Language",
               "Brian W. Kernighan and Dennis M. Ritchie", 19.95m, true);
            bookDB.AddBook("The Unicode Standard 2.0",
               "The Unicode Consortium", 39.95m, true);
            bookDB.AddBook("The MS-DOS Encyclopedia",
               "Ray Duncan", 129.95m, false);
            bookDB.AddBook("Dogbert's Clues for the Clueless",
               "Scott Adams", 12.00m, true);
        }
    }
}

