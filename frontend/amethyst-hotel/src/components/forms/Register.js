import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Register.css';

const Register = () => {
  const [data, setData] = useState({
    surname: "",
    name: "",
    email: "",
    password: ""
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({...data, [input.name]: input.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className={styles.register_container}>
      <div className={styles.register_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <Link to="/Login">
            <button type='button' className={styles.white_bttn}>
              Log In
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder='Surname'
              name='surname'
              onChange={handleChange}
              value={data.surname}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder='Name'
              name='name'
              onChange={handleChange}
              value={data.name}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder='Email'
              name='email'
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder='Password'
              name='password'
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            <button type="submit" className={styles.green_btn}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Register;