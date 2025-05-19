'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { FaChartLine, FaWallet, FaRegCreditCard, FaRegBell, FaUsers, FaShieldAlt } from 'react-icons/fa';

const Home = () => {
  const { data: session } = useSession();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-base-100 to-base-200 py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content leading-tight">
                Take Control of Your <span className="text-primary">Financial Future</span>
              </h1>
              <p className="text-lg text-base-content/80 max-w-xl">
                Track expenses, create budgets, and achieve your financial goals with our intuitive and powerful budget tracking solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/signup" className="btn btn-primary btn-lg">
                  Get Started
                </Link>
                <Link href="/features" className="btn btn-outline btn-lg">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/dashboard-mockup.svg"
                  alt="Budget Tracker Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-base-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Everything you need to manage your finances effectively in one place
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-base-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FaChartLine className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expense Tracking</h3>
              <p className="text-base-content/70">
                Easily track and categorize all your expenses in real-time with our intuitive interface.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-base-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FaWallet className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Budget Planning</h3>
              <p className="text-base-content/70">
                Create customized budgets for different categories and receive alerts when you're close to limits.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-base-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FaRegCreditCard className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Financial Reports</h3>
              <p className="text-base-content/70">
                Get insights with detailed financial reports and visualizations of your spending patterns.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-base-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FaRegBell className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Bill Reminders</h3>
              <p className="text-base-content/70">
                Never miss a payment with automated bill reminders and upcoming expense notifications.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-base-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FaUsers className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-User Access</h3>
              <p className="text-base-content/70">
                Share financial management with family members, teams, or business partners with role-based permissions.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-base-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FaShieldAlt className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure & Private</h3>
              <p className="text-base-content/70">
                Your financial data is encrypted and secured with industry-standard security practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-base-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Thousands of individuals and businesses trust Budget Tracker Pro for their financial management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-base-100 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary text-primary-content rounded-full flex items-center justify-center font-bold mr-4">
                  JD
                </div>
                <div>
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-sm text-base-content/60">Individual User</p>
                </div>
              </div>
              <p className="text-base-content/80">
                "Budget Tracker Pro completely changed how I manage my personal finances. I've been able to save more than ever before!"
              </p>
              <div className="flex mt-4 text-warning">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-base-100 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary text-secondary-content rounded-full flex items-center justify-center font-bold mr-4">
                  SJ
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-base-content/60">Family Account</p>
                </div>
              </div>
              <p className="text-base-content/80">
                "The family account features help us coordinate our household budget. Now everyone is on the same page financially."
              </p>
              <div className="flex mt-4 text-warning">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-base-100 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent text-accent-content rounded-full flex items-center justify-center font-bold mr-4">
                  RM
                </div>
                <div>
                  <h4 className="font-semibold">Robert Miller</h4>
                  <p className="text-sm text-base-content/60">Small Business Owner</p>
                </div>
              </div>
              <p className="text-base-content/80">
                "As a small business, we needed an affordable way to track expenses. This platform offers the perfect balance of features and simplicity."
              </p>
              <div className="flex mt-4 text-warning">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 bg-base-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Get answers to common questions about Budget Tracker Pro
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="join join-vertical w-full">
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="faq-accordion" defaultChecked /> 
                <div className="collapse-title text-xl font-medium">
                  How secure is my financial data?
                </div>
                <div className="collapse-content"> 
                  <p>Your financial data is encrypted using industry-standard protocols. We employ strict security measures to ensure that your information remains private and protected at all times.</p>
                </div>
              </div>
              
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="faq-accordion" /> 
                <div className="collapse-title text-xl font-medium">
                  Can I access Budget Tracker Pro on multiple devices?
                </div>
                <div className="collapse-content"> 
                  <p>Yes! Budget Tracker Pro is accessible on any device with an internet connection. Your data syncs automatically, so you'll always have the most up-to-date information regardless of which device you're using.</p>
                </div>
              </div>
              
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="faq-accordion" /> 
                <div className="collapse-title text-xl font-medium">
                  What's the difference between individual, family, and business accounts?
                </div>
                <div className="collapse-content"> 
                  <p>Individual accounts are designed for personal finance management. Family accounts allow multiple users to collaborate on household finances with shared access and permissions. Business accounts include additional features for expense tracking, reporting, and team management suited for small to medium-sized businesses.</p>
                </div>
              </div>
              
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="faq-accordion" /> 
                <div className="collapse-title text-xl font-medium">
                  Is there a mobile app available?
                </div>
                <div className="collapse-content"> 
                  <p>Yes, we offer mobile apps for iOS and Android that provide the same functionality as our web application, allowing you to track expenses on the go.</p>
                </div>
              </div>
              
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="faq-accordion" /> 
                <div className="collapse-title text-xl font-medium">
                  Can I import data from my bank or other financial apps?
                </div>
                <div className="collapse-content"> 
                  <p>Yes, Budget Tracker Pro supports importing transactions from major banks and financial institutions. You can also import data from CSV files exported from other financial applications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-base-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Budget Tracker Pro</h2>
              <p className="text-lg text-base-content/80 mb-6">
                Founded with a mission to make financial management accessible to everyone, Budget Tracker Pro has grown to serve thousands of users worldwide. Our platform combines powerful features with a user-friendly interface to help individuals, families, and businesses achieve their financial goals.
              </p>
              <p className="text-lg text-base-content/80 mb-6">
                Our team of financial experts and software engineers continuously work to improve the platform, ensuring it meets the evolving needs of our diverse user base. We believe that financial control leads to financial freedom, and we're dedicated to empowering our users every step of the way.
              </p>
              <div className="flex gap-4">
                <Link href="/about" className="btn btn-primary">
                  Learn More
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-base-100 p-6 rounded-lg shadow-md">
                  <h3 className="text-4xl font-bold text-primary mb-2">10k+</h3>
                  <p className="text-base-content/70">Active Users</p>
                </div>
                <div className="bg-base-100 p-6 rounded-lg shadow-md">
                  <h3 className="text-4xl font-bold text-primary mb-2">$50M+</h3>
                  <p className="text-base-content/70">Expenses Tracked</p>
                </div>
                <div className="bg-base-100 p-6 rounded-lg shadow-md">
                  <h3 className="text-4xl font-bold text-primary mb-2">98%</h3>
                  <p className="text-base-content/70">Customer Satisfaction</p>
                </div>
                <div className="bg-base-100 p-6 rounded-lg shadow-md">
                  <h3 className="text-4xl font-bold text-primary mb-2">24/7</h3>
                  <p className="text-base-content/70">Customer Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-base-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Have questions or need assistance? Our team is here to help you.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                    <input type="text" id="name" className="input input-bordered w-full" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" id="email" className="input input-bordered w-full" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input type="text" id="subject" className="input input-bordered w-full" placeholder="How can we help you?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea id="message" rows={4} className="textarea textarea-bordered w-full h-32" placeholder="Your message here..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <span className="font-medium mr-2">Email:</span>
                    <a href="mailto:support@budgettrackerpro.com" className="text-primary">support@budgettrackerpro.com</a>
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium mr-2">Phone:</span>
                    <a href="tel:+11234567890" className="text-primary">+1 (123) 456-7890</a>
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium mr-2">Address:</span>
                    <span>123 Finance Street, Money City, MC 12345</span>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Monday-Friday:</span> 9:00 AM - 6:00 PM EST</p>
                  <p><span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM EST</p>
                  <p><span className="font-medium">Sunday:</span> Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Control of Your Finances?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their financial management with Budget Tracker Pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup" className="btn btn-lg bg-white text-primary hover:bg-gray-100">
              Get Started for Free
            </Link>
            <Link href="/features" className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-primary">
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
