import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaCalendarAlt, FaBriefcase, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
  icon: React.ElementType;
}

const educations: Education[] = [
  {
    degree: "Master in Business Administration",
    institution: "Universidad Da Vinci",
    year: "Present",
    description: "Expanding business knowledge and leadership skills to complement my technical expertise.",
    icon: FaBriefcase
  },
  {
    degree: "Diploma: Full-Stack Web Development",
    institution: "Lighthouse Labs",
    year: "2024",
    description: "Intensive program focusing on modern web development technologies and practices.",
    icon: FaLaptopCode
  },
  {
    degree: "Bachelor of Science",
    institution: "Universidad del Valle de Guatemala",
    year: "2023",
    description: "Equivalent to a Baccalaureatus in Scientiis, certified by WES. Provided a strong foundation in scientific principles and analytical thinking.",
    icon: FaGraduationCap
  }
];

const EducationCard: React.FC<{ edu: Education; index: number }> = ({ edu, index }) => {
  return (
    <motion.div 
      className="mb-8 md:mb-16 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="bg-gradient-to-r from-earth-primary to-earth-secondary p-1 rounded-lg shadow-lg">
        <div className="bg-white/90 p-4 md:p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <edu.icon className="text-3xl md:text-4xl text-earth-primary mr-3 md:mr-4 flex-shrink-0" />
            <h3 className="text-xl md:text-2xl font-bold text-earth-primary">{edu.degree}</h3>
          </div>
          <div className="flex items-center mb-2 text-earth-text text-sm md:text-base">
            <FaUniversity className="mr-2 flex-shrink-0 text-earth-accent" />
            <span>{edu.institution}</span>
          </div>
          <div className="flex items-center mb-4 text-earth-secondary text-sm md:text-base">
            <FaCalendarAlt className="mr-2 flex-shrink-0 text-earth-accent" />
            <span>{edu.year}</span>
          </div>
          <p className="text-earth-text text-sm md:text-base">{edu.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Education: React.FC = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-earth-background-light to-earth-background text-earth-text py-8 md:py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-3xl md:text-5xl font-bold mb-8 md:mb-16 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-earth-primary to-earth-secondary">
            Educational Journey
          </span>
        </motion.h1>
        
        <div className="relative">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-earth-primary to-earth-secondary"></div>
          {educations.map((edu, index) => (
            <div key={index} className={`md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <EducationCard edu={edu} index={index} />
              </div>
            </div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-8 md:mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-base md:text-xl text-earth-text mb-6 md:mb-8">
            My educational background combines technical expertise with business acumen, 
            providing a unique perspective in the tech industry and enabling me to bridge 
            the gap between development and product strategy.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;