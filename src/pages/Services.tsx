import React from 'react';
import { Plane, Briefcase, PartyPopper, PlaneTakeoff, Users, Crown } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Plane,
      title: 'Airport Transfers',
      description: 'Reliable and luxurious transportation to and from Calgary International Airport. Track your flight, meet and greet service.',
      image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Briefcase,
      title: 'Executive Travel',
      description: 'Professional chauffeur service for business executives. Productive, comfortable rides for important meetings.',
      image: 'https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: PartyPopper,
      title: 'Events & Occasions',
      description: 'Make your special moments unforgettable. Perfect for weddings, proms, anniversaries, and celebrations.',
      image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: PlaneTakeoff,
      title: 'Private Jet Service',
      description: 'Seamless ground transportation coordination with private jet services. VIP treatment from start to finish.',
      image: 'https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Users,
      title: 'Group Transport',
      description: 'Spacious luxury vehicles for group events, corporate outings, and family celebrations.',
      image: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Crown,
      title: 'Senior Luxury Rides',
      description: 'Specialized service for seniors with extra care, assistance, and comfort for medical appointments and social visits.',
      image: 'https://images.pexels.com/photos/7176035/pexels-photo-7176035.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-dark-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 fade-in">Our Premium Services</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto fade-in">
            From airport transfers to special occasions, PrimeKar delivers luxury transportation tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-dark-green bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <Icon className="h-8 w-8 text-gold-primary" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-dark-green mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    <div className="mt-4">
                      <button className="text-gold-primary font-semibold hover:text-gold-secondary transition-colors duration-200">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Luxury?</h2>
          <p className="text-xl mb-8 opacity-90">Book your premium ride today and travel in style.</p>
          <button className="bg-gold-gradient text-dark-green font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 shimmer">
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;