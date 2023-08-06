import React from "react";
import reviews from "./data";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] items-center justify-center h-screen bg-gray-200">
      <div className="text-center">
        <h1 className=" text-4xl font-bold">Our Testimonials</h1>
        <div className=" h-[4px] bg-violet-400  w-1/5 mt-1 mx-auto"></div>

        <Testimonial reviews={reviews} />
      </div>
    </div>
  );
};

export default App;
