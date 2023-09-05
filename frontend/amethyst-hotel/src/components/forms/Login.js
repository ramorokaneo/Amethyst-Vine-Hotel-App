import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginForm.css'; 

function LoginForm() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userType, setUserType] = useState('client'); // Default to client
    const [clientUsername, setClientUsername] = useState('');
    const [clientPassword, setClientPassword] = useState('');
    const [adminEmployeeNumber, setAdminEmployeeNumber] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://10.255.64.46:5000/api/login', 'http://10.255.64.46:5000/api/login-as-admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: userType === 'client' ? clientUsername : adminEmployeeNumber,
            password: userType === 'client' ? clientPassword : adminPassword,
          }),
        });
  
        if (response.ok) {
          setLoggedIn(true);
          alert(`${userType.charAt(0).toUpperCase() + userType.slice(1)} login successful`);
          navigate(userType === 'client' ? '/home' : '/dashboard');
        } else {
          alert('Invalid credentials.');
        }
      } catch (error) {
        console.error('Login error:', error);
      }
    };
  
    const handleLogout = () => {
      setLoggedIn(false);
      navigate('/home');
    };
  
    const handleUserTypeChange = (newUserType) => {
      if (userType !== newUserType) {
        setUserType(newUserType);
        // You can reset the form fields here if needed
      }
    };
  
    return (
      <div className="login-form">
        <h2>Login</h2>
        {loggedIn ? (
          <div>
            <p className="logged-in">You are logged in as {userType}.</p>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className={`card ${userType === 'admin' ? 'admin-card' : ''}`}>
            <div className="card-body">
              <h3 className="card-title">Login as {userType.charAt(0).toUpperCase() + userType.slice(1)}</h3>
              <form onSubmit={handleLogin}>
                <div className="user-type-select">
                  <label>Select User Type:</label>
                  <select value={userType} onChange={(e) => handleUserTypeChange(e.target.value)}>
                    <option value="client">Client</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={userType === 'client' ? clientUsername : adminEmployeeNumber}
                    onChange={(e) =>
                      userType === 'client' ? setClientUsername(e.target.value) : setAdminEmployeeNumber(e.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={userType === 'client' ? clientPassword : adminPassword}
                    onChange={(e) =>
                      userType === 'client' ? setClientPassword(e.target.value) : setAdminPassword(e.target.value)
                    }
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <p>
                  {userType === 'client' ? (
                    <>
                      Don't have an account? <Link to="/registration">Register</Link>
                    </>
                  ) : (
                    <>
                      Not registered? Now register{' '}
                      <Link to="/admin-register">Register</Link>
                    </>
                  )}
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default LoginForm;