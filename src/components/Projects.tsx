import React from 'react';
import { ExternalLink, Github, Calendar, Award } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  specialNote?: string;
  icon: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "PreAssess",
      subtitle: "Dependency-Aware Assessment Generator",
      period: "Feb 2025 – May 2025",
      description: "An intelligent assessment platform that unlocks topics only after prerequisites are cleared using dynamically generated quizzes.",
      technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Llama3"],
      features: [
        "Smart learner dashboard with streak visualization",
        "AI-powered chatbot for learning assistance",
        "Interactive topic maps for progress tracking",
        "Instructor dashboard with override features and analytics"
      ],
      githubUrl: "https://github.com/AlakhMathur/Smart-Dependency-Based-Learning-Platform",
      liveUrl: "https://pre-assess.vercel.app/",
      icon: "🎯"
    },
    {
      id: 2,
      title: "Sustainable Shopping Website",
      subtitle: "Eco-Friendly E-commerce Platform",
      period: "Mar 2025 – Jun 2025",
      description: "Amazon clone with innovative eco-features including green partner system, sustainability lens, and environmental genie.",
      technologies: ["React", "Node.js", "Python", "Scikit-learn", "MongoDB"],
      features: [
        "Carbon-footprint calculator for products",
        "NLP-based eco-score rating system",
        "Gamification elements for sustainable shopping",
        "AI recommendation chatbot for greener alternatives"
      ],
      githubUrl: "https://github.com/AlakhMathur/HackOn-Sustainable_Shopping_Experience",
      specialNote: "Semi-Finalist, Amazon HackOn 2025",
      icon: "🌱"
    },
    {
      id: 3,
      title: "MediCare",
      subtitle: "Google Solution Challenge 2024",
      period: "Jan 2024 – Mar 2024",
      description: "Secure healthcare platform integrating blockchain technology and AI for comprehensive medical record management.",
      technologies: ["Blockchain", "AI", "React.js", "Node.js"],
      features: [
        "AI-based symptom analysis and diagnosis assistance",
        "Blockchain-secured medical record storage",
        "Patient-doctor communication portal",
        "Healthcare analytics dashboard"
      ],
      githubUrl: "https://github.com/AlakhMathur/medicare",
      specialNote: "Selected for Google Solution Challenge 2024 India Regional Bootcamp",
      icon: "🏥"
    },
    {
      id: 4,
      title: "LandSol",
      subtitle: "Blockchain Land Registry",
      period: "Oct 2024 – Nov 2024",
      description: "Transparent and fraud-prevention focused land registry system built on blockchain technology.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Blockchain"],
      features: [
        "Immutable land ownership records",
        "Transparent transaction history",
        "Fraud prevention mechanisms",
        "Government integration capabilities"
      ],
      githubUrl: "https://github.com/AlakhMathur/Landsol",
      specialNote: "Finalist at Hack-O-Fest 2024",
      icon: "🏘️"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🚀 Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of innovative solutions and technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{project.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      <p className="text-blue-600 font-semibold">{project.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar size={16} />
                    <span className="text-sm">{project.period}</span>
                  </div>
                </div>

                {/* Special Achievement */}
                {project.specialNote && (
                  <div className="flex items-center gap-2 mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <Award className="text-yellow-600" size={16} />
                    <span className="text-yellow-800 font-medium text-sm">{project.specialNote}</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-100">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;