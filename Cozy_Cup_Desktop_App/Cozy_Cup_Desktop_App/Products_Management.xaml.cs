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
    /// Interaction logic for Products_Management.xaml
    /// </summary>
    public partial class Products_Management : Window
    {
        private List<Product> products;
        public Products_Management()
        {
            InitializeComponent();
            products = new List<Product>();
            ProductsDataGrid.ItemsSource = products;
        }
        private void AddButton_Click(object sender, RoutedEventArgs e)
        {
            var productId = ProductIdTextBox.Text;
            var productName = ProductNameTextBox.Text;
            var productCategory = (ProductCategoryComboBox.SelectedItem as ComboBoxItem)?.Content.ToString();
            var productPriceText = ProductPriceTextBox.Text;
            decimal productPrice;

            // Validating if the price is a valid number
            if (!decimal.TryParse(productPriceText, out productPrice))
            {
                MessageBox.Show("Please enter a valid price.");
                return;
            }

            var product = new Product { Id = productId, Name = productName, Category = productCategory, Price = productPrice };
            products.Add(product);
            ProductsDataGrid.Items.Refresh();
        }

        private void UpdateButton_Click(object sender, RoutedEventArgs e)
        {
            var productId = ProductIdTextBox.Text;
            var product = products.FirstOrDefault(p => p.Id == productId);

            if (product != null)
            {
                product.Name = ProductNameTextBox.Text;
                product.Category = (ProductCategoryComboBox.SelectedItem as ComboBoxItem)?.Content.ToString();
                var productPriceText = ProductPriceTextBox.Text;
                decimal productPrice;

                // Validating if the price is a valid number
                if (!decimal.TryParse(productPriceText, out productPrice))
                {
                    MessageBox.Show("Please enter a valid price.");
                    return;
                }

                product.Price = productPrice;
                ProductsDataGrid.Items.Refresh();
            }
            else
            {
                MessageBox.Show("Product not found!");
            }
        }

        private void DeleteButton_Click(object sender, RoutedEventArgs e)
        {
            var productId = ProductIdTextBox.Text;
            var product = products.FirstOrDefault(p => p.Id == productId);

            if (product != null)
            {
                products.Remove(product);
                ProductsDataGrid.Items.Refresh();
            }
            else
            {
                MessageBox.Show("Product not found!");
            }
        }

        private void ClearButton_Click(object sender, RoutedEventArgs e)
        {
            ProductIdTextBox.Clear();
            ProductNameTextBox.Clear();
            ProductCategoryComboBox.SelectedIndex = -1;
            ProductPriceTextBox.Clear();
        }
    
    private void Dashboard_Click(object sender, RoutedEventArgs e)
        {
            DashBoard dashboard = new DashBoard();
            dashboard.Show();
            this.Close();
        }
        private void AddCashier_Click(object sender, RoutedEventArgs e)
        {
            Employee_Management employeeManagement = new Employee_Management();
            employeeManagement.Show();
            this.Close();
        }
        private void Customers_Click(object sender, RoutedEventArgs e)
        {
            Customer_Management customer_managemet = new Customer_Management();
            customer_managemet.Show();
            this.Close();
        }
        private void Logout_Click(object sender, RoutedEventArgs e)
        {
            MainWindow loginPage = new MainWindow();
            loginPage.Show();
            this.Close(); // Close the current window
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {

        }
    }

    public class Product
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public decimal Price { get; set; }  // Add price field
    }



}
