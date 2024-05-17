import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import styles from "./signup.module.css"; // Import the CSS module

function Signup() {    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const currentDate = new Date().toISOString(); // Get current date in ISO format
        const userData = {
            username: username,
            email: email,
            join_date: currentDate,
            password: password,
            role: 'browser' // Set role as 'browser'
        };
        axios.post("http://localhost:8080/api/auth/register", userData)
            .then(result => {
                console.log(result);
                navigate("/login");
            })
            .catch(err => console.log(err));
    }

    return (
        <div className={styles.container}>
            <div className={styles.background}></div> {/* Background with animations */}
            <div className={styles.card}>
                <h2><center>Sign Up</center></h2>
                <form onSubmit={handleSubmit}>
                    <div className={`${styles.inputgroup} ${styles.mb3}`}>
                        <input
                            type="text"
                            placeholder='Enter Username'
                            autoComplete='off'
                            name='username'
                            className={`${styles.formControl} ${styles.rounded}`}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className={`${styles.inputgroup} ${styles.mb3}`}>
                        <input
                            type="text"
                            placeholder='Enter Email'
                            autoComplete='off'
                            name='email'
                            className={`${styles.formControl} ${styles.rounded}`}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={`${styles.inputgroup} ${styles.mb3}`}>
                        <input
                            type="password"
                            placeholder='Enter Password'
                            name='password'
                            className={`${styles.formControl} ${styles.rounded}`}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={`${styles.inputgroup} ${styles.mb3}`}>
                        <input
                            type="password"
                            placeholder='Confirm Password'
                            name='confirmPassword'
                            className={`${styles.formControl} ${styles.rounded}`}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className={`${styles.btn} ${styles.btnSuccess} ${styles.w100} ${styles.rounded}`}>
                        Sign Up
                    </button>
                </form>
                <p>Already have an account?</p>
                <Link to="/login" className={styles.link}>
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Signup;
