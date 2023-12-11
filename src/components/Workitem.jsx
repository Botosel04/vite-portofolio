import React from "react";

const Workitem = ({ year, title, duration, details }) => {
  return (
    <ol className="work-item flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="year inline-block px-2 py-1 font-semibold text-white  rounded-md">
            {year}
          </span>
          <span className=" text-lg font-semibold ">{title}</span>
          <span className="duration  my-1 text-sm font-normal leading-none ">
            {duration}
          </span>
        </p>
        <p>
          <span className="details my-2  ">{details}</span>
        </p>
      </li>
    </ol>
  );
};

export default Workitem;
