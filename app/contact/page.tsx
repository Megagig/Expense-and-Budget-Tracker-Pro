'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    // Show success state for 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="bg-base-200 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-base-content/70 mb-8">
              We're here to help! Reach out with questions, feedback, or support needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="card bg-base-200 shadow-md hover:shadow-lg transition-shadow">
              <div className="card-body items-center text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FaPhone className="text-primary text-xl" />
                </div>
                <h3 className="card-title">Call Us</h3>
                <p className="text-base-content/70">+1 (123) 456-7890</p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-md hover:shadow-lg transition-shadow">
              <div className="card-body items-center text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FaEnvelope className="text-primary text-xl" />
                </div>
                <h3 className="card-title">Email Us</h3>
                <p className="text-base-content/70">support@budgettrackerpro.com</p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-md hover:shadow-lg transition-shadow">
              <div className="card-body items-center text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                </div>
                <h3 className="card-title">Location</h3>
                <p className="text-base-content/70">123 Finance Street, Money City, MC 12345</p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-md hover:shadow-lg transition-shadow">
              <div className="card-body items-center text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FaClock className="text-primary text-xl" />
                </div>
                <h3 className="card-title">Office Hours</h3>
                <p className="text-base-content/70">Mon-Fri: 9AM - 6PM EST</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="alert alert-success">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Your message has been sent successfully! We'll get back to you soon.</span>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input input-bordered w-full" 
                        placeholder="Your name" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input input-bordered w-full" 
                        placeholder="your.email@example.com" 
                        required 
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="input input-bordered w-full" 
                      placeholder="How can we help you?" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4} 
                      className="textarea textarea-bordered w-full h-32" 
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              )}
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">FAQ</h2>
              <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="contact-faq" defaultChecked /> 
                  <div className="collapse-title text-xl font-medium">
                    How quickly will I receive a response?
                  </div>
                  <div className="collapse-content"> 
                    <p>We strive to respond to all inquiries within 24 hours during business days. For urgent matters, we recommend calling our support line.</p>
                  </div>
                </div>
                
                <div className="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="contact-faq" /> 
                  <div className="collapse-title text-xl font-medium">
                    Do you offer technical support by phone?
                  </div>
                  <div className="collapse-content"> 
                    <p>Yes, we offer phone support for all premium subscribers. Free users can access phone support for urgent account issues.</p>
                  </div>
                </div>
                
                <div className="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="contact-faq" /> 
                  <div className="collapse-title text-xl font-medium">
                    Can I schedule a demo of the platform?
                  </div>
                  <div className="collapse-content"> 
                    <p>Absolutely! You can schedule a personalized demo with one of our product specialists by selecting "Request Demo" in the subject line of your message.</p>
                  </div>
                </div>
                
                <div className="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="contact-faq" /> 
                  <div className="collapse-title text-xl font-medium">
                    How do I report a bug or issue?
                  </div>
                  <div className="collapse-content"> 
                    <p>Please include details about the issue, steps to reproduce it, and your device/browser information when reporting bugs. Screenshots are always helpful!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="w-full h-64 bg-base-300 rounded-lg flex items-center justify-center">
            <p className="text-base-content/60">Interactive Map Would Be Displayed Here</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Immediate Help?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Check out our comprehensive help center with guides, tutorials, and FAQs.
          </p>
          <Link href="/help" className="btn btn-lg bg-white text-primary hover:bg-gray-100">
            Visit Help Center
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;