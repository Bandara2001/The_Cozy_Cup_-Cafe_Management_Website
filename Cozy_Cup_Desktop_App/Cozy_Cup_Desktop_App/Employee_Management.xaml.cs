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
    /// Interaction logic for Employee_Management.xaml
    /// </summary>
    public partial class Employee_Management : Window
    {
        private List<Employee> employees;
        public Employee_Management()
        {
            InitializeComponent();
            employees = new List<Employee>();
            EmployeesDataGrid.ItemsSource = employees;
        }

        private void AddButton_Click(object sender, RoutedEventArgs e)
        {
            var employeeId = EmployeeIdTextBox.Text;
            var employeeName = EmployeeNameTextBox.Text;
            var employeeCategory = (EmployeeCategoryComboBox.SelectedItem as ComboBoxItem)?.Content.ToString();

            if (string.IsNullOrEmpty(employeeId) || string.IsNullOrEmpty(employeeName) || string.IsNullOrEmpty(employeeCategory))
            {
                MessageBox.Show("Please fill in all fields!");
                return;
            }

            var employee = new Employee { Id = employeeId, Name = employeeName, Category = employeeCategory };
            employees.Add(employee);
            EmployeesDataGrid.Items.Refresh();
        }

        private void UpdateButton_Click(object sender, RoutedEventArgs e)
        {
            var employeeId = EmployeeIdTextBox.Text;
            var employee = employees.FirstOrDefault(e => e.Id == employeeId);

            if (employee != null)
            {
                employee.Name = EmployeeNameTextBox.Text;
                employee.Category = (EmployeeCategoryComboBox.SelectedItem as ComboBoxItem)?.Content.ToString();
                EmployeesDataGrid.Items.Refresh();
            }
            else
            {
                MessageBox.Show("Employee not found!");
            }
        }

        private void DeleteButton_Click(object sender, RoutedEventArgs e)
        {
            var employeeId = EmployeeIdTextBox.Text;
            var employee = employees.FirstOrDefault(e => e.Id == employeeId);

            if (employee != null)
            {
                employees.Remove(employee);
                EmployeesDataGrid.Items.Refresh();
            }
            else
            {
                MessageBox.Show("Employee not found!");
            }
        }

        private void ClearButton_Click(object sender, RoutedEventArgs e)
        {
            EmployeeIdTextBox.Clear();
            EmployeeNameTextBox.Clear();
            EmployeeCategoryComboBox.SelectedIndex = -1;
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

    }
    public class Employee
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
    }
}
