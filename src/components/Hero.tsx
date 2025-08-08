import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';




const Hero: React.FC = () => {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/AlakhMathur',
      label: 'GitHub',
      color: 'hover:text-gray-700'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com/in/alakh-mathur-129604248/',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:alakhm.ug22.cs@nitp.ac.in',
      label: 'Email',
      color: 'hover:text-red-600'
    },
    {
      icon: <Phone size={20} />,
      href: 'tel:+919599391146',
      label: 'Phone',
      color: 'hover:text-green-600'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm{' '}
                <span className="text-blue-600">Alakh Mathur</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
                I'm a{' '}
                <span className="text-blue-600">
  <Typewriter
    words={['Aspiring Software Engineer', 'Aspiring Full Stack Developer', 'Problem Solver', 'Tech Enthusiast']}
    loop={0}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1500}
  />
</span>

              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Passionate about building innovative solutions and creating impactful technology. 
                Currently pursuing Computer Science at NIT Patna with a strong focus on 
                full-stack development and emerging technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <a
                href="https://drive.google.com/file/d/1CbnHL59_NyCV-1SAYCDz8wS1Q1S6-T7w/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                <Download size={20} />
                Download Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-medium border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200"
              >
                View Projects
                <ArrowRight size={20} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`p-3 bg-white rounded-full shadow-lg ${link.color} transition-colors duration-200 hover:scale-110`}
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Stats/Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">9.56</div>
              <div className="text-gray-600">CGPA</div>
              <div className="text-sm text-gray-500">NIT Patna</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-gray-600">Projects</div>
              <div className="text-sm text-gray-500">Completed</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-600">Technologies</div>
              <div className="text-sm text-gray-500">Mastered</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-orange-600 mb-2">3+</div>
              <div className="text-gray-600">Hackathons</div>
              <div className="text-sm text-gray-500">Won</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;