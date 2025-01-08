import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Professional Experience</h1>
          <a href="/cv/Resume.pdf" download>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-4 py-2 bg-turquoise-500 text-white rounded-lg hover:bg-turquoise-600 transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </motion.button>
          </a>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {[
            {
              company: 'Grand Canyon Education',
              position: 'DevOps Engineer',
              period: 'Feb. 2024 - Present',
              description: '',
              achievements: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
              ]
            },
            {
              company: 'Alpine Cyber Solutions',
              position: 'DevOps Engineer',
              period: 'June 2022 - Feb. 2024',
              description: '',
              achievements: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              ]
            },
          ].map((job, index) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="relative bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm shadow-xl"
            >
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-turquoise-400 font-bold text-xl">{job.company}</h3>
                  <div className="text-white font-medium">{job.position}</div>
                  <div className="text-gray-400 text-sm">{job.period}</div>
                </div>
                
                <p className="text-gray-300">{job.description}</p>
                
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
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
          <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
          
          {Object.entries({
            'Cloud & Infrastructure': ['AWS', 'Azure', 'Terraform', 'Docker'],
            'CI/CD & DevOps': ['GitHub Actions', 'Ansible'],
            'Languages & Frameworks': ['Python', 'fastAPI', 'Bash', 'JavaScript', 'HTML', 'CSS', 'React', 'Node.js'],
            'Monitoring & Security': ['Prometheus', 'Grafana', 'HashiCorp Vault', 'SonarQube', 'Snyk',],
          }).map(([category, skills]) => (
            <div key={category} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-medium text-turquoise-400 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-turquoise-500/10 text-turquoise-300 rounded-full text-sm font-medium hover:bg-turquoise-500/20 transition-colors"
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