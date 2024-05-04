
import React, { useState, useEffect } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Button from '../components/Button';
import Logo from '../assets/Logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  useEffect(() => {
    var token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <header id="navbar">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid ms-5">
          <NavLink to="/" style={{ textDecoration: "none", color: "#054169" }}>
            <span style={{ fontSize: "1.2rem" }}>FoodLens</span>
            <img src={Logo} className="logo" alt="FoodLens Logo" />
          </NavLink>
          <button
            className="navbar-toggler ml-auto custom-toggler navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
                  Home <HomeOutlinedIcon />
                </Link>
              </li>

              <div>
                {/* {isLoggedIn ? (
                  <AccountCircleIcon />
                ) : (
                <Link to="/login"> 
                  <Button label="Login" c="main-btn" type="start" />
                </Link>
                )} */}
              </div>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
