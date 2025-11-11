import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Developer Credits */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 mb-8">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <Code className="text-purple-400" size={24} />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Crafted with Passion
              </span>
              <Code className="text-purple-400" size={24} />
            </motion.div>
            
            <div className="flex items-center justify-center gap-2 text-gray-300 mb-4">
              <span>Designed & Developed by</span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 rounded-full"
              >
                Rohit Sharma
              </motion.span>
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="text-red-500" size={16} fill="currentColor" />
              </motion.div>
              <span>and </span>
              <Coffee className="text-yellow-600" size={16} />
            </div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-500 text-sm"
          >
            <p>&copy; {new Date().getFullYear()} Rohit Sharma. All rights reserved.</p>
            <p className="mt-2">
              Portfolio website showcasing my journey as a Full Stack Developer
            </p>
          </motion.div>

          {/* Decorative Elements */}
          <div className="flex justify-center gap-4 mt-6">
            {[...Array(5)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;