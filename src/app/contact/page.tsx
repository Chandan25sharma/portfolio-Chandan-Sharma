'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter, Clock, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mrchandansharma25@gmail.com',
    href: 'mailto:mrchandansharma25@gmail.com',
    description: 'Best way to reach me directly'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Saudi Arabia',
    href: null,
    description: 'Based here, open to remote work'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+966 534385571',
    href: 'tel:+966534385571',
    description: 'Available during business hours'
  }
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/chandan25sharma',
    description: 'View my projects and contributions'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/chandan-sharma-55558b288/',
    description: 'Connect professionally'
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://twitter.com/Chandan38643005',
    description: 'Follow for updates'
  }
];

const keyPoints = [
  {
    icon: Clock,
    title: "Fast Response",
    description: "Typically reply within 24 hours on weekdays"
  },
  {
    icon: CheckCircle,
    title: "Open for Work",
    description: "Available for new projects and opportunities"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };



const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus('idle');
  try {
    await emailjs.send(
      'service_v7bejd6',
      'template_d86vp5k',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      },
      'W2c-VROsY-R4BlKsZ'
    );
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
return (
    <div className="min-h-screen dark:bg-gray-950 bg-transparent">
      {/* Hero Section */}
      <section className="relative overflow-hidden section-spacing">
        <div className="absolute inset-0 bg-gray-950"></div>
        <div className="relative max-w-8xl mx-auto px-6 py-24 sm:py-32 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Let&apos;s Connect
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-8xl mx-auto">
              Have a project in mind or want to discuss opportunities? I&#39;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 -mt-12 pb-24 section-spacing bg-[url('/images/bgimg6.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {keyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[url('/images/bgimg7.jpg')] bg-cover bg-center bg-no-repeat rounded-[5px] shadow-sm p-6 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                    <point.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{point.title}</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 section-spacing">
            {/* Contact Form */}
            <motion.div
            
              className="bg-[url('/images/bgimg6.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold dark:text-white">Send a Message</h2>
                <p className="mt-2 text-gray-900 dark:text-gray-400">
                  Fill out the form below and I&#39;ll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium dark:text-white mb-4">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border "
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium dark:text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-black rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-950 dark:placeholder-gray-950"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-700 dark:text-green-300">
                      Thank you for your message! I&#39;ll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-red-700 dark:text-red-300">
                      Something went wrong. Please try again or contact me directly via email.
                    </p>
                  </div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8 "
            >
              {/* Contact Details */}
              <div className="bg-white dark:bg-gray-950 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-800 ">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Details</h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                        <item.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{item.label}</h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="block mt-1 text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-gray-600 dark:text-gray-400">{item.value}</p>
                        )}
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
               <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="section-spacing "
            ></motion.div>
              {/* Social Links */}
              <div className="bg-white dark:bg-gray-950 shadow-lg p-8 border border-gray-200 dark:border-gray-800 ">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect With Me</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Follow me on social media to stay updated with my latest projects and insights.
                </p>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <social.icon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                      <span className="ml-2 font-medium text-gray-700 dark:text-gray-300">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
              <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="section-spacing "
            ></motion.div>
              {/* Availability */}
              <div className="bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-3">Current Availability</h3>
                <p className="text-blue-700 dark:text-green-100">
                  I&#39;m currently accepting new projects and opportunities. Whether you need a full-time developer, 
                  consultant, or just want to discuss an idea, I&#39;d be happy to connect.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}