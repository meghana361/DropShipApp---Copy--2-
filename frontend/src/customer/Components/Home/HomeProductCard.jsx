import React from "react";

import { useNavigate } from "react-router-dom";

const HomeProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    // const handleNavigate=()=>{
    //   navigate(`/product/${product?._id}`)
    // }
    <div
      onClick={() => navigate(`/women/foods/top`)}
      className="cursor-pointer flex flex-col h-[20rem] bg-white shadow-2xl rounded-2xl w-[15rem] mx-3 " 
    >
      <div className="h-[13rem] w-[10rem] mx-3 border-spacing-3 shadow-lg">
        <img
          className="object-cover w-full h-full mx-4 shadow-lg rounded-sm"
          src={product?.image || product?.imageUrl}
          alt={product?.title}
        />
      </div>

      <div className="p-4 ">
        <h3 className="text-lg font-medium text-gray-900">
          {product?.brand || product?.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">{product?.title}</p>
      </div>
    </div>
  );
};

export default HomeProductCard;
