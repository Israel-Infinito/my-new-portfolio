import React from 'react';
import { FaFutbol, FaHandsHelping, FaCalendarAlt, FaGamepad, FaMicrophone, FaResearchgate } from 'react-icons/fa';

const Hobbies = () => {
    const hobbies = [
        { name: 'Research and Development', icon: <FaResearchgate /> },
        { name: 'Public Speaking', icon: <FaMicrophone /> },
        { name: 'Volunteering work', icon: <FaHandsHelping /> },
        { name: 'Organizing events', icon: <FaCalendarAlt /> },
        { name: 'Football & Basketball', icon: <FaFutbol /> },
        { name: 'Music & Games', icon: <FaGamepad /> },
    ];

    return (
        <section id="hobbies" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center">
                <h2 className="text-2xl text-gray-100 font-bold mb-4">What I Love</h2>
                <div className="flex flex-wrap -m-4 justify-center">
                    {hobbies.map((hobby, index) => (
                        <div key={index} className="p-4">
                            <div className="h-full bg-gray-100 shadow-lg shadow-cyan-500/50 px-8 py-12 rounded-lg overflow-hidden text-center relative md:min-w-0 md:max-w-none" style={{ maxWidth: '200px' }}>
                                <h2 className="tracking-widest text-2xl title-font font-medium text-gray-900 mb-1">{hobby.icon}</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{hobby.name}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>


    );
};

export default Hobbies;