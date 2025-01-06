import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: 'Cloud Infrastructure Automation',
      description: 'Developed comprehensive IaC templates using Pulumi with Python for multi-region AWS infrastructure, including S3, Route53 and cloudFront.',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
      technologies: ['Pulumi', 'AWS', 'S3', 'Route53', 'CloudFront'],
      githubUrl: 'https://github.com/aliciousness/new_website',
      liveUrl: 'https://github.com/aliciousness/new_website/blob/main/README.md',
    },
    {
      title: 'Custom Github workflow integration',
      description: 'Implemented custom GitHub actions for numerous pipeline integrations.',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      technologies: ['GitHub Actions', 'AWS', 'Docker', 'Teams'],
      githubUrl: 'https://github.com/aliciousness/teams-notifier',
      liveUrl: 'https://github.com/aliciousness/teams-notifier/blob/main/Readme.md',
    },
    {
      title: 'Web Application',
      description: 'Built a web application using Next.js and Tailwind CSS for a personal project.',
      image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['Next.js', 'Tailwind CSS', 'S3', 'CodePipeline'],
      githubUrl: 'https://github.com/aliciousness/resume',
      liveUrl: 'https://richardcraddock.me'
    },
    {
      title: 'Ansible Playbooks for my home lab',
      description: 'Created Ansible playbooks to automate the setup of my home lab servers.',
      image: 'https://images.unsplash.com/photo-1520869562399-e772f042f422?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['Ansible', 'Linux'],
      githubUrl: 'https://github.com/aliciousness/ansible-homelab',
      liveUrl: '#' // No documentation available
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">DevOps Projects</h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Showcasing infrastructure and automation solutions
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <img
                className="w-full h-full object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              <p className="mt-2 text-gray-500">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-turquoise-100 text-turquoise-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex space-x-4">
                <a
                  href={project.githubUrl}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <Github className="h-5 w-5 mr-2" />
                  Code
                </a>
                <a
                  href={project.liveUrl}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-turquoise-500 hover:bg-turquoise-700"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Documentation
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;