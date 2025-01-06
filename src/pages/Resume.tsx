import React from 'react';

function Resume() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Professional Experience</h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            {[
              {
                company: 'Grand Canyon Education',
                position: 'DevOps Engineer',
                period: 'Feb. 2024 - Present',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              },
              {
                company: 'Alpine Cyber Solutions',
                position: 'DevOps Engineer',
                period: 'June 2022 - Feb. 2024',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              },
            ].map((job, index) => (
              <div key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                <dt className="text-sm font-medium text-gray-500">
                  <div className="font-bold text-gray-900">{job.company}</div>
                  <div>{job.position}</div>
                  <div className="text-xs">{job.period}</div>
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {job.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* <div className="px-4 py-5 sm:px-6 border-t border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Certifications</h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <div className="font-bold text-gray-900">AWS Certified DevOps Engineer - Professional</div>
                <div className="text-xs">2022 - Present</div>
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Advanced expertise in continuous delivery systems, monitoring, and AWS services optimization.
              </dd>
            </div>
          </dl>
        </div> */}

        <div className="px-4 py-5 sm:px-6 border-t border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Technical Skills</h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {[
          'AWS/Azure',
          'Pulumi',
          'Docker',
          'Terraform',
          'Github Actions',
          'Azure DevOps',
          'Bitbucket Pipelines',
          'Python',
          'JavaScript',
          'Next.js',
          'Svelte',
          'BASH',
          'Ansible',
          'Prometheus/Grafana',
          'Packer'
        ].map((skill) => (
          <div key={skill} className="bg-turquoise-100 rounded-full px-3 py-1 text-sm text-turquoise-700 text-center">
            {skill}
          </div>
        ))}
      </div>
      <div className="mt-6">
        <a
          href="/cv/resume.pdf"
          download
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-turquoise-600 hover:bg-turquoise-700 md:py-4 md:text-lg md:px-10"
        >
          Download Resume
        </a>
      </div>
      </div>
    </div>
  </div>
  );
}

export default Resume;