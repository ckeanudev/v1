import { FaFileLines } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="fixed z-30 top-0 left-0 w-full bg-light-2/60 backdrop-blur-md border-b border-light-4">
      <div className="max-w-[1400px] h-[60px] mx-auto flex items-center justify-between gap-2 py-3 px-5 ">
        <div className="flex items-center gap-10">
          <a
            href="#heroSection"
            className="text-2xl font-extrabold text-dark-2 mr-5">
            CKN
          </a>
          <a
            href="#aboutSection"
            className="text-sm font-medium text-dark-4 hover:text-dark-1 cursor-pointer">
            About
          </a>
          <a
            href="#experienceSection"
            className="text-sm font-medium text-dark-4 hover:text-dark-1 cursor-pointer">
            Experience
          </a>
          <a
            href="#projectSection"
            className="text-sm font-medium text-dark-4 hover:text-dark-1 cursor-pointer">
            Projects
          </a>
          <a
            href="#contactSection"
            className="text-sm font-medium text-dark-4 hover:text-dark-1 cursor-pointer">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-2">
          <button className="bg-dark-1 text-light-2 py-1.5 px-3 rounded-lg flex items-center justify-center font-medium gap-1.5 text-sm">
            <FaFileLines size={14} /> My Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
