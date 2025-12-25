import { Link } from 'react-router-dom';
import { Recycle, AlertCircle, FileText, Send } from 'lucide-react';

export default function Complaint() {
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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-orange-100 p-3 rounded-full">
              <AlertCircle className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">File a Complaint</h1>
              <p className="text-gray-600">We'll address your concern promptly</p>
            </div>
          </div>

          {/* Recent Complaints Summary */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-1">Your Recent Complaints</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• <strong>Missed Pickup</strong> - Resolved on Dec 23, 2024</p>
                  <p>• <strong>Late Collection</strong> - Under Review</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Complaint Type *
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option value="">Select complaint type</option>
                <option value="missed-pickup">Missed Garbage Pickup</option>
                <option value="late-collection">Late Collection</option>
                <option value="incomplete-collection">Incomplete Collection</option>
                <option value="truck-not-arrived">Truck Not Arrived</option>
                <option value="garbage-spillage">Garbage Spillage</option>
                <option value="improper-segregation">Improper Segregation by Collector</option>
                <option value="rude-behavior">Rude Behavior</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                rows={6}
                placeholder="Please provide details about your complaint..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              ></textarea>
              <p className="text-sm text-gray-500 mt-1">Minimum 20 characters</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date of Incident
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Photo (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors cursor-pointer">
                <FileText className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Click to upload evidence</p>
                <p className="text-sm text-gray-500 mt-1">JPG, PNG up to 5MB</p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> Your complaint will be logged automatically and tracked. You'll receive updates via SMS and in-app notifications.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Submit Complaint
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-medium text-gray-900 mb-3">Need Immediate Help?</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Helpline Number</p>
                <p className="font-bold text-gray-900">1800-XXX-XXXX</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Email Support</p>
                <p className="font-bold text-gray-900">support@smartswachh.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
