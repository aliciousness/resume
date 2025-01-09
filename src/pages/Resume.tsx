import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Job {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
}

const jobs: Job[] = [
  {
    company: 'Grand Canyon Education',
    title: 'DevOps Engineer',
    date: 'Feb. 2024 - Present',
    responsibilities: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    ]
  },
  {
    company: 'Alpine Cyber Solutions',
    title: 'DevOps Engineer',
    date: 'June 2022 - Feb. 2024',
    responsibilities: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ]
  }
];

function Resume() {
  const { isDark } = useTheme();
  return (
    <div className={`min-h-screen ${
      isDark 
        ? 'bg-gradient-to-b from-gray-900 to-gray-800' 
        : 'bg-gradient-to-b from-gray-50 to-white'
    } py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className={`text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>Professional Experience</h1>
          <a href="/cv/Resume.pdf" download>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-4 py-2 bg-turquoise-600 text-white rounded-lg hover:bg-turquoise-700 transition-colors shadow-md"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </motion.button>
          </a>
        </motion.div>

        {/* Experience Timeline */}
        <div className={`space-y-8 ${
          isDark ? 'text-gray-300' : 'text-gray-900'
        }`}>
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-lg shadow-lg ${
                isDark 
                  ? 'bg-gray-800 text-gray-300' 
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              <h3 className={`text-xl font-bold mb-2 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>{job.title}</h3>
              <p className={`text-lg mb-2 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>{job.company}</p>
              <p className={`mb-4 ${
                isDark ? 'text-gray-500' : 'text-gray-700'
              }`}>{job.date}</p>
              <ul className="list-disc list-inside space-y-2">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className={
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }>{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 space-y-8"
        >
          <h2 className={`text-2xl font-bold ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>Technical Skills</h2>
          
          {Object.entries({
            'Cloud & Infrastructure': ['AWS', 'Azure', 'Terraform', 'Docker'],
            'CI/CD & DevOps': ['GitHub Actions', 'Ansible'],
            'Languages & Frameworks': ['Python', 'fastAPI', 'Bash', 'JavaScript', 'HTML', 'CSS', 'React', 'Node.js'],
            'Monitoring & Security': ['Prometheus', 'Grafana', 'HashiCorp Vault', 'SonarQube', 'Snyk',],
          }).map(([category, skills]) => (
            <div 
              key={category} 
              className={`rounded-xl p-6 backdrop-blur-sm ${
                isDark ? 'bg-gray-800/50' : 'bg-gray-200/50 shadow-lg'
              }`}
            >
              <h3 className={`text-lg font-medium mb-4 ${
                isDark ? 'text-turquoise-400' : 'text-turquoise-600'
              }`}>{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      isDark 
                        ? 'bg-turquoise-500/10 text-turquoise-300 hover:bg-turquoise-500/20' 
                        : 'bg-turquoise-100 text-turquoise-700 hover:bg-turquoise-200'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Resume;