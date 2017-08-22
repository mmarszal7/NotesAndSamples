using System;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;

namespace WpfBook5
{
    /// <summary>
    /// Wykorzystanie DataGrid do prezentacji danych z listy
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
            ListaProduktow = new ObservableCollection<Produkt>();
            ListaProduktow.Add(new Produkt("O1-11", "ołówek", 8, "Katowice 1"));
            ListaProduktow.Add(new Produkt("PW-20", "pióro wieczne", 75, "Katowice 2"));
            ListaProduktow.Add(new Produkt("DZ-10", "długopis żelowy", 1121, "Katowice 1"));
            ListaProduktow.Add(new Produkt("DZ-12", "długopis kulkowy", 280, "Katowice 2"));
            gridProdukty.ItemsSource = ListaProduktow;

            // Dodanie wyliczeniowego Magazynu
            ObservableCollection<string> ListaMagazynow = new ObservableCollection<string>() { "Katowice 1", "Katowice 2", "Gliwice 1" };
            nazwaMagazynu.ItemsSource = ListaMagazynow;

            // Grupowanie - tak jak sortowanie
            CollectionView widok = (CollectionView)CollectionViewSource.GetDefaultView(gridProdukty.ItemsSource);
            widok.GroupDescriptions.Add(new PropertyGroupDescription("Magazyn"));
        }

        private void btnDodaj(object sender, RoutedEventArgs e)
        {
            // Otwarcie okna z przegladem plikow
            Microsoft.Win32.OpenFileDialog dialog = new Microsoft.Win32.OpenFileDialog();
            dialog.Title = "Wybierz zdjęcie";
            dialog.Filter = "Image files (*.jpg,*.png;*.jpeg)|*.jpg;*.png;*.jpeg|All files (*.*)|*.*";
            if (dialog.ShowDialog() == true)
            {
                (gridProdukty.SelectedItem as Produkt).Obraz = new Uri(dialog.FileName);
                gridProdukty.CommitEdit(DataGridEditingUnit.Cell, true);
                gridProdukty.CommitEdit();
                CollectionViewSource.GetDefaultView(gridProdukty.ItemsSource).Refresh();
            }
        }
    }
}
