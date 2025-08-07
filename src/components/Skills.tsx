import React from 'react';
import { Code, Database, Server, Wrench, Brain, Globe } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: ["C++", "JavaScript", "TypeScript", "Python"],
      color: "blue"
    },
    {
      title: "Web Technologies",
      icon: <Globe size={24} />,
      skills: ["HTML5", "CSS3", "React.js", "Node.js", "Express.js", "REST APIs", "OAuth"],
      color: "green"
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: ["MongoDB", "SQL"],
      color: "purple"
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={24} />,
      skills: ["Git", "GitHub", "Postman", "Overleaf", "VS Code", "Linux", "GitHub Pages", "Vercel", "Cursor"],
      color: "orange"
    },
    {
      title: "Core CS Concepts",
      icon: <Brain size={24} />,
      skills: ["DSA", "OOP", "SDLC", "System Design", "OS", "DBMS", "CN"],
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string; accent: string } } = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", accent: "bg-blue-100" },
      green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200", accent: "bg-green-100" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", accent: "bg-purple-100" },
      orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", accent: "bg-orange-100" },
      teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200", accent: "bg-teal-100" }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🧠 Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technical expertise across the full development stack and computer science fundamentals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={index}
                className={`${colors.bg} p-6 rounded-xl border-2 ${colors.border} hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`${colors.accent} p-3 rounded-lg ${colors.text}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Proficiency Highlights */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-xl border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Technical Proficiency Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
              <Server className="text-blue-600 mx-auto mb-2" size={32} />
              <div className="font-bold text-gray-900">Full Stack</div>
              <div className="text-sm text-gray-600">Development</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
              <Database className="text-green-600 mx-auto mb-2" size={32} />
              <div className="font-bold text-gray-900">Database</div>
              <div className="text-sm text-gray-600">Management</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
              <Brain className="text-purple-600 mx-auto mb-2" size={32} />
              <div className="font-bold text-gray-900">System</div>
              <div className="text-sm text-gray-600">Design</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
              <Code className="text-orange-600 mx-auto mb-2" size={32} />
              <div className="font-bold text-gray-900">Problem</div>
              <div className="text-sm text-gray-600">Solving</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;