import React from 'react';
import { Trophy, Award, Star, Target, Crown, Medal } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  category: 'hackathon' | 'academic' | 'competition';
  icon: React.ReactNode;
  color: string;
  year: string;
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Semi-Finalist, Amazon HackOn 2025",
      description: "Sustainable Shopping Website - Recognized for innovative eco-friendly e-commerce solution",
      category: "hackathon",
      icon: <Trophy size={24} />,
      color: "orange",
      year: "2025"
    },
    {
      id: 2,
      title: "Google Solution Challenge 2024",
      description: "Selected for India Regional Bootcamp with MediCare - Blockchain healthcare platform",
      category: "competition",
      icon: <Star size={24} />,
      color: "blue",
      year: "2024"
    },
    {
      id: 3,
      title: "Finalist, Hack-O-Fest 2024",
      description: "LandSol - Blockchain-based land registry for transparency and fraud prevention",
      category: "hackathon",
      icon: <Medal size={24} />,
      color: "green",
      year: "2024"
    },
    {
      id: 4,
      title: "District Topper, CBSE Class 10",
      description: "Achieved 99% marks and topped the district in CBSE Class X examinations",
      category: "academic",
      icon: <Crown size={24} />,
      color: "purple",
      year: "2020"
    },
    {
      id: 5,
      title: "School Topper, CBSE Class 12",
      description: "Secured 98.2% marks and achieved the highest score in school for Class XII",
      category: "academic",
      icon: <Target size={24} />,
      color: "indigo",
      year: "2022"
    },
    {
      id: 6,
      title: "Among Batch Toppers at NIT Patna",
      description: "Maintaining a CGPA of 9.56 and consistently ranking among the top performers",
      category: "academic",
      icon: <Award size={24} />,
      color: "teal",
      year: "Current"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string; accent: string } } = {
      orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", accent: "bg-orange-100" },
      blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", accent: "bg-blue-100" },
      green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200", accent: "bg-green-100" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", accent: "bg-purple-100" },
      indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200", accent: "bg-indigo-100" },
      teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200", accent: "bg-teal-100" }
    };
    return colorMap[color] || colorMap.blue;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'hackathon': return '💻';
      case 'academic': return '🎓';
      case 'competition': return '🏆';
      default: return '🏅';
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🏆 Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognition for excellence in academics, hackathons, and competitive programming
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement) => {
            const colors = getColorClasses(achievement.color);
            return (
              <div
                key={achievement.id}
                className={`bg-white p-6 rounded-xl shadow-lg border-2 ${colors.border} hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${colors.accent} p-3 rounded-lg ${colors.text} flex-shrink-0`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900 leading-tight">
                        {achievement.title}
                      </h3>
                      <div className="flex items-center gap-2 ml-4">
                        <span className="text-lg">{getCategoryIcon(achievement.category)}</span>
                        <span className={`text-sm font-medium ${colors.text} bg-white px-2 py-1 rounded-full border ${colors.border}`}>
                          {achievement.year}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl shadow-xl">
          <h3 className="text-xl font-bold mb-6 text-center">Achievement Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">6</div>
              <div className="text-blue-100">Total Achievements</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">3</div>
              <div className="text-blue-100">Hackathon Awards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">3</div>
              <div className="text-blue-100">Academic Honors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">9.56</div>
              <div className="text-blue-100">Current CGPA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;