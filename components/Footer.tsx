'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4 text-primary">Budget Tracker Pro</h2>
            <p className="mb-4 text-sm">
              Simplify your financial management with our comprehensive expense tracking and budgeting tools.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: support@budgettrackerpro.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Finance Street, Money City, MC 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-base-300 mt-8 pt-6 text-sm text-center">
          <p>© {currentYear} Budget Tracker Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;