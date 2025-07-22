'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, BookOpen, Users, Code2 } from 'lucide-react';

const timeline = [
  {
    year: '2025',
    title: 'IT Programmer/developer',
    company: 'Al-mahroos Sons & Co',
    description: 'working and developing web applications with ML tools and APIs, enhancing user experience and performance.',
    type: 'work'
  },
  {
    year: 'march-2025',
    title: 'Published Research Paper',
    company: 'ML Journal',
    description: 'Co-authored a research paper on machine learning optimization for edge computing devices.',
    type: 'achievement'
  },
  {
    year: '2024',
    title: 'System admin and web developer/handler',
    company: 'Innovation Labs',
    description: 'Developed multiple web applications and APIs serving thousands of users daily.',
    type: 'work'
  },
  {
    year: '2024',
    title: 'Bachelor of Technology in Computer Science',
    company: 'Jawahar Lal Nehru Technological University Kakinada',
    description: 'Graduated with a focus on ML and software engineering.',
    type: 'education'
  },
  {
    year: '2018',
    title: 'High School in Biology and Computer Science',
    company: 'NENBSE',
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
  { icon: Code2, value: '20+', label: 'Projects Completed' },
  { icon: Users, value: '2+', label: 'Years Experience' },
  { icon: BookOpen, value: '2+', label: 'Research Papers' },
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
      <section className="section-spacing py-20 lg:py-32 bg-[url('/images/bgimg6.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 lg:mb-20"
          >
            <h1 className="text-section text-gray-900 dark:text-white mb-6 tracking-tight">
              About Me
            </h1>
            <p className="text-large text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
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
                  src="/images/chandan1.jpg"
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
                <h2 className="text-[12px] font-bold text-gray-900 dark:text-white text-center">
                  Hi, I&apos;m Chandan Sharma
                </h2>
                <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                  I&apos;m a passionate full-stack developer and researcher with over 2 years of experience building scalable AI-Tools, Web
                  applications, and contributing to cutting-edge research in computer science. My journey in tech began
                  during my undergraduate studies, where I discovered my love for creating solutions that make a real impact.
                </p>
                <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                  Throughout my career, I&apos;ve had the privilege of working with diverse teams and technologies, from building 
                  responsive frontends with React and Next.js to architecting robust backend systems with Node.js and 
                  Python. I believe in writing clean, maintainable code and following best practices to deliver exceptional user 
                  experiences.
                </p>
                <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                  When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or 
                  sharing knowledge through technical writing and mentoring. I&apos;m always excited about new challenges and 
                  opportunities to grow both personally and professionally.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:gap-6">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-[16px]">Based in Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-[16px]">Available for new Project Collaborations</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-spacing py-15 lg:py-25 bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 lg:p-8 rounded-xl bg-gray-50 dark:bg-gray-900 hover:shadow-xl transition-all duration-300"
              >
                <stat.icon className="h-6 w-8 lg:h-16 lg:w-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <div className="text-xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
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
      <section className="section-spacing py-15 lg:py-25 bg-[url('/images/bgimg8.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-20"
          >
            <h2 className="text-[16px] font-black text-gray-900 dark:text-white mb-6 lg:mb-8 tracking-tight">
              Technical Skills
            </h2>
            <p className="text-[14px]  text-gray-600 dark:text-gray-400 max-w-4xl mx-auto font-light">
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
                className="p-6 lg:p-8 rounded-[6px] bg-white dark:bg-gray-950 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  {skillGroup.category}
                </h3>
                <div className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 p-3 rounded-[0px] bg-[url('/images/bgimg6.jpg')] bg-cover bg-center bg-no-repeat dark:hover:bg-gray-700 transition-colors"
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
      <section className="section-spacing py-15 lg:py-25 bg-[url('/images/bgimg10.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-[16px] font-black text-gray-900 dark:text-white mb-6 lg:mb-8 tracking-tight">
              My Journey
            </h2>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-gray-600 dark:text-gray-400 max-w-8xl mx-auto font-light">
              A timeline of my professional and educational milestones
            </p>
          </motion.div>

          <div className="relative max-w-8xl mx-auto container-responsive3">
            {/* Timeline line */}
            <div className="absolute left-2 right-2 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 lg:transform lg:-translate-x-0.5" />

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
                  <div className="absolute left-0 lg:left-1/2 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-950 lg:transform lg:-translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="p-6 lg:p-8 rounded-[4px] bg-gray-50 dark:bg-gray-950 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[16px] font-bold text-blue-950 dark:text-blue-900">
                          {item.year}
                        </span>
                        <span className={`px-3 py-1 rounded-[1px] text-sm font-medium ${
                          typeColors[item.type as keyof typeof typeColors]
                        }`}>
                          {item.type}
                        </span>
                      </div>
                      <h3 className="text-[13px]  text-gray-900 dark:text-white ">
                        {item.title}
                      </h3>
                      <p className="text-lg text-blue-900 dark:text-blue-800 font-semibold mb-3">
                        {item.company}
                      </p>
                      <p className="text-gray-200 dark:text-gray-500 leading-relaxed">
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
