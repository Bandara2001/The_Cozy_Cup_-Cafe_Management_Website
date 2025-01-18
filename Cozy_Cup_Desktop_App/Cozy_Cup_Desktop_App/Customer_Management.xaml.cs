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
    /// Interaction logic for Customer_Management.xaml
    /// </summary>
    public partial class Customer_Management : Window
    {
        private List<Customer> customers;
        public Customer_Management()
        {
            InitializeComponent();
            customers = new List<Customer>();
            CustomersDataGrid.ItemsSource = customers;
        }
        private void AddButton_Click(object sender, RoutedEventArgs e)
        {
            var customerId = CustomerIdTextBox.Text;
            var customerName = CustomerNameTextBox.Text;
            var customerEmail = CustomerEmailTextBox.Text;
            var customerTelephone = CustomerTelephoneTextBox.Text;

            if (string.IsNullOrEmpty(customerId) || string.IsNullOrEmpty(customerName) || string.IsNullOrEmpty(customerEmail) || string.IsNullOrEmpty(customerTelephone))
            {
                MessageBox.Show("Please fill in all fields!");
                return;
            }

            var customer = new Customer
            {
                Id = customerId,
                Name = customerName,
                Email = customerEmail,
                Telephone = customerTelephone
            };
            customers.Add(customer);
            CustomersDataGrid.Items.Refresh();
        }

        private void UpdateButton_Click(object sender, RoutedEventArgs e)
        {
            var customerId = CustomerIdTextBox.Text;
            var customer = customers.FirstOrDefault(c => c.Id == customerId);

            if (customer != null)
            {
                customer.Name = CustomerNameTextBox.Text;
                customer.Email = CustomerEmailTextBox.Text;
                customer.Telephone = CustomerTelephoneTextBox.Text;
                CustomersDataGrid.Items.Refresh();
            }
            else
            {
                MessageBox.Show("Customer not found!");
            }
        }

        private void DeleteButton_Click(object sender, RoutedEventArgs e)
        {
            var customerId = CustomerIdTextBox.Text;
            var customer = customers.FirstOrDefault(c => c.Id == customerId);

            if (customer != null)
            {
                customers.Remove(customer);
                CustomersDataGrid.Items.Refresh();
            }
            else
            {
                MessageBox.Show("Customer not found!");
            }
        }

        private void ClearButton_Click(object sender, RoutedEventArgs e)
        {
            CustomerIdTextBox.Clear();
            CustomerNameTextBox.Clear();
            CustomerEmailTextBox.Clear();
            CustomerTelephoneTextBox.Clear();
        }

        private void Dashboard_Click(object sender, RoutedEventArgs e)
        {
            DashBoard dashboard = new DashBoard();
            dashboard.Show();
            this.Close();
        }
        private void AddProducts_Click(object sender, RoutedEventArgs e)
        {
            Products_Management products_managemet = new Products_Management();
            products_managemet.Show();
            this.Close();
        }
        private void AddCashier_Click(object sender, RoutedEventArgs e)
        {
            Employee_Management employeeManagement = new Employee_Management();
            employeeManagement.Show();
            this.Close();
        }
        private void Logout_Click(object sender, RoutedEventArgs e)
        {
            MainWindow loginPage = new MainWindow();
            loginPage.Show();
            this.Close(); // Close the current window
        }
    }
    public class Customer
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Telephone { get; set; }
    }
}
