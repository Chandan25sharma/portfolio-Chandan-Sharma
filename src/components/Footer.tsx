'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/yourusername', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile', icon: Linkedin },
  { name: 'Email', href: 'mailto:mrchandansharma25@gmail.com', icon: Mail },
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Research', href: '/research' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 px-8 text-sm section-spacing">
      {/* Main Content */}
      <div className="max-w-8xl mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left: Brand Info */}
        <div className="space-y-4">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg font-semibold text-gray-900 dark:text-white"
          >
            Chandan Sharma
          </motion.h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Full-stack developer & researcher building scalable and impactful digital solutions.
          </p>
          <div className="flex items-center space-x-4 pt-2">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h4>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            Email:{' '}
            <a
              href="mailto:mrchandansharma25@gmail.com"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              mrchandansharma25@gmail.com
            </a>
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Kathmandu, Nepal</p>
          <Link
            href="/contact"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            Send a message →
          </Link>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 dark:border-gray-800 py-6">
        <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 dark:text-gray-400">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1 text-sm text-center"
          >
            © {new Date().getFullYear()} Chandan Sharma. Made with{' '}
            <Heart className="h-4 w-4 text-red-500" fill="currentColor" /> and Next.js.
          </motion.p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
