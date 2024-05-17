// Dropdown.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from './dropdown.module.css'; // Import your CSS styles for the dropdown

function Dropdown({ options, position,onOptionClick }) {
    if (!options || options.length === 0) return null;

    // const dropdownStyle = {
    //     top: position.top + position.height, // Position dropdown below the hovered link
    //     left: position.left // Align dropdown with the left edge of the hovered link
    // };

    return (
        <div className={styles.dropdown} style={{ top: position.top + position.height, left: position.left }}>
            <ul className={styles.options}>
                {options.map((option, index) => (
                    <li key={index} className={styles.option} onClick={() => onOptionClick(option)}>
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
}
Dropdown.propTypes = {
    options: PropTypes.array.isRequired,
    position: PropTypes.object.isRequired,
    onOptionClick: PropTypes.func.isRequired, // Add prop type for onOptionClick function
};

export default Dropdown;