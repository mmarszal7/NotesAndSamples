using System.Collections.ObjectModel;
using System.Data;
using System.Data.SQLite;
using System.Windows;

namespace WpfSqlite
{
   
    public partial class MainWindow : Window
    {
        internal ObservableCollection<Plant> produceList = new ObservableCollection<Plant>();
        DataTable dt = new DataTable();
        string datasource = "Data Source=C:\\Users\\Komputer\\Documents\\Visual Studio 2017\\Projects\\WpfSqlite\\ProjectDB.db;";

        public MainWindow()
        {
            InitializeComponent();

            Connect(string.Empty);
            comboBox.ItemsSource = dt.DefaultView.ToTable(true, "ProductType").DefaultView;
            comboBox.DisplayMemberPath = "ProductType";
            listView.ItemsSource = produceList;
        }

        public void Connect(string producetype)
        {
            dt.Clear();
            using (SQLiteConnection conn = new SQLiteConnection(datasource))
            {
                producetype = $"SELECT * FROM Produce" + producetype;
                SQLiteDataAdapter da = new SQLiteDataAdapter(producetype, conn);
                da.Fill(dt);
                conn.Close();
            }
        }

        private void clearComboBox_Click(object sender, RoutedEventArgs e)
        {
            comboBox.SelectedIndex = -1;
            listView.Items.Clear();
        }

        private void button_Click(object sender, RoutedEventArgs e)
        {
            string produceType = comboBox.Text;
            if (comboBox.SelectedIndex != -1)
            {
                Connect($" WHERE ProductType='{produceType}'");
            }
            else
            {
                Connect(string.Empty);
            }
            
            produceList.Clear();
            foreach (DataRow row in dt.Rows)
            {
                produceList.Add(new Plant(row[1].ToString(), row[2].ToString(), row[3].ToString()));
            }

        }
    }
}
