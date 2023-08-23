import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles.css'; 



function ClientForm({ handleClientLogin }) {
  const [clientUsername, setClientUsername] = useState('');
  const [clientPassword, setClientPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://10.255.64.46:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: clientUsername,
          password: clientPassword,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        alert('Client login successful'); // Display alert
        // Handle further actions after successful login
      } else {
        alert('Invalid credentials.'); // Display alert
      }
    } catch (error)
      console.error('Login error:', error);
    }
 
  };
 
  

  return (
    <div className="client-form">
      <h3>Client Login</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={clientUsername}
            onChange={(e) => setClientUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={clientPassword}
            onChange={(e) => setClientPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login as Client</button>
        <p>
      Don't have an account? <Link to="/registration">Register</Link>
      </p>
      </form>
    </div>
  );
}

function AdminForm({ handleAdminLogin }) {
  const [adminEmployeeNumber, setAdminEmployeeNumber] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Admin Employee Number:', adminEmployeeNumber);
    console.log('Admin Password:', adminPassword);
  
    if (adminEmployeeNumber === adminEmployeeNumber.match(/^AVH\d{6}$/) && adminPassword === 'adminPassword') {
      handleAdminLogin();
      alert('Admin login successful');
    } else {
      alert('Invalid credentials.');
    }
  };

  return (
    <div className="admin-form">
      <h3>Admin Login</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee Number:</label>
          <input
            type="text"
            value={adminEmployeeNumber}
            onChange={(e) => setAdminEmployeeNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login as Admin</button>
        <p>
        Not registered? Now register <Link to="/admin-register">Register</Link>
      </p>
      </form>
    </div>
  );
}

function LoginForm() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleClientLogin = () => {
    setLoggedIn(true);
    alert('Client login successful');
    
    navigate('/home')
  };

  const handleAdminLogin = () => {
    setLoggedIn(true);
    alert('Admin login successful');

    navigate('/dashboard');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    navigate('/home');
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      {loggedIn ? (
        // Displayed when logged in
        <div>
          <p>You are logged in.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        // Displayed when not logged in
        <div>
          <ClientForm handleClientLogin={handleClientLogin} />
          <AdminForm handleAdminLogin={handleAdminLogin} />
        </div>
      )}
    </div>
  );
}

export default LoginForm;
