using System.Windows;
using System.ComponentModel;

namespace WpfBook4
{
    /// <summary>
    /// Podokno z prezentacja Produktu
    /// </summary>
    public partial class Window1 : Window
    {
        private DoubleWindow mainWindow = null;      // Obiekt dla okna głównego
        private Produkt pl = null;
        private bool nowyProdukt = false;

        public Window1()
        {
            InitializeComponent();
        }

        // Przeładowana (przeciążona) wersja konstruktora z obiektem dla głównego okna jako argumentem 
        public Window1(DoubleWindow mainWin)
        {
            InitializeComponent();
            mainWindow = mainWin;
            PrzygotujWiazanie();
        }

        public Window1(DoubleWindow mainWin, bool add)
        {
            this.nowyProdukt = true;
            InitializeComponent();
            mainWindow = mainWin;
            PrzygotujWiazanie();
        }

        private void PrzygotujWiazanie()
        {
            if(nowyProdukt) pl = new Produkt("", "", 0, "");
            else pl = mainWindow.lstProdukty.SelectedItem as Produkt;
            gridProdukt.DataContext = pl;
        }

        private void btnPotwierdz_Click(object sender, RoutedEventArgs e)
        {
            if (nowyProdukt) mainWindow.ListaProduktow.Add(pl);
            this.Close();      // Zamknięcie bieżącego okna
        }
    }
}
