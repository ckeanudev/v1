import { projects } from "@/constant";
import Image from "next/image";
import { FaEye, FaGithub } from "react-icons/fa6";
import { MdConstruction } from "react-icons/md";

const ProjectSection = () => {
  const { featuredProjects, someProjects } = projects;

  return (
    <section id="projectSection" className="min-h-[100vh] pt-12 pb-24">
      <div className="max-w-[1300px] mx-auto h-full p-4 md:p-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold headerGradColor">
          My Projects
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 w-full mt-10 md:mt-14 gap-5 px-4">
          {featuredProjects.map((project: any, i: number) => {
            return project.progress !== "Coming soon" ? (
              <div
                className="flex flex-col border rounded-xl overflow-hidden"
                key={i}>
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

                    <p className="text-dark-3 mb-3 text-sm">
                      {project.description}
                    </p>

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
                      className="bg-dark-1 text-light-2 py-2 px-4 rounded-lg flex items-center justify-center font-semibold gap-2 text-sm">
                      <FaEye size={20} /> View Site
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-4 rounded-lg flex items-center justify-center font-semibold gap-2 bg-light-3 text-dark-2 text-sm">
                      <FaGithub size={20} /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="hidden lg:flex flex-col bg-light-3 items-center justify-center rounded-xl overflow-hidden gap-4 text-dark-4">
                <MdConstruction size={40} />
                <p className="font-medium ">Coming Soon</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
