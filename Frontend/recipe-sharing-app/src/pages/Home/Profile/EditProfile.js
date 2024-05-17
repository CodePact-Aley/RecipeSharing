import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './editprofile.module.css'; // Import CSS module for styles

function EditUserDetailsPage() {
    const [userDetails, setUserDetails] = useState({
        username: '',
        email: '',
        bio: '',
        profile_picture_url: ''
    });

    const [error, setError] = useState(null);
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/api/users/${userId}`, userDetails)
            .then(response => {
                setUserDetails(response.data);
                // Optionally, show a success message or navigate to another page
            })
            .catch(error => {
                console.error('Error updating user details:', error);
                setError('Failed to update user details. Please try again later.');
            });
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.editUserDetailsContainer}>
            <div className={styles.background}></div> {/* Background with animations */}
            <div className={styles.card}>
                <h2 className={styles.logo}>Edit Profile</h2>
                <form onSubmit={handleSubmit}>
                    {/* Input field for username */}
                    <div className={styles.inputgroup}>
                        <input
                            type="text"
                            name="username"
                            placeholder=" "
                            value={userDetails.username}
                            onChange={handleInputChange}
                        />
                        <label className={styles.label}>Username</label>
                    </div>
                    {/* Input field for email */}
                    <div className={styles.inputgroup}>
                        <input
                            type="email"
                            name="email"
                            placeholder=" "
                            value={userDetails.email}
                            onChange={handleInputChange}
                        />
                        <label className={styles.label}>Email</label>
                    </div>
                    {/* Input field for bio */}
                    <div className={styles.inputgroup}>
                        <textarea
                            name="bio"
                            placeholder=" "
                            value={userDetails.bio}
                            onChange={handleInputChange}
                        />
                        <label className={styles.label}>Bio</label>
                    </div>
                    <button type="submit" className={styles.btn}>Save Changes</button>
                </form>
            </div>
        </div>
    );
}

export default EditUserDetailsPage;
