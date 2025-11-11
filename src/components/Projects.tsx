import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Star } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: "Weather Pro",
      description: "Weather Dashboard is a responsive web app that lets you watch the weather of any location in real time. View 7-day forecasts, switch themes, and enjoy dynamic visuals that match the weather conditions.",
      image: "https://img.freepik.com/premium-psd/online-weather-forecast-website_442409-3649.jpg?ga=GA1.1.1832651511.1750251281&semt=ais_hybrid&w=740",
      technologies: ["React", "TypeScript","API Key", "tailwindcss", "Vita"],
      githubUrl: "https://github.com/rohitsharma-618/Weather-Dashboard",
      liveUrl: "https://weather-pro-dashboard.vercel.app/",
      status: "New",
      featured: false
    },
    {
      id: 2,
      title: "Periodic Table",
      description: "A fast, responsive web app built with React, TypeScript, Vite & React Icons during the CodeCircuit “Vibe Coding” Hackathon. It lets users explore chemical elements with real-time filtering.",
      image: "https://img.freepik.com/premium-photo/periodic-table-elements-black-blackgroundhistory-chemical-elements-represents-atomic-number-symbol3d-rendering_537132-3243.jpg?ga=GA1.1.1832651511.1750251281&semt=ais_hybrid&w=740",
      technologies: ["React", "TypeScript", "tailwindcss", "Vita"],
      githubUrl: "https://github.com/rohitsharma-618/Periodic_Table",
      liveUrl: "https://periodic-table-explorer.vercel.app/ ",
      status: "New",
      featured: false
    },
    {
      id: 3,
      title: "J&S Logistics",
      description: "J.S. Logistics is a full-service European logistics provider offering LTL/FTL transport, sea & air freight, refrigerated and just-in-time shipping, plus consulting, modern fleet and tailored solutions.",
      image: "https://img.freepik.com/premium-photo/3d-delivery-truck-loaded-with-cardboard-box-smartphone-with-world-map-pointer-delivery-shipping-service-concept_350912-276.jpg?ga=GA1.1.1832651511.1750251281&semt=ais_hybrid&w=740",
      technologies: ["React", "TypeScript", "tailwindcss", "Vita", "PostgreSQL", "Java","Google Sheet"],
      githubUrl: "https://github.com/rohitsharma-618/Logistic",
      liveUrl: "https://jslogistics.vercel.app/",
      status: "",
      featured: false
    },
    {
      id: 4,
      title: "Temps Lifestyles",
      description: "Temps Lifestyles is a B2B e-commerce platform for luxury watches, offering secure user authentication, real-time inventory tracking, admin controls, seamless order processing, and a responsive user experience tailored for wholesalers and business clients",
      image: "https://img.freepik.com/free-photo/close-up-clock-with-time-change_23-2149241141.jpg?ga=GA1.1.1832651511.1750251281&semt=ais_hybrid&w=740",
      technologies: [ "Java","Spring Boot", "AWS","PostgreSQL","React", "TypeScript", "tailwindcss", "Vita", ],
      githubUrl: "https://github.com/rohitsharma-618/Temps-Lifestyles",
      liveUrl: "https://temps-lifestyles.vercel.app/",
      status: "",
      featured: false
    },
    {
      id: 5,
      title: "Chat App",
      description: "ChatApp is a real-time communication platform enabling seamless messaging between users and server, featuring secure login, live chat interface, and responsive design for smooth interaction.",
      image: "https://img.freepik.com/premium-psd/psd-ai-chatbot-3d-illustration_1169368-3982.jpg?ga=GA1.1.1832651511.1750251281&semt=ais_hybrid&w=740",
      technologies: ["Java", "Spring Boot", "Web Socket",],
      githubUrl: "https://github.com/rohitsharma-618/ChatApp",
      liveUrl: "https://github.com/rohitsharma-618/ChatApp",
      status: "",
      featured: false
    },
    {
      id: 6,
      title: "Employee Management System",
      description: "This responsive portfolio website showcasing projects, skills, and experience with modern animations and 3D elements.",
      image: "https://img.freepik.com/free-vector/gradient-crm-illustration_23-2149373198.jpg?ga=GA1.1.1832651511.1750251281&semt=ais_hybrid&w=740",
      technologies: ["Java", "Spring Boot", "Web Socket",],
      githubUrl: "https://github.com/rohitsharma-618/Employee_Management_System",
      liveUrl: "https://github.com/rohitsharma-618/Employee_Management_System",
      status: "",
      featured: false
    },
    {
      id: 7,
      title: "ATM Machine", 
      description: "ATM Machine is a console-based application that simulates real ATM operations like balance check, withdrawal, deposit, and PIN authentication, providing a secure and interactive banking experience.",
      image: "https://img.freepik.com/free-vector/self-service-isometric-composition-with-flowchart-isolated-touchscreen-machines-with-human-characters-editable-text-vector-illustration_1284-81868.jpg?t=st=1750525215~exp=1750528815~hmac=db2d08a3c6eda02cdcfad8b38c86f7e1f9cd2ee2996a367d24a8613d3b77d2b8&w=1380",
      technologies: ["Java", "Spring Boot", "Web Socket",],
      githubUrl: "https://github.com/rohitsharma-618/ATM_Machin",
      liveUrl: "https://github.com/rohitsharma-618/ATM_Machin",
      status: "",
      featured: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'from-green-500 to-emerald-500';
      case 'In Progress':
        return 'from-yellow-500 to-orange-500';
      default:
        return 'from-purple-500 to-pink-500';
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
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development, 
            testing, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(168, 85, 247, 0.3)'
              }}
              className={`group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 ${
                project.featured ? 'ring-2 ring-purple-500/50' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-semibold rounded-full">
                      <Star size={14} />
                      Featured
                    </div>
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(project.status)} text-white text-sm font-semibold rounded-full`}>
                    {project.status}
                  </div>
                </div>

                {/* Hover Overlay with Icons */}
                <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/60">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 bg-slate-800/90 backdrop-blur-sm rounded-full text-white hover:bg-purple-600 transition-all duration-300 shadow-lg"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 bg-slate-800/90 backdrop-blur-sm rounded-full text-white hover:bg-purple-600 transition-all duration-300 shadow-lg"
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-8">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/rohitsharma-618?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(168, 85, 247, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            <Github size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;