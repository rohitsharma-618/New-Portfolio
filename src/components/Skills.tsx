import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { 
          name: "Java", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
          color: "from-orange-500 to-red-600"
        },
        { 
          name: "Python", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          color: "from-blue-500 to-yellow-500"
        },
        { 
          name: "HTML", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          color: "from-orange-500 to-red-500"
        },
        { 
          name: "CSS", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          color: "from-blue-500 to-blue-600"
        },
        { 
          name: "Bootstrap", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          color: "from-purple-500 to-purple-600"
        },
        { 
          name: "JavaScript", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          color: "from-yellow-400 to-yellow-500"
        }
      ]
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { 
          name: "React.js", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          color: "from-cyan-400 to-blue-500"
        },
        { 
          name: "Spring Boot", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
          color: "from-green-500 to-green-600"
        },
        { 
          name: "Git", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          color: "from-orange-500 to-red-500"
        },
        { 
          name: "Docker", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          color: "from-blue-400 to-blue-600"
        },
        { 
          name: "AWS", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
          color: "from-orange-400 to-yellow-500"
        }
      ]
    },
    {
      title: "Database",
      skills: [
        { 
          name: "MySQL", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          color: "from-blue-500 to-orange-500"
        },
        { 
          name: "PostgreSQL", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          color: "from-blue-600 to-blue-800"
        }
      ]
    },
    {
      title: "Testing & API",
      skills: [
        { 
          name: "Selenium", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
          color: "from-green-500 to-green-600"
        },
        { 
          name: "Postman", 
          icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
          color: "from-orange-500 to-red-500"
        }
      ]
    }
  ];

  return (
    <div ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -10,
                      boxShadow: '0 20px 40px rgba(168, 85, 247, 0.3)'
                    }}
                    className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                  >
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                    
                    {/* Skill Icon */}
                    <div className="relative z-10 flex flex-col items-center">
                      <motion.div
                        whileHover={{ 
                          scale: 1.2,
                          filter: "brightness(1.2) saturate(1.3)"
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-16 h-16 mb-4 flex items-center justify-center"
                      >
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-12 h-12 object-contain transition-all duration-300"
                          onError={(e) => {
                            // Fallback to a generic icon if the image fails to load
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling!.style.display = 'flex';
                          }}
                        />
                        <div 
                          className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg items-center justify-center text-white font-bold text-lg hidden"
                        >
                          {skill.name.charAt(0)}
                        </div>
                      </motion.div>
                      
                      <h4 className="text-white font-semibold text-center text-sm group-hover:text-purple-300 transition-colors duration-300">
                        {skill.name}
                      </h4>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300 -z-10`}></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Data Structures & Algorithms",
                "Operating Systems", 
                "Object-Oriented Programming",
                "RESTful Web Services",
                "Manual Testing",
                "Swagger",
                "Excel",
                "Google Sheets",
                "MS Office"
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.05 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 5px 15px rgba(168, 85, 247, 0.3)'
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:border-purple-400 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;