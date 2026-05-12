

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleContinue = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const signupData = {
      email: formData.email,
      password: formData.password,
      full_name: `${formData.firstName} ${formData.lastName}`
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      const data = await response.json();

      if (response.ok) {
        // SAVE DATA TO LOCALSTORAGE FOR THE PROFILE PAGE
        localStorage.setItem('firstName', formData.firstName);
        localStorage.setItem('lastName', formData.lastName);
        localStorage.setItem('userEmail', formData.email);
        
        navigate('/login'); 
      } else {
        setError(data.detail || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to connect to the server");
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card">
        <header className="auth-card-header">
          <span className="shop-logo">shop</span>
          <span className="brand-subtext">Glance Art</span>
        </header>

        <main className="auth-card-content">
          <h2 className="auth-title">Create an account</h2>
          <p className="auth-subtitle">Already have an account? <a href="/login">Log in</a></p>

          {error && <p className="error-text" style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

          <form className="auth-form" onSubmit={handleContinue}>
            <div className="input-group-row">
              <div className="floating-label-group">
                <input 
                  type="text" 
                  id="firstName" 
                  placeholder="First name" 
                  required 
                  onChange={handleChange} 
                />
              </div>
              <div className="floating-label-group">
                <input 
                  type="text" 
                  id="lastName" 
                  placeholder="Last name" 
                  required 
                  onChange={handleChange} 
                />
              </div>
            </div>

            <div className="floating-label-group">
              <input 
                type="email" 
                id="email" 
                placeholder="Email" 
                required 
                onChange={handleChange} 
              />
            </div>

            <div className="floating-label-group">
              <input 
                type="password" 
                id="password" 
                placeholder="Password" 
                required 
                onChange={handleChange} 
              />
            </div>

            <div className="floating-label-group">
              <input 
                type="password" 
                id="confirmPassword" 
                placeholder="Confirm password" 
                required 
                onChange={handleChange} 
              />
            </div>

            <button type="submit" className="auth-continue-btn">
              Continue
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Register;