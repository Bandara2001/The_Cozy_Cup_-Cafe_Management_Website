using System;
using System.Data;
using System.Windows;
using System.Windows.Controls;
using MySql.Data.MySqlClient;

namespace Cozy_Cup_Desktop_App
{
    public partial class Products_Management : Window
    {
        
        private const string connectionString = "Server=localhost;Port=3307;Database=admin_db;Uid=root;Pwd=Oshini01@;";
        private MySqlConnection connection;

        public Products_Management()
        {
            InitializeComponent();
            connection = new MySqlConnection(connectionString);
            LoadProducts();
        }

        
        private void LoadProducts()
        {
            try
            {
                
                if (connection.State != ConnectionState.Open)
                {
                    connection.Open();
                }

                string query = "SELECT * FROM products";
                MySqlCommand cmd = new MySqlCommand(query, connection);
                MySqlDataAdapter adapter = new MySqlDataAdapter(cmd);
                DataTable dt = new DataTable();
                adapter.Fill(dt);
                ProductsDataGrid.ItemsSource = dt.DefaultView;
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error: " + ex.Message);
            }
            finally
            {
                
                if (connection.State == ConnectionState.Open)
                {
                    connection.Close();
                }
            }
        }

        
        private void AddButton_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                
                if (string.IsNullOrEmpty(ProductNameTextBox.Text) ||
                    string.IsNullOrEmpty(ProductPriceTextBox.Text) ||
                    ProductCategoryComboBox.SelectedItem == null)
                {
                    MessageBox.Show("Please fill all the fields!");
                    return;
                }

                
                if (connection.State != ConnectionState.Open)
                {
                    connection.Open();
                }

                
                string query = "INSERT INTO products (product_name, category, price) VALUES (@name, @category, @price)";
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Parameters.AddWithValue("@name", ProductNameTextBox.Text);
                cmd.Parameters.AddWithValue("@category", ProductCategoryComboBox.SelectedItem.ToString().Replace("System.Windows.Controls.ComboBoxItem: ", ""));
                cmd.Parameters.AddWithValue("@price", Convert.ToDecimal(ProductPriceTextBox.Text));

                cmd.ExecuteNonQuery();

                
                string resetAutoIncrementQuery = "ALTER TABLE products AUTO_INCREMENT = 1;";
                MySqlCommand resetAutoIncrementCmd = new MySqlCommand(resetAutoIncrementQuery, connection);
                resetAutoIncrementCmd.ExecuteNonQuery();

                MessageBox.Show("Product added successfully!");

                
                ClearFields();

                
                LoadProducts();
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error: " + ex.Message);
            }
            finally
            {
                
                if (connection.State == ConnectionState.Open)
                {
                    connection.Close();
                }
            }
        }



        
        private void UpdateButton_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                if (string.IsNullOrEmpty(ProductIdTextBox.Text) || string.IsNullOrEmpty(ProductNameTextBox.Text) || string.IsNullOrEmpty(ProductPriceTextBox.Text) || ProductCategoryComboBox.SelectedItem == null)
                {
                    MessageBox.Show("Please fill all the fields!");
                    return;
                }

                
                if (connection.State != ConnectionState.Open)
                {
                    connection.Open();
                }

                string query = "UPDATE products SET product_name = @name, category = @category, price = @price WHERE product_id = @id";
                MySqlCommand cmd = new MySqlCommand(query, connection);

                cmd.Parameters.AddWithValue("@name", ProductNameTextBox.Text);
                cmd.Parameters.AddWithValue("@category", ProductCategoryComboBox.SelectedItem.ToString().Replace("System.Windows.Controls.ComboBoxItem: ", ""));
                cmd.Parameters.AddWithValue("@price", Convert.ToDecimal(ProductPriceTextBox.Text));
                cmd.Parameters.AddWithValue("@id", ProductIdTextBox.Text); 

                cmd.ExecuteNonQuery();
                MessageBox.Show("Product updated successfully!");
                ClearFields();
                LoadProducts();
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error: " + ex.Message);
            }
            finally
            {
                
                if (connection.State == ConnectionState.Open)
                {
                    connection.Close();
                }
            }
        }

        private void DeleteButton_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                
                if (string.IsNullOrEmpty(ProductIdTextBox.Text))
                {
                    MessageBox.Show("Please enter the Product ID to delete.");
                    return;
                }

                
                if (connection.State != ConnectionState.Open)
                {
                    connection.Open();
                }

                
                string deleteQuery = "DELETE FROM products WHERE product_id = @id";
                MySqlCommand deleteCmd = new MySqlCommand(deleteQuery, connection);
                deleteCmd.Parameters.AddWithValue("@id", ProductIdTextBox.Text);
                deleteCmd.ExecuteNonQuery();

                
                string resetAutoIncrementQuery = "ALTER TABLE products AUTO_INCREMENT = 1;";
                MySqlCommand resetAutoIncrementCmd = new MySqlCommand(resetAutoIncrementQuery, connection);
                resetAutoIncrementCmd.ExecuteNonQuery();

                MessageBox.Show("Product deleted successfully, and Product IDs re-indexed!");

                ClearFields(); 
                LoadProducts(); 
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error: " + ex.Message);
            }
            finally
            {
                
                if (connection.State == ConnectionState.Open)
                {
                    connection.Close();
                }
            }
        }




        
        private void ClearButton_Click(object sender, RoutedEventArgs e)
        {
            ClearFields();
        }

        
        private void ClearFields()
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
            this.Close(); 
        }

        
        protected override void OnClosed(EventArgs e)
        {
            if (connection.State == ConnectionState.Open)
            {
                connection.Close();
            }
            base.OnClosed(e);
        }
    }
}
