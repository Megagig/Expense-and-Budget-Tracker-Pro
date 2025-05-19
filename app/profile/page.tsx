'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { UserRole } from '@prisma/client';
import { FaUser, FaEnvelope, FaLock, FaUsersCog, FaShieldAlt, FaSave } from 'react-icons/fa';
import Image from 'next/image';

const ProfilePage = () => {
  const { data: session, status, update } = useSession();
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  // Redirect if not logged in
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

  // Initialize form with user data
  useEffect(() => {
    if (session?.user) {
      setFormData({
        name: session.user.name || '',
        email: session.user.email || '',
        role: session.user.role || 'INDIVIDUAL',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    }
  }, [session]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Validate password fields
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      setMessage({ text: 'New passwords do not match', type: 'error' });
      setLoading(false);
      return;
    }

    try {
      // Send update request to API
      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword || undefined,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to update profile');
      }

      // Update session data
      await update({
        ...session,
        user: {
          ...session?.user,
          name: formData.name,
        },
      });

      setMessage({ text: 'Profile updated successfully', type: 'success' });
      
      // Clear password fields
      setFormData(prev => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      }));
    } catch (error: any) {
      setMessage({ text: error.message || 'An error occurred', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="card bg-base-200 shadow-md h-fit">
            <div className="card-body items-center text-center">
              <div className="avatar">
                {session.user.image ? (
                  <div className="w-24 rounded-full">
                    <Image 
                      src={session.user.image} 
                      alt={session.user.name || 'User'} 
                      width={96} 
                      height={96} 
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-full bg-primary text-primary-content flex items-center justify-center text-3xl font-bold">
                    {session.user.name?.[0] || session.user.email?.[0] || 'U'}
                  </div>
                )}
              </div>
              <h2 className="text-xl font-bold mt-4">{session.user.name || 'User'}</h2>
              <p className="text-sm opacity-70">{session.user.email}</p>
              <div className="badge badge-primary mt-2">{session.user.role}</div>
              
              <div className="divider"></div>
              
              <ul className="menu w-full">
                <li className="menu-title">Settings</li>
                <li><a className="active"><FaUser className="mr-2" /> Profile</a></li>
                <li><a><FaShieldAlt className="mr-2" /> Security</a></li>
                <li><a><FaUsersCog className="mr-2" /> Account Type</a></li>
              </ul>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h2 className="card-title mb-4">Edit Profile</h2>
                
                {message && (
                  <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-error'} mb-4`}>
                    <span>{message.text}</span>
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-6">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Full Name</span>
                      </label>
                      <div className="input-group">
                        <span className="input-group-addon bg-base-300 px-3 flex items-center">
                          <FaUser />
                        </span>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="input input-bordered w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email Address</span>
                      </label>
                      <div className="input-group">
                        <span className="input-group-addon bg-base-300 px-3 flex items-center">
                          <FaEnvelope />
                        </span>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          readOnly
                          disabled
                          className="input input-bordered w-full opacity-70"
                        />
                      </div>
                      <label className="label">
                        <span className="label-text-alt text-info">Email cannot be changed</span>
                      </label>
                    </div>
                    
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Account Type</span>
                      </label>
                      <div className="input-group">
                        <span className="input-group-addon bg-base-300 px-3 flex items-center">
                          <FaUsersCog />
                        </span>
                        <select
                          name="role"
                          value={formData.role}
                          disabled
                          className="select select-bordered w-full opacity-70"
                        >
                          <option value="INDIVIDUAL">Individual</option>
                          <option value="FAMILY">Family</option>
                          <option value="TEAM">Team</option>
                          <option value="BUSINESS">Business</option>
                        </select>
                      </div>
                      <label className="label">
                        <span className="label-text-alt text-info">To change account type, contact support</span>
                      </label>
                    </div>
                    
                    <div className="divider">Change Password</div>
                    
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Current Password</span>
                      </label>
                      <div className="input-group">
                        <span className="input-group-addon bg-base-300 px-3 flex items-center">
                          <FaLock />
                        </span>
                        <input
                          type="password"
                          name="currentPassword"
                          value={formData.currentPassword}
                          onChange={handleChange}
                          className="input input-bordered w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">New Password</span>
                      </label>
                      <div className="input-group">
                        <span className="input-group-addon bg-base-300 px-3 flex items-center">
                          <FaLock />
                        </span>
                        <input
                          type="password"
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleChange}
                          className="input input-bordered w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Confirm New Password</span>
                      </label>
                      <div className="input-group">
                        <span className="input-group-addon bg-base-300 px-3 flex items-center">
                          <FaLock />
                        </span>
                        <input
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="input input-bordered w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="form-control mt-4">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                      >
                        {loading ? (
                          <span className="loading loading-spinner"></span>
                        ) : (
                          <>
                            <FaSave className="mr-2" /> Save Changes
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;