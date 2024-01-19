import Image from "next/image";
import myPic from "../../public/images/myPic1.jpg";
import { educationalAttainment } from "@/constant";
import { hobbies } from "@/constant";

const AboutSection = () => {
  return (
    <section id="aboutSection" className="pt-12 pb-24">
      <div className="max-w-[1200px] mx-auto h-full p-4 md:p-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold headerGradColor mb-1">
          About Me
        </h2>

        <div className="w-full mt-10 md:mt-14 flex flex-col lg:flex-row-reverse gap-6">
          <div className="flex flex-col w-full lg:w-[800px]">
            <p className="text-sm sm:text-base font-normal text-dark-3">
              Back in 2021, when I was still a third-year college student, I
              decided to enhance my graphic design skills with Adobe Illustrator
              and Photoshop as my future career because designing is one of my
              hobbies and I want a job that will make me enjoy my life after
              college. But sometimes, graphic design can be boring especially
              when you finish designing because you cannot interact with it
              since it's just a design. That made me decide to look for a new
              skill to learn that involves designing and I found front-end
              development. Fast-forward to today, I still do front-end
              development and graphic design as a hobby. But right now, I'm
              working as a front-end developer where I can fully utilize the
              skills that I've learned from 2021 until now.
              <br />
              <br />
              My main focus today is building and improving projects with great
              user experiences and beautiful user interfaces for our clients at{" "}
              <a
                className="font-bold hover:bg-gradient-to-r from-[#0077b6] to-[#00b4d8] hover:bg-clip-text hover:text-transparent"
                href="https://www.linkedin.com/company/aka-software-inc/"
                target="_blank"
                rel="noopener noreferrer">
                AKA Software Inc.
              </a>{" "}
              In my free time, I usually play video games, hanging out with my
              girlfriend, play with our dogs or learn new tools for software
              development.
            </p>
          </div>

          <div className="flex flex-col gap-8 ">
            <div className="">
              <h3 className="text-lg sm:text-xl font-bold text-dark-2 mb-5">
                Educational Attainment
              </h3>

              {educationalAttainment.map((edu: any, i: number) => (
                <div className="flex flex-col mb-4" key={i}>
                  <h4 className="font-bold text-dark-3 text-base sm:text-lg">
                    {edu.title}
                  </h4>
                  <div className="flex items-center gap-1 flex-wrap">
                    {edu.awards.map((award: any, j: number) => (
                      <p
                        className="text-[11px] px-1.5 font-semibold py-0.5 bg-light-3 rounded-md text-dark-3"
                        key={j}>
                        {award}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-dark-3">
                    {edu.school}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-dark-4">
                    {edu.schoolAddress}
                  </p>
                  <p className="mt-2 text-xs text-dark-3 font-semibold">
                    {edu.year}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-full md:w-[400px] ">
              <h3 className="text-lg sm:text-xl font-bold text-dark-2 mb-5">
                Hobbies
              </h3>

              <div className="flex gap-2 flex-wrap">
                {hobbies.map((hobby: string, i: number) => (
                  <p
                    className="text-xs px-1 py-0.5 bg-light-3 text-dark-2 font-medium rounded-md"
                    key={i}>
                    {hobby}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
