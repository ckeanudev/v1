import { experiences } from "@/constant";

const ExperienceSection = () => {
  return (
    <section id="experienceSection" className="pt-14 pb-24">
      <div className="max-w-[1300px] mx-auto h-full p-4 md:p-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold headerGradColor mb-2">
          My Experience
        </h2>

        <div className="mt-10 md:mt-14 flex flex-col gap-6">
          {experiences.map((experience: any, i: number) => {
            const setDate: any = new Date(experience.startDate);
            const currentDate: any = new Date();

            const diffMilliseconds = currentDate - setDate;

            const months = Math.round(
              diffMilliseconds / (1000 * 60 * 60 * 24 * 30.44)
            );

            return (
              <div className=" border p-4 rounded-lg" key={i}>
                <h3 className="text-lg sm:text-xl font-bold text-dark-2 mb-0 sm:mb-1 flex items-center gap-2">
                  {experience.job} <span className="hidden sm:block">•</span>
                  <span className="hidden sm:block">{experience.company} </span>
                </h3>

                <p className="block sm:hidden mb-2 font-semibold text-dark-3">
                  {experience.company}
                </p>

                <p className="text-dark-3 text-sm sm:text-base">
                  {experience.descripion}
                </p>

                <div className="flex flex-wrap gap-1 items-center mt-3">
                  {experience.useTools.map((tool: string, j: number) => (
                    <p
                      className="text-xs bg-light-4 text-dark-3 py-1 px-2 font-semibold rounded-lg"
                      key={j}>
                      {tool}
                    </p>
                  ))}
                </div>

                <p className="text-sm font-semibold text-dark-3 mt-5">
                  {`${months} months`} • {experience.timeline}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
