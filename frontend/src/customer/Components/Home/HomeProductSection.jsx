import AliceCarousel from "react-alice-carousel";
import HomeProductCard from "./HomeProductCard";
import "./HomeProductSection.css";
import { Button } from "@mui/material";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
 
const HomeProductSection = ({ section, data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = async () => setActiveIndex(activeIndex - 1);
  const slideNext = async() => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const responsive = {
    0: {
      items: 2,
      itemsFit: "contain",
    },
    720: {
      items: 4,
      itemsFit: "contain",
    },
    1024: {
      items: 5,
      itemsFit: "contain",
    },
  };
  const items = data?.slice(0, 10).map((item) => (
    <div className="">
      {" "}
      <HomeProductCard product={item} />
    </div>
  ));

  // const slideInFromRight = (t) => {
  //   return `translateX(${100 - t * 100}%)`;
  // };

  return (
    <div className="relative  px-4 sm:px-6 lg:px-8 ">
      <h2 className="text-2xl font-extrabold text-gray-900 py-5">{section}</h2>
      <div className="relative border p-5">
        <AliceCarousel
          // disableButtonsControls
          disableDotsControls
          mouseTracking
          items={items}
          activeIndex={activeIndex}
          responsive={responsive}
          infinite
          onSlideChanged={syncActiveIndex}
          animationType="fadeout"
          animationDuration={2000}
        />
        {activeIndex !== items.length - 4 && (
          <Button
            onClick={slideNext}
            variant="contained"
            className="z-50 bg-[]"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
            }}
            color="white"
            aria-label="next"
          >
            {/* <KeyboardArrowLeftIcon
              className=""
              sx={{ transform: "rotate(90deg)" ,color:"black"}}
            /> */}
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-50 bg-[]"
            color="white"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%)  rotate(90deg)",
            }}
            aria-label="next"
          >
            {/* <KeyboardArrowLeftIcon */}
              {/* className=""
              sx={{ transform: " rotate(-90deg)" }}
            /> */}
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeProductSection;
