import React from 'react';
import Carousel from '../../components/Carousel/Carousel.jsx'
import ImageGrid from '../../components/imageGrid/imageGrid.jsx'; 
import PopularSlider from '../../components/PopularSlide/PopularSlider.jsx';
import carouselData from '../../Data/carouselData.json';
import imageData from '../../Data/imageData.json';
import Footer from '../../components/Footer/Footer.jsx';

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
