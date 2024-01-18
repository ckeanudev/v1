import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSteam,
} from "react-icons/fa6";
import { myData } from "@/constant";

const Footer = () => {
  const { links } = myData;

  return (
    <footer className="border-t px-3 pt-6 pb-8 border-light-4">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center gap-6 justify-between">
        <div className="flex items-center gap-6">
          <a
            className="text-dark-2 hover:text-dark-1 relative"
            href={links.github}
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub size={22} />
          </a>
          <a
            className="text-dark-2 hover:text-dark-1 relative"
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin size={22} />
          </a>
          <a
            className="text-dark-2 hover:text-dark-1 relative"
            href={links.facebook}
            target="_blank"
            rel="noopener noreferrer">
            <FaFacebook size={22} />
          </a>
          <a
            className="text-dark-2 hover:text-dark-1 relative"
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer">
            <FaInstagram size={22} />
          </a>
        </div>

        <p className="text-sm text-dark-3 font-medium">
          Designed and Coded by Me
        </p>

        <p className="hidden text-center text-sm text-dark-1">
          Lazily designed in{" "}
          <a
            className="text-dark-1 font-semibold underline"
            href="https://www.figma.com/"
            target="_blank"
            rel="noopener noreferrer">
            Figma
          </a>{" "}
          and coded in{" "}
          <a
            className="text-dark-1 font-semibold underline"
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noopener noreferrer">
            Visual Studio Code
          </a>{" "}
          by me. <br />
          Built with{" "}
          <a
            className="text-dark-1 font-semibold underline"
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer">
            Next.js
          </a>{" "}
          and{" "}
          <a
            className="text-dark-1 font-semibold underline"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer">
            Tailwind CSS
          </a>
          , deployed with{" "}
          <a
            className="text-dark-1 font-semibold underline"
            href="https://vercel.com/dashboard"
            target="_blank"
            rel="noopener noreferrer">
            Vercel
          </a>
          . <br /> All text is set in the{" "}
          <a
            className="text-dark-1 font-semibold underline"
            href="https://fonts.google.com/specimen/Montserrat"
            target="_blank"
            rel="noopener noreferrer">
            Montserrat
          </a>{" "}
          typeface.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
