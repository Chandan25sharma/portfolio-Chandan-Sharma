'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, BookOpen, Users, Code2 } from 'lucide-react';

const timeline = [
  {
    year: '2024',
    title: 'Senior Full-Stack Developer',
    company: 'Tech Company',
    description: 'Leading a team of 5 developers in building scalable web applications using Next.js, TypeScript, and cloud technologies.',
    type: 'work'
  },
  {
    year: '2023',
    title: 'Published Research Paper',
    company: 'IEEE Journal',
    description: 'Co-authored a research paper on machine learning optimization for edge computing devices.',
    type: 'achievement'
  },
  {
    year: '2022',
    title: 'Full-Stack Developer',
    company: 'Innovation Labs',
    description: 'Developed multiple web applications and APIs serving thousands of users daily.',
    type: 'work'
  },
  {
    year: '2021',
    title: 'Master of Science in Computer Science',
    company: 'University Name',
    description: 'Specialized in distributed systems and machine learning. Graduated with honors.',
    type: 'education'
  },
  {
    year: '2019',
    title: 'Software Engineer',
    company: 'Startup Inc.',
    description: 'Built the initial product from scratch using React and Node.js.',
    type: 'work'
  },
  {
    year: '2018',
    title: 'Bachelor of Science in Computer Science',
    company: 'University Name',
    description: 'Graduated magna cum laude with a focus on software engineering.',
    type: 'education'
  }
];

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'HTML/CSS'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'] },
  { category: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel', 'Digital Ocean'] },
  { category: 'Tools & Others', items: ['Git', 'Jest', 'Figma', 'Linux', 'Agile', 'REST APIs'] }
];

const stats = [
  { icon: Code2, value: '50+', label: 'Projects Completed' },
  { icon: Users, value: '5+', label: 'Years Experience' },
  { icon: BookOpen, value: '10+', label: 'Research Papers' },
  { icon: Award, value: '3+', label: 'Awards Won' }
];

const typeColors = {
  work: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  education: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  achievement: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 lg:mb-20"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 lg:mb-8 tracking-tight">
              About Me
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
              Get to know more about my journey, skills, and passion for technology
            </p>
          </motion.div>

          {/* Profile Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1 flex justify-center"
            >
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-3xl animate-pulse" />
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format"
                  alt="Profile"
                  fill
                  className="object-cover rounded-full border-4 lg:border-8 border-white dark:border-gray-800 shadow-2xl relative z-10"
                  priority
                />
              </div>
            </motion.div>

            {/* Profile Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                  Hi, I&apos;m Your Name
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  I&apos;m a passionate full-stack developer and researcher with over 5 years of experience building scalable web 
                  applications and contributing to cutting-edge research in computer science. My journey in tech began 
                  during my undergraduate studies, where I discovered my love for creating solutions that make a real impact.
                </p>
                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  Throughout my career, I&apos;ve had the privilege of working with diverse teams and technologies, from building 
                  responsive frontends with React and Next.js to architecting robust backend systems with Node.js and 
                  Python. I believe in writing clean, maintainable code and following best practices to deliver exceptional user 
                  experiences.
                </p>
                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or 
                  sharing knowledge through technical writing and mentoring. I&apos;m always excited about new challenges and 
                  opportunities to grow both personally and professionally.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:gap-6">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-lg">📍 Based in Your City, Country</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-lg">🎯 Available for new opportunities</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 lg:p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:shadow-xl transition-all duration-300"
              >
                <stat.icon className="h-12 w-12 lg:h-16 lg:w-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 lg:mb-8 tracking-tight">
              Technical Skills
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto font-light">
              Technologies and tools I work with to build amazing products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  {skillGroup.category}
                </h3>
                <div className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Journey Timeline */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 lg:mb-8 tracking-tight">
              My Journey
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto font-light">
              A timeline of my professional and educational milestones
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 lg:transform lg:-translate-x-0.5" />

            <div className="space-y-12 lg:space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-950 lg:transform lg:-translate-x-1/2 z-10" />
                  
                  {/* Content */}
                  <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="p-6 lg:p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xl lg:text-2xl font-bold text-blue-600 dark:text-blue-400">
                          {item.year}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          typeColors[item.type as keyof typeof typeColors]
                        }`}>
                          {item.type}
                        </span>
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-3">
                        {item.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
