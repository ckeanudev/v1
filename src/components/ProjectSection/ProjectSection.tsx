"use client";
import { projects } from "@/constant";
import FeaturedProjectComponent from "./FeaturedProjectComponent";
import SomeProjectSection from "./SomeProjectSection";

const ProjectSection = () => {
  const { featuredProjects, bigProjects, someProjects } = projects;

  return (
    <section id="projectSection" className="min-h-[100vh] pt-14 pb-24">
      <div className="max-w-[1300px] mx-auto h-full p-4 md:p-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold headerGradColor">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full mt-10 md:mt-14 gap-2">
          {featuredProjects.map((project: any, i: number) => {
            return <FeaturedProjectComponent project={project} key={i} />;
          })}

          <div className="h-full hidden lg:flex flex-col justify-between gap-2">
            {bigProjects.map((project: any, i: number) => (
              <div className="border rounded-lg p-3" key={i}>
                <p className="text-lg font-bold text-dark-2">{project.title}</p>
                <p className="text-sm text-dark-3 mt-1">
                  {project.description}
                </p>
                <div className="flex gap-1 items-center flex-wrap mt-2">
                  <p className="text-xs bg-dark-2 text-light-3 py-1 px-2 font-medium rounded-lg">
                    {project.purpose}
                  </p>
                  {project.tools.map((tool: any, j: number) => (
                    <p
                      className="text-xs bg-light-4 text-dark-3 py-1 px-2 font-semibold rounded-lg"
                      key={j}>
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex lg:hidden flex-col gap-2">
          {bigProjects.map((project: any, i: number) => (
            <div className="border rounded-lg p-5" key={i}>
              <p className="text-lg font-bold text-dark-2">{project.title}</p>

              <p className="text-sm text-dark-3 mt-1">
                {project.completeDescription}
              </p>

              <div className="flex gap-1 items-center flex-wrap mt-2">
                <p className="text-xs bg-dark-2 text-light-3 py-1 px-2 font-medium rounded-lg">
                  {project.purpose}
                </p>
                {project.tools.map((tool: any, j: number) => (
                  <p
                    className="text-xs bg-light-4 text-dark-3 py-1 px-2 font-semibold rounded-lg"
                    key={j}>
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <SomeProjectSection someProjects={someProjects} />
      </div>
    </section>
  );
};

export default ProjectSection;
