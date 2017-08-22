using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WpfBook1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private bool state = true;
        
        public MainWindow()
        {
           
            InitializeComponent();
        }

        private void btnPrzycisk_Click(object sender, RoutedEventArgs e)
        {
            state = !state;

            //btnPrzycisk.Opacity = 0.5;
            //MessageBox.Show("Hello");
            //btnPrzycisk.Opacity = 1;

            btnPrzycisk.Visibility = Visibility.Hidden;
            MessageBox.Show("Hello");
            btnPrzycisk.Visibility = Visibility.Visible;

        }

        private void Tak_MouseEnter(object sender, MouseEventArgs e)
        {
            var temp = Tak.Content;
            Tak.Content = Nie.Content;
            Nie.Content = temp;
        }

        private void Nie_MouseEnter(object sender, MouseEventArgs e)
        {
            var temp = Tak.Content;
            Tak.Content = Nie.Content;
            Nie.Content = temp;
        }

        private void Tak_Click(object sender, RoutedEventArgs e)
        {
            if(Tak.Content.Equals("Tak")) MessageBox.Show("Taki wuj!");
        }
        private void Nie_Click(object sender, RoutedEventArgs e)
        {
            if (Nie.Content.Equals("Tak"))  MessageBox.Show("Taki wuj!");
        }
    }
}
