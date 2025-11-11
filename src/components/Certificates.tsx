import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, X, Calendar, Building, CheckCircle } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  skills: string[];
  driveLink: string;
  credentialId?: string;
}

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Java Programming Fundamentals",
      issuer: "Oracle",
      date: "December 2023",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive certification covering Java programming fundamentals, object-oriented programming concepts, data structures, and algorithms. This certification validates proficiency in Java syntax, exception handling, collections framework, and multithreading concepts.",
      skills: ["Java", "OOP", "Data Structures", "Algorithms", "Exception Handling"],
      driveLink: "https://drive.google.com/file/d/your-certificate-id/view",
      credentialId: "JAVA-2023-12345"
    },
    {
      id: 2,
      title: "React.js Development",
      issuer: "Meta",
      date: "January 2024",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Advanced React.js certification covering component lifecycle, hooks, state management, routing, and modern React patterns. Includes practical projects demonstrating proficiency in building scalable React applications with best practices.",
      skills: ["React.js", "JSX", "Hooks", "State Management", "Component Design"],
      driveLink: "https://drive.google.com/file/d/your-certificate-id/view",
      credentialId: "REACT-2024-67890"
    },
    {
      id: 3,
      title: "Spring Boot Microservices",
      issuer: "Spring",
      date: "February 2024",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Professional certification in Spring Boot framework covering microservices architecture, RESTful web services, security implementation, and database integration. Demonstrates expertise in building enterprise-grade applications.",
      skills: ["Spring Boot", "Microservices", "REST API", "Security", "Database Integration"],
      driveLink: "https://drive.google.com/file/d/your-certificate-id/view",
      credentialId: "SPRING-2024-11111"
    },
    {
      id: 4,
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "March 2024",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "AWS Cloud Practitioner certification validating foundational knowledge of AWS cloud services, architecture, security, and pricing. Covers core AWS services including EC2, S3, RDS, and Lambda with hands-on experience.",
      skills: ["AWS", "Cloud Computing", "EC2", "S3", "Lambda", "Cloud Security"],
      driveLink: "https://drive.google.com/file/d/your-certificate-id/view",
      credentialId: "AWS-2024-22222"
    },
    {
      id: 5,
      title: "Database Management Systems",
      issuer: "MySQL",
      date: "April 2024",
      image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive database certification covering SQL fundamentals, database design, normalization, indexing, and performance optimization. Includes practical experience with MySQL and PostgreSQL databases.",
      skills: ["MySQL", "PostgreSQL", "SQL", "Database Design", "Performance Optimization"],
      driveLink: "https://drive.google.com/file/d/your-certificate-id/view",
      credentialId: "DB-2024-33333"
    },
    {
      id: 6,
      title: "Selenium WebDriver Testing",
      issuer: "Selenium HQ",
      date: "May 2024",
      image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Professional certification in automated testing using Selenium WebDriver. Covers test automation frameworks, page object model, data-driven testing, and integration with CI/CD pipelines for comprehensive test automation.",
      skills: ["Selenium", "Test Automation", "WebDriver", "TestNG", "Page Object Model"],
      driveLink: "https://drive.google.com/file/d/your-certificate-id/view",
      credentialId: "SEL-2024-44444"
    }
  ];

  const openCertificateModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

  const openDriveLink = (driveLink: string) => {
    window.open(driveLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Certificates</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional certifications and achievements that validate my technical expertise and commitment to continuous learning.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 40px rgba(168, 85, 247, 0.3)'
                }}
                onClick={() => openCertificateModal(certificate)}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-pointer"
              >
                {/* Certificate Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  
                  {/* Award Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Award className="text-white" size={24} />
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/60">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="text-white text-lg font-semibold bg-purple-600/80 backdrop-blur-sm px-6 py-3 rounded-full"
                    >
                      View Details
                    </motion.div>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {certificate.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-400 mb-3">
                    <Building size={16} />
                    <span className="text-sm">{certificate.issuer}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <Calendar size={16} />
                    <span className="text-sm">{certificate.date}</span>
                  </div>

                  {/* Skills Preview */}
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                    {certificate.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700/50 text-gray-400 rounded-full text-xs">
                        +{certificate.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Detail Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeCertificateModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-800/95 backdrop-blur-md rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
            >
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent rounded-t-3xl"></div>
                
                {/* Close Button */}
                <button
                  onClick={closeCertificateModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors duration-300"
                >
                  <X size={20} />
                </button>

                {/* Certificate Badge */}
                <div className="absolute bottom-4 left-6">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Award className="text-white" size={32} />
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold text-white">{selectedCertificate.title}</h1>
                      <p className="text-purple-400 font-semibold">{selectedCertificate.issuer}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Certificate Info */}
                    <div className="flex items-center gap-6 text-gray-300">
                      <div className="flex items-center gap-2">
                        <Calendar size={20} className="text-purple-400" />
                        <span>Issued: {selectedCertificate.date}</span>
                      </div>
                      {selectedCertificate.credentialId && (
                        <div className="flex items-center gap-2">
                          <CheckCircle size={20} className="text-green-400" />
                          <span>ID: {selectedCertificate.credentialId}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">About This Certificate</h3>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedCertificate.description}
                      </p>
                    </div>

                    {/* Skills Covered */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Skills Covered</h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedCertificate.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full border border-purple-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Certificate Actions */}
                    <div className="bg-slate-700/50 rounded-2xl p-6 border border-gray-600">
                      <h4 className="text-xl font-bold text-white mb-4">Certificate Actions</h4>
                      
                      <motion.button
                        onClick={() => openDriveLink(selectedCertificate.driveLink)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 mb-3"
                      >
                        <ExternalLink size={20} />
                        View Certificate
                      </motion.button>

                      <p className="text-gray-400 text-sm text-center">
                        Opens in new tab • View only (no download)
                      </p>
                    </div>

                    {/* Certificate Stats */}
                    <div className="bg-slate-700/50 rounded-2xl p-6 border border-gray-600">
                      <h4 className="text-xl font-bold text-white mb-4">Certificate Details</h4>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Issuer:</span>
                          <span className="text-white font-semibold">{selectedCertificate.issuer}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Date:</span>
                          <span className="text-white font-semibold">{selectedCertificate.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Skills:</span>
                          <span className="text-white font-semibold">{selectedCertificate.skills.length}</span>
                        </div>
                        {selectedCertificate.credentialId && (
                          <div className="flex justify-between">
                            <span className="text-gray-400">Status:</span>
                            <span className="text-green-400 font-semibold flex items-center gap-1">
                              <CheckCircle size={16} />
                              Verified
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certificates;