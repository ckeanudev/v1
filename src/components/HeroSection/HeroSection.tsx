import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSteam,
} from "react-icons/fa6";
import { myData } from "@/constant";

const HeroSection = () => {
  const { links } = myData;

  return (
    <section id="heroSection" className="w-full pt-10 md:pt-28">
      <div className="max-w-[1400px] mx-auto relative">
        <div className="hidden md:block absolute top-0 left-0 w-full h-full shadowHero bg-transparent"></div>

        <div className="flex w-full ">
          <div className="w-[30px] md:w-[80px] h-[40px] md:h-[80px] "></div>
          <div className="hidden md:block  w-[100px] h-[80px] border-x borderDashed"></div>
          <div className="flex-1 flex justify-center items-end">
            <div className="h-[80px] flex-1 sm:flex-none sm:w-[380px] flex items-end justify-center p-4 gap-8 border-x borderDashed">
              <p className="flex-1 text-center font-semibold text-sm md:text-xl text-dark-3 relative">
                👋🏻 Hello there
              </p>
            </div>
          </div>
          <div className="hidden md:block  w-[100px] h-[80px] border-x borderDashed"></div>
          <div className="w-[30px] md:w-[80px] h-[40px] md:h-[80px] relative">
            <div className="hidden md:block h-[80px] w-[80px] border borderDashed rounded-full bottom-0 left-0 -translate-x-[50%] translate-y-[50%]"></div>
          </div>
        </div>

        <div className="w-full flex border-y borderDashed">
          <div className="w-[30px] md:w-[80px]"></div>
          <div className="flex-1 bg-light-2 flex flex-col items-center p-7  border-x borderDashed relative z-10">
            <h1 className="flex-1 text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-extrabold mb-3 lg:mb-5 text-center headerGradColor">
              I'm Ckeanu Richer Locson
            </h1>

            <div className="px-6 py-1 rounded-full bg-gradient-to-r from-[#f72585]/30 to-[#4361ee]/30">
              <p className="text-center text-sm md:text-base lg:text-xl font-bold / bg-gradient-to-r from-[#f72585] to-[#4361ee] bg-clip-text text-transparent">
                Front End Developer
              </p>
            </div>
          </div>
          <div className="w-[30px] md:w-[80px]"></div>
        </div>

        <div className="w-full flex border-b borderDashed">
          <div className="w-[30px] md:w-[80px]"></div>
          <div className="flex-1 flex flex-col items-center p-6 border-x borderDashed bg-light-2 relative z-10">
            <p className="font-medium text-sm sm:text-base lg:text-lg mb-2 text-dark-4 text-center">
              Passionate about crafting visually appealing and user-friendly web
              apps with great user experiences.
            </p>
          </div>
          <div className="w-[30px] md:w-[80px]"></div>
        </div>

        <div className="w-full flex">
          <div className="w-[30px] md:w-[80px] h-[40px] md:h-[80px] relative">
            <div className="hidden md:block h-[80px] w-[80px] border borderDashed rounded-full top-0 right-0 translate-x-[50%] -translate-y-[50%]"></div>
          </div>
          <div className="hidden md:block  w-[100px] h-[180px] border-x borderDashed"></div>

          <div className="flex-1 flex justify-center">
            <div className="h-[100px] md:h-[200px] flex-1 sm:flex-none sm:w-[380px] flex items-start justify-center p-8 gap-8 border-x borderDashed ">
              <a
                className="text-dark-2 hover:text-dark-1 relative"
                href={links.github}
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub size={26} />
              </a>
              <a
                className="text-dark-2 hover:text-dark-1 relative"
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin size={26} />
              </a>
              <a
                className="text-dark-2 hover:text-dark-1 relative"
                href={links.facebook}
                target="_blank"
                rel="noopener noreferrer">
                <FaFacebook size={26} />
              </a>
              <a
                className="text-dark-2 hover:text-dark-1 relative"
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer">
                <FaInstagram size={26} />
              </a>
              {/* <a
                className="text-dark-2 hover:text-dark-1 relative"
                href={links.steam}
                target="_blank"
                rel="noopener noreferrer">
                <FaSteam size={26} />
              </a> */}
            </div>
          </div>

          <div className="hidden md:block w-[100px] h-[180px] border-x borderDashed"></div>
          <div className="w-[30px] md:w-[80px] h-[40px] md:h-[80px]"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
