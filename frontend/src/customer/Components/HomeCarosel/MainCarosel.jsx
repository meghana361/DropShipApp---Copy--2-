import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCaroseldata } from './MainCaroseldata';
import { useNavigate } from "react-router-dom";

const responsive    = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};


const handleDragStart = (e) => e.preventDefault();
const   Maincarosel = () => {
    const navigate = useNavigate();
    const item = MainCaroseldata.map((item) => (
      <img
        className="cursor-pointer shadow-lg rounded-lg ml-4"
        onClick={() => navigate(item.path)}
        src={item.image}
        alt=""
        onDragStart={handleDragStart}
        role="presentation"
        height={"300px"}
        width={"300px"}
        
      />
    ));
    return (
        <AliceCarousel
          mouseTracking
          items={item}
          autoPlay
          responsive={responsive}
          infinite
          autoPlayInterval={2000}
          disableButtonsControls
          
        />
      );
    }
export default Maincarosel;