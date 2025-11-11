import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, Trophy, Clock } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Web Developer",
      company: "Temps LifeStyle",
      location: "Remote",
      duration: "January 2025 - July 2025",
      period: "6 months",
      status: "Internship", 
      responsibilities: [
        "Developed and maintained REST APIs using Spring Boot and Java",
        "Built responsive web applications using React.js and TypeScript",
        "Collaborated with senior developers on database design and optimization",
        "Participated in code reviews and implemented testing best practices",
        "Worked with MySQL and PostgreSQL databases for data management"
      ],
      technologies: ["Java", "Spring Boot", "React.js", "PostgreSQL", "Git", "GitHub", "AWS"]
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Fast Learner",
      description: "Quickly adapted to new technologies and frameworks"
    },
    {
      icon: Briefcase,
      title: "Team Player",
      description: "Collaborated effectively in agile development environment"
    },
    {
      icon: Calendar,
      title: "Consistent",
      description: "Maintained high code quality and met project deadlines"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Full-time':
        return 'from-green-500 to-emerald-500';
      case 'Internship':
        return 'from-blue-500 to-cyan-500';
      case 'Part-time':
        return 'from-yellow-500 to-orange-500';
      case 'Contract':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

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
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="relative"
              >
                {/* Timeline Line */}
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>
                
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 ml-16 relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-20 top-8 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-slate-900"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                        {/* Status Badge */}
                        <div className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(exp.status)} text-white text-sm font-semibold rounded-full flex items-center gap-1`}>
                          <Clock size={14} />
                          {exp.status}
                        </div>
                      </div>
                      <p className="text-purple-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <div className="flex items-center text-gray-400 mb-1">
                        <Calendar size={16} className="mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Key Achievements</h3>
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <achievement.icon className="text-white" size={24} />
                </div>
                <h4 className="text-white font-semibold mb-2">{achievement.title}</h4>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;