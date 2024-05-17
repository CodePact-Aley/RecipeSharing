import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import { BiLoaderAlt } from 'react-icons/bi'; // Import loading icon
import styles from "./login.module.css";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const apiUrl = "http://localhost:8080/api/auth/login"; // Define your API URL here

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(apiUrl, { email, password });
            if (response.status === 200) {
                // Extract token and userId from response data
                const { token, userId } = response.data;
                // Store token and userId in local storage
                localStorage.setItem('isLogged', true); // Set as string
                console.log("Logged in successfully. Navigating to home page.");

                localStorage.setItem('token', token);
                localStorage.setItem('userId', userId);
                // Navigate to the home page
                navigate("/");
            } else {
                setError("Login failed. Please check your credentials.");
            }
        } catch (error) {
            setError("An error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className={styles.container}>
            <div className={styles.background}></div> {/* Background with animations */}
            <div className={styles.card}>
                <h2 className={styles.logo}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputgroup}>
                        <input
                            type="text"
                            autoComplete="off"
                            name="email"
                            placeholder=" "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className={styles.label}>Email</label>
                    </div>
                    <div className={styles.inputgroup}>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder=" "
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className={styles.label}>Password</label>
                        <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    {loading ? (
                        <button type="submit" className={styles.btn} disabled>
                            <BiLoaderAlt className={styles.loaderIcon} /> {/* Loading icon */}
                        </button>
                    ) : (
                        <button type="submit" className={styles.btn}>Login</button>
                    )}
                    {error && <p className={styles.error}>{error}</p>}
                </form>
                <p>Don't have an account? <Link to="signup" className={styles.link}>Sign Up</Link></p>
                <p>Forgot your password? <Link to="forgotpassword" className={styles.link}>Reset Password</Link></p>
            </div>
        </div>
    );
}

export default Login;
