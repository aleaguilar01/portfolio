import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';

interface Job {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
}

const jobs: Job[] = [
  {
    title: 'Product Manager - Junior Software Developer',
    company: 'Sabemoscomo',
    period: 'January 2023 - Present',
    description: [
      'Streamlined data processing workflows by collaborating with senior engineers to implement Selenium automation for image uploads, course adjustments, grade gathering, and content validation.',
      'Reduced teachers manual workload by 30%, significantly enhancing operational efficiency.',
      'Developed automation software utilizing Python and Selenium, enabling efficient execution of repetitive tasks.',
      'Improved process speed and accuracy, contributing to overall productivity gains.',
    ],
    technologies: ['Python', 'Selenium'],
  },
  {
    title: 'Product Manager',
    company: 'Sabemoscomo',
    period: 'March 2017 - December 2022',
    description: [
      'Managed three key products in the online education sector: corporate universities, a homeschool platform, and a tutoring platform.',
      'Oversaw the creation of over 100 online courses for corporate universities, covering a wide range of topics including technical, technology, and security.',
      'Successfully managed the development of more than 4000 courses for the homeschool platform.',
      'Demonstrated effective collaboration skills by working cross-functionally with IT, design, content creators, teachers, and other stakeholders.',
    ],
  },
];

const ExperienceCard: React.FC<{ job: Job; index: number }> = ({
  job,
  index,
}) => {
  return (
    <motion.div
      className="mb-12 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div
        className={`flex flex-col md:flex-row ${
          index % 2 === 0 ? 'md:flex-row-reverse' : ''
        }`}
      >
        <div className="md:w-1/2 p-6 bg-white/80 rounded-lg shadow-lg border border-earth-background">
          <h3 className="text-2xl font-bold text-earth-primary mb-2">{job.title}</h3>
          <h4 className="text-xl text-earth-secondary mb-4">{job.company}</h4>
          <div className="flex items-center text-earth-text mb-4">
            <FaCalendar className="mr-2 text-earth-accent" />
            <span>{job.period}</span>
          </div>
          <ul className="list-disc list-inside text-earth-text mb-4">
            {job.description.map((item, i) => (
              <li key={i} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
          {job.technologies && (
            <div className="flex flex-wrap gap-2">
              {job.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-earth-accent/20 text-earth-primary px-2 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="hidden md:block md:w-1/2 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-full bg-earth-accent relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-earth-accent rounded-full flex items-center justify-center">
                <FaBriefcase className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col bg-gradient-to-b from-earth-background-light to-earth-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8 flex-grow"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-earth-primary to-earth-secondary"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Professional Experience
          </motion.h1>
          <div className="relative">
            {jobs.map((job, index) => (
              <ExperienceCard key={index} job={job} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;