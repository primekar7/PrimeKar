import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-dark-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 fade-in">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto fade-in">
            Ready to experience luxury transportation? Get in touch with our team for bookings, 
            questions, or to learn more about our premium services.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-dark-green mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-gold-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-dark-green text-lg">Phone</h3>
                    <p className="text-gray-600">+1 (403) 370-9700</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-gold-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-dark-green text-lg">Email</h3>
                    <p className="text-gray-600">support@primekar.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-gold-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-dark-green text-lg">Location</h3>
                    <p className="text-gray-600">Calgary, Alberta</p>
                    <p className="text-gray-600">Serving Greater Calgary Area</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-gold-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-dark-green text-lg">Hours</h3>
                    <p className="text-gray-600">24/7 Service Available</p>
                    <p className="text-gray-600">Customer Support: 6 AM - 11 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
                <h3 className="font-bold text-dark-green text-lg mb-3">Quick Booking</h3>
                <p className="text-gray-600 mb-4">For immediate bookings, call us directly or use our mobile app.</p>
                <button className="bg-gold-gradient text-dark-green font-bold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 shimmer">
                  Download App
                </button>
              </div>
            </div>

            {/* Contact Form */}
            {/* <div className="fade-in">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-dark-green mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-all duration-200"
                      placeholder="How can we help you today?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold-gradient text-dark-green font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 shimmer"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark-green mb-4 fade-in">Our Service Area</h2>
            <p className="text-xl text-gray-600 fade-in">Serving Calgary and surrounding areas</p>
          </div>
          
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center fade-in">
            {/* Placeholder for map */}
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gold-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-dark-green mb-2">Calgary, Alberta</h3>
              <p className="text-gray-600">Interactive map integration available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;