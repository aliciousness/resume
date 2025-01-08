import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
      <div className="relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern animate-grid" />
        </div>

        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Left Column - Text Content */}
            <div className="sm:text-center lg:text-left lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
                >
                  <span className="block">Hi, I'm Richard</span>
                  <span className="block text-turquoise-400">DevOps Engineer</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0"
                >
                  Welcome to my little hub
                </motion.p>

                <div className="mt-8 flex flex-col sm:flex-row sm:gap-6 lg:justify-start">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto"
                  >
                    <Link
                      to="/projects"
                      className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3 text-lg font-medium rounded-lg text-white bg-gradient-to-r from-turquoise-500 to-turquoise-700 hover:from-turquoise-600 hover:to-turquoise-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <span>View My Work</span>
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto"
                  >
                    <Link
                      to="/contact"
                      className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3 text-lg font-medium rounded-lg text-turquoise-100 border-2 border-turquoise-500 hover:bg-turquoise-500/10 transition-all duration-200"
                    >
                      Contact Me
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:col-span-6 mt-8 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl group"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full object-cover object-center"
                  src="images/iceland-homepage.avif"
                  alt="DevOps Infrastructure"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;