import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaLaptopCode,
  FaTools,
  FaDatabase,
  FaLanguage,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiRuby,
  SiExpress,
  SiNestjs,
  SiVite,
  SiAntdesign,
  SiBootstrap,
  SiJquery,
  SiJest,
  SiMocha,
  SiCypress,
  SiGit,
  SiSelenium,
  SiPostgresql,
  SiPrisma,
} from 'react-icons/si';

interface Skill {
  category: string;
  icon: React.ElementType;
  items: {
    name: string;
    icon: React.ElementType;
  }[];
}

const skills: Skill[] = [
  {
    category: 'Development Languages',
    icon: FaCode,
    items: [
      { name: 'Python', icon: FaPython },
      { name: 'JavaScript', icon: FaJs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3 },
      { name: 'Ruby', icon: SiRuby },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    icon: FaLaptopCode,
    items: [
      { name: 'NodeJs', icon: FaNodeJs },
      { name: 'ReactJS', icon: FaReact },
      { name: 'Express', icon: SiExpress },
      { name: 'NestJS', icon: SiNestjs },
      { name: 'Vite', icon: SiVite },
      { name: 'Ant Design', icon: SiAntdesign },
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'jQuery', icon: SiJquery },
    ],
  },
  {
    category: 'Testing & Tools',
    icon: FaTools,
    items: [
      { name: 'Jest', icon: SiJest },
      { name: 'Mocha', icon: SiMocha },
      { name: 'Chai', icon: SiMocha },
      { name: 'Cypress', icon: SiCypress },
      { name: 'Git', icon: SiGit },
      { name: 'Selenium', icon: SiSelenium },
    ],
  },
  {
    category: 'Databases & ORMs',
    icon: FaDatabase,
    items: [
      { name: 'SQL', icon: FaDatabase },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Prisma ORM', icon: SiPrisma },
    ],
  },
  {
    category: 'Spoken Languages',
    icon: FaLanguage,
    items: [
      { name: 'English', icon: FaLanguage },
      { name: 'Spanish', icon: FaLanguage },
    ],
  },
];

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({
  skill,
  index,
}) => {
  return (
    <motion.div
      className="bg-white/70 p-6 rounded-lg shadow-md border border-earth-background overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0 10px 15px rgba(52, 78, 65, 0.1)", 
        borderColor: "#588157", 
        transition: { duration: 0.2 } 
      }}
    >
      <h3 className="text-2xl font-semibold mb-4 text-earth-text flex items-center">
        <skill.icon className="mr-2 text-earth-primary" />
        {skill.category}
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {skill.items.map((item, itemIndex) => (
          <motion.div
            key={itemIndex}
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1 + itemIndex * 0.05,
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <item.icon className="text-3xl mb-2 text-earth-primary" />
            <span className="text-sm text-center text-earth-secondary">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col bg-gradient-to-b from-earth-background-light to-earth-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12 flex-grow"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <motion.h2
            className="text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-earth-primary to-earth-secondary"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Technical Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;