using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AMC
{
    /// <summary>
    /// Circle delegate + lambda
    /// </summary>
    public sealed class Circle
    {
        private double radius = 5;
        public double Calculate(Func<double, double> op)
        {
            return op(radius);
        }
    }
}
