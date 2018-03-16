using System;
using System.Collections.Generic;
using System.IO;
using System.Windows;

namespace HtmlToXAML
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            this.DataContext = new MainWindowViewModel();
        }
    }
}
