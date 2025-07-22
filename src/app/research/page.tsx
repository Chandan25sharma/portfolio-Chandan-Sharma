'use client';

import { motion } from 'framer-motion';
import PaperViewer from '@/components/PaperViewer';
import researchData from '@/data/research.json';

export default function Research() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-spacing relative overflow-hidden bg-[url('/images/bgimg6.jpg')] bg-cover">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12 section-spacing">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 lg:mb-20"
          >
            <h1 className="text-[42px] text-gray-900 dark:text-white mb-6 tracking-tight">
              Research Papers
            </h1>
            <p className="text-[16px] text-gray-600 dark:text-gray-200 max-w-8xl mx-auto leading-relaxed">
              A collection of my research contributions in computer science, focusing on 
              machine learning, distributed systems, and emerging technologies
            </p>
          </motion.div>

          {/* Research Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 grid-gap-responsive mb-16 lg:mb-20"
          >
            <div className="text-center card-spacing bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 hover-lift">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {researchData.length}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Publications
              </div>
            </div>
            <div className="text-center card-spacing bg-white dark:bg-gray-900 rounded-[6px] shadow-lg border border-gray-200 dark:border-gray-800 hover-lift">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {researchData.reduce((total, paper) => total + paper.citations, 0)}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Citations
              </div>
            </div>
            <div className="text-center card-spacing bg-white dark:bg-gray-900 rounded-[6px] shadow-lg border border-gray-200 dark:border-gray-800 hover-lift">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {new Set(researchData.flatMap(paper => paper.keywords)).size}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Research Areas
              </div>
            </div>
            <div className="text-center card-spacing bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover-lift">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {Math.max(...researchData.map(paper => paper.year)) - Math.min(...researchData.map(paper => paper.year)) + 1}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Years Active
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Areas & Content */}
      <section className="section-spacingsection-spacing relative overflow-hidden bg-[url('/images/bgimg6.jpg')] bg-cover">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">

        {/* Research Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            Research Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {Array.from(new Set(researchData.flatMap(paper => paper.keywords))).map((keyword, index) => (
              <motion.span
                key={keyword}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.5, scale: 1.04 }}
                transition={{ delay: 0.2 + (index * 0.02) }}
                className="px-4 py-2 text-[10px] bg-blue-50 text-blue-950 dark:bg-blue-900/10 dark:text-blue-300 rounded-[2px] font-medium hover:scale-105"
              >
                {keyword}
              </motion.span>
            ))}
          </div>
          </motion.div>
          <div className="w-full h-px bg-white opacity-50"></div>

        {/* About Research */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            
          className=" rounded-2xl card-spacing mb-16 lg:mb-20 transparent"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center transparent ">
            About My Research
          </h2>
          <div className="space-y-6">
            <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-relaxed">
              My research focuses on the intersection of practical software engineering and cutting-edge 
              computer science theory. I&apos;m particularly interested in how we can optimize modern 
              computing systems for real-world applications, from improving machine learning model 
              efficiency to enhancing blockchain scalability.
            </p>
            <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-relaxed">
              Through collaboration with leading institutions and industry partners, my work aims to 
              bridge the gap between academic research and practical implementation, ensuring that 
              theoretical advances can be effectively deployed in production environments.
            </p>
          </div>
        </motion.div>
         <div className="w-full h-px bg-white opacity-50"></div>
        {/* Papers */}
          <motion.div
          className="section-spacing"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <PaperViewer papers={researchData} />
        </motion.div>
        </div>
      </section>
    </div>
  );
}
