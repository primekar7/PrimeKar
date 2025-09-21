import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Crown, Shield, Clock, Headphones, Download } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage 
          ? 'bg-dark-green shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/primekarhalf.jpg" 
                alt="PrimeKar Logo" 
                className="h-14 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="text-white hover:text-gold-primary transition-colors duration-200">Home</Link>
                <Link to="/services" className="text-white hover:text-gold-primary transition-colors duration-200">Services</Link>
                <Link to="/corporate" className="text-white hover:text-gold-primary transition-colors duration-200">Corporate</Link>
                <Link to="/about" className="text-white hover:text-gold-primary transition-colors duration-200">About</Link>
                <Link to="/contact" className="text-white hover:text-gold-primary transition-colors duration-200">Contact</Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gold-primary transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-green">
              <Link to="/" className="block px-3 py-2 text-white hover:text-gold-primary transition-colors duration-200">Home</Link>
              <Link to="/services" className="block px-3 py-2 text-white hover:text-gold-primary transition-colors duration-200">Services</Link>
              <Link to="/corporate" className="block px-3 py-2 text-white hover:text-gold-primary transition-colors duration-200">Corporate</Link>
              <Link to="/about" className="block px-3 py-2 text-white hover:text-gold-primary transition-colors duration-200">About</Link>
              <Link to="/contact" className="block px-3 py-2 text-white hover:text-gold-primary transition-colors duration-200">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Mobile Sticky Download Button */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <button className="w-full bg-gold-gradient text-dark-green font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 shimmer">
          <Download className="inline-block w-5 h-5 mr-2" />
          Download App
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-dark-green text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img 
                src="/primekarhalf.jpg" 
                alt="PrimeKar Logo" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-300 mb-4">Calgary's premium limousine service for luxury transportation.</p>
              <div className="flex space-x-4 text-sm">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1 text-gold-primary" />
                  <span>Licensed</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-gold-primary" />
                  <span>24/7</span>
                </div>
                <div className="flex items-center">
                  <Headphones className="h-4 w-4 mr-1 text-gold-primary" />
                  <span>Support</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Airport Transfers</li>
                <li>Executive Travel</li>
                <li>Events & Occasions</li>
                <li>Corporate Accounts</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/about" className="hover:text-gold-primary transition-colors duration-200">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-gold-primary transition-colors duration-200">Contact</Link></li>
                <li><Link to="/corporate" className="hover:text-gold-primary transition-colors duration-200">Corporate</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/privacy" className="hover:text-gold-primary transition-colors duration-200">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-gold-primary transition-colors duration-200">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PrimeKar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;