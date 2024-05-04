
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Vector1 from "../assets/Vector/1.png";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/v1/auth/login', formData);
      // console.log(response.data.token); // Handle success, maybe store authentication token
      // Display success toast message
      // Redirect to dashboard or home page after successful login
      
        let token = response.data.token 
        // console.log(token);
        localStorage.setItem("token", token)
        navigate('/upload');
        toast.success('Logged in successfully');
      
      // else
      //   console.log("NO TOKEN");
    } catch (error) {
      console.error('Error:', error.response.data); // Handle error, maybe show error message
      // Display error toast message
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <section id="home">
      <img src={Vector1} alt="Vector1" className="Vector1" />
      <div className="container-fluid px-0">
      <div className="container">
      <h1 className='d-flex justify-content-center align-item-center'>Login to FoodLens</h1>
      <div className='d-flex justify-content-center align-item-center mt-5'>
        <form onSubmit={handleSubmit} className='p-5 form'>
          <div>
            <label>Username:</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
          </div>
          <div className="d-flex align-items-center">
            <label htmlFor="password" style={{ marginRight: '0.5rem' }}>Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} style={{width: '25rem'}} />
          </div>
          <div className='d-flex justify-content-center align-item-center mt-5'>
            <button type="submit" className='login-btn'>Login</button>
          </div>
          
          <Link to='/signup'>
            <h6 className='d-flex justify-content-center align-item-center mt-4' style={{textDecoration: 'underline', textUnderlineOffset: '2px'}}>Don't have an account ? Create account now</h6>
          </Link>

        </form>
      </div>
    </div>
    </div>
    </section>
  );
};

export default Login;
