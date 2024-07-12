import React from "react";
import "./ProductCard.css";
import { useLocation, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { title, brand, image, price ,discountedPrice,discountPersent} = product;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${product?._id}`);
  };

  return (
    <div
      onClick={handleNavigate}
 
      className="productCard w-[15rem] border m-3 transition-all cursor-pointer rounded-lg"
    >
      <div className="h-[20rem] rounded-lg">
        <img
          className="h-full w-full md:w-60 sm:w-52 object-cover object-left-top rounded-lg "
          src={image}
          alt=""
        />
      </div>
      <div className="textPart bg-white p-3 ">
        <div>
          <p className="font-bold opacity-60">{brand}</p>
          <p className="">{title}</p>

          <p className="font-semibold opacity-50 px-3">
            {/* {color} */}
            </p>
        </div>

        <div className="flex space-x-2 items-center px-12">
          <p className="font-semibold">
            {price}
            </p>
          <p className="opacity-50 line-through">
            ₹{price}
            </p>
          <p className="text-green-600 font-semibold">
            {discountedPrice}
            % off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
