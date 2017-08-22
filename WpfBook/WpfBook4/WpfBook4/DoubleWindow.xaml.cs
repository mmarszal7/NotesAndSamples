using System;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Windows;
using System.Windows.Data;

namespace WpfBook4
{
    /// <summary>
    /// Rozbudowana wersja MainWindow uzupelniona o mozliwosc edycji rekordow oraz pracy w dwoch okienkach
    /// </summary>
   
    public partial class DoubleWindow : Window
    {
        internal ObservableCollection<Produkt> ListaProduktow = null;
        
        public DoubleWindow()
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

        private void lstProdukty_MouseDoubleClick(object sender, System.Windows.Input.MouseButtonEventArgs e)
        {
            Window1 okno1 = new Window1(this);
            //okno1.Show();
            okno1.ShowDialog(); //wariant z oknem dialogowym - max 1 na raz
        }

        private void btnAdd_Click(object sender, RoutedEventArgs e)
        { 
            Window1 okno1 = new Window1(this, true);
            //okno1.Show();
            okno1.ShowDialog(); //wariant z oknem dialogowym - max 1 na raz
        }

        private void btnDelete_Click(object sender, RoutedEventArgs e)
        {
            Produkt produktZListy = lstProdukty.SelectedItem as Produkt;
            if (produktZListy != null)
            {
                MessageBoxResult odpowiedz = MessageBox.Show("Czy wykasować produkt: " +
                    produktZListy.ToString() + "?", "Pytanie", MessageBoxButton.YesNo,
                    MessageBoxImage.Question);
                if (odpowiedz == MessageBoxResult.Yes)
                {
                    ListaProduktow.Remove(produktZListy);                // usuwamy produkt z listy (kolekcji)
                }
            }
        }
    }
}
