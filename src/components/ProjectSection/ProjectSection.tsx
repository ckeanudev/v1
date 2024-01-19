"use client";
import { projects } from "@/constant";
import FeaturedProjectComponent from "./FeaturedProjectComponent";

const ProjectSection = () => {
  const { featuredProjects, someProjects } = projects;

  return (
    <section id="projectSection" className="min-h-[100vh] pt-12 pb-24">
      <div className="max-w-[1300px] mx-auto h-full p-4 md:p-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold headerGradColor">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full mt-10 md:mt-14 gap-5 px-0 md:px-4">
          {featuredProjects.map((project: any, i: number) => {
            return <FeaturedProjectComponent project={project} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
