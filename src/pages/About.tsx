import React from 'react';
import { Crown, Shield, Users, Award, Heart, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Crown,
      title: 'Excellence',
      description: 'We strive for perfection in every ride, ensuring the highest standards of luxury and service.'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Your safety and security are our top priorities. Licensed, insured, and background-checked drivers.'
    },
    {
      icon: Users,
      title: 'Service',
      description: 'Personalized attention to detail that makes every journey comfortable and memorable.'
    },
    {
      icon: Award,
      title: 'Reliability',
      description: 'Punctual, professional service you can count on for your most important occasions.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-dark-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 fade-in">About PrimeKar</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto fade-in">
              Calgary's premier luxury limousine service, dedicated to providing world-class transportation 
              for executives, VIPs, and special occasions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-dark-green mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  PrimeKar was founded with a simple vision: to provide Calgary with the finest luxury 
                  transportation service that combines elegance, reliability, and exceptional customer care. 
                  We understand that every journey matters, whether it's a crucial business meeting, 
                  a special celebration, or a relaxing trip to the airport.
                </p>
                <p>
                  Our commitment goes beyond just transportation. We create experiences. Every vehicle in 
                  our premium fleet is meticulously maintained, every chauffeur is professionally trained, 
                  and every detail is carefully planned to ensure your complete satisfaction.
                </p>
                <p>
                  <strong>No hidden surprises, just world-class travel.</strong> This isn't just our motto — 
                  it's our promise to you. When you choose PrimeKar, you\'re choosing peace of mind, luxury, 
                  and a service that truly understands the value of your time and comfort.
                </p>
              </div>
            </div>
            <div className="fade-in">
              <img
                src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury limousine"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-green mb-4 fade-in">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in">
              The principles that guide everything we do and shape every experience we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="h-12 w-12 text-gold-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-dark-green mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-dark-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 fade-in">Why Calgary Chooses PrimeKar</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {/* <div className="fade-in">
              <div className="text-4xl font-bold text-gold-primary mb-2">5+</div>
              <div className="text-lg">Years of Excellence</div>
            </div> */}
            {/* <div className="fade-in">
              <div className="text-4xl font-bold text-gold-primary mb-2">10,000+</div>
              <div className="text-lg">Satisfied Clients</div>
            </div>
            <div className="fade-in">
              <div className="text-4xl font-bold text-gold-primary mb-2">24/7</div>
              <div className="text-lg">Service Available</div>
            </div>
            <div className="fade-in">
              <div className="text-4xl font-bold text-gold-primary mb-2">100%</div>
              <div className="text-lg">Customer Satisfaction</div>
            </div>
          </div> */}
        {/* </div> */}
      {/* </section> */} */

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark-green mb-4 fade-in">Proudly Serving Calgary</h2>
            <p className="text-xl text-gray-600 fade-in">
              Based in the heart of Calgary, we're your local luxury transportation specialists.
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-4 text-lg text-gray-600 fade-in">
            <MapPin className="h-6 w-6 text-gold-primary" />
            <span>Calgary, Alberta, Canada</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;