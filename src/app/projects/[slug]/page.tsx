import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, CheckCircle, ChevronRight } from 'lucide-react';
import projectsData from '@/data/projects.json';
import ClientImage from '@/components/ClientImage';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="section-spacing bg-[url('/images/bgimg6.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="container-responsive1 mx-auto px-6 sm:px-8 lg:px-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="group inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:-translate-x-1" />
            <span className="border-b border-transparent group-hover:border-current transition-colors duration-200">
              Back to Projects
            </span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-xl">
            <ClientImage
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            
            {/* Project actions overlay */}
            <div className="absolute top-4 right-4 flex space-x-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                aria-label="GitHub repository"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                aria-label="Live demo"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-[5px]">
                <Tag className="h-4 w-4" />
                <span>{project.category}</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-[4px]">
                <Calendar className="h-4 w-4" />
                <span>2024</span>
              </div>
              <span className={`inline-flex items-center px-3 py-1.5 rounded-[2px] text-xs font-medium ${
                project.status === 'completed' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                  : project.status === 'in-progress'
                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                  : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
              }`}>
                {project.status.split('-').join(' ')}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
              {project.title}
            </h1>

            <p className="text-[14px] text-gray-800 dark:text-gray-950 font-bold leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 container-responsive1">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About the Project */}
            <section className="section-spacing bg-[url('/images/bgimg6.jpg')] bg-cover bg-center bg-no-repeat rounded-xl">
              <h2 className="text-[13px] font-semibold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">
                About the Project
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
            </section>

            {/* Key Features */}
            {'features' in project && (
              <section className="section-spacing bg-[url('/images/bgimg6.jpg')] bg-cover bg-center bg-no-repeat">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(project as {features?: string[]}).features?.map((feature: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-950 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-[12px] dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Call to Action */}
            <section className="g-gradient-custom justify-center">
              <div className="max-w-8xl mx-auto text-[14px] text-center justify-around">
                <h3 className="text-[10px] font-semibold mb-1">
                  Interested in this project?
                </h3>
                <p className="text-blue-100 dark:text-blue-200 mb-6">
                  Check out the live demo or explore the source code to see how it was built.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 text-[12px] font-medium rounded-lg text-white bg-black/20 hover:bg-black/30 transition-all duration-200 hover:shadow-md"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 text-[12px] font-medium rounded-lg text-white bg-black/20 hover:bg-black/30 border border-white/10 transition-all duration-200 hover:shadow-md"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    View Source Code
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6 sticky top-6 h-fit max-w-8xl mx-auto text-center justify-around ">
            {/* Technologies */}
            <div className="bg-white dark:bg-gray-950 rounded-xl text-[14px] p-6 shadow-sm border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-950 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2 justify-center ">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1.5 rounded-[2px] text-[11px] font-medium bg-gray-950 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="bg-white text-[15px] dark:bg-gray-950 rounded-[5px] p-6 shadow-sm border border-gray-200 dark:border-gray-800">
              <h3 className="text-[14px] font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
                Project Links
              </h3>
              <div className="space-y-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-[15px] justify-between p-3 rounded-2xl bg-gray-50 dark:bg-gray-950 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <ExternalLink className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">Live Demo</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-950 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <Github className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">Source Code</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>

            {/* More Projects */}
            <div className="bg-white dark:bg-gray-900 text-[14px] rounded-[5px] p-6 shadow-sm border border-gray-200 dark:border-gray-800">
              <h3 className="text-[14px] font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
                More Projects
              </h3>
              <Link
                href="/projects"
                className="group inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
              >
                <span className="border-b border-transparent group-hover:border-current transition-colors duration-200">
                  View all projects
                </span>
                <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}