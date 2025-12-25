import { Link } from 'react-router-dom';
import { Recycle, MessageSquare, Star, Send } from 'lucide-react';
import { useState } from 'react';

export default function Feedback() {
  const [rating, setRating] = useState(0);

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
            <div className="bg-blue-100 p-3 rounded-full">
              <MessageSquare className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Share Your Feedback</h1>
              <p className="text-gray-600">Help us improve Smart Swachh</p>
            </div>
          </div>

          <form className="space-y-6">
            {/* Star Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                How would you rate our service? *
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="transition-all"
                  >
                    <Star
                      className={`w-12 h-12 ${
                        star <= rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300 hover:text-yellow-400'
                      }`}
                    />
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <p className="text-sm text-gray-600 mt-2">
                  {rating === 5 && '⭐ Excellent!'}
                  {rating === 4 && '⭐ Very Good!'}
                  {rating === 3 && '⭐ Good'}
                  {rating === 2 && '⭐ Needs Improvement'}
                  {rating === 1 && '⭐ Poor'}
                </p>
              )}
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Feedback Category *
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option value="">Select category</option>
                <option value="app-experience">App Experience</option>
                <option value="collection-service">Collection Service</option>
                <option value="truck-tracking">Truck Tracking</option>
                <option value="customer-support">Customer Support</option>
                <option value="feature-request">Feature Request</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Feedback Text */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Feedback *
              </label>
              <textarea
                rows={6}
                placeholder="Tell us what you think about Smart Swachh..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              ></textarea>
            </div>

            {/* Quick Feedback Options */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Quick Feedback (Optional)
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Easy to use',
                  'Fast service',
                  'Good tracking',
                  'Helpful notifications',
                  'Needs improvement',
                  'More features needed'
                ].map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="text-sm text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Contact Permission */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1"
                />
                <div>
                  <div className="font-medium text-gray-900">
                    I'm happy to be contacted about my feedback
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    This helps us understand your concerns better and provide personalized solutions.
                  </p>
                </div>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Submit Feedback
            </button>
          </form>

          {/* Recent Feedback Stats */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-medium text-gray-900 mb-4">Community Feedback</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-1">4.7</div>
                <div className="text-xs text-gray-600">Avg. Rating</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">2,547</div>
                <div className="text-xs text-gray-600">Total Reviews</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-1">92%</div>
                <div className="text-xs text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
