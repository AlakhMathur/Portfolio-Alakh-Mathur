import React from 'react';
import { Calendar, MapPin, Users, Code, Server, Database } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            💼 Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional experience in software development and team leadership
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-200"></div>
          
          {/* Experience Item */}
          <div className="relative mb-12">
            <div className="flex flex-col md:flex-row items-start md:items-center">
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10">
                <div className="w-full h-full bg-blue-600 rounded-full"></div>
              </div>
              
              {/* Content */}
              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Code className="text-blue-600" size={20} />
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Team Lead
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Software Development Intern
                  </h3>
                  
                  <div className="text-blue-600 font-semibold mb-4">
                    DLED Labs, IIT Ropar (NPTEL Sponsored)
                  </div>
                  
                  <div className="flex items-center gap-4 text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span className="text-sm">May 2025 – July 2025</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span className="text-sm">Remote</span>
                    </div>
                  </div>

                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Users className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                      <span>Led a team to design and develop a software solution for the CAL (Continuous Active Learning) project aimed at improving educational assessment efficiency.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Code className="text-green-500 mt-1 flex-shrink-0" size={16} />
                      <span>Defined complete SDLC and system architecture; coordinated across subteams.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Server className="text-purple-500 mt-1 flex-shrink-0" size={16} />
                      <span>Built scalable front-end using React.js & TypeScript and back-end with Node.js, Express, MongoDB.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Database className="text-orange-500 mt-1 flex-shrink-0" size={16} />
                      <span>Integrated third-party APIs and ensured modular and maintainable code.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full mt-1 flex-shrink-0"></div>
                      <span>Deployed software internally (NDA protected).</span>
                    </li>
                  </ul>

                  {/* Tech Stack */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;