import React from "react";
import Projectitem from "./Projectitem";
import airbnb from "../assets/airbnb.png";
import facebook from "../assets/facebook.png";
import hyper from "../assets/hyper.png";
import unseen from "../assets/unseen.png";
const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] ">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ut incidunt
        eum ad sint modi commodi amet quis voluptate reiciendis exercitationem,
        ullam pariatur, laudantium aut dignissimos, recusandae possimus iure
        consequatur!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <Projectitem img={airbnb} title="AirBnb App" />
        <Projectitem img={facebook} title="Facebook App" />
        <Projectitem img={hyper} title="Hyper App" />
        <Projectitem img={unseen} title="Unseen App" />
      </div>
    </div>
  );
};

export default Projects;
