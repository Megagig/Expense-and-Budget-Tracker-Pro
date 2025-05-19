'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaUsers, FaLightbulb, FaHandshake, FaChartLine } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="bg-base-200 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Budget Tracker Pro</h1>
            <p className="text-xl text-base-content/70 mb-8">
              We're on a mission to help people gain control of their finances and build a secure future.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-base-content/80 mb-6">
                Budget Tracker Pro was founded in 2020 by a team of financial experts and software engineers who recognized a growing need for intuitive financial management tools that could serve everyone from individuals to businesses.
              </p>
              <p className="text-lg text-base-content/80 mb-6">
                What started as a simple expense tracking app has evolved into a comprehensive financial management platform used by thousands of people worldwide to gain control of their finances, reduce financial stress, and work toward their goals.
              </p>
              <p className="text-lg text-base-content/80">
                Today, our team continues to innovate and improve the platform, guided by user feedback and our commitment to financial empowerment for all.
              </p>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-video bg-base-300 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <FaChartLine className="text-primary text-7xl mx-auto mb-4 opacity-30" />
                    <p className="text-base-content/60">Our journey from startup to trusted financial partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-lg text-base-content/70">
              We believe that financial health is essential to overall wellbeing, and our mission is to make financial management accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-base-100 shadow-lg text-center">
              <div className="card-body">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <FaLightbulb className="text-primary text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-base-content/70">
                  We continuously strive to improve our platform with new features and technologies that simplify financial management.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg text-center">
              <div className="card-body">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <FaUsers className="text-primary text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                <p className="text-base-content/70">
                  We design our products to be user-friendly and accessible to everyone, regardless of their financial background.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg text-center">
              <div className="card-body">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <FaHandshake className="text-primary text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Trust</h3>
                <p className="text-base-content/70">
                  We prioritize security and transparency, ensuring our users can trust us with their financial information.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg text-center">
              <div className="card-body">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <FaChartLine className="text-primary text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Impact</h3>
                <p className="text-base-content/70">
                  We measure our success by the positive impact we have on our users' financial wellbeing and peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-base-content/70">
              Meet the passionate people behind Budget Tracker Pro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-base-200">
              <div className="card-body items-center text-center">
                <div className="avatar">
                  <div className="w-24 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold">
                    JD
                  </div>
                </div>
                <h3 className="card-title mt-4">Jane Doe</h3>
                <p className="text-sm text-base-content/70">CEO & Co-Founder</p>
                <p className="text-sm mt-2">
                  Former financial advisor with a passion for making financial literacy accessible to everyone.
                </p>
              </div>
            </div>

            <div className="card bg-base-200">
              <div className="card-body items-center text-center">
                <div className="avatar">
                  <div className="w-24 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold">
                    MS
                  </div>
                </div>
                <h3 className="card-title mt-4">Michael Smith</h3>
                <p className="text-sm text-base-content/70">CTO & Co-Founder</p>
                <p className="text-sm mt-2">
                  Software engineer with over 15 years of experience building secure financial applications.
                </p>
              </div>
            </div>

            <div className="card bg-base-200">
              <div className="card-body items-center text-center">
                <div className="avatar">
                  <div className="w-24 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold">
                    AP
                  </div>
                </div>
                <h3 className="card-title mt-4">Alicia Park</h3>
                <p className="text-sm text-base-content/70">Head of Product</p>
                <p className="text-sm mt-2">
                  User experience specialist focusing on creating intuitive financial tools for diverse users.
                </p>
              </div>
            </div>

            <div className="card bg-base-200">
              <div className="card-body items-center text-center">
                <div className="avatar">
                  <div className="w-24 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold">
                    RJ
                  </div>
                </div>
                <h3 className="card-title mt-4">Robert Johnson</h3>
                <p className="text-sm text-base-content/70">Head of Customer Success</p>
                <p className="text-sm mt-2">
                  Dedicated to ensuring every user achieves their financial goals through our platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">10k+</h3>
              <p className="text-base-content/70">Active Users</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
              <p className="text-base-content/70">Team Members</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">24/7</h3>
              <p className="text-base-content/70">Customer Support</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">3</h3>
              <p className="text-base-content/70">Global Offices</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Become part of our community and take control of your finances today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup" className="btn btn-lg bg-white text-primary hover:bg-gray-100">
              Get Started
            </Link>
            <Link href="/careers" className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-primary">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;