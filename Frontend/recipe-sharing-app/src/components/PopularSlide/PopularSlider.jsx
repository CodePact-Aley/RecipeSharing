import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import './PopularSlider.css'; // Import CSS file for styling
import popularData from '../../Data/popularData.json';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function PopularSlider() {
  const [recipes, setRecipes] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cardSliderRef = useRef(null);

  useEffect(() => {
    const recipeIds = ['6635d69e80d50b2fbe0133e1', '66462e3bda23eabda2828a15', '664632b2da23eabda2828a17', '664632deda23eabda2828a18'];
    const fetchRecipes = async () => {
      try {
        const recipePromises = recipeIds.map(async (id) => {
          const response = await axios.get(`http://localhost:4000/api/recipes/${id}`);
          const { _id, title, photo_url, total_time } = response.data;
          return { id: _id, title, photo_url, total_time };
        });
        const recipesData = await Promise.all(recipePromises);
        setRecipes(recipesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setError('Error fetching recipes');
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? recipes.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide === recipes.length - 1 ? 0 : prevSlide + 1));
  }, [recipes]); // Include recipes as a dependency

  useEffect(() => {
    if (cardSliderRef.current) {
      const scrollAmount = currentSlide * (cardSliderRef.current.offsetWidth / 2);
      cardSliderRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  useEffect(() => {
    // Auto-scroll every 3 seconds
    const intervalId = setInterval(goToNextSlide, 5000);
    
    // Clear interval on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [goToNextSlide]); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="slider-container">
      <div className="header-container">
        <h2>Popular Recipes</h2>
        <div className="arrow-container">
          <BsArrowLeftCircleFill className="arrow arrow-left" onClick={goToPrevSlide} />
          <BsArrowRightCircleFill className="arrow arrow-right" onClick={goToNextSlide} />
        </div>
      </div>
      <div className="card-slider" ref={cardSliderRef}>
        {recipes.map((recipe, index) => (
          <div key={recipe.id} className={`card ${index === currentSlide ? 'active' : ''}`}>
            {popularData.popularimages[index] && (
              <img src={popularData.popularimages[index].src} alt={popularData.popularimages[index].alt} />
            )}
            <p className="recipe-title">{recipe.title}</p>
            <p>Total Time: {recipe.total_time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularSlider;
