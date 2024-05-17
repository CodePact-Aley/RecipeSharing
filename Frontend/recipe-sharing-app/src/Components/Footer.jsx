import React from 'react';
import './Footer.css'; // Import CSS file for styling
import viewerData from '../Data/viewerData.json'; // Import viewerData

const letters = ['Y', 'U', 'M', 'M', 'Y','!'];

function Footer() {
  return (
    <div>
    <div className="viewer-container">
      <div className="image-container">
        {viewerData.viewerimages.map((image, index) => (
          <div className="image-wrapper" key={index} data-letter={letters[index]}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
    <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>A recipe sharing platform is like a digital potluck, where food enthusiasts come together to swap recipes, culinary tips, and delicious inspiration!</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Latest News</li>
            <li>Recipes</li>
            <li>Our Products</li>
            <li>Our Authors</li>
            <li>Recipe Details</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Popular Recipes</h3>
          <ul>
            <li>Burgers</li>
            <li>Tomato Stuffing with Cumin and Radish</li>
            <li>Pizza</li>
            <li>Tomato Stuffing with Cumin and Radish</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
