
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Vector1 from "../assets/Vector/1.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    weight: '',
    height: '',
    sex: '',
    allergens: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/v1/auth/signup', formData);
      console.log(response.data); // Handle success
      // Show success toast
      toast.success('User registered successfully');
      // Redirect to login page after successful signup
      navigate('/login');
    } catch (error) {
      console.error('Error:', error.response.data); // Handle error
      // Show error toast
      toast.error('User registration failed. Please try again.');
    }
  };

  return (
    <section id="home">
      <img src={Vector1} alt="Vector1" className="Vector1" />
      <div className="container-fluid px-0">
      <div className="container">
      <h1 className='d-flex justify-content-center align-item-center'>Login to FoodLens</h1>
      <div className='d-flex justify-content-center align-item-center mt-5'>
      <form onSubmit={handleSubmit} className='form p-5'>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="d-flex align-items-center mt-3">
            <label htmlFor="password" style={{ marginRight: '0.5rem' }}>Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} style={{width: '25rem'}} />
        </div>
        <div className="d-flex align-items-center mt-3">
            <label htmlFor="confirmPassword" style={{ marginRight: '0.5rem' }}>Confirm password:</label>
            <input type="password" id="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} style={{width: '25rem'}} />
        </div>
        <div className='mt-3'>
          <label>Weight:</label>
          <input type="number" name="weight" value={formData.weight} onChange={handleChange} />
        </div>
        <div className='mt-3'>
          <label>Height:</label>
          <input type="number" name="height" value={formData.height} onChange={handleChange} />
        </div>
        <div>
          <label>Sex:</label>
          <select name="sex" value={formData.sex} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Allergens:</label>
          <input type="text" name="allergens" value={formData.allergens} onChange={handleChange} />
        </div>
        <div className='d-flex justify-content-center align-item-center mt-3'>
            <button type="submit" className='login-btn'>Sign up</button>
        </div>

        <Link to='/login'>
            <h6 className='d-flex justify-content-center align-item-center mt-4' style={{textDecoration: 'underline', textUnderlineOffset: '2px'}}>Already have an account ? Login here</h6>
        </Link>

      </form>
    </div>
    </div>
    </div>
    </section>
  );
}

export default SignUp;
