import Image from "next/image";
import React from "react";
import { FaEye, FaGithub } from "react-icons/fa6";

const FeaturedProjectComponent = ({ project }: any) => {
  return (
    <div className="flex flex-col border rounded-xl overflow-hidden">
      <div className="relative">
        <Image
          src={project.img}
          width={400}
          height={200}
          alt={project.title}
          className="w-full h-auto "
        />
      </div>

      <div className="w-full p-5 flex flex-col justify-between h-full gap-3">
        <div className="">
          <h3 className="font-bold text-dark-2 text-xl mb-1">
            {project.title}
          </h3>

          <p className="text-dark-3 mb-3 text-sm">{project.description}</p>

          <div className="flex flex-wrap gap-1 items-center">
            {project.tools.map((tool: string, j: number) => (
              <p
                className="text-xs bg-light-4 text-dark-3 py-1 px-2 font-semibold rounded-lg"
                key={j}>
                {tool}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-3.5 border-t">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark-1 hover:bg-dark-2 text-light-2 py-2 px-4 rounded-lg flex items-center justify-center font-semibold gap-2 text-xs sm:text-sm">
            <FaEye size={18} /> View Site
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 rounded-lg flex items-center justify-center font-semibold gap-2 bg-light-3 hover:bg-light-4 text-dark-2 text-xs sm:text-sm">
            <FaGithub size={18} /> Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectComponent;
