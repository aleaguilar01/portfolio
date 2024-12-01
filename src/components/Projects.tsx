import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import automationProjectImage from '../assets/images/automation-project.jpg';
import bookbeatProjectImage from '../assets/images/bookbeat-project.jpg';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: 'Automation Project',
    description: 'Developed automation software to reduce manual tasks on Ed-Platforms. This project streamlined data processing workflows, implementing Selenium automation for image uploads, course adjustments, grade gathering, and content validation. The automation reduced teachers manual workload by 30%, significantly enhancing operational efficiency.',
    image: automationProjectImage,
    technologies: ['Python', 'Selenium'],
    // link: 'https://github.com/yourusername/automation-project',
  },
  {
    title: 'BookBeat',
    description: 'A dynamic single-page application (SPA) that enhances the reading experience by integrating AI-driven features and seamless multimedia suggestions. BookBeat combines cutting-edge web technologies with AI to create an immersive and interactive platform for book lovers.',
    image: bookbeatProjectImage,
    technologies: ['Express', 'TypeScript', 'Prisma', 'PostgreSQL', 'Vite', 'React', 'Ant Design', 'Claude AI', 'Spotify API', 'Open Library API'],
    link: 'https://github.com/aleaguilar01/bookbeat',
  },
];

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({
  project,
  onClick,
}) => {
  return (
    <motion.div
      layoutId={`project-${project.title}`}
      onClick={onClick}
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
      whileHover={{ y: -5 }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-earth-primary">{project.title}</h3>
        <p className="text-earth-text line-clamp-3">{project.description}</p>
      </div>
    </motion.div>
  );
};

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({
  project,
  onClose,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <motion.div
        layoutId={`project-${project.title}`}
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-earth-text bg-white/75 rounded-full p-1 hover:bg-white transition-opacity"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2 text-earth-primary">
            {project.title}
          </h2>
          <p className="text-earth-text mb-4">{project.description}</p>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-earth-secondary">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-earth-accent/20 text-earth-primary px-2 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-earth-primary to-earth-secondary text-white px-4 py-2 rounded hover:from-earth-primary-dark hover:to-earth-secondary-dark transition duration-300 text-sm"
            >
              View Project
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="flex-grow flex flex-col bg-gradient-to-b from-earth-background-light to-earth-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8 flex-grow"
      >
        <motion.h1
          className="text-5xl font-bold mb-16 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-earth-primary to-earth-secondary">
            My Projects
          </span>
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </motion.div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;