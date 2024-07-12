import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { Box } from "@mui/material";

import { pickles } from "../Data/Pickles/pickles";
import { millets } from "../Data/MIllets/millets";
import { crops } from "../Data/Crops/crops";

const Homepage = () => {
  return (
    <div className=" shadow-lg rounded-lg w-300px h-500px mb-1 my-1 align-middle">
      <div className="shadow-xl">


      <Box
          bgcolor={"#bcf512"}
          height={"50px"}
          alignContent={"center"}
          color={"white"}
          >
          <p className="flex flex-1 justify-center font-bold text-2xl text-white 	">
            Welcome to RuralRiches!
            
          </p>
          </Box>
          </div>
      <div className="w-full shadow-xl rounded-md">
        {/* <HomeCarousel images={homeCarouselData} />
      <HomeCarousel images={homeCarouselData} /> */}
        <Box
          bgcolor={"#8deb65"}
          height={"150px"}
          alignContent={"center"}
          color={"white"}
        >
          
          <p className="flex flex-1 justify-center font-semibold text-2xl  mt-3">
            Flat 10% off on 1st Order!
          </p>
          <Box bgcolor={"#8deb65"} height={"50px"} alignContent={"center"}>
            {" "}
            <p className="flex flex-1 justify-center font-semibold text-2xl  mt-3">
            Don't miss out on some very special items at extraordinary sale prices. For a limited time!
                        </p>
          </Box>
        </Box>
        <Box bgcolor={"#e2734f"} height={"10px"}></Box>
      </div>

      <div className="space-y-10 py-20 mx-3 space-x-3 mt-1 my-1 ">
        <HomeProductSection
          data={millets}
          section={"Millets (ಸಿರಿಧಾನ್ಯಗಳು)"}
        />
        <HomeProductSection
          data={pickles}
          section={"Pickles(ಉಪ್ಪಿನಕಾಯಿ)"}
        />
        <HomeProductSection data={crops} section={"Crops"} />


      </div>
    </div>
  );
};

export default Homepage;
