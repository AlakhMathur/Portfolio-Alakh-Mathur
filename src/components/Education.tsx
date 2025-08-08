import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

interface EducationItem {
  degree: string;
  institute: string;
  score: string;
  year: string;
  type: 'cgpa' | 'percentage';
  icon: string;
  color: string;
}

const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institute: "NIT Patna",
      score: "9.56 CGPA",
      year: "2026",
      type: "cgpa",
      icon: "🎓",
      color: "blue"
    },
    {
      degree: "Senior Secondary Education",
      institute: "CBSE Board",
      score: "98.2%",
      year: "2022",
      type: "percentage",
      icon: "📚",
      color: "green"
    },
    {
      degree: "Secondary Education",
      institute: "CBSE Board",
      score: "99%",
      year: "2020",
      type: "percentage",
      icon: "📖",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
      green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🎓 Education
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Academic excellence and consistent high performance
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((item, index) => {
            const colors = getColorClasses(item.color);
            return (
              <div
                key={index}
                className={`p-8 rounded-xl shadow-lg border-2 ${colors.border} ${colors.bg} hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  {/* Left Content */}
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.degree}
                      </h3>
                      <div className={`font-semibold ${colors.text} mb-2`}>
                        {item.institute}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        <span>Class of {item.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Content - Score */}
                  <div className="flex flex-col items-end">
                    <div className={`flex items-center gap-2 px-4 py-2 ${colors.bg} border ${colors.border} rounded-lg`}>
                      <Award className={colors.text} size={20} />
                      <span className={`font-bold text-lg ${colors.text}`}>
                        {item.score}
                      </span>
                    </div>
                    {index === 0 && (
                      <span className="text-xs text-gray-500 mt-1">Among Batch Toppers</span>
                    )}
                    {index === 1 && (
                      <span className="text-xs text-gray-500 mt-1">School Topper</span>
                    )}
                    {index === 2 && (
                      <span className="text-xs text-gray-500 mt-1">District Topper</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Academic Highlights */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Academic Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">9.56</div>
              <div className="text-gray-700 font-medium">Current CGPA</div>
              <div className="text-sm text-gray-500">NIT Patna</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">99%</div>
              <div className="text-gray-700 font-medium">Class X Score</div>
              <div className="text-sm text-gray-500">District Topper</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">98.2%</div>
              <div className="text-gray-700 font-medium">Class XII Score</div>
              <div className="text-sm text-gray-500">School Topper</div>
            </div>
          </div>
        </div>

        {/* JEE Achievements Section */}
        <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-xl border border-yellow-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            🏆 JEE Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-yellow-200">
              <div className="text-3xl font-bold text-yellow-600 mb-2">15,162</div>
              <div className="text-gray-700 font-medium">JEE Mains Rank</div>
              <div className="text-sm text-gray-500">All India Rank</div>
              <div className="mt-2 text-xs text-yellow-700 bg-yellow-100 px-2 py-1 rounded-full">
                Top 1% of Candidates
              </div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-orange-200">
              <div className="text-3xl font-bold text-orange-600 mb-2">18,655</div>
              <div className="text-gray-700 font-medium">JEE Advanced Rank</div>
              <div className="text-sm text-gray-500">All India Rank</div>
              <div className="mt-2 text-xs text-orange-700 bg-orange-100 px-2 py-1 rounded-full">
                IIT Qualifier
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              These achievements demonstrate strong foundation in Mathematics, Physics, and Chemistry, 
              essential for Computer Science and Engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;