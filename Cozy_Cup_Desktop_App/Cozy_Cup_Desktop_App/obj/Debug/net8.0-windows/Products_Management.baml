   M S B A M L   `   `   `  ����O  KCozy_Cup_Desktop_App, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null;"clr-namespace:Cozy_Cup_Desktop_AppCozy_Cup_Desktop_App  5   	   .    (Cozy_Cup_Desktop_App.Products_Management   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   4local"clr-namespace:Cozy_Cup_Desktop_App     5   	     � Title$  Products_Management��5   	   $	��450��6%   $	��800��62    � WindowStartupLocation$ CenterScreen=�6>   ��5	      �� 5
   
    �� ImageSource$ /Registration_bg.jpg��6    j� Stretch$
 Fill=�68    �� Opacity$
 0.75Q�6G   .��5      �  � ColumnDefinitions 5   
   �� 5      $
��179* �6   �� 5      $
��621* �6   .+�5   
   ]� $��Center=�6   $	��877��61   $��False��6>   $��Center=�6T   $	��210��6o   ���	#FF902D0C � Cursor$
 Hand��6�   .+�5      �� -   5         ��Name$
 Logo��5      $R��L/vecteezy_aromatic-art-coffee-cup-sketches-and-illustrations-ai_26691146.png��6"   $	��100��6x   $��96��6�   $��
55,0,0,650q�6�    J� OpacityMask 5      �� 5      $R L/vecteezy_aromatic-art-coffee-cup-sketches-and-illustrations-ai_26691146.png��6!   5      �� 5      $��Admin's Portal��6   $	��145��6-   $��34��69   $��-120,0,0,500q�6E   $��Arial Rounded MT Bold)�6[   $��18(�6~   
�������6�   5      � 5   
   $��1��6   .+�5      &   System.Windows.Controls.DataGrid  -   5        $��ProductsDataGrid��5      $	��200��6/   $��20,0,20,200q�6<   	   AutoGenerateColumns$	 False��6Q   
   Columns
 5       0  *System.Windows.Controls.DataGridTextColumn  5"      ,  &System.Windows.Controls.DataGridColumn   Header$ 
Product ID��6)      Width5  /System.Windows.Controls.DataGridLengthConverter$ * 6\   1  +System.Windows.Controls.DataGridBoundColumn   Binding 6=   �� *
product_id+6\     5%      $ Product Name��6)   $ * 6`    6?   �� *product_name+6`     5(      $ Category��6)   $ * 6X    6;   �� *
category+6X     5+      $ Price��6)   $ * 6R    68   �� *price+6R   5-      �� 50      $��Bottom=�6   $��Right=�64    �� Orientation$ Vertical=�6P   $��	0,0,20,30q�6g   .+�51      �� $��
Product ID��6   $��	5,0,5,-60q�6.   
�������$��Arial Rounded MT Bold)�6T   $��13(�6w   �� 52      -   5        $��ProductIdTextBox��52      $	��200��62   $��5q�6>   �� 54      $��Product Name��6   $��-15,5,15,-28q�60   
�������$��Arial Rounded MT Bold)�6Y   $��13(�6|   �� 55      -   5        $��ProductNameTextBox��55      $	��200��64   $��5q�6@   �� 57      $��Category��6   $��	5,5,5,-25q�6,   
�������$��Arial Rounded MT Bold)�6R   $��13(�6u   �� 58      -   5        $��ProductCategoryComboBox��58      $	��200��6:   $��5q�6F   .@�59      �� $
��Food��6#   �� 5:      $��	Beverages��6#   �� 5;      $��Desserts��6#   5<      �� 5@      $��Price��6   $��	5,0,5,-30q�6)   
�������$��Arial Rounded MT Bold)�6O   $��13(�6r   �� 5A      -   5        $��ProductPriceTextBox��5A      $	��200��65   $��5,5,5,10q�6A   �� 5C      $ 
Horizontal=�6   .+�5D      �� -   5        $	��ADD��5D      $��27��6+   $��80��67   $��Center=�6B   $	��Top=�6_   $��Arial Rounded MT Bold)�6w   $��14(�6�   ���	#FF902D0C
�������6�   �� 5E      -   5        $��UPDATE��5E      $��27��6.   $��80��6:   $��5,0,5,10q�6E   $��Arial Rounded MT Bold)�6W   $��14(�6z   ���	#FF902D0C
�������6�   �� 5F      -	   5        $��DELETE��5F      $��27��6.   $��80��6:   $��5,0,5,10q�6E   $��14(�6W   $��Arial Rounded MT Bold)�6e   ���	#FF902D0C
�������6�   �� 5G      -
   5        $��CLEAR��5G      $��27��6-   $��80��69   $��5,0,5,10q�6D   $��14(�6V   $��Arial Rounded MT Bold)�6d   ���	#FF902D0C
�������6�   5H      5I      5J      �� 5L   
   -   5        $��	DashBoard��5L      $��Center=�6%   $��35��6B   $	��Top=�6N   $	��159��6f   $��	0,182,0,0q�6r   ���	#FF902D0C
�������
�������$��Arial Rounded MT Bold)�6�   $��15(�6�   $
 Hand��6�   6  �� 5M   
   -   5        $��Add Cashier��5M      $��Center=�6'   $��35��6D   $	��Top=�6P   $	��159��6h   $��	0,222,0,0q�6t   ���	#FF902D0C
�������
�������$��Arial Rounded MT Bold)�6�   $��15(�6�   $
 Hand��6�   6  �� 5N   
   $��Add Product��6   $��Center=�6'   $��35��6D   $	��Top=�6P   $	��159��6h   $��	0,262,0,0q�6t   ���	#FF902D0C
�������
�������$��Arial Rounded MT Bold)�6�   $��15(�6�   $
 Hand��6�   �� 5O   
   -   5        $��	Customers��5O      $��Center=�6%   $��35��6B   $	��Top=�6N   $	��159��6f   $��	0,302,0,0q�6r   ���	#FF902D0C
�������
�������$��Arial Rounded MT Bold)�6�   $��15(�6�   $
 Hand��6�   6  �� 5P   
   -   5        $��LogOut��5P      $��Center=�6"   $��35��6?   $	��Top=�6K   $	��160��6c   $��	0,374,0,0q�6o   ���	#FF902D0C
�������
�������$��Arial Rounded MT Bold)�6�   $��15(�6�   $
 Hand��6�   6�   5Q      5R      