import { Link } from 'react-router-dom';
import { Recycle, Target, Eye, Award, Users, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <Recycle className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">Smart Swachh</span>
            </Link>
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Smart Swachh</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A revolutionary civic-tech solution transforming waste management in Indian cities through community participation and smart technology.
          </p>
        </div>

        {/* Problem Statement */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h2>
          <div className="space-y-3 text-gray-700">
            <p>
              • Traditional garbage collection follows fixed schedules, often arriving when wards aren't ready or missing areas that need service.
            </p>
            <p>
              • Municipal resources are wasted on unnecessary trips while some areas remain underserved.
            </p>
            <p>
              • Citizens have no transparency or control over collection schedules.
            </p>
            <p>
              • Lack of accountability leads to missed pickups and unsanitary conditions.
            </p>
          </div>
        </div>

        {/* Solution */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Smart Swachh implements a <strong>demand-driven collection system</strong> where citizens mark when their garbage is ready. The platform:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">📊 Smart Scheduling</h4>
                <p className="text-sm text-gray-600">
                  AI algorithms dispatch trucks when 80% of ward households mark garbage as ready.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">🗺️ Live Tracking</h4>
                <p className="text-sm text-gray-600">
                  Real-time truck tracking with notifications, similar to food delivery apps.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">📈 Data Analytics</h4>
                <p className="text-sm text-gray-600">
                  Ward health scores and participation metrics drive continuous improvement.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">✓ Accountability</h4>
                <p className="text-sm text-gray-600">
                  Automatic logging of missed pickups ensures transparency and follow-up.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700">
              To create India's most efficient and transparent waste management ecosystem through citizen participation, data-driven insights, and smart technology.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-8 h-8 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700">
              A cleaner, greener India where every citizen actively contributes to urban sanitation through accessible digital platforms aligned with Swachh Bharat Abhiyan.
            </p>
          </div>
        </div>

        {/* Impact */}
        <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Projected Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">40%</div>
              <div className="text-green-100">Cost Reduction</div>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">10M+</div>
              <div className="text-green-100">Citizens Served</div>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-green-100">Cities Covered</div>
            </div>
          </div>
        </div>

        {/* Technology */}
        <div className="bg-gray-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Backend</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Google Firebase (Auth & Database)</li>
                <li>• Google Sheets (Analytics)</li>
                <li>• Cloud Functions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Frontend</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• React.js PWA</li>
                <li>• Google Maps API</li>
                <li>• Real-time Notifications</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">AI/ML</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Predictive Scheduling</li>
                <li>• Route Optimization</li>
                <li>• Pattern Recognition</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/signup"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium text-lg"
          >
            Join Smart Swachh Today
          </Link>
        </div>
      </div>
    </div>
  );
}
