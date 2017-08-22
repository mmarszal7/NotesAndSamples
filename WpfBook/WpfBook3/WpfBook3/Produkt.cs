using System;

namespace WpfBook3
{
    // Klasa Produkt
    class Produkt
    {
        public string Symboll { get; set; }
        public string Nazwa { get; set; }
        public int LiczbaSztuk { get; set; }
        public string Magazyn { get; set; }

        public Produkt(string sym, string naz, int lszt, string mag)
        {
            Symboll = sym;
            Nazwa = naz;
            LiczbaSztuk = lszt;
            Magazyn = mag;
        }

        public override string ToString()
        {
            return String.Format("{0} {1} {2} {3}", Symboll, Nazwa, LiczbaSztuk, Magazyn);
        }
    }
}
