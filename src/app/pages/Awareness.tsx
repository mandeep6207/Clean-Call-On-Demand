import { Link } from 'react-router-dom';
import { Recycle, Leaf, CheckCircle, Users, TrendingUp, Heart } from 'lucide-react';

export default function Awareness() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto py-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <Recycle className="w-10 h-10 text-green-600" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Clean India, Green India</h2>
              <p className="text-gray-600">Step 3 of 3 - Swachh Bharat Awareness</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-green-600">Personal</span>
              <span className="text-sm font-medium text-green-600">Location</span>
              <span className="text-sm font-medium text-green-600">Awareness</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-green-600 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 mb-8 text-white">
            <div className="flex items-center justify-center mb-6">
              <Leaf className="w-32 h-32 opacity-20 absolute" />
              <Leaf className="w-24 h-24" />
            </div>
            <h3 className="text-3xl font-bold text-center mb-4">Swachh Bharat Abhiyan</h3>
            <p className="text-center text-lg text-green-50">
              Join millions of Indians in making our nation cleaner and greener
            </p>
          </div>

          {/* Why Waste Segregation Matters */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Waste Segregation is Important</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Environmental Protection</h4>
                    <p className="text-sm text-gray-600">
                      Proper segregation reduces landfill waste and prevents soil and water contamination.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Recycle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Resource Recovery</h4>
                    <p className="text-sm text-gray-600">
                      Recyclable materials can be recovered and reused, saving natural resources.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Public Health</h4>
                    <p className="text-sm text-gray-600">
                      Reduces breeding grounds for disease-carrying pests and improves sanitation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Cost Efficiency</h4>
                    <p className="text-sm text-gray-600">
                      Reduces municipal costs and creates jobs in the recycling sector.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Role of Citizens */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Role of Citizens in Smart Cities</h3>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <Users className="w-12 h-12 text-blue-600 flex-shrink-0" />
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Active Participation:</strong> Citizens are not just beneficiaries but active contributors to urban cleanliness.
                  </p>
                  <p className="text-gray-700">
                    <strong>Data-Driven Decisions:</strong> Your input helps optimize collection routes and schedules, making the system more efficient.
                  </p>
                  <p className="text-gray-700">
                    <strong>Community Accountability:</strong> Transparency in the system ensures everyone takes responsibility for their neighborhood.
                  </p>
                  <p className="text-gray-700">
                    <strong>Smart Technology Adoption:</strong> Using digital platforms makes waste management more accessible and responsive.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Section */}
          <div className="bg-green-600 text-white p-6 rounded-xl mb-8">
            <h3 className="text-2xl font-bold mb-4">Impact of Community-Driven Systems</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">45%</div>
                <div className="text-green-100">Reduction in Collection Costs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">87%</div>
                <div className="text-green-100">Citizen Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">60%</div>
                <div className="text-green-100">Increase in Segregation</div>
              </div>
            </div>
          </div>

          {/* Commitment */}
          <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-xl mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Your Commitment</h4>
            <div className="space-y-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1" />
                <span className="text-gray-700">
                  I will segregate waste into wet and dry categories at home
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1" />
                <span className="text-gray-700">
                  I will mark garbage as ready only when it needs collection
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1" />
                <span className="text-gray-700">
                  I will participate actively in making my ward cleaner
                </span>
              </label>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Link
              to="/location-details"
              className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium text-center"
            >
              Back
            </Link>
            <Link
              to="/dashboard"
              className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium text-center"
            >
              Proceed to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
