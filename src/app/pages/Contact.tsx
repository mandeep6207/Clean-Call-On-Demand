import { Link } from 'react-router-dom';
import { Recycle, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/dashboard" className="flex items-center gap-2">
              <Recycle className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">Smart Swachh</span>
            </Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">We're here to help. Reach out to us anytime.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Phone */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600 mb-3">Mon-Sat: 9 AM - 6 PM</p>
            <p className="text-lg font-medium text-green-600">1800-123-4567</p>
            <p className="text-sm text-gray-500 mt-2">Toll-free nationwide</p>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 mb-3">24/7 support</p>
            <p className="text-lg font-medium text-blue-600">support@smartswachh.in</p>
            <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
          </div>

          {/* Office */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Office</h3>
            <p className="text-gray-600 mb-3">Headquarters</p>
            <p className="text-sm text-gray-700">
              Smart Swachh Tech Pvt Ltd<br />
              Bangalore, Karnataka<br />
              India - 560001
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="">Select subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="media">Media & Press</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  rows={5}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Office Hours</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Emergency Support</h3>
              <div className="space-y-3">
                <p className="text-green-50">
                  For urgent issues related to missed pickups or sanitation emergencies:
                </p>
                <div className="bg-white/20 p-3 rounded-lg">
                  <p className="font-bold text-lg">Emergency Helpline</p>
                  <p className="text-2xl font-bold">1800-SWACHH</p>
                  <p className="text-sm text-green-100 mt-1">Available 24/7</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-start gap-4">
                <MessageCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">WhatsApp Support</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Get quick answers via WhatsApp
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Partnerships & Collaboration</h3>
              <p className="text-sm text-gray-600 mb-3">
                Interested in partnering with Smart Swachh or implementing our solution in your city?
              </p>
              <a
                href="mailto:partnerships@smartswachh.in"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                partnerships@smartswachh.in
              </a>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 bg-white rounded-2xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h2>
          <div className="flex justify-center gap-6">
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'YouTube'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="w-12 h-12 bg-gray-100 hover:bg-green-100 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-xl">{platform[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
