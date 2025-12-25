import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Recycle, Home, FileText, MessageSquare, Phone, User,
  Building2, CheckCircle, TrendingUp, Users, Truck, Bell,
  AlertCircle, MapPin, Database, Map, Sheet
} from 'lucide-react';

export default function Dashboard() {
  const [garbageReady, setGarbageReady] = useState(false);
  const [truckPosition, setTruckPosition] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  // Simulate truck movement
  useEffect(() => {
    const interval = setInterval(() => {
      setTruckPosition((prev) => {
        const next = prev + 1;
        if (next >= 100) return 0;
        if (next === 70) setShowNotification(true);
        if (next > 80) setShowNotification(false);
        return next;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Recycle className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">Smart Swachh</span>
            </div>
            <nav className="hidden md:flex gap-6">
              <Link to="/" className="text-gray-700 hover:text-green-600 flex items-center gap-2">
                <Home className="w-4 h-4" />
                Home
              </Link>
              <Link to="/dashboard" className="text-green-600 font-medium flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Dashboard
              </Link>
              <Link to="/complaint" className="text-gray-700 hover:text-green-600 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Complaints
              </Link>
              <Link to="/feedback" className="text-gray-700 hover:text-green-600 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Feedback
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-green-600 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Contact
              </Link>
            </nav>
            <Link to="/profile" className="flex items-center gap-2 text-gray-700 hover:text-green-600">
              <User className="w-5 h-5" />
              <span className="hidden md:inline">My Profile</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome, Rajesh Kumar!</h1>
          <p className="text-gray-600">Ward 23, Koramangala, Bangalore</p>
        </div>

        {/* Ward Overview Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">324</div>
            <div className="text-gray-600 text-sm">Total Houses</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">287</div>
            <div className="text-gray-600 text-sm">Registered Houses</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">218</div>
            <div className="text-gray-600 text-sm">Garbage Ready Count</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">76%</div>
            <div className="text-gray-600 text-sm">Threshold Progress</div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Primary Action */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white shadow-xl">
              <h2 className="text-2xl font-bold mb-4">Mark Your Garbage Status</h2>
              <p className="text-green-50 mb-6">
                Let us know when your garbage is ready for collection. This helps optimize truck routes!
              </p>
              <button
                onClick={() => setGarbageReady(!garbageReady)}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                  garbageReady
                    ? 'bg-white text-green-600 shadow-lg'
                    : 'bg-green-500 hover:bg-green-400 text-white'
                }`}
              >
                {garbageReady ? (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-6 h-6" />
                    Marked as Ready
                  </span>
                ) : (
                  'My Garbage is Ready'
                )}
              </button>
              {garbageReady && (
                <p className="mt-4 text-sm text-green-100 text-center">
                  ✓ Thank you! We'll dispatch the truck when 80% of your ward is ready.
                </p>
              )}
            </div>

            {/* Threshold Progress */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ward Collection Threshold</h3>
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Current Progress</span>
                  <span className="font-bold text-gray-900">218 / 287 houses (76%)</span>
                </div>
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-500"
                    style={{ width: '76%' }}
                  ></div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>4% to go!</strong> Truck will be dispatched when 80% threshold is reached.
                </p>
              </div>
            </div>

            {/* Live Truck Tracking */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Live Truck Tracking</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Active
                </span>
              </div>

              {/* Map Simulation */}
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-6 mb-4 relative overflow-hidden">
                <div className="flex items-center justify-center h-64 relative">
                  {/* Route Line */}
                  <div className="absolute left-0 top-1/2 w-full h-1 bg-blue-300"></div>

                  {/* Start Point */}
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <div className="bg-green-500 w-4 h-4 rounded-full border-2 border-white shadow"></div>
                    <div className="text-xs text-gray-700 mt-2 whitespace-nowrap">Start</div>
                  </div>

                  {/* End Point */}
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="bg-red-500 w-4 h-4 rounded-full border-2 border-white shadow"></div>
                    <div className="text-xs text-gray-700 mt-2 whitespace-nowrap">End</div>
                  </div>

                  {/* Animated Truck */}
                  <div
                    className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-100"
                    style={{ left: `${truckPosition}%` }}
                  >
                    <div className="relative">
                      <Truck className="w-8 h-8 text-green-600 bg-white p-1 rounded-full shadow-lg" />
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs whitespace-nowrap">
                        Truck #{truckPosition < 50 ? '1' : '2'}
                      </div>
                    </div>
                  </div>

                  {/* Your Location Marker */}
                  <div className="absolute left-2/3 top-1/2 transform -translate-y-1/2">
                    <MapPin className="w-6 h-6 text-red-600 drop-shadow" />
                    <div className="text-xs text-gray-700 mt-1 whitespace-nowrap">Your House</div>
                  </div>
                </div>

                <div className="text-center mt-4">
                  {truckPosition < 60 && (
                    <p className="text-sm text-blue-800 font-medium">🚛 Truck entering your ward...</p>
                  )}
                  {truckPosition >= 60 && truckPosition < 80 && (
                    <p className="text-sm text-orange-800 font-medium">🚛 Truck approaching your location...</p>
                  )}
                  {truckPosition >= 80 && (
                    <p className="text-sm text-green-800 font-medium">✓ Truck completing collection...</p>
                  )}
                </div>
              </div>

              {/* Google Maps Integration Label */}
              <div className="flex items-center gap-2 text-sm text-gray-500 justify-center">
                <Map className="w-4 h-4" />
                <span>Maps powered by Google Maps</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Notification Simulation */}
            {showNotification && (
              <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-green-600 animate-in slide-in-from-right">
                <div className="flex items-start gap-3">
                  <Bell className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Truck Approaching!</h4>
                    <p className="text-sm text-gray-600">
                      Garbage truck is near your location. Please keep your garbage ready.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">Just now</p>
                  </div>
                </div>
              </div>
            )}

            {/* Ward Health Score */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ward Health Score</h3>
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white mb-2">
                  <div>
                    <div className="text-4xl font-bold">89</div>
                    <div className="text-sm">/ 100</div>
                  </div>
                </div>
                <div className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full font-medium mt-2">
                  Good
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Collection Efficiency</span>
                  <span className="font-medium">92%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Participation Rate</span>
                  <span className="font-medium">88%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Segregation Quality</span>
                  <span className="font-medium">85%</span>
                </div>
              </div>
            </div>

            {/* Participation Analytics */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Participation Analytics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Active Households</span>
                    <span className="font-medium">287</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: '88.6%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Inactive Households</span>
                    <span className="font-medium">37</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-400" style={{ width: '11.4%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Missed Pickup Alert */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-red-900 mb-1">Missed Pickup Alert</h4>
                  <p className="text-sm text-red-700">
                    2 houses missed in last collection. Report filed automatically.
                  </p>
                </div>
              </div>
            </div>

            {/* Technology Stack */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Google Technology Stack</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5" />
                  <div>
                    <div className="font-medium">Google Firebase</div>
                    <div className="text-xs text-blue-100">Real-time data sync & auth</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Sheet className="w-5 h-5" />
                  <div>
                    <div className="font-medium">Google Sheets</div>
                    <div className="text-xs text-blue-100">Data analytics & reporting</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Map className="w-5 h-5" />
                  <div>
                    <div className="font-medium">Google Maps</div>
                    <div className="text-xs text-blue-100">Live tracking & routes</div>
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
