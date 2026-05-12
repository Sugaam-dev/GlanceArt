import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // 🔔 Notification state
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: '' // success | error
  });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const showNotification = (message, type = "error") => {
    setNotification({ show: true, message, type });

    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 3000);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;

    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          username: email,
          password: password
        })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('user', JSON.stringify(email));

        showNotification("Login successful!", "success");

        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1000);
      } else {
        showNotification(data.detail || "Invalid email or password.", "error");
      }
    } catch (error) {
      showNotification("Could not connect to the server.", "error");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = email && password && !loading;

  return (
    <div className="nk-app-wrapper">
      
      {/* 🔔 Notification Popup */}
      {notification.show && (
        <div className={`nk-toast nk-toast-${notification.type}`}>
          {notification.message}
        </div>
      )}

      <div className="nk-login-card">
        <header className="nk-logo-group">
          <h1 className="nk-visual-logo">ARTGALLARY</h1>
          <span className="nk-domain-tag">glanceart.com</span>
        </header>

        <section className="nk-header-text">
          <h2 className="nk-main-title">Log in</h2>
          <p className="nk-sub-title">Create an account or sign in</p>
        </section>

        <form className="nk-auth-form" onSubmit={handleFormSubmit}>
          <div className="nk-input-group">
            <input
              type="email"
              className="nk-field-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              className="nk-field-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className={`nk-btn-continue ${isFormValid ? 'nk-btn-enabled' : ''}`}
            disabled={!isFormValid}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="nk-form-divider">
          <span className="nk-divider-label">or</span>
        </div>

        <button
          className="nk-btn-shop-pay"
          type="button"
          onClick={() => navigate('/login/shop')}
        >
          Sign in with <span className="nk-shop-italic">shop</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
