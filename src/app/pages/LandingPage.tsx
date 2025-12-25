import { Link } from 'react-router-dom';
import { Truck, Users, MapPin, CheckCircle, Leaf, Recycle, AlertCircle, BarChart } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Recycle className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">Smart Swachh</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#home" className="text-gray-700 hover:text-green-600">Home</a>
              <a href="#about" className="text-gray-700 hover:text-green-600">About</a>
              <a href="#features" className="text-gray-700 hover:text-green-600">Features</a>
              <Link to="/dashboard" className="text-gray-700 hover:text-green-600">Dashboard</Link>
              <a href="#contact" className="text-gray-700 hover:text-green-600">Contact</a>
            </nav>
            <Link
              to="/login"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Garbage Collection, When Your Ward is Actually Ready.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A community-driven system that schedules garbage pickup based on real demand instead of random timing.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/signup"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors text-lg font-medium"
                >
                  Get Started
                </Link>
                <Link
                  to="/dashboard"
                  className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors text-lg font-medium"
                >
                  View Live Dashboard
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 shadow-xl">
                <Truck className="w-full h-64 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Key Features</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Smart solutions for efficient waste management
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ward-based Voting</h3>
              <p className="text-gray-600">
                Residents mark when their garbage is ready for collection, ensuring efficient pickup.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Scheduling</h3>
              <p className="text-gray-600">
                AI-driven threshold system automatically schedules truck dispatch when optimal.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Live Tracking</h3>
              <p className="text-gray-600">
                Track garbage trucks in real-time like a delivery app, with notifications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-600">
                Complete accountability with missed pickup tracking and health scores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Live Statistics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <Users className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <div className="text-5xl font-bold text-gray-900 mb-2">25,847</div>
              <div className="text-lg text-gray-600">Registered Citizens</div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <div className="text-5xl font-bold text-gray-900 mb-2">142</div>
              <div className="text-lg text-gray-600">Active Wards</div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <BarChart className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <div className="text-5xl font-bold text-gray-900 mb-2">87.5</div>
              <div className="text-lg text-gray-600">Avg. Cleanliness Score</div>
            </div>
          </div>
        </div>
      </section>

      {/* Swachh Bharat Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Leaf className="w-24 h-24 mb-6" />
              <h2 className="text-4xl font-bold mb-6">Clean India, Green India</h2>
              <p className="text-lg mb-4 text-green-50">
                Smart Swachh is aligned with the Swachh Bharat Abhiyan, empowering citizens to take charge of their community's cleanliness.
              </p>
              <p className="text-lg mb-4 text-green-50">
                Proper waste management is crucial for public health, environmental sustainability, and building smarter, cleaner cities.
              </p>
              <p className="text-lg text-green-50">
                Citizen participation transforms waste collection from a burden into an efficient, transparent system that benefits everyone.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Why It Matters</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>Reduces environmental pollution and health hazards</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>Optimizes municipal resources and reduces costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>Creates data-driven insights for city planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>Empowers communities through transparency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Recycle className="w-8 h-8 text-green-400" />
                <span className="text-2xl font-bold text-white">Smart Swachh</span>
              </div>
              <p className="text-gray-400">
                A civic-tech initiative for cleaner Indian cities.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-green-400">Home</Link></li>
                <li><Link to="/about" className="hover:text-green-400">About</Link></li>
                <li><Link to="/dashboard" className="hover:text-green-400">Dashboard</Link></li>
                <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Technology Stack</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Powered by Google Firebase</p>
                <p>Data Analytics via Google Sheets</p>
                <p>Maps powered by Google Maps</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© 2024 Smart Swachh. Built for Swachh Bharat Abhiy an.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
