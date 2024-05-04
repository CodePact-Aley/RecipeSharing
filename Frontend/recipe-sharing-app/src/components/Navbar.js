import React from 'react';
import {Link } from "react-router-dom";
import styles from "./navbar.module.css";

function Navbar() {
    return (

        <nav className={styles.navMenu}>
            <ul className={styles.links}>
                <li className={styles.linkItems}>
                    <Link to="/" className={styles.li}>Home</Link>
                </li>
                <li className={styles.linkItems}>
                    <Link to="/blogs" className={styles.li}>Blogs</Link>
                </li>
                <li className={styles.linkItems}>
                    <Link to="/contact" className={styles.li}>Contact</Link>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar
