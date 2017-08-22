using System;

namespace  WpfBook5
{
    class Produkt 
    {
        public string Symbol { get; set; }
        public string Nazwa { get; set; }
        public int LiczbaSztuk { get; set; }
        public string Magazyn { get; set; }
        public Uri Obraz { get; set; }
        public string Opis { get; set; }

        public Produkt(string sym, string naz, int lszt, string mag)
        {
            Symbol = sym;
            Nazwa = naz;
            LiczbaSztuk = lszt;
            Magazyn = mag;
            Obraz = new System.Uri(@"C:\Users\Komputer\Documents\Visual Studio 2017\Projects\WpfBook5\WpfBook5\obraz.png");
            Opis = "Opis, bla, bla, bla";
        }

        public override string ToString()
        {
            return String.Format("{0} {1} {2} {3} {4}", Symbol, Nazwa, LiczbaSztuk, Magazyn, Obraz);
        }
    }
}
