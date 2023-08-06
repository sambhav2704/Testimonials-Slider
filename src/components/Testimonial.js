import React, { useState } from "react";
import Card from "./Card";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Testimonial(props) {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);
  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {
    let randomindex = Math.floor(Math.random() * reviews.length);
    while (index === randomindex) {
      randomindex = Math.floor(Math.random() * reviews.length);
    }
    setIndex(randomindex);
  }

  return (
    <div className=" w-[85vw] md:w-[700px] bg-white  flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md ">
      <Card review={reviews[index]}></Card>

      <div className=" flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto items-center justify-center ">
        <button
          className=" cursor-pointer hover:text-violet-500"
          onClick={leftShiftHandler}
        >
          <FiChevronLeft />
        </button>
        <button
          className=" cursor-pointer hover:text-violet-500"
          onClick={rightShiftHandler}
        >
          <FiChevronRight />
        </button>
      </div>
      <div className="mt-5">
        <button
          className=" bg-violet-400 hover:bg-violet-500 transition-all duration-200 px-10 py-2 font-bold rounded-md text-white text-lg "
          onClick={surpriseHandler}
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
