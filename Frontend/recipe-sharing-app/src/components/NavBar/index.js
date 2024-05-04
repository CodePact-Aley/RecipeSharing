// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import links from './linksData'; // Import the link data
import styles from './navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navMenu}>
            <ul className={styles.links}>
                {links.map(link => (
                    <li key={link.id} className={styles.linkItems}>
                        <Link to={link.path} className={styles.li}>{link.text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
