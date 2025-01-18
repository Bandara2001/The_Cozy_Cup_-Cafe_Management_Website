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
using System.Windows.Shapes;

namespace Cozy_Cup_Desktop_App
{
    /// <summary>
    /// Interaction logic for DashBoard.xaml
    /// </summary>
    public partial class DashBoard : Window
    {
        public DashBoard()
        {
            InitializeComponent();
        }

        private void Dashboard_Click(object sender, RoutedEventArgs e)
        {
            MessageBox.Show("You are already on the Dashboard!");
        }

        private void AddCashier_Click(object sender, RoutedEventArgs e)
        {
            Employee_Management employeeManagement = new Employee_Management();
            employeeManagement.Show();
            this.Close();
        }


        private void AddProducts_Click(object sender, RoutedEventArgs e)
        {
            Products_Management productsManagement = new Products_Management();
            productsManagement.Show();
            this.Close();
        }

        private void Customers_Click(object sender, RoutedEventArgs e)
        {
            Customer_Management customerManagement = new Customer_Management();
            customerManagement.Show();
            this.Close();
        }

       

        // Log out
        private void Logout_Click(object sender, RoutedEventArgs e)
        {
            MainWindow loginPage = new MainWindow();
            loginPage.Show();
            this.Close(); // Close the current window
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {

        }

        private void Button_Click_1(object sender, RoutedEventArgs e)
        {

        }

        

        /*private void Products_Management(object sender, RoutedEventArgs e)
        {
            Products_Management objProducts_Management = new Products_Management();
            this.Visibility = Visibility.Hidden;
            objProducts_Management.Show();
        }

        private void Employee_Management(object sender, RoutedEventArgs e)
        {
            Employee_Management objEmployee_Management = new Employee_Management();
            this.Visibility = Visibility.Hidden;
            objEmployee_Management.Show();
        }

        private void Customer_Management(object sender, RoutedEventArgs e)
        {
            Customer_Management objCustomer_Management = new Customer_Management();
            this.Visibility = Visibility.Hidden;
            objCustomer_Management.Show();
        }*/
    }
}
