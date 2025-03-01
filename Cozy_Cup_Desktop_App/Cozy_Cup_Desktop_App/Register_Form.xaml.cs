using System;
using System.Windows;
using System.Windows.Controls;
using MySql.Data.MySqlClient;  

namespace Cozy_Cup_Desktop_App
{
    public partial class Register_Form : Window
    {
        public Register_Form()
        {
            InitializeComponent();
        }

        private void SignIn_Click(object sender, RoutedEventArgs e)
        {
            MainWindow mainWindow = new MainWindow(); 
            mainWindow.Show(); 
            this.Close(); 
        }

        private void ShowPassword_Checked(object sender, RoutedEventArgs e)
        {
            
            PasswordTextBox.Text = PasswordInput.Password;
            ConfirmPasswordTextBox.Text = ConfirmPasswordInput.Password;

            
            PasswordInput.Visibility = Visibility.Collapsed;
            ConfirmPasswordInput.Visibility = Visibility.Collapsed;

            PasswordTextBox.Visibility = Visibility.Visible;
            ConfirmPasswordTextBox.Visibility = Visibility.Visible;
        }

        private void ShowPassword_Unchecked(object sender, RoutedEventArgs e)
        {
            
            PasswordInput.Password = PasswordTextBox.Text;
            ConfirmPasswordInput.Password = ConfirmPasswordTextBox.Text;

            
            PasswordTextBox.Visibility = Visibility.Collapsed;
            ConfirmPasswordTextBox.Visibility = Visibility.Collapsed;

            PasswordInput.Visibility = Visibility.Visible;
            ConfirmPasswordInput.Visibility = Visibility.Visible;
        }




        private void Button_Click(object sender, RoutedEventArgs e)
        {
            string username = UsernameInput.Text;
            string password = PasswordInput.Password;
            string confirmPassword = ConfirmPasswordInput.Password;

            if (password != confirmPassword)
            {
                MessageBox.Show("Passwords do not match!");
                return;
            }

            string connectionString = "Server=localhost;Port=3307;Database=admin_db;Uid=root;Pwd=Oshini01@";

            try
            {
                using (MySqlConnection connection = new MySqlConnection(connectionString))
                {
                    connection.Open();

                    string checkQuery = "SELECT COUNT(*) FROM admin WHERE username = @Username";
                    using (MySqlCommand checkCmd = new MySqlCommand(checkQuery, connection))
                    {
                        checkCmd.Parameters.AddWithValue("@Username", username);
                        int userExists = Convert.ToInt32(checkCmd.ExecuteScalar());

                        if (userExists > 0)
                        {
                            MessageBox.Show("Username already exists!");
                            return;
                        }
                    }

                    string insertQuery = "INSERT INTO admin (username, password) VALUES (@Username, @Password)";
                    using (MySqlCommand cmd = new MySqlCommand(insertQuery, connection))
                    {
                        cmd.Parameters.AddWithValue("@Username", username);
                        cmd.Parameters.AddWithValue("@Password", password);
                        cmd.ExecuteNonQuery();
                    }

                    MessageBox.Show("Sign-up successful! Please login.");

                    
                    MainWindow mainWindow = new MainWindow();
                    mainWindow.Show();
                    this.Close();
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error: " + ex.Message);
            }
        }
    }
}
