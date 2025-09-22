import React, { useEffect, useState } from 'react';
import { Download, Shield, Crown, Clock, Headphones } from 'lucide-react';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-dark-green to-green-900 overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Background image simulation */}
        <div className="absolute inset-0 bg-[url(/main.jpg)] bg-cover bg-center"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {/* <span className="text-gold-primary">PrimeKar</span> */}
              <br />
              <br />
              <br />
              <br />
              <span className="text-4xl md:text-5xl">Your Premium Ride.</span>
              <br />
              <span className="text-4xl md:text-5xl">Always On Time.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Premium service for airport transfers, executives, seniors and special occasions.
            </p>
            
            {/* Download App Button */}
            <div className={`mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button className="bg-gold-gradient text-dark-green font-bold py-4 px-8 text-xl rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 shimmer inline-flex items-center">
                <Download className="mr-3 h-6 w-6" />
                Download App
              </button>
            </div>

            {/* App Store Badges */}
            <div className={`flex justify-center space-x-4 mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
                alt="Download on App Store" 
                className="h-12 opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer bg-white p-2 rounded"
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" 
                alt="Get it on Google Play" 
                className="h-12 opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer bg-white p-2 rounded"
              />
            </div>

            {/* Trust Icons */}
            <div className={`flex justify-center space-x-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-gold-primary" />
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Crown className="h-6 w-6 text-gold-primary" />
                <span className="text-sm font-medium">VIP Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-6 w-6 text-gold-primary" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-dark-green mb-4">Why Choose PrimeKar?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experience transportation that exceeds expectations with our premium service.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 fade-in">
              <Crown className="h-12 w-12 text-gold-primary mb-4" />
              <h3 className="text-2xl font-bold text-dark-green mb-4">Premium Fleet</h3>
              <p className="text-gray-600">Our vehicles are meticulously maintained and equipped with premium amenities for your comfort.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 fade-in">
              <Clock className="h-12 w-12 text-gold-primary mb-4" />
              <h3 className="text-2xl font-bold text-dark-green mb-4">Always On Time</h3>
              <p className="text-gray-600">Punctuality is our promise. We ensure you arrive at your destination on schedule, every time.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 fade-in">
              <Headphones className="h-12 w-12 text-gold-primary mb-4" />
              <h3 className="text-2xl font-bold text-dark-green mb-4">24/7 Support</h3>
              <p className="text-gray-600">Our dedicated customer service team is available around the clock to assist with your needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;