import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './SignupAndLogin.css';
import { FaUser, FaLock, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

const SignupAndLogin = () => {
  const [action, setAction] = useState('');
  const navigate = useNavigate();

  const signupLink = () => {
    setAction(' active');
  };

  const loginLink = () => {
    setAction('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    navigate('/dashboard');
  
    
    try {
      const response = await fetch('http://localhost:3000/#', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        // Save token, update state, etc.
        navigate('/dashboard');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
    
  };

  return (
    <div className={`wrapper${action}`}>
      <div className="form-box login">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password ?</a>
          </div>

          <div className="owner-customer">
            <label>
              <input type="checkbox" /> Are you an owner ?
            </label>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>
              Don't have an account ?
              <a href="#" onClick={signupLink}>Register</a>
            </p>
          </div>
        </form>
      </div>

      <div className="form-box signup">
        <form action="">
          <h1>Signup</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <FaEnvelope className="icon" />
          </div>
          <div className="input-box">
            <input type="tel" placeholder="Telephone" required />
            <FaPhone className="icon" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Adress" required />
            <FaHouse className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>

          <div className="owner-forgot">
            <label>
              <input type="checkbox" /> Is this an owner account? Otherwise, leave the checkbox unmarked!
            </label>
          </div>

          <button type="submit">Signup</button>

          <div className="register-link">
            <p>
              Already have an account ?
              <a href="#" onClick={loginLink}>Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupAndLogin;