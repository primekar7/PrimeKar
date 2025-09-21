import React from 'react';
import { Shield, Eye, Lock, FileText } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-dark-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 fade-in">Privacy Policy</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto fade-in">
           PrimeKar Corp. (“PrimeKar”, “we”, “our”, or “us”) is committed to protecting 
          your privacy. This policy explains how we collect, use, store, and share 
          personal information for customers, drivers, and corporate clients using our 
          app, website, and transportation services
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none fade-in">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Shield className="h-12 w-12 text-gold-primary mx-auto mb-4" />
                <h3 className="font-bold text-dark-green">Data Protection</h3>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Eye className="h-12 w-12 text-gold-primary mx-auto mb-4" />
                <h3 className="font-bold text-dark-green">Transparency</h3>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Lock className="h-12 w-12 text-gold-primary mx-auto mb-4" />
                <h3 className="font-bold text-dark-green">Security</h3>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <FileText className="h-12 w-12 text-gold-primary mx-auto mb-4" />
                <h3 className="font-bold text-dark-green">Compliance</h3>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-dark-green mb-4">Who This Policy Covers</h2>
                <p className="text-gray-600 mb-4">
                  This policy applies to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Customers / Passengers- individuals booking rides via the app, website, or corporate account.</li>
                  <li>Drivers / Independent Contractors- individuals providing rides through PrimeKar.</li>
                  <li>Corporate / B2B Clients- companies using PrimeKar services for employees, VIPs, or events.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-dark-green mb-4"> Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                  A. Customers / Passengers
                </p>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Name, phone number, email, billing/payment info.</li>
                  <li>Ride details: pickup/drop-off locations, flight info, special requests.</li>
                  <li>App usage: device type, operating system, IP address, app logs, crash reports.</li>
                  <li>Location during rides for accurate pick-ups and route optimization.</li><br></br>
                </ul>
                <p className="text-gray-600 mb-4">
                  B. Drivers / Independent Contractors
                </p>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Name, phone number, email, driver’s license, vehicle registration, insurance.</li>
                  <li>Ride assignments, trip logs, ratings/feedback.</li>
                  <li>Device info and app usage logs for operational purposes.</li><br></br>
                </ul>
                <p className="text-gray-600 mb-4">
                  C. Corporate / B2B Clients
                </p>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Company name, contact info, account administrators.</li>
                  <li>Booking histories, passenger lists, invoices.</li>
                  <li>Special requirements for VIP transport, events, or subscriptions.</li><br></br>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-dark-green mb-4"> How We Use Your Information</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Service delivery: schedule rides, assign drivers, track flights, and coordinate corporate bookings.</li>
                  <li>Payment & billing: process fares, invoices, and driver payouts.</li>
                  <li>Safety & compliance: ensure safety, monitor service quality, and comply with laws.</li>
                  <li>Communication: send ride confirmations, receipts, and service updates.</li>
                  <li>Operational analytics: optimize routes, app performance, and service efficiency.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-dark-green mb-4"> Legal Basis (Canada)</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Processing is necessary for service delivery, payment processing, and legal compliance.</li>
                  <li>Data may also be processed for legitimate business interests, like fraud prevention and service improvement.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-dark-green mb-4">Sharing & Disclosure</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Third-party service providers: payment processors, mapping and flight tracking, IT services.</li>
                  <li>Regulatory authorities: when legally required or to protect safety and rights.</li>
                  <li>Corporate clients: only relevant passenger info for group transport or VIP services.</li>
                  <li>Internal operations: drivers and staff access only the information required for their role.</li>
                </ul>
              </div>
               <div>
                <h2 className="text-3xl font-bold text-dark-green mb-4">Data Retention</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>We keep personal information only as long as necessary for operations, legal compliance, and dispute resolution.</li>
                  <li>Typically retained up to 1 years unless law requires longer.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-dark-green mb-4">Your Rights</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Access & correction: request a copy of your info or correct inaccuracies.</li>
                  <li>Withdrawal of consent: opt out of marketing communications.</li>
                  <li>Privacy complaints: contact PrimeKar or the Office of the Privacy Commissioner of Canada.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-dark-green mb-4"> Security Measures</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Data stored on secure servers, transmitted with encryption.</li>
                  <li>Access limited to authorized personnel.</li>
                  <li>Administrative, technical, and physical safeguards protect your information.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-dark-green mb-4">Minors</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Individuals under 18 cannot create accounts or book rides independently.</li>
                  <li>Any personal data from minors will be deleted promptly if discovered.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-dark-green mb-4">Updates to This Policy</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li> We may update this policy for operational, legal, or regulatory changes.</li>
                  <li>Users will be notified via app notifications or email for significant changes</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-dark-green mb-4">Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy or our privacy practices, 
                  please contact us at:
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
                  {/* Last updated: January 2025. This Privacy Policy may be updated periodically. 
                  We will notify you of any material changes by posting the new Privacy Policy on this page. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;