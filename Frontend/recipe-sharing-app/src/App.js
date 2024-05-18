import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home.js';
import NoMenuLayout from './pages/noMenuLayout';
import Layout from './pages/Layout';
import Blogs from './pages/Blogs/Blogs.js';
import Recipes from './pages/Recipes/Recipes.js';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Signup from './pages/Signup/Signup.js';
import Login from './pages/Login/Login.js';
import EditUserDetailsPage from './pages/Home/Profile/EditProfile.js';
import ForgotPassword from './pages/Login/ForgotPassword.js';

function App() {
  // Initialize isLoggedIn state with false
  const [isLoggedIn, setIsLoggedIn] = useState(false);

// useEffect to check if user is logged in on component mount
useEffect(() => {
  // Check if the isLogged key exists in local storage
  const isUserLoggedIn = localStorage.getItem('isLogged');

  // // If isLogged key doesn't exist, clear any existing data associated with it
  // if (!isUserLoggedIn) {
  //   localStorage.removeItem('isLogged');
  // }

  // Update isLoggedIn state based on user's login status
  setIsLoggedIn(!!isUserLoggedIn); // !! converts the value to a boolean

}, []); // Empty dependency array to run effect only once on component mount// Empty dependency array to run effect only once on component mount

  return (
    <Routes>
      {/* Routes for pages without the navbar */}
      <Route path="/login" element={<NoMenuLayout />}>
        <Route index element={<Login />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NoPage />} />
      </Route>

      {/* Routes for pages with the navbar */}
      <Route path="/" element={isLoggedIn ? <Layout /> : <Navigate to="/login" />}>
        <Route index element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        
        <Route path="editprofile" element={<EditUserDetailsPage />} />
        
      </Route>
    </Routes>
  );
}

export default App;
