using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Cozy_Cup_Desktop_App
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void LOGIN(object sender, RoutedEventArgs e)
        {
            string username = UsernameTextBox.Text;
            string password = PasswordBox.Visibility == Visibility.Visible
                ? PasswordBox.Password
                : PasswordTextBox.Text;

            if (username == "admin" && password == "1234")
            {
                DashBoard objDashboard = new DashBoard();
                this.Visibility = Visibility.Hidden;
                objDashboard.Show();
            }
            else
            {
                MessageBox.Show("Incorrect Username or Password!", "Login Failed", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }


        private void TextBox_TextChanged(object sender, TextChangedEventArgs e)
        {

        }

        private void REGISTER(object sender, RoutedEventArgs e)
        {
            Register_Form objRegister_form = new Register_Form();
            this.Visibility = Visibility.Hidden;
            objRegister_form.Show();
        }
        private void ShowPassword_Checked(object sender, RoutedEventArgs e)
        {
            // Show plain text password
            PasswordTextBox.Text = PasswordBox.Password;
            PasswordBox.Visibility = Visibility.Hidden;
            PasswordTextBox.Visibility = Visibility.Visible;
        }

        private void ShowPassword_Unchecked(object sender, RoutedEventArgs e)
        {
            // Hide plain text password
            PasswordBox.Password = PasswordTextBox.Text;
            PasswordTextBox.Visibility = Visibility.Hidden;
            PasswordBox.Visibility = Visibility.Visible;
        }

    }
}