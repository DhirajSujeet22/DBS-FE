import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

const ItemCard = ({ title, image }) => {
  const [rating, setRating] = useState(0);
  const [starSize, setStarSize] = useState(24); // Default size
  console.log(starSize);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setLoading(true);
      const width = window.innerWidth;

      // Adjust size based on screen width
      if (width <= 480) {
        setStarSize(16); // Small screen size
        console.log("if", { width }, { starSize });
      } else if (width <= 768) {
        setStarSize(20); // Medium screen size
        console.log("else if", { width }, { starSize });
      } else {
        setStarSize(24); // Default size for large screens
        console.log("else", { width }, { starSize });
      }
      setLoading(false);
    };

    // Call once to set the initial size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {!loading && (
        <div className="relative rounded  justify-center  mx-auto items-center min-h-72 min-w-44 group border border-solid flex flex-col gap-2 ">
          <div className=" mx-auto items-center  flex justify-center w-full h-full bg-custom-gradient">
            <img
              className=" h-52 max-w-44 object-cover"
              src={image}
              alt={title}
            />
          </div>
          <div className="flex  flex-col pb-4 ">
            <p className="text-center items-center">Sudha Murty</p>
            <ReactStars
              count={5}
              value={4}
              isHalf={true}
              size={starSize}
              activeColor="#DF7921"
              edit={false}
            />

            <div
              className=" flex gap-1 justify-center items-center text-center"
              aria-hidden="true"
            >
              <div>
                <sup className="a-price-symbol">₹</sup>
                <span className="a-price-whole">197</span>
              </div>
              <div className=" line-through text-xs text-[#565959]">
                <span className="a-price-symbol">₹</span>
                <span className="a-price-whole  ">250</span>
              </div>
              <div className=" text-xs text-[#565959]">
                <span className="a-price-whole  ">(21% off)</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemCard;
