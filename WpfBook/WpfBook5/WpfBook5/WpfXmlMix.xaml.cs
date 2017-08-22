using System.Windows;
using System.Xml.Linq;
using System.IO;
using System.Collections.ObjectModel;

namespace WpfBook5
{
    /// <summary>
    /// To samo co MainWindow, tylko z innym przechowywaniem listy danych - tutaj wykorzytstany jest plik xml - Produkty.xml
    /// </summary>
    public partial class WpfXmlMix : Window
    {
        private string plik1 = @"..\..\Produkty.xml";
        private string plik2 = @"..\..\Produkty2.xml";
        private XElement wykazPorduktow;

        public WpfXmlMix()
        {
            InitializeComponent();
            PrzygotujWiazanie();
        }

        public void PrzygotujWiazanie()
        {
            if (File.Exists(plik1))
                wykazPorduktow = XElement.Load(plik1);
            gridProdukty.DataContext = wykazPorduktow;

            ObservableCollection<string> ListaMagazynow =
           new ObservableCollection<string>() { "Katowice 1", "Katowice 2", "Gliwice 1" };
            nazwaMagazynu.ItemsSource = ListaMagazynow;
        }

        private void btnZapisz_Click(object sender, RoutedEventArgs e)
        {
            wykazPorduktow.Save(plik2);
            MessageBox.Show("Zapisano pomyslnie");
        }
    }
}
