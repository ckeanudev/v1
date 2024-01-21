"use client";
import React, { useState } from "react";
import SomeProjectComponent from "./SomeProjectComponent";

const SomeProjectSection = ({ someProjects }: any) => {
  const [projectCount, setProjectCount] = useState(8);

  return (
    <>
      <div className="w-full mt-14 lg:mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-2">
        {someProjects.map((project: any, i: number) => {
          return projectCount > i ? (
            <SomeProjectComponent project={project} key={i} />
          ) : null;
        })}
      </div>

      <div className="w-full flex justify-center mt-14 font-medium">
        <button
          className="text-dark-3 hover:text-dark-1"
          onClick={() => {
            if (projectCount === 8) {
              setProjectCount(someProjects.length);
            } else {
              setProjectCount(8);
            }
          }}>
          {projectCount === 8 ? `See more` : `See less`}
        </button>
      </div>
    </>
  );
};

export default SomeProjectSection;
