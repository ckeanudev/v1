import Image from "next/image";
import { FaEye, FaGithub } from "react-icons/fa6";

const SomeProjectComponent = ({ project }: any) => {
  return (
    <div className="h-full flex flex-col">
      <div className="w-full relative">
        <Image
          src={project.img}
          width={300}
          height={150}
          alt={project.name}
          className="w-full h-auto rounded-lg border"
        />

        <div className="flex items-center gap-2 absolute top-3 right-3 text-dark-2">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 border bg-light-1 rounded-full">
            <FaEye size={16} />
          </a>

          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 border bg-light-1 rounded-full">
            <FaGithub size={16} />
          </a>
        </div>
      </div>

      <div className="pt-2 px-1">
        <h4 className="font-semibold text-dark-2 line-clamp-2">
          {project.name}
        </h4>

        <div className="flex items-center gap-1 lex-wrap">
          {project.tools.map((tool: string, j: number) => (
            <p
              className="text-xs bg-light-4 text-dark-3 py-1 px-2 font-semibold rounded-lg"
              key={j}>
              {tool}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SomeProjectComponent;
