import React, { useEffect, useState } from 'react';
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

  const [isLogin, setIsLogin] = useState(false); // Toggle between login and registration
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token')); // Check login status

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      // Login logic
      try {
        const response = await axios.post(`${url}/api/user/login`, {
          email: formData.email,
          password: formData.password,
        });

        if (response.data.success) {
          localStorage.setItem('token', response.data.token);
          setIsAuthenticated(true);
          setShowLogin(false);
          setIsLoggedIn(true);
          alert('Login successful!');
        } else {
          setErrorMessage(response.data.message);
        }
      } catch (error) {
        console.error('Login failed:', error);
        setErrorMessage('An error occurred. Please try again.');
      }
    } else {
      // Registration logic
      try {
        const response = await axios.post(`${url}/api/user/register`, {
          user_name: formData.name,
          user_password: formData.password,
          email: formData.email,
          contact_no: formData.telephone,
          joined_date: formData.joinedDate,
        });

        if (response.data.success) {
          localStorage.setItem('token', response.data.token);
          setIsAuthenticated(true);
          setShowLogin(false);
          setIsLoggedIn(true);
          alert('Registration successful!');
        } else {
          setErrorMessage(response.data.message);
        }
      } catch (error) {
        console.error('Registration failed:', error);
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  // Clear form data when switching between login and registration modes
  const handleModeSwitch = (loginMode) => {
    setIsLogin(loginMode);
    setFormData({
      name: '',
      password: '',
      email: '',
      telephone: '',
      joinedDate: '',
    });
    setErrorMessage('');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setShowLogin(false);
    setIsLoggedIn(false);
    alert('You have successfully logged out!');
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="register-page">
      <section className="register-section">
        <div className="transparent-box"></div>
        <div className="register-container">
          {isLoggedIn ? (
            <>
              <h2>Welcome Back!</h2>
              <p>You are logged in.</p>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </>
          ) : (
            <>
              <h2>{isLogin ? 'LOGIN' : 'REGISTER'}</h2>
              <form onSubmit={handleSubmit}>
                {/* Name field (only for registration) */}
                {!isLogin && (
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
                )}

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

                {/* Contact Number field (only for registration) */}
                {!isLogin && (
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
                )}

                {/* Joined Date field (only for registration) */}
                {!isLogin && (
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
                )}

                {/* Error message */}
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <button type="submit" className="register-button">
                  {isLogin ? 'Login' : 'Register'}
                </button>

                <p>
                  {isLogin ? (
                    <>
                      Don't have an account?{' '}
                      <button
                        type="button"
                        className="toggle-button"
                        onClick={() => handleModeSwitch(false)}
                      >
                        Register here
                      </button>
                    </>
                  ) : (
                    <>
                      Already have an account?{' '}
                      <button
                        type="button"
                        className="toggle-button"
                        onClick={() => handleModeSwitch(true)}
                      >
                        Login here
                      </button>
                    </>
                  )}
                </p>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default RegistrationForm;
