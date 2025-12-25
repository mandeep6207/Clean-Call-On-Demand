import { Link } from 'react-router-dom';
import { Recycle, User, MapPin, Users, Edit, LogOut, Settings, Bell, Shield } from 'lucide-react';

export default function Profile() {
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 mb-8 text-white">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-green-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">Rajesh Kumar</h1>
              <p className="text-green-100 mb-1">rajesh.kumar@email.com</p>
              <p className="text-green-100">+91 98765 43210</p>
            </div>
            <button className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg transition-colors flex items-center gap-2">
              <Edit className="w-4 h-4" />
              Edit Profile
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <User className="w-5 h-5 text-green-600" />
                  Personal Information
                </h2>
                <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                  Edit
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Full Name</p>
                  <p className="font-medium text-gray-900">Rajesh Kumar</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Age</p>
                  <p className="font-medium text-gray-900">35 years</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Date of Birth</p>
                  <p className="font-medium text-gray-900">15 Aug 1989</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Gender</p>
                  <p className="font-medium text-gray-900">Male</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Contact Number</p>
                  <p className="font-medium text-gray-900">+91 98765 43210</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Education</p>
                  <p className="font-medium text-gray-900">Graduate</p>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Location Details
                </h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Edit
                </button>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Full Address</p>
                  <p className="font-medium text-gray-900">
                    House No. 42, MG Road, Koramangala<br />
                    Bangalore, Karnataka - 560034
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4 pt-3 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Ward Number</p>
                    <p className="font-medium text-gray-900">Ward 23</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Pincode</p>
                    <p className="font-medium text-gray-900">560034</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Police Station</p>
                    <p className="font-medium text-gray-900">Koramangala PS</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Post Office</p>
                    <p className="font-medium text-gray-900">Koramangala SO</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Family Information */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  Family Information
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Number of Family Members</p>
                  <p className="font-medium text-gray-900">4 members</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Your Role</p>
                  <p className="font-medium text-gray-900">Father</p>
                </div>
              </div>
            </div>

            {/* Activity Statistics */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Your Activity</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-1">47</div>
                  <div className="text-sm text-gray-600">Times Marked Ready</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-1">156</div>
                  <div className="text-sm text-gray-600">Days Active</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-1">95%</div>
                  <div className="text-sm text-gray-600">Participation Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3">
                  <Settings className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">Account Settings</span>
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">Notifications</span>
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3">
                  <Shield className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">Privacy & Security</span>
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-50 transition-colors flex items-center gap-3 text-red-600">
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>

            {/* Account Status */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-3">Account Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">Member Since</span>
                  <span className="font-medium">Jan 2024</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">Account Type</span>
                  <span className="font-medium">Citizen</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">Status</span>
                  <span className="px-2 py-1 bg-green-500 rounded text-sm font-medium">Active</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-gray-900 mb-4">Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Active Citizen</p>
                    <p className="text-xs text-gray-600">90+ days participation</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl">⭐</div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Early Adopter</p>
                    <p className="text-xs text-gray-600">Joined in first month</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Consistent</p>
                    <p className="text-xs text-gray-600">95% participation rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
