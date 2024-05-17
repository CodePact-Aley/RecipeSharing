import React from 'react';
import './imageGrid.css';

const ImageGrid = ({ images }) => {
    // Check if images is undefined or null
    if (!images) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid-container">
            {images.map((image, index) => (
                <div key={index} className={`grid-item ${index % 2 === 0 ? 'big-width' : ''}`}>
                    <img src={image.src} alt={image.alt} />
                    <div className="text-overlay">{image.text}</div>
                </div>
            ))}
        </div>
    );
};

export default ImageGrid;
