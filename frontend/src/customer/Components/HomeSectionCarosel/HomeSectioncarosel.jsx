import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import { crops } from "../../../Data/crops";

const HomeSectioncarosel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 2,
        itemsFit: "contain", },
    568: { items: 2,
        itemsFit: "contain", },
    1024: { items: 5,
        itemsFit: "contain", },
  };
  const slideprev = () => setActiveIndex(activeIndex - 1);
  const slidenext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data?.slice(0,10).map((item) =>  (
    <div className="">
      {" "}
      <HomeSectionCard product={item}  />
    </div>
  ));   

  return (
    <div className="px-4  border border-gray-400 lg:px-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-extrabold text-gray-600 pt-2">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
    
          disableButtonsControl
          disableDotsControls
          mouseTracking
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
          animationType="fadeout"
          animationDuration={2000}
        />
         {activeIndex !== items.length - 5 &&(<Button
        //   variant="contained"
          className="z-50"
          onClick={slidenext}
        //   sx={{
        //     position: "absolute",
        //     top: "8rem",
        //     right: "0rem",
        //     transform: "translateX(50%) rotate(90deg)",
        //   }}
          aria-label="next"
        >
          {/* <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "white" }}
          /> */}
        </Button>)}
        {activeIndex !== 0 &&(<Button
        //   variant="contained"
          className="z-50"
          onClick={slideprev}
        //   sx={{
        //     position: "absolute",
        //     top: "8rem",
        //     left: "-4rem",
        //     transform: "translateX(50%) rotate(90deg)",
        //   }}
          aria-label="next"
        >
          {/* <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(-90deg)", color: "white" }}
          /> */}
        </Button>)}
      </div>
    </div>
  );
};

export default HomeSectioncarosel;
