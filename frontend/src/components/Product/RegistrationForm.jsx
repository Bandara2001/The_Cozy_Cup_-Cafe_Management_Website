import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css';

const RegistrationForm = ({ setIsAuthenticated, setShowLogin }) => {
  const url = 'http://localhost:4951'; // Backend URL
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    telephone: '',
    joinedDate: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${url}/api/user/register`, {
        user_name: formData.name,
        password: formData.password,
        email: formData.email,
        contact_no: formData.telephone,
        joined_date: formData.joinedDate,
      });

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        setIsAuthenticated(true);
        setShowLogin(false);
        alert('Registration successful!');
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="register-page">
      <section className="register-section">
        <div className="transparent-box"></div>
        <div className="register-container">
          <h2>REGISTER</h2>
          <form onSubmit={handleSubmit}>
            {/* Full Name field */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Password field */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Email field */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Telephone field */}
            <div className="form-group">
              <label htmlFor="telephone">Contact Number</label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Joined Date field */}
            <div className="form-group">
              <label htmlFor="joinedDate">Joined Date</label>
              <input
                type="date"
                id="joinedDate"
                name="joinedDate"
                value={formData.joinedDate}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Error message */}
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button type="submit" className="register-button">
              Register
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RegistrationForm;