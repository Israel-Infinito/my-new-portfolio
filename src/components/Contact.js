import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaFacebookSquare, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('entry.225184642', name);
    formData.append('entry.1185644968', email);
    formData.append('entry.1509608656', message);

    const url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSciUi5wodX_JxCO81KA9lXmzZHGQ_tj-tOP7SzYw1tTIXrIqw/formResponse';

    fetch(url, {
      method: "POST",
      body: new URLSearchParams(formData).toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      mode: 'no-cors'
    })
      .then(() => toast.success("Message sent!"))
      .catch((error) => {
        toast.error("Error: " + error);
      });
  };


  return (
    <div>
      <ToastContainer />
      <section id="contact" className="relative">
        <div className="container px-5 py-6 mx-auto flex sm:flex-nowrap flex-wrap space-y-2">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: "opacity(0.7)" }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3987.5494033144478!2d30.1383387!3d-1.932373!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca694b54a0c65%3A0xcff0b2d62bf4606!2sCarnegie%20Mellon%20University%20Africa!5e0!3m2!1sen!2srw!4v1709162974157!5m2!1sen!2srw"
            />
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  9. Kigali Innovation City <br />
                  Kigali, Rwanda
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <p className="text-indigo-400 leading-relaxed">
                  israelalagbe214@gmail.com
                </p>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+250798287780</p>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-0 md:mt-0 sm:mt-5 border-2 px-8 rounded-md border-gray-400 py-5">
            <h2 className="text-black sm:text-4xl text-3xl mb-3 pb-3 font-medium title-font">
              Contact Me
            </h2>
            <p className="leading-relaxed mb-5">
              You can reach out to me by sending a mail to the email address or by filling the form below.
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white-800 rounded border border-gray-700 focus:border-gray-800 focus:ring-2 
                focus:ring-gray-800 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white-800 rounded border border-gray-700 focus:border-gray-800 focus:ring-2 
                focus:ring-gray-800 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white-800 rounded border border-gray-700 focus:border-gray-800 focus:ring-2 
              focus:ring-gray-800 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg">
              Submit
            </button>
          </form>
        </div>
        <h3 className="text-center text-black mt-2 font-semibold font-medium">Connect with Me</h3>
        <div className='py-2 flex items-center justify-center space-x-2'>
          <a href="https://github.com/Israel-Infinito" className="text-gray-500  hover:text-black p-2 rounded-full"><FaGithub className="w-6 h-6" /></a>
          <a href="https://www.facebook.com/alagbe.feranmi/" className="text-gray-500  hover:text-black p-2 rounded-full"><FaFacebookSquare className="w-6 h-6" /></a>
          <a href="https://twitter.com/IsraelAlagbe2" className="text-gray-500 hover:text-black p-2 rounded-full"><FaSquareXTwitter className="w-6 h-6" /></a>
          <a href="https://www.linkedin.com/in/israelalagbeo/" className="text-gray-500  hover:text-black p-2 rounded-full"><FaLinkedin className="w-6 h-6" /></a>
          <a href="https://www.instagram.com/yourusername" className="text-gray-500  hover:text-black p-2 rounded-full"><FaInstagram className="w-6 h-6" /></a>
        </div>
      </section>
    </div>
  );
}
