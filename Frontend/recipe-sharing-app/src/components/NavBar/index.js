import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import links from './linksData';
import styles from './navbar.module.css';
import Dropdown from '../Dropdown/index.js';

function Navbar() {
    const [userDetails, setUserDetails] = useState({
        username: '',
        email: '',
        bio: '',
        profile_picture_url: ''
    });
    const [hoveredLink, setHoveredLink] = useState(null);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, height: 0 });
    const navigate = useNavigate(); // Initialize useNavigate hook
    const isLoggedIn = localStorage.getItem('isLogged') === 'true'; // Retrieve login status
    
    const [setError] = useState(null);
    const userId = localStorage.getItem('userId'); // Retrieve user ID from local storage

    useEffect(() => {
        if (userId) {
            axios.get(`http://localhost:8080/api/users/${userId}`)
                .then(response => {
                    setUserDetails(response.data);
                })
                .catch(error => {
                    console.error('Error fetching user details:', error);
                    setError('Failed to fetch user details. Please try again later.');
                });
        } else {
            setError('User ID not found in local storage.');
        }
    }, [userId]);

    const handleMouseEnter = (id, e) => {
        const { top, left, height } = e.target.getBoundingClientRect();
        setHoveredLink(id);
        setDropdownPosition({ top, left, height });
    };

    const handleMouseLeave = () => {
        setHoveredLink(null);
    };

    const handleDropdownOptionClick = (option) => {
        if (option === 'Edit') {
            navigate('/editprofile'); // Navigate to editprofile page when Edit option is clicked
        } else if (option === 'Logout') {
            localStorage.removeItem('isLogged'); // Remove login status from local storage
            localStorage.removeItem('username'); // Remove username from local storage
            navigate('/login'); // Navigate to login page
        }
        // You can handle other options here if needed
    };

    return (
        <nav className={styles.navMenu}>
            <ul className={styles.links}>
                {links.map(link => (
                    <li
                        key={link.id}
                        className={styles.linkItems}
                        onMouseEnter={(e) => handleMouseEnter(link.id, e)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link to={link.path} className={styles.li}>{link.text}</Link>
                        {hoveredLink === link.id && <Dropdown options={link.dropdownOptions} position={dropdownPosition} onOptionClick={handleDropdownOptionClick} />}
                    </li>
                ))}
            </ul>
            {isLoggedIn && <span className={styles.welcomeMessage}>Welcome, {userDetails.username}</span>} {/* Conditionally render welcome message */}
        </nav>
    );
}

export default Navbar;
