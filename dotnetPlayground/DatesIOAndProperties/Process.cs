using System;
using System.IO;
namespace DatesIOAndProperties

{
    class Process
    {
        public string name { get; set; }
        public DateTime startDate { get; set; }
        public string path { get; } = @"..\..\testFile.txt";

        public Process(string name, DateTime startDate)
        {
            this.name = name;
            this.startDate = startDate;
        }

        public override string ToString()
        {
            return $"Nazwa procesu: {this.name}; Data rozpoczęcia procesu: {this.startDate.ToString("yyyy-MM-dd")}.";
        }

        public void FileSave()
        {
            using (StreamWriter sw = File.CreateText(path))
            {
                sw.WriteLine(this.name);
                sw.WriteLine(this.startDate.ToString("yyyy-mm-dd"));
            }
        }
    }
}
