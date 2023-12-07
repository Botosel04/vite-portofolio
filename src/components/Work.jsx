import React from "react";
import Workitem from "./Workitem";

const data = [
  {
    year: 2020,
    title: "NASA",
    duration: "3 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum  tempore dolores pariatur vero, dolor aliquid dignissimos accusamus excepturi quam laudantium perferendis, ipsum minima corporis repellat id amet neque itaque ad?",
  },
  {
    year: 2017,
    title: "Google",
    duration: "3 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum  tempore dolores pariatur vero, dolor aliquid dignissimos accusamus excepturi quam laudantium perferendis, ipsum minima corporis repellat id amet neque itaque ad?",
  },
  {
    year: 2015,
    title: "Amazon",
    duration: "2 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum  tempore dolores pariatur vero, dolor aliquid dignissimos accusamus excepturi quam laudantium perferendis, ipsum minima corporis repellat id amet neque itaque ad?",
  },
  {
    year: 2010,
    title: "Facebook",
    duration: "3 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum  tempore dolores pariatur vero, dolor aliquid dignissimos accusamus excepturi quam laudantium perferendis, ipsum minima corporis repellat id amet neque itaque ad?",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <Workitem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
