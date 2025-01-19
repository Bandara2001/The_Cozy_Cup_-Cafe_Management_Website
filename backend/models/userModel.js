import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const User = sequelize.define(
  'User',
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'User_ID', // Maps to the column name in the database
    },
    user_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
      field: 'User_Name', // Maps to the column name in the database
    },
    user_password: {
      type: DataTypes.STRING(18),
      allowNull: false,
      field: 'User_Password', // Maps to the column name in the database
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true, // Optional field
      field: 'Email', // Maps to the column name in the database
    },
    contact_no: {
      type: DataTypes.CHAR(10),
      allowNull: true, // Optional field
      field: 'Contact_no', // Maps to the column name in the database
    },
    joined_date: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'Joined_date', // Maps to the column name in the database
    },
  },
  {
    tableName: 'User', // Ensures Sequelize maps to the correct table name
    timestamps: false,
  }
);

export default User;