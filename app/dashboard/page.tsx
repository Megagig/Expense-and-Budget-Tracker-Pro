'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { FaWallet, FaChartLine, FaArrowUp, FaArrowDown, FaCalendarAlt } from 'react-icons/fa';

const DashboardPage = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <div className="min-h-screen bg-base-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Welcome, {session.user.name || 'User'}</h1>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title">Total Balance</h2>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FaWallet className="text-primary text-xl" />
                </div>
              </div>
              <p className="text-3xl font-bold mt-2">$4,250.68</p>
              <p className="text-sm opacity-70">Updated 2 hours ago</p>
            </div>
          </div>
          
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title">Monthly Income</h2>
                <div className="p-3 bg-success/10 rounded-lg">
                  <FaArrowUp className="text-success text-xl" />
                </div>
              </div>
              <p className="text-3xl font-bold mt-2">$3,850.00</p>
              <p className="text-sm opacity-70">+12% from last month</p>
            </div>
          </div>
          
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title">Monthly Expenses</h2>
                <div className="p-3 bg-error/10 rounded-lg">
                  <FaArrowDown className="text-error text-xl" />
                </div>
              </div>
              <p className="text-3xl font-bold mt-2">$2,640.25</p>
              <p className="text-sm opacity-70">-5% from last month</p>
            </div>
          </div>
          
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title">Budget Status</h2>
                <div className="p-3 bg-info/10 rounded-lg">
                  <FaChartLine className="text-info text-xl" />
                </div>
              </div>
              <p className="text-3xl font-bold mt-2">68%</p>
              <p className="text-sm opacity-70">Of monthly budget used</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Transactions */}
          <div className="card bg-base-200 shadow-md lg:col-span-2">
            <div className="card-body">
              <div className="flex justify-between items-center mb-4">
                <h2 className="card-title">Recent Transactions</h2>
                <button className="btn btn-sm btn-ghost">View All</button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Category</th>
                      <th>Date</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Grocery Shopping</td>
                      <td>Food</td>
                      <td>Today</td>
                      <td className="text-error">-$85.20</td>
                    </tr>
                    <tr>
                      <td>Salary Deposit</td>
                      <td>Income</td>
                      <td>Yesterday</td>
                      <td className="text-success">+$3,200.00</td>
                    </tr>
                    <tr>
                      <td>Electric Bill</td>
                      <td>Utilities</td>
                      <td>Jun 15, 2023</td>
                      <td className="text-error">-$145.30</td>
                    </tr>
                    <tr>
                      <td>Freelance Payment</td>
                      <td>Income</td>
                      <td>Jun 14, 2023</td>
                      <td className="text-success">+$650.00</td>
                    </tr>
                    <tr>
                      <td>Restaurant Dinner</td>
                      <td>Food</td>
                      <td>Jun 12, 2023</td>
                      <td className="text-error">-$78.50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Upcoming Bills */}
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <div className="flex justify-between items-center mb-4">
                <h2 className="card-title">Upcoming Bills</h2>
                <button className="btn btn-sm btn-ghost">View All</button>
              </div>
              
              <ul className="space-y-4">
                <li className="flex justify-between items-center p-3 bg-base-100 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-md">
                      <FaCalendarAlt className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Rent Payment</p>
                      <p className="text-sm opacity-70">Due in 5 days</p>
                    </div>
                  </div>
                  <span className="font-bold">$1,200.00</span>
                </li>
                
                <li className="flex justify-between items-center p-3 bg-base-100 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-md">
                      <FaCalendarAlt className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Internet Bill</p>
                      <p className="text-sm opacity-70">Due in 8 days</p>
                    </div>
                  </div>
                  <span className="font-bold">$65.99</span>
                </li>
                
                <li className="flex justify-between items-center p-3 bg-base-100 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-md">
                      <FaCalendarAlt className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Credit Card</p>
                      <p className="text-sm opacity-70">Due in 12 days</p>
                    </div>
                  </div>
                  <span className="font-bold">$850.75</span>
                </li>
                
                <li className="flex justify-between items-center p-3 bg-base-100 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-md">
                      <FaCalendarAlt className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone Bill</p>
                      <p className="text-sm opacity-70">Due in 15 days</p>
                    </div>
                  </div>
                  <span className="font-bold">$45.00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;