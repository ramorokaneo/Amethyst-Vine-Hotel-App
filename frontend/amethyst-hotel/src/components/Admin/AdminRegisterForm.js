import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AdminRegisterForm.css';

function AdminRegisterForm() {
  const [fullName, setFullName] = useState('');
  const [employeeNumber, setEmployeeNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const validateEmployeeNumber = (input) => {
    return /^AVH\d{6}$/.test(input);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Remove non-digit characters from phone number
      const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
  
      const response = await fetch(`http://10.255.64.46:5000/api/register-as-admin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            fullName,
            employeeNumber,
            email,
            phoneNumber,
            password,
        }),
      });
  
      const responseData = await response.json();
  
      console.log(responseData.message);
      alert('Registration successful! Please log in.');
  
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
    }
    
  };


  return (
    <div className="admin-register-form">
      <h3 className="form-title">Admin Registration</h3>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Full Name:</label>
          <input
            className="form-input"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Employee Number:</label>
          <input
            className="form-input"
            type="text"
            value={employeeNumber}
            onChange={(e) => setEmployeeNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            className="form-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Phone Number:</label>
          <input
            className="form-input"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            className="form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="form-button" type="submit">Register</button>
      </form>
      <p className="form-link">
        Already have an account? <Link to="/admin-login">Login here</Link>
      </p>
    </div>
  );
}

export default AdminRegisterForm;
