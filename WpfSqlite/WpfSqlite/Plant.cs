using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfSqlite
{
    public class Plant
    {
        private int id; 
        public string ProduceName { get; set; }
        public string ProductType { get; set; }
        public string Cost { get; set; }

        public Plant(string produceName, string cost, string productType)
        {
            this.ProduceName = produceName;
            this.ProductType = productType;
            this.Cost = cost;
        }
    }
}
