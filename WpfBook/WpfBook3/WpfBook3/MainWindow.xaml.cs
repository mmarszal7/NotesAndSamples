using System;
using System.Windows;

namespace WpfBook3
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private Produkt p1 = null;

        public MainWindow()
        {
            InitializeComponent();
            WykonajWiazanie();
        }

        private void WykonajWiazanie()
        {
            p1 = new Produkt("DZ-10", "długopis żelowy", 132, "Katowice 1");
            gridProdukt.DataContext = p1;
        }

        private void btnPotwierdz_Click(object sender, RoutedEventArgs e)
        {
            
            string tekst = String.Format("{0}{1}{2}", "Wprowadzono dane:",
                Environment.NewLine, p1.ToString());        // Environment.NewLine - nowa linia (pewnie niezaleznie od srodowiska)
            MessageBox.Show(tekst);
        }
    }
}
