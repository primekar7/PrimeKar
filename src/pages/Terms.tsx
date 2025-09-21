import React from 'react';
import { FileText, Scale, AlertCircle, CheckCircle } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-dark-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 fade-in">Terms & Conditions</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto fade-in">
            Please read these terms and conditions carefully before using PrimeKar's services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 fade-in">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <FileText className="h-12 w-12 text-gold-primary mx-auto mb-4" />
              <h3 className="font-bold text-dark-green">Service Terms</h3>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Scale className="h-12 w-12 text-gold-primary mx-auto mb-4" />
              <h3 className="font-bold text-dark-green">Fair Usage</h3>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <AlertCircle className="h-12 w-12 text-gold-primary mx-auto mb-4" />
              <h3 className="font-bold text-dark-green">Responsibilities</h3>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <CheckCircle className="h-12 w-12 text-gold-primary mx-auto mb-4" />
              <h3 className="font-bold text-dark-green">Agreement</h3>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-8 fade-in">
            
            <div>
              <h2 className="text-3xl font-bold text-dark-green mb-4">1. Introduction</h2>
              <p className="text-gray-600">
               Welcome to PrimeKar. </p>
          
               <p className="text-gray-600">These Terms and Conditions govern your use of our premium 
services. By booking with us, you agree to follow these terms.
PrimeKar operates as a luxury transportation service, not a rideshare. All 
bookings are arranged and confirmed through our dispatch team or app
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-dark-green mb-4">2. Booking and Payment</h2>
             
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>All rides must be booked via PrimeKar app.</li>
                <li>Provide accurate trip details, including pickup/drop-off addresses, flight numbers, and special instructions.</li>
                <li>Payment must be made through approved methods (credit card, apple pay, google pay, etc.).</li>
                <li>PrimeKar may cancel bookings if payment is declined or incomplete.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-dark-green mb-4">3. Changes, Cancellations & Refunds</h2>
              
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>All cancellations must be made within the PrimeKar app. Do not cancel via phone or email.</li>
                <li>No-shows or cancellations within 2 hours of pickup: 100% of the fare will be charged.</li>
                <li>Refunds, if applicable, are processed within 7 business days.</li>
                <li>Cancellation fees may change; updates will be communicated in the app.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-dark-green mb-4">4. Flight Tracking and Location</h2>
          
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>You consent to flight tracking and GPS location use to ensure timely pickups.</li>
                <li>Location is tracked only during active rides and stops when your ride ends.</li>
                <li>Flight tracking helps us adjust pickup times for delays or early arrivals.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-dark-green mb-4">5. Waiting Time & Additional Charges</h2>
            
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Flat rates include a 15-minute grace period at pickup.</li>
                <li>Waiting beyond this incurs per-minute charges.</li>
                <li>Additional stops or route changes may result in updated charges.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-dark-green mb-4">6. Conduct & Safety</h2>
            
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Treat drivers and vehicles respectfully.</li>
                <li>Smoking, alcohol, or misuse of vehicles is prohibited.</li>
                <li>PrimeKar may refuse or terminate service for unsafe or illegal behavior.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-dark-green mb-4">7. Limitation of Liability</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>PrimeKar is not liable for delays due to weather, traffic, mechanical issues, or other external events.</li>
                <li>Missed flights or appointments due to external factors are your responsibility.</li>
                <li>Liability is limited to the amount paid for the ride.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-dark-green mb-4">8. Data Privacy & App Usage</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>We collect information including:
                  <ul className="pl-6 text-gray-600">
                    <li>Name, phone, email, payment info</li>
                    <li>Pickup/drop-off addresses, flight numbers, travel times</li>
                    <li>GPS location during active rides</li>
                    <li>Device info (IP address, browser type)</li>
                  </ul>
                </li>
                <li>Data is used to:
                  <ul className="pl-6 text-gray-600">
                    <li>Book and manage rides</li>
                    <li>Track flights for timely pickup</li>
                    <li>Improve service and app functionality</li>
                    <li>Process payments securely</li>
                    <li>Comply with legal obligations and maintain safety</li>
                  </ul>
                </li>
                <li>Data is never sold.</li>
                 <li>We may share info only with:
                  <ul className="pl-6 text-gray-600">
                    <li>Assigned drivers</li>
                    <li>Payment providers (e.g., Stripe)</li>
                    <li>Flight tracking services</li>
                    <li>Regulatory authorities, if required by law</li>
                  </ul>
                </li>
              </ul>
              <p className="text-gray-600">
                You can access, correct, or request deletion of your data in accordance with Canadian privacy laws. 
                Contact support@primekar.com for requests.
              </p>
              
            </div>

            <div>
              <h2 className="text-3xl font-bold text-dark-green mb-4">9. Electronic Communications</h2>
              <p className="text-gray-600">
                By using PrimeKar, you agree to receive electronic communications via the app, email, or SMS regarding:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Ride confirmations</li>
                <li>Dispatch notifications</li>
                <li>Policy updates or promotions</li>
              </ul>
            </div>
             <div>
              <h2 className="text-3xl font-bold text-dark-green mb-4">10. Governing Law</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>These Terms are governed by Alberta law and Canadian federal law.</li>
                <li>Disputes will be handled in the courts of Calgary, Alberta.</li>
              </ul>
            </div>
               <div>
              <h2 className="text-3xl font-bold text-dark-green mb-4">11. Changes to These Terms</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>PrimeKar may update these Terms from time to time.</li>
                <li>Updates will be communicated via the app or website.</li>
                <li>Continued use of the service indicates acceptance of updated Terms.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-dark-green mb-4">12. Contact Information</h2>
              <p className="text-gray-600">
                For questions about these terms and conditions, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600">
                  <strong>Email:</strong> support@primekar.com<br />
                  <strong>Phone:</strong> +1 (403) 370-9700<br />
                  <strong>Address:</strong> Calgary, Alberta, Canada
                </p>
              </div>
            </div>

            <div className="border-t pt-8">
              <p className="text-sm text-gray-500">
                {/* Last updated: January 2025. These terms and conditions are effective immediately 
                and supersede all prior agreements. */}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;