import React from "react";
import { BsChatDots } from "react-icons/bs";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Israel Alagbe
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-6 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-6 hover:text-white">
            Skills
          </a>
          <a href="#hobbies" className="mr-6 hover:text-white">
          Interests
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Contact Me
          <BsChatDots className="w-4 h-4 ml-4 " size={100}/>
        </a>
      </div>
    </header>
  );
}
