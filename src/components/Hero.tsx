import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDownloadResume = () => {
    // Replace this URL with your actual Google Drive resume link
    const resumeUrl = "https://drive.google.com/file/d/1h6-UZo7_GeRudMArmVfuwS-NgJIGNcTa/view?usp=sharing";
    window.open(resumeUrl, '_blank');
  };

  const techIcons = [
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      position: "top",
      color: "from-white-500 to-white-600",
      animation: {
        y: [0, -20, 0],
       
        scale: [1, 1.2, 1]
      },
      duration: 4
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      position: "right",
      color: "from-white-500 to-white-600",
      
      animation: {
        x: [0, 20, 0],
       
        scale: [1, 1.25, 1]
      },
      duration: 5
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      position: "bottom",
      color: "from-white-500 to-white-600",

      animation: {
        y: [0, 18, 0],
       
        scale: [1, 1.1, 1]
      },
      duration: 3.8
    },
    
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      position: "left",
            color: "from-white-500 to-white-600",
      animation: {
        x: [0, -18, 0],
       
        scale: [1, 1.2, 1]
      },
      duration: 4.5
    },
  ];

  const getPositionClasses = (position: string) => {
    switch (position) {
      case 'top':
        return '-top-8 left-1/2 transform -translate-x-1/2';
      case 'top-right':
        return '-top-6 -right-6';
      case 'right':
        return 'top-1/2 -right-8 transform -translate-y-1/2';
      case 'bottom-right':
        return '-bottom-6 -right-6';
      case 'bottom':
        return '-bottom-8 left-1/2 transform -translate-x-1/2';
      case 'bottom-left':
        return '-bottom-6 -left-6';
      case 'left':
        return 'top-1/2 -left-8 transform -translate-y-1/2';
      case 'top-left':
        return '-top-6 -left-6';
      default:
        return 'top-0 left-0';
    }
  };

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Profile Image Container */}
              <motion.div
                initial={{ scale: 0.8 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]"
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 rounded-full p-1 shadow-2xl">
                  <div className="w-full h-full bg-slate-900 rounded-full overflow-hidden">
                    <img
                      src="https://img.clipart-library.com/24/1c68315a-4483-4bb0-9c35-a1ceb064642d.png"
                      alt="Rohit Sharma - Full Stack Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Programming Language Icons - Perfectly Positioned */}
                {techIcons.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { 
                      opacity: 1, 
                      scale: 1,
                      ...tech.animation
                    } : {}}
                    transition={{ 
                      opacity: { duration: 0.6, delay: 0.8 + index * 0.1 },
                      scale: { duration: 0.6, delay: 0.8 + index * 0.1 },
                      y: tech.animation.y ? { duration: tech.duration, repeat: Infinity, ease: "easeInOut" } : {},
                      x: tech.animation.x ? { duration: tech.duration, repeat: Infinity, ease: "easeInOut" } : {},
                      rotate: tech.animation.rotate ? { duration: tech.duration, repeat: Infinity, ease: "easeInOut" } : {},
                      scale: tech.animation.scale ? { duration: tech.duration, repeat: Infinity, ease: "easeInOut" } : {}
                    }}
                    whileHover={{ 
                      scale: 1.5,
                      boxShadow: '0 20px 40px rgba(168, 85, 247, 0.6)',
                      filter: "brightness(1.3) saturate(1.2)",
                      zIndex: 50
                    }}
                    className={`absolute ${getPositionClasses(tech.position)} bg-gradient-to-br ${tech.color} p-4 rounded-2xl shadow-2xl border-2 border-white/30 backdrop-blur-sm cursor-pointer group z-10`}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback to text if image fails to load
                        e.currentTarget.style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.className = 'w-8 h-8 flex items-center justify-center text-white font-bold text-lg';
                        fallback.textContent = tech.name.charAt(0);
                        e.currentTarget.parentNode?.appendChild(fallback);
                      }}
                    />
                    
                    {/* Enhanced Tooltip */}
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-slate-800/90 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-gray-600 shadow-lg">
                      {tech.name}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45 border-l border-t border-gray-600"></div>
                    </div>
                  </motion.div>
                ))}

                {/* Enhanced Orbital Rings */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-purple-400/30 rounded-full shadow-lg" 
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 border-2 border-pink-400/30 rounded-full shadow-lg" 
                />
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-16 border border-blue-400/20 rounded-full" 
                />
              </motion.div>

              {/* Enhanced Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl -z-10" />
              <div className="absolute inset-8 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Right side - Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-4"
            >
              <span className="text-purple-400 text-lg font-medium">Hello, I'm</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Rohit
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-2xl md:text-3xl text-gray-300 mb-6"
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-gray-400 text-lg mb-8 max-w-lg"
            >
              Passionate about creating innovative solutions with modern technologies. 
              Specialized in Java, React, and Spring Boot development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(168, 85, 247, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full flex items-center gap-2 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                <Download size={20} />
                Download Resume
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { Icon: Github, href: 'https://github.com/rohitsharma-618', color: 'hover:text-gray-400' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/rohit-sharma-62501b2b5/', color: 'hover:text-blue-400' },
                { Icon: Mail, href: 'mailto:rohitsharma6378@gmail.com', color: 'hover:text-red-400' },
              ].map(({ Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 ${color} transition-all duration-300 p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500`}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;