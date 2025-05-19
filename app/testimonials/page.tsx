'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaStarHalfAlt, FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  image: string;
  rating: number;
  text: string;
  accountType: 'Individual' | 'Family' | 'Team' | 'Business';
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Freelance Designer',
    image: '/testimonials/user1.svg',
    rating: 5,
    text: 'Budget Tracker Pro completely changed how I manage my finances. As a freelancer with irregular income, I needed a solution that could help me plan for taxes and expenses. This app has saved me countless hours and helped me save more than ever before!',
    accountType: 'Individual',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Mother of Three',
    company: 'Household Manager',
    image: '/testimonials/user2.svg',
    rating: 5,
    text: 'The family account features help us coordinate our household budget. My husband and I both have visibility into our finances, and we can set spending limits for our teenagers. Now everyone is on the same page financially, which has reduced a lot of stress!',
    accountType: 'Family',
  },
  {
    id: 3,
    name: 'Robert Miller',
    role: 'CEO',
    company: 'MicroTech Solutions',
    image: '/testimonials/user3.svg',
    rating: 4.5,
    text: 'As a small business, we needed an affordable way to track expenses and manage our budget. Budget Tracker Pro offers the perfect balance of features and simplicity. Our team can now submit expenses on the go, and I have complete visibility into our financial health.',
    accountType: 'Business',
  },
  {
    id: 4,
    name: 'Amanda Chen',
    role: 'Project Manager',
    company: 'Marketing Collective',
    image: '/testimonials/user4.svg',
    rating: 5,
    text: 'Our marketing team uses Budget Tracker Pro to manage campaign budgets across multiple projects. The collaborative features and detailed reporting have made it easy to stay within budget and show our clients exactly how their money is being spent.',
    accountType: 'Team',
  },
  {
    id: 5,
    name: 'David Williams',
    role: 'Financial Advisor',
    company: 'Prosperity Partners',
    image: '/testimonials/user5.svg',
    rating: 5,
    text: "I actually recommend Budget Tracker Pro to my clients who need help getting control of their spending. The intuitive interface and comprehensive reports make it easy for anyone to understand their finances, regardless of their financial literacy level.",
    accountType: 'Individual',
  },
  {
    id: 6,
    name: 'Maria Rodriguez',
    role: 'Restaurant Owner',
    company: 'Taste of Home',
    image: '/testimonials/user6.svg',
    rating: 4.5,
    text: 'Running a restaurant with thin margins means every dollar counts. Budget Tracker Pro helps me track ingredient costs, payroll, and other expenses so I can identify areas to improve profitability. It has been invaluable to the growth of my business.',
    accountType: 'Business',
  },
];

const TestimonialsPage = () => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-warning" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="text-warning" />);
    }

    return <div className="flex gap-1">{stars}</div>;
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="bg-base-200 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">What Our Users Say</h1>
            <p className="text-xl text-base-content/70 mb-8">
              Real stories from people and businesses who've transformed their financial management with Budget Tracker Pro.
            </p>
            <div className="flex justify-center">
              <div className="stats bg-base-100 shadow">
                <div className="stat place-items-center">
                  <div className="stat-title">Happy Users</div>
                  <div className="stat-value text-primary">10k+</div>
                </div>
                <div className="stat place-items-center">
                  <div className="stat-title">Reviews</div>
                  <div className="stat-value text-primary">4.8/5</div>
                </div>
                <div className="stat place-items-center">
                  <div className="stat-title">Satisfaction</div>
                  <div className="stat-value text-primary">98%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn btn-primary">All Reviews</button>
            <button className="btn btn-outline">Individual</button>
            <button className="btn btn-outline">Family</button>
            <button className="btn btn-outline">Team</button>
            <button className="btn btn-outline">Business</button>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
                <div className="card-body">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="avatar">
                      <div className="w-16 h-16 rounded-full bg-primary text-primary-content flex items-center justify-center text-xl font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-sm opacity-70">
                        {testimonial.role}
                        {testimonial.company && ` @ ${testimonial.company}`}
                      </p>
                      <div className="badge badge-primary badge-sm mt-1">
                        {testimonial.accountType}
                      </div>
                    </div>
                  </div>
                  
                  {renderStars(testimonial.rating)}
                  
                  <div className="mt-4 relative">
                    <FaQuoteLeft className="absolute -left-2 -top-2 text-primary opacity-20 text-4xl" />
                    <p className="pl-6 text-base-content/80">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Video Testimonials</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card bg-base-100 shadow-lg">
              <div className="aspect-video bg-base-300 rounded-t-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="btn btn-circle btn-lg btn-primary">▶</div>
                  <p className="mt-4">Video Testimonial - Sarah's Family Success</p>
                </div>
              </div>
              <div className="card-body">
                <h3 className="card-title">How a Family of Five Saved $12,000</h3>
                <p>Sarah shares how her family used Budget Tracker Pro to identify wasteful spending and save for their dream vacation.</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-lg">
              <div className="aspect-video bg-base-300 rounded-t-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="btn btn-circle btn-lg btn-primary">▶</div>
                  <p className="mt-4">Video Testimonial - Robert's Business Journey</p>
                </div>
              </div>
              <div className="card-body">
                <h3 className="card-title">Growing a Business with Smart Financial Tracking</h3>
                <p>Robert explains how Budget Tracker Pro helped his startup manage cash flow during critical growth phases.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Thousands of Satisfied Users</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the benefits of Budget Tracker Pro for yourself. Start your free trial today and see why our users love our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup" className="btn btn-lg bg-white text-primary hover:bg-gray-100">
              Start Free Trial
            </Link>
            <Link href="/features" className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-primary">
              View Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;