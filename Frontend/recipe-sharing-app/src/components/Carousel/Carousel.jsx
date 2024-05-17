import React, { useState } from 'react';
import './Carousel.css';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.slides.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0  ? data.slides.length - 1 : slide - 1);
    };

    return (
        <div className="carousel">
            <BsArrowLeftCircleFill className="arrow arrowleft" onClick={prevSlide} />
            {data.slides.map((item, idx) => (
                <div key={idx} className={slide === idx ? "slide" : "slide slide-hidden"}>
                    <img src={item.src} alt={item.alt} />
                    {idx === 0 && <div className="slide-text">{data.slidetxt[0].content}</div>}
                    {idx === 1 && <div className="slide-text">{data.slidetxt[1].content}</div>}
                </div>
            ))}
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
            <div className="indicators">
                {data.slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSlide(idx)}
                        className={slide === idx ? "indicator" : "indicator indicator-inactive"}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
