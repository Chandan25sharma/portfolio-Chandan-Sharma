'use client';

import { useState } from 'react';
import { FileText, Download, ExternalLink, Calendar, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

interface ResearchPaper {
  id: string;
  title: string;
  description: string;
  abstract: string;
  authors: string[];
  journal: string;
  year: number;
  pdfUrl: string;
  keywords: string[];
  category: string;
  citations: number;
  slug: string;
}

interface PaperViewerProps {
  papers: ResearchPaper[];
}

export default function PaperViewer({ papers }: PaperViewerProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);

  const categories = ['all', ...Array.from(new Set(papers.map(paper => paper.category)))];
  
  const filteredPapers = selectedCategory === 'all' 
    ? papers 
    : papers.filter(paper => paper.category === selectedCategory);

  const openPaperViewer = (paper: ResearchPaper) => {
    setSelectedPaper(paper);
  };

  const closePaperViewer = () => {
    setSelectedPaper(null);
  };

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-950 dark:text-gray-300 dark:hover:bg-gray-950'
            }`}
          >
            {category === 'all' ? 'All Papers' : category}
          </button>
        ))}
      </div>

      {/* Papers Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPapers.map((paper, index) => (
          <motion.div
            key={paper.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-950 rounded-lg text-[13px] border border-gray-200 dark:border-gray-950 p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => openPaperViewer(paper)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-2 text">
                <FileText className="h-5 w-5 text-blue-950 dark:text-blue-800" />
                <span className="text-sm font-medium text-blue-900 dark:text-blue-800">
                  {paper.category}
                </span>
              </div>
              <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                <BookOpen className="h-5 w-6" />
                <span>{paper.citations}</span>
              </div>
            </div>

            <h3 className="text-[10px] font-semibold text-gray-900 dark:text-white mb-2 line-clamp-3">
              {paper.title}
            </h3>

            <p className="text-gray-600 text-[10px] dark:text-gray-400 text-sm mb-4 line-clamp-3">
              {paper.description}
            </p>

            <div className="gap-4 h-8 flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <div className="flex items-center space-x-1 gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>{paper.year}</span>
              </div>
              <div className="gap-1 flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{paper.authors.length} authors</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-4">
              {paper.keywords.slice(0, 3).map((keyword) => (
                <span
                  key={keyword}
                  className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                >
                  {keyword}
                </span>
              ))}
              {paper.keywords.length > 3 && (
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  +{paper.keywords.length - 3}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[11px] text-gray-500 dark:text-gray-400">
                {paper.journal}
              </span>
              <div className="flex space-x-2 gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(paper.pdfUrl, '_blank');
                  }}
                  className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  <Download className="h-6 w-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openPaperViewer(paper);
                  }}
                  className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Paper Detail Modal */}
      {selectedPaper && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={closePaperViewer}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white dark:bg-gray-950 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-200 dark:border-gray-800 text-[12px]">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {selectedPaper.title}
                  </h2>
                  <div className="flex items-center space-x-4 text-[12px] text-gray-500 dark:text-gray-400">
                    <span>{selectedPaper.authors.join(', ')}</span>
                    <span>•</span>
                    <span>{selectedPaper.journal}</span>
                    <span>•</span>
                    <span>{selectedPaper.year}</span>
                  </div>
                </div>
                <button
                  onClick={closePaperViewer}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="space-y-6">
                <div>
                  <h3 className="text-[14px] font-medium text-gray-700 dark:text-white mb-2 dark:bg-gray-900">
                    Abstract
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-[12px]">
                    {selectedPaper.abstract}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium dark:text-white mb-2 dark:bg-blue-950">
                    Keywords
                  </h3>
                  <div className="flex flex-wrap gap-2 ">
                    {selectedPaper.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="inline-flex items-center text-[12px] px-3 py-1 rounded-[] font-medium text-blue-800  dark:text-blue-500"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium">{selectedPaper.citations}</span> citations
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={selectedPaper.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-[4] text-white bg-blue-800 hover:bg-blue-900 transition-colors"
                    >
                      <Download className="h-5 w-15 mr-5" />
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
