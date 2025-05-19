'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaChartLine, FaWallet, FaRegCreditCard, FaRegBell, FaUsers, FaShieldAlt, FaMobileAlt, FaCloudDownloadAlt, FaCog, FaChartBar, FaCalendarAlt, FaHandHoldingUsd } from 'react-icons/fa';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="bg-base-200 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features for Smart Financial Management</h1>
            <p className="text-xl text-base-content/70 mb-8">
              Discover how Budget Tracker Pro can help you take control of your finances with our comprehensive suite of features.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Feature 1 */}
            <div className="bg-base-200 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <FaChartLine className="text-primary text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Expense Tracking</h3>
              <p className="text-base-content/70 mb-4">
                Easily record and categorize all your expenses with our intuitive interface. Add notes, receipts, and tags to keep everything organized.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Real-time expense recording</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Custom categories and tags</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Receipt scanning and attachment</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-base-200 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <FaWallet className="text-primary text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Budget Planning</h3>
              <p className="text-base-content/70 mb-4">
                Create personalized budgets for different categories and track your progress with visual indicators.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Monthly and annual budget planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Category-specific budgets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Budget vs. actual comparison</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-base-200 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <FaRegCreditCard className="text-primary text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Financial Reports</h3>
              <p className="text-base-content/70 mb-4">
                Gain insights into your financial habits with comprehensive reports and visualizations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Spending trend analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Category breakdown charts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Exportable reports (PDF, CSV)</span>
                </li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="bg-base-200 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <FaRegBell className="text-primary text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Bill Reminders</h3>
              <p className="text-base-content/70 mb-4">
                Never miss a payment with automated bill reminders and upcoming expense notifications.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Customizable reminder schedule</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Email and push notifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Recurring bill management</span>
                </li>
              </ul>
            </div>

            {/* Feature 5 */}
            <div className="bg-base-200 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <FaUsers className="text-primary text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Multi-User Access</h3>
              <p className="text-base-content/70 mb-4">
                Share financial management with others while maintaining appropriate access controls.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Role-based permissions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Family account sharing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Team collaboration tools</span>
                </li>
              </ul>
            </div>

            {/* Feature 6 */}
            <div className="bg-base-200 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <FaShieldAlt className="text-primary text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Secure & Private</h3>
              <p className="text-base-content/70 mb-4">
                Your financial data is protected with industry-standard security measures.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>End-to-end encryption</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Two-factor authentication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Regular security audits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Additional Features</h2>
            <p className="text-lg text-base-content/70">
              Explore more ways Budget Tracker Pro helps you manage your finances effectively
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-base-100 rounded-lg shadow-md text-center">
              <FaMobileAlt className="text-primary text-3xl mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Mobile App</h3>
              <p className="text-sm text-base-content/70">Track expenses on the go with our mobile apps</p>
            </div>

            <div className="p-6 bg-base-100 rounded-lg shadow-md text-center">
              <FaCloudDownloadAlt className="text-primary text-3xl mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Data Import</h3>
              <p className="text-sm text-base-content/70">Import transactions from banks and financial institutions</p>
            </div>

            <div className="p-6 bg-base-100 rounded-lg shadow-md text-center">
              <FaCog className="text-primary text-3xl mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Customization</h3>
              <p className="text-sm text-base-content/70">Personalize your dashboard and reports</p>
            </div>

            <div className="p-6 bg-base-100 rounded-lg shadow-md text-center">
              <FaChartBar className="text-primary text-3xl mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Goal Tracking</h3>
              <p className="text-sm text-base-content/70">Set and monitor your financial goals</p>
            </div>

            <div className="p-6 bg-base-100 rounded-lg shadow-md text-center">
              <FaCalendarAlt className="text-primary text-3xl mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Financial Calendar</h3>
              <p className="text-sm text-base-content/70">View your income and expenses in calendar format</p>
            </div>

            <div className="p-6 bg-base-100 rounded-lg shadow-md text-center">
              <FaHandHoldingUsd className="text-primary text-3xl mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Debt Tracking</h3>
              <p className="text-sm text-base-content/70">Monitor and plan your debt repayment strategy</p>
            </div>

            <div className="p-6 bg-base-100 rounded-lg shadow-md text-center">
              <FaChartLine className="text-primary text-3xl mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Investment Tracking</h3>
              <p className="text-sm text-base-content/70">Keep an eye on your investment performance</p>
            </div>

            <div className="p-6 bg-base-100 rounded-lg shadow-md text-center">
              <FaWallet className="text-primary text-3xl mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Multiple Currencies</h3>
              <p className="text-sm text-base-content/70">Track expenses in different currencies</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience These Features?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Sign up now and start managing your finances more effectively with Budget Tracker Pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup" className="btn btn-lg bg-white text-primary hover:bg-gray-100">
              Start Free Trial
            </Link>
            <Link href="/contact" className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-primary">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;