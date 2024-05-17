import React from 'react';
import Carousel from '../Components/Carousel.jsx';
import ImageGrid from '../Components/imageGrid.jsx'; 
import PopularSlider from '../Components/PopularSlider.jsx';
import carouselData from '../Data/carouselData.json';
import imageData from '../Data/imageData.json';
import Footer from '../Components/Footer.jsx';

function Home() {
    return (
        <div className="home">
          <Carousel data={carouselData} />
          <ImageGrid images={imageData.gridimages} /> 
          <PopularSlider />
          <Footer/>
        </div>
      );
}

export default Home;
