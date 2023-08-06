import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
function Card(props) {
  let review = props.review;
  return (
    <div className="flex flex-col md:relative  ">
      <div className=" absolute top-[-7rem] z-10 mx-auto">
        <img
          src={review.image}
          alt={`${review.name}'s image here`}
          className=" aspect-square w-[140px] rounded-full object-cover"
        />
        <div className=" bg-violet-500 rounded-full aspect-square w-[140px] z-[-2] absolute top-[-6px] left-[10px] "></div>
      </div>
      <div className="text-center mt-7">
        <p className="font-bold text-2xl capitalize text-black tracking-wider ">
          {review.name}
        </p>
      </div>
      <div className=" text-center  ">
        <p className="  text-violet-300 uppercase text-sm">{review.job}</p>
      </div>

      <div className=" text-violet-400 mx-auto mt-5 ">
        <FaQuoteLeft />
      </div>

      <div className=" text-center mt-4  text-slate-500">{review.text}</div>

      <div className=" text-violet-400 mx-auto mt-5 ">
        <FaQuoteRight />
      </div>
    </div>
  );
}

export default Card;
