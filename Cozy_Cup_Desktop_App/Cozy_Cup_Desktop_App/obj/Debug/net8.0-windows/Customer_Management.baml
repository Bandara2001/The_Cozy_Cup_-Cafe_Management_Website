   M S B A M L   `   `   `  ����O  KCozy_Cup_Desktop_App, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null;"clr-namespace:Cozy_Cup_Desktop_AppCozy_Cup_Desktop_App  5   	   .    (Cozy_Cup_Desktop_App.Customer_Management   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   4local"clr-namespace:Cozy_Cup_Desktop_App     5   	     � Title$  Customer Management��5   	   $	��450��6%   $	��800��62    � WindowStartupLocation$ CenterScreen=�6>   ��5	      �� 5
   
    �� ImageSource$ /Registration_bg.jpg��6    j� Stretch$
 Fill=�68    �� Opacity$
 0.75Q�6G   .��5      �  � ColumnDefinitions 5   
   �� 5      $
��179* �6   �� 5      $
��621* �6   .+�5   
   ]� $��Center=�6   $	��877��61   $��False��6>   $��Center=�6T   $	��210��6o   ���	#FF902D0C � Cursor$
 Hand��6�   .+�5      �� -   5         ��Name$
 Logo��5      $R��L/vecteezy_aromatic-art-coffee-cup-sketches-and-illustrations-ai_26691146.png��6"   $	��100��6x   $��96��6�   $��
55,0,0,650q�6�    J� OpacityMask 5      �� 5      $R L/vecteezy_aromatic-art-coffee-cup-sketches-and-illustrations-ai_26691146.png��6!   5      �� 5      $��Admin's Portal��6   $	��145��6-   $��34��69   $��-120,0,0,500q�6E   $��Arial Rounded MT Bold)�6[   $��18(�6~   
�������6�   5      � 5   
   $��1��6   .+�5       &   System.Windows.Controls.DataGrid  -   5        $��CustomersDataGrid��5       $	��200��60   $��20,0,20,200q�6=   	   AutoGenerateColumns$	 False��6R   
   Columns
 5!      0  *System.Windows.Controls.DataGridTextColumn  5#      ,  &System.Windows.Controls.DataGridColumn   Header$ Customer ID��6)      Width5  /System.Windows.Controls.DataGridLengthConverter$ * 6U   1  +System.Windows.Controls.DataGridBoundColumn   Binding 6>   �� *Id+6U     5&      $ Customer Name��6)   $ * 6Y    6@   �� *Name+6Y     5)      $ Customer Email��6)   $ * 6[    6A   �� *Email+6[     5,      $ Customer Telephone��6)   $ * 6c    6E   �� *	Telephone+6c   5.      �� 51      $��Bottom=�6   $��Right=�64    �� Orientation$ Vertical=�6P   $��	0,0,20,30q�6g   .+�52      �� $��Customer ID��6   $��-20,0,5,-70q�6/   
�������$��Arial Rounded MT Bold)�6W   $��13(�6z   �� 53      -   5        $��CustomerIdTextBox��53      $	��200��63   $��5q�6?   �� 55      $��Customer Name��6   $��-40,5,5,-20q�61   
�������$��Arial Rounded MT Bold)�6Y   $��13(�6|   �� 56      -   5        $��CustomerNameTextBox��56      $	��200��65   $��5q�6A   �� 58      $��Customer Email��6   $��-40,5,5,-30q�62   
�������$��Arial Rounded MT Bold)�6Z   $��13(�6}   �� 59      -   5        $��CustomerEmailTextBox��59      $	��200��66   $��5q�6B   �� 5;      $��Customer Telephone��6   $��-70,5,5,-30q�66   
�������$��Arial Rounded MT Bold)�6^   $��13(�6�   �� 5<      -   5        $��CustomerTelephoneTextBox��5<      $	��200��6:   $��5q�6F   �� 5>      $ 
Horizontal=�6   .+�5?      �� -   5        $	��ADD��5?      $��27��6+   $��80��67   $��Center=�6B   $	��Top=�6_   $��Arial Rounded MT Bold)�6w   $��14(�6�   ���	#FF902D0C
�������6�   �� 5@      -   5        $��UPDATE��5@      $��27��6.   $��80��6:   $��5,0,5,10q�6E   $��Arial Rounded MT Bold)�6W   $��14(�6z   ���	#FF902D0C
�������6�   �� 5A      -	   5        $��DELETE��5A      $��27��6.   $��80��6:   $��5,0,5,10q�6E   $��14(�6W   $��Arial Rounded MT Bold)�6e   ���	#FF902D0C
�������6�   �� 5B      -
   5        $��CLEAR��5B      $��27��6-   $��80��69   $��5,0,5,10q�6D   $��14(�6V   $��Arial Rounded MT Bold)�6d   ���	#FF902D0C
�������6�   5C      5D      5E      �� 5H   
   -   5        $��	DashBoard��5H      $��Center=�6%   $��35��6B   $	��Top=�6N   $	��159��6f   $��	0,182,0,0q�6r   ���	#FF902D0C
�������
�������$��Arial Rounded MT Bold)�6�   $��15(�6�   $
 Hand��6�   6  �� 5I   
   -   5        $��Add Cashier��5I      $��Center=�6'   $��35��6D   $	��Top=�6P   $	��159��6h   $��	0,222,0,0q�6t   ���	#FF902D0C
�������
�������$��Arial Rounded MT Bold)�6�   $��15(�6�   $
 Hand��6�   6  �� 5J   
   -   5        $��Add Product��5J      $��Center=�6'   $��35��6D   $	��Top=�6P   $	��159��6h   $��	0,262,0,0q�6t   ���	#FF902D0C
�������
�������$��Arial Rounded MT Bold)�6�   $��15(�6�   $
 Hand��6�   6  �� 5K   
   $��	Customers��6   $��Center=�6%   $��35��6B   $	��Top=�6N   $	��159��6f   $��	0,302,0,0q�6r   ���	#FF902D0C
�������
�������$��Arial Rounded MT Bold)�6�   $��15(�6�   $
 Hand��6�   �� 5L   
   -   5        $��LogOut��5L      $��Center=�6"   $��35��6?   $	��Top=�6K   $	��160��6c   $��	0,374,0,0q�6o   ���	#FF902D0C
�������
�������$��Arial Rounded MT Bold)�6�   $��15(�6�   $
 Hand��6�   6�   5M      5N      