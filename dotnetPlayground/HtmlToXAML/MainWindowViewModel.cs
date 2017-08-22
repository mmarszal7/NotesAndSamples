using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace HtmlToXAML
{

    class MainWindowViewModel: INotifyPropertyChanged
    {
        #region Fields, Props and Commands

        private string test;

        public string Test
        {
            get { return test; }
            set
            {
                if (test == value)
                    return;
                test = value;
                RaisePropertyChanged();
            }
        }

        public RelayCommand HtmlConverter { get; set; }
        public RelayCommand UnConverter { get; set; }

        #endregion

        public MainWindowViewModel()
        {
            HtmlConverter = new RelayCommand(Convert);
            UnConverter = new RelayCommand(ConvertBack);
            ConvertBack("");
        }

        public void Convert(object parameter)
        {
            Debug.WriteLine("Converting...");
            Regex reg = new Regex("<[^>]+>", RegexOptions.IgnoreCase);
            var stripped = reg.Replace(Test.ToString(), "");
            string clearContent = System.Net.WebUtility.HtmlDecode(stripped);

            Test = clearContent;
        }

        public void ConvertBack(object parameter)
        {
            Debug.WriteLine("ConvertingBack...");
            using (StreamReader sr = File.OpenText("C:\\Users\\Komputer\\Documents\\Visual Studio 2017\\Projects\\aPlayground\\HtmlToXAML\\sample.txt"))
            {
                Test = sr.ReadToEnd();
            }
        }

        #region PropertyChanged

        public event PropertyChangedEventHandler PropertyChanged;
        protected virtual void RaisePropertyChanged()
        {
            if (PropertyChanged != null)
            {
                foreach (var property in this.GetType().GetProperties().Where(p => !p.IsSpecialName))
                    PropertyChanged(this, new PropertyChangedEventArgs(property.Name));
            }
        } 

        #endregion


    }
}


