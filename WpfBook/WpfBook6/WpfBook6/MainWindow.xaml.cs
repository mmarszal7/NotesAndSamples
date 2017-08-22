using System;
using System.IO;
using System.Reflection;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WpfBook6
{
    /// <summary>
    /// Simple web browser
    /// </summary>
    public partial class MainWindow : Window
    {
        private string startPage = "http://google.pl";
        public MainWindow()
        {
            InitializeComponent();
            wbPrzegladarka.Navigate(startPage);
        }

        #region Shity
        #region Ramka
        private void RamkaOn_Click(object sender, RoutedEventArgs e)
        {
            if (brdRamka != null)
                brdRamka.BorderThickness = new Thickness(5);
        }

        private void RamkaOff_Click(object sender, RoutedEventArgs e)
        {
            if (brdRamka != null)

                brdRamka.BorderThickness = new Thickness(1);
        }
        #endregion
                
        private void Tmp_Click(object sender, RoutedEventArgs e)
        {
            MessageBox.Show("Opcja w budowie");
        }

        private void OProgramie_Click(object sender, RoutedEventArgs e)
        {
            MessageBox.Show("Prosta przegladarka");
        }

        // Zapis strony do pliku hmtl(?)
        private void Zapisz_Click(object sender, RoutedEventArgs e)
        {
            
            // Otworzenie dialog boxa do save'owania
            Microsoft.Win32.SaveFileDialog dialog = new Microsoft.Win32.SaveFileDialog();
            dialog.Filter = "WebPage|*.html";
            dialog.DefaultExt = ".html";
            dynamic doc = wbPrzegladarka.Document;

            if(doc != null)
            {
                var htmlText = doc.documentElement.InnerHtml;
                if (dialog.ShowDialog() == true && htmlText != null)
                {
                    File.WriteAllText(dialog.FileName, htmlText);     // File wymaga using System.IO;
                }
            }
        }     

        private void Exit_Click(object sender, RoutedEventArgs e)
        {
            Close();
        }

        #endregion

        // Main features of WebBrowser
        private void btnWejdz_Click(object sender, RoutedEventArgs e)
        {
            wbPrzegladarka.Navigate(txtAdres.Text);
        }
        private void btnWstecz_Click(object sender, RoutedEventArgs e)
        {
            if (wbPrzegladarka.CanGoBack)
                wbPrzegladarka.GoBack();
        }
        private void btnDalej_Click(object sender, RoutedEventArgs e)
        {
            if (wbPrzegladarka.CanGoForward)
                wbPrzegladarka.GoForward();
        }

        private void txtAdres_KeyUp(object sender, KeyEventArgs e)
        {
            if (e.Key == Key.Enter)
                wbPrzegladarka.Navigate(txtAdres.Text);
        }

        // Przegladarka
        private void wbPrzegladarka_Navigating(object sender, System.Windows.Navigation.NavigatingCancelEventArgs e)
        {
            txtAdres.Text = e.Uri.OriginalString;   // Aktualizacja pola tekstowego z adresem
        }

        private void wbPrzegladarka_Navigated(object sender, NavigationEventArgs e)
        {
            HideScriptErrors(wbPrzegladarka, true);   // Wywołanie metody ukrywającej błędy JavaScriptu
        }

        public void HideScriptErrors(WebBrowser wb, bool Hide)
        {
            // Ukrycie błędów JavaScriptu, rozwiązanie ze strony MSDN "Suppress Script Errors in Windows.Controls.Webbrowser"
            // Typ wyliczeniowy BindingFlags wymaga przestrzeni nazw using System.Reflection;
            dynamic activeX = this.wbPrzegladarka.GetType().InvokeMember("ActiveXInstance",
                BindingFlags.GetProperty | BindingFlags.Instance | BindingFlags.NonPublic,
                null, this.wbPrzegladarka, new object[] { });
            activeX.Silent = true;
        }

    }
}
