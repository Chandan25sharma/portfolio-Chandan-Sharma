'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Lightbulb, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import projectsData from '@/data/projects.json';

const skills = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
  'MongoDB', 'Tailwind CSS', 'AWS', 'Docker', 'Git', 'GraphQL'
];

const features = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Building scalable web applications with modern technologies'
  },
  {
    icon: Lightbulb,
    title: 'Research & Innovation',
    description: 'Contributing to cutting-edge research in computer science'
  },
  {
    icon: Users,
    title: 'Team Leadership',
    description: 'Leading development teams and mentoring junior developers'
  },
  {
    icon: Users,
    title: 'AI & Intelligent Systems',
    description: 'Leveraging AI and machine learning to create intelligent applications'
  }
];

export default function Home() {
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <div className="min-h-screen min-w-full items-center justify-center">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-blue-600/10 dark:to-purple-600/10" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center min-h-[100vh] py-20 lg:py-32">
            {/* Left Column - Text Content */}
           <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.10 }}
           className="space-y-8 lg:space-y-12"
            >
              <div className="space-y-6 lg:space-y-12 min-h-[110px]">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-xl lg:text-4xl font-semibold text-blue-600 dark:text-blue-400 tracking-wide"
                >
                  Hello, I&apos;m
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-5xl sm:text-6xl lg:text-10xl xl:text-8xl font-black text-gray-900 dark:text-white leading-[0.85] tracking-tight"
                >
                  Chandan Sharma
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text leading-tight"
                >
                  Full-Stack Developer & Researcher
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed min-h-40 max-w-2xl font-light"
              >
                I&apos;m passionate about creating innovative solutions that bridge technology and real-world problems. 
                With expertise in full-stack development and research in computer science, I bring ideas to life through elegant code.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 lg:gap-8"
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 lg:px-12 py-4 lg:py-5 text-lg lg:text-xl font-bold rounded-2xl text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl shadow-blue-600/25 hover:shadow-2xl hover:shadow-blue-600/40 hover:scale-105 transform group"
                >
                  View My Work
                  <ArrowRight className="ml-3 lg:ml-4 h-6 lg:h-7 w-6 lg:w-7 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 lg:px-12 py-4 lg:py-5 text-lg lg:text-xl font-bold rounded-2xl text-gray-700 bg-white border-2 border-gray-300 hover:bg-gray-50 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
                >
                  <Download className="mr-3 lg:mr-4 h-6 lg:h-7 w-6 lg:w-7" />
                  Download Resume
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex space-x-6 lg:space-x-8"
              >
                <a
                  href="https://github.com/chandan25sharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 lg:p-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg transform"
                >
                  <Github className="h-8 lg:h-10 w-8 lg:w-10" />
                </a>
                <a
                  href="https://linkedin.com/in/chandansharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 lg:p-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg transform"
                >
                  <Linkedin className="h-8 lg:h-10 w-8 lg:w-10" />
                </a>
                <a
                  href="mailto:mrchandansharma25@gmail.com"
                  className="p-3 lg:p-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg transform"
                >
                  <Mail className="h-8 lg:h-10 w-8 lg:w-10" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-3xl animate-pulse" />
                <div className="absolute inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-15 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute inset-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
                <Image
                   src="/images/chandanProfile.jpg"
                  alt="Chandan Sharma"
                  fill
                  className="object-cover rounded-full border-4 lg:border-8 border-white dark:border-gray-800 shadow-2xl relative z-10"
                  priority
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-10 blur-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-spacing bg-white dark:bg-gray-950 relative">
        <div className="absolute w-full inset-0 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-950" />
        <div className="relative mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-20"
          >
            <h2 className="text-section text-gray-900 dark:text-white mb-6 tracking-tight">
              What I Do
            </h2>
            <p className="text-large text-gray-600 dark:text-gray-400 max-w-8xl mx-auto leading-relaxed">
              Combining technical expertise with creative problem-solving to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-gap-responsive">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center card-spacing rounded-2xl lg:rounded-3xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 hover:shadow-xl transition-all duration-500 hover-lift group border border-gray-200 dark:border-gray-700"
              >
                <div className="mb-6 p-4 rounded-2xl bg-blue-100 dark:bg-blue-900/30 inline-block group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-4 section-spacing bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative rounded-lg">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
       <div className="relative mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
           className="text-center mb-6"
       >
         <h2 className="text-xl lg:text-4xl text-gray-900 dark:text-white mb-3 tracking-tight">
        Technical Skills
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 max-w-8xl mx-auto leading-normal">
        Technologies and tools I work with to build amazing products
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-3"
    >
      {skills.map((skill, index) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200 font-medium"
        >
          {skill}
        </motion.span>
      ))}
    </motion.div>
  </div>
</section>


      {/* Featured Projects Section */}
      <section className="section-spacing bg-white dark:bg-gray-950 relative rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900" />
        <div className="relative mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-20"
          >
            <h2 className="text-section text-gray-900 dark:text-white mb-6 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-large text-gray-600 dark:text-gray-400 max-w-8xl mx-auto">
              A showcase of my recent work and contributions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-gap-responsive">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16 lg:mt-20"
          >
            <Link
              href="/projects"
              className="btn-primary text-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 dark:text-blue-400 dark:from-blue-950 dark:to-blue-900 dark:hover:from-blue-900 dark:hover:to-blue-800 shadow-lg group"
            >
              View All Projects
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-spacing bg-gradient-to-br from-blue-600 via-blue-700 to-yellow-700 relative overflow-hidden rounded-lg">
       <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/90 to-blue-900/90" />
         <div className="relative mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
          <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center"
            >
            <h2 className="text-section text-white mb-4 tracking-tight">Let&apos;s Work Together</h2>
           <p className="text-large text-blue-100 max-w-8xl mx-auto mb-8 leading-relaxed">
            I&apos;m always open to discussing new opportunities and interesting projects. 
             Get in touch and let&apos;s create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
             href="/contact"
             className="btn-primary text-white border-2 border-white hover:bg-blue-800 hover:text-blue-600 shadow-xl"
              >
             Get In Touch
             </Link>
             <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-white border-2 border-white hover:bg-blue-800 hover:text-blue-600 shadow-xl"
              >
             <Download className="mr-3 h-6 w-6" />
             Download Resume
            </a>
           </div>
          </motion.div>
       </div>
      </section>

    </div>
  );
}
