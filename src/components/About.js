import React from "react";
import Typewriter from 'typewriter-effect';


function About() {
  return (
    <section id="about" class="justify-center items-center pb-10 bg-white">
      <div class="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center justify-between">
        <div class="w-full md:w-1/2 lg:px-16 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            <Typewriter
              options={{
                strings: ['Hi, My name is Israel 👋', 'I love building innovative solutions'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p class="mb-8 leading-relaxed text-gray-700 text-justify">
            I am a tech enthusiast with a passion for technological ideas and skills seeking for amazing opportunities to work on innovative projects to increase socio-economic development in Africa. I am a software developer with a strong background in building web applications, embedded systems, and cloud solutions. I am a keen researcher with strong analytical skills and a problem-solving mindset interested in advancing information technology in the areas of applied machine learning and software engineering.
            <br></br>
            Connect with me to help build solutions for sustainable impact.
          </p>
          <div class="flex flex-col md:flex-row items-center justify-center md:justify-start">
            <a
              href="#contact"
              class="inline-flex text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg mb-4 md:mb-0 md:mr-4">
              Work With Me
            </a>
            <a
              href="#projects"
              class="inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Projects Done
            </a>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded rounded transform transition duration-1000 hover:scale-125"
            alt="hero"
            src="./man.jpg"
          />
        </div>
      </div>
    </section>

  );
}

export default About;