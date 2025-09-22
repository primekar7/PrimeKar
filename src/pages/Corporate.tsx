import React, { useState } from 'react';
import { Building, Users, Clock, Shield, TrendingUp, Award } from 'lucide-react';

const Corporate: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
  };

  const benefits = [
    {
      icon: Building,
      title: 'Dedicated Account Manager',
      description: 'Personal point of contact for all your transportation needs and requirements.'
    },
    {
      icon: TrendingUp,
      title: 'Flexible Invoicing',
      description: 'Monthly billing with detailed reports and expense tracking for easy accounting.'
    },
    {
      icon: Clock,
      title: 'Priority Pickups',
      description: 'Guaranteed availability and priority booking for your executive team.'
    },
    {
      icon: Shield,
      title: 'Corporate Rates',
      description: 'Competitive pricing with volume discounts for frequent business travel.'
    },
    {
      icon: Users,
      title: 'Team Management',
      description: 'Manage multiple executives and departments through a single corporate account.'
    },
    {
      icon: Award,
      title: 'SLA Guarantees',
      description: 'Service level agreements ensuring punctuality and professional standards.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-dark-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 fade-in">Corporate Accounts</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto fade-in">
              Streamline your company's transportation needs with PrimeKar's corporate solutions. 
              Professional service, dedicated support, and flexible billing.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-green mb-4 fade-in">Why Choose Corporate Accounts?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in">
              Enjoy exclusive benefits designed for businesses that value efficiency, reliability, and premium service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="h-12 w-12 text-gold-primary mb-4" />
                  <h3 className="text-2xl font-bold text-dark-green mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark-green mb-4">Get Started Today</h2>
            <p className="text-xl text-gray-600">
              Ready to set up your corporate account? Fill out the form below and our team will contact you within 24 hours.
            </p>
          </div> */}

          {/* <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all duration-200"
                    placeholder="ABC Corporation"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all duration-200"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all duration-200"
                    placeholder="+1 (403) 555-0123"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all duration-200"
                  placeholder="Tell us about your transportation needs..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gold-gradient text-dark-green font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 shimmer"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Corporate;