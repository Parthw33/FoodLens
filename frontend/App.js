
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Error404 from './pages/Error404';
import Product from './pages/Product';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route Route path='/' element={<Home />}></Route>
        <Route Route path='/upload' element={<Upload />}></Route>
        <Route Route path='/signup' element={<SignUp />}></Route>
        <Route Route path='/login' element={<Login />}></Route>
        <Route Route path='/myprofile' element={<MyProfile />}></Route>
        <Route Route path='*' element={<Error404 />}></Route>
        <Route exact path="/product/:barcode" element={<Product/>}/>
      </Routes>
      <Footer />
    </>
  );
}

