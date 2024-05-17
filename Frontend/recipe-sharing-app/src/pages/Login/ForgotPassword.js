import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import styles from "./forgotpassword.module.css";

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();
    const apiUrl = "http://localhost:8080/api/auth/resetpassword"; // Define your API URL here

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { email, newPassword };
        axios.put(apiUrl, userData)
            .then(result => {
                console.log(result);
                if (result.status === 200) {
                    navigate("/login");
                    alert("Password updated successfully.");
                } else {
                    alert("Failed to update password. Please try again.");
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className={styles.container}>
            <div className={styles.background}></div> {/* Background with animations */}
            <div className={styles.card}>
                <h2 className={styles.logo}>Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputgroup}>
                        <input
                            type="text"
                            autoComplete="off"
                            name="email"
                            placeholder=" "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.input}
                        />
                        <label className={styles.label}>Email</label>
                    </div>
                    <div className={styles.inputgroup}>
                        <input
                            type="password"
                            autoComplete="off"
                            name="newPassword"
                            placeholder=" "
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className={styles.input}
                        />
                        <label className={styles.label}>New Password</label>
                    </div>
                    <button type="submit" className={styles.btn}>Update Password</button>
                </form>
                <p>Remembered your password? <Link to="/login" className={styles.link}>Login</Link></p>
            </div>
        </div>
    );
}

export default ForgotPassword;
