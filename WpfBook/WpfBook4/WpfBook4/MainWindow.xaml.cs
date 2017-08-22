using System.Windows;
using System.Windows.Data;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System;

namespace WpfBook4
{
    /// <summary>
    /// Lista produktow wraz ze zmiana domyslnego szablonu ListView, sortowaniem i customowym filtrem
    /// </summary>

    public partial class MainWindow : Window
    {
        private ObservableCollection<Produkt> ListaProduktow = null;
        public MainWindow()
        {
            InitializeComponent();
            PrzygotujWiazanie();
        }

        private void PrzygotujWiazanie()
        {
            ListaProduktow = new ObservableCollection<Produkt>
            {
                new Produkt("O1-11", "ołówek", 8, "Katowice 1"),
                new Produkt("PW-20", "pióro wieczne", 75, "Katowice 2"),
                new Produkt("DZ-10", "długopis żelowy", 1121, "Katowice 1"),
                new Produkt("DZ-12", "długopis kulkowy", 280, "Katowice 2")
            };

            lstProdukty.ItemsSource = ListaProduktow;

            #region Sortowanie w widoku
            CollectionView widok = (CollectionView)CollectionViewSource.GetDefaultView(lstProdukty.ItemsSource);
            // Sortowanie wg magazynu
            widok.SortDescriptions.Add(new SortDescription("Magazyn", ListSortDirection.Ascending));
            // Sortowanie wg nazwy
            widok.SortDescriptions.Add(new SortDescription("Nazwa", ListSortDirection.Ascending));
            #endregion

            // Customowy filtr
            widok.Filter = FiltrUzytkownika;
        }

        // Customowy filtr
        private bool FiltrUzytkownika(object item)
        {
            if (String.IsNullOrEmpty(txtFilter.Text))
                return true;
            else
                return ((item as Produkt).Nazwa.IndexOf(txtFilter.Text, StringComparison.OrdinalIgnoreCase) >= 0);
        }

        private void txtFilter_TextChanged(object sender, System.Windows.Controls.TextChangedEventArgs e)
        {
            CollectionViewSource.GetDefaultView(lstProdukty.ItemsSource).Refresh();
        }
    }

}
