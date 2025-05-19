'use client';

import Link from 'next/link';
import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
  category: 'general' | 'account' | 'features' | 'billing' | 'security';
}

const faqs: FAQ[] = [
  {
    question: 'What is Budget Tracker Pro?',
    answer: 'Budget Tracker Pro is a comprehensive financial management platform that helps individuals, families, teams, and businesses track expenses, create budgets, and gain insights into their financial habits. Our user-friendly interface makes it easy to take control of your finances.',
    category: 'general',
  },
  {
    question: 'How secure is my financial data?',
    answer: 'Your financial data is encrypted using industry-standard protocols. We employ strict security measures including end-to-end encryption, two-factor authentication, and regular security audits to ensure that your information remains private and protected at all times.',
    category: 'security',
  },
  {
    question: 'Can I access Budget Tracker Pro on multiple devices?',
    answer: 'Yes! Budget Tracker Pro is accessible on any device with an internet connection. Your data syncs automatically, so you'll always have the most up-to-date information regardless of which device you're using.',
    category: 'features',
  },
  {
    question: 'What's the difference between individual, family, and business accounts?',
    answer: 'Individual accounts are designed for personal finance management. Family accounts allow multiple users to collaborate on household finances with shared access and permissions. Business accounts include additional features for expense tracking, reporting, and team management suited for small to medium-sized businesses.',
    category: 'account',
  },
  {
    question: 'Is there a mobile app available?',
    answer: 'Yes, we offer mobile apps for iOS and Android that provide the same functionality as our web application, allowing you to track expenses on the go.',
    category: 'features',
  },
  {
    question: 'Can I import data from my bank or other financial apps?',
    answer: 'Yes, Budget Tracker Pro supports importing transactions from major banks and financial institutions. You can also import data from CSV files exported from other financial applications.',
    category: 'features',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 30-day free trial for all new users. This gives you full access to all features so you can determine if Budget Tracker Pro is the right solution for your needs.',
    category: 'billing',
  },
  {
    question: 'How do I cancel my subscription?',
    answer: 'You can cancel your subscription at any time from your account settings page. If you cancel, you'll still have access to your account until the end of your current billing period.',
    category: 'billing',
  },
  {
    question: 'Can I export my data if I decide to switch to another service?',
    answer: 'Yes, we provide options to export your data in various formats (CSV, Excel) so you always maintain ownership of your financial information.',
    category: 'features',
  },
  {
    question: 'How do I set up a family or team account?',
    answer: 'During registration, you can select the account type that best suits your needs. If you already have an individual account, you can upgrade to a family or team account from your account settings.',
    category: 'account',
  },
  {
    question: 'Does Budget Tracker Pro support multiple currencies?',
    answer: 'Yes, Budget Tracker Pro supports tracking expenses in multiple currencies and automatically converts them to your primary currency using current exchange rates.',
    category: 'features',
  },
  {
    question: 'Can I set spending limits or alerts?',
    answer: 'Yes, you can set budget limits for different categories and receive notifications when you approach or exceed those limits. This helps you stay on track with your financial goals.',
    category: 'features',
  },
  {
    question: 'What customer support options are available?',
    answer: 'We offer email support for all users, with live chat support available for premium subscribers. Our comprehensive knowledge base and tutorial videos are accessible to everyone.',
    category: 'general',
  },
  {
    question: 'Is my payment information secure?',
    answer: 'We do not store your payment details on our servers. All payment processing is handled by trusted third-party payment processors with industry-standard security certifications.',
    category: 'security',
  },
  {
    question: 'Can I track investments with Budget Tracker Pro?',
    answer: 'Yes, our premium plans include investment tracking features that allow you to monitor your portfolio performance alongside your regular expenses and income.',
    category: 'features',
  },
];

const FAQsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="bg-base-200 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-base-content/70 mb-8">
              Find answers to common questions about Budget Tracker Pro.
              Can't find what you're looking for? Contact our support team.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            <button 
              className={`btn ${activeCategory === 'all' ? 'btn-primary' : 'btn-outline'}`} 
              onClick={() => setActiveCategory('all')}
            >
              All Questions
            </button>
            <button 
              className={`btn ${activeCategory === 'general' ? 'btn-primary' : 'btn-outline'}`} 
              onClick={() => setActiveCategory('general')}
            >
              General
            </button>
            <button 
              className={`btn ${activeCategory === 'account' ? 'btn-primary' : 'btn-outline'}`} 
              onClick={() => setActiveCategory('account')}
            >
              Accounts
            </button>
            <button 
              className={`btn ${activeCategory === 'features' ? 'btn-primary' : 'btn-outline'}`} 
              onClick={() => setActiveCategory('features')}
            >
              Features
            </button>
            <button 
              className={`btn ${activeCategory === 'billing' ? 'btn-primary' : 'btn-outline'}`} 
              onClick={() => setActiveCategory('billing')}
            >
              Billing
            </button>
            <button 
              className={`btn ${activeCategory === 'security' ? 'btn-primary' : 'btn-outline'}`} 
              onClick={() => setActiveCategory('security')}
            >
              Security
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="join join-vertical w-full">
              {filteredFAQs.map((faq, index) => (
                <div key={index} className="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="faq-accordion" defaultChecked={index === 0} /> 
                  <div className="collapse-title text-xl font-medium">
                    {faq.question}
                    <span className="badge badge-sm ml-2">{faq.category}</span>
                  </div>
                  <div className="collapse-content"> 
                    <p className="py-2">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Help Topics</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <h3 className="card-title">Getting Started</h3>
                <p className="mb-4">Quick guides to help you set up your account and start tracking expenses.</p>
                <Link href="/help/getting-started" className="btn btn-primary btn-sm">
                  View Guides
                </Link>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <h3 className="card-title">Budgeting Tips</h3>
                <p className="mb-4">Learn how to create effective budgets and stick to them.</p>
                <Link href="/help/budgeting-tips" className="btn btn-primary btn-sm">
                  Read Tips
                </Link>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body">
                <h3 className="card-title">Account Settings</h3>
                <p className="mb-4">Learn how to customize your account, manage users, and set preferences.</p>
                <Link href="/help/account-settings" className="btn btn-primary btn-sm">
                  View Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our support team is ready to help you get the most out of Budget Tracker Pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-lg bg-white text-primary hover:bg-gray-100">
              Contact Support
            </Link>
            <Link href="/tutorials" className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-primary">
              View Tutorials
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQsPage;