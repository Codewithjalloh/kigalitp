'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PartnershipDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/landing" className="flex items-center group">
              <div className="h-14 w-14 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-2xl">KT</span>
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Partnership Dashboard</h1>
                <p className="text-sm text-gray-600 font-medium">Kigali Today Ltd</p>
              </div>
            </Link>
            <div className="flex space-x-4">
              <Link
                href="/dashboard/advertising"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-blue-50"
              >
                📢 Advertising
              </Link>
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'overview'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              📊 Overview
            </button>
            <button
              onClick={() => setActiveTab('partnerships')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'partnerships'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              🤝 My Partnerships
            </button>
            <button
              onClick={() => setActiveTab('opportunities')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'opportunities'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              🎯 Opportunities
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'resources'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              📚 Resources
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Welcome to Partnership Dashboard</h2>
                  <p className="text-green-100 text-lg">Manage your partnerships with Kigali Today Ltd</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold">🤝</div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Partnerships</p>
                    <p className="text-2xl font-bold text-gray-900">3</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-xl">🤝</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Pending Requests</p>
                    <p className="text-2xl font-bold text-gray-900">2</p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <span className="text-yellow-600 text-xl">⏳</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Reach</p>
                    <p className="text-2xl font-bold text-gray-900">750K+</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-xl">📊</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Success Rate</p>
                    <p className="text-2xl font-bold text-gray-900">95%</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 text-xl">🎯</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Partnership Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Partnership with Tech Solutions Ltd approved</p>
                      <p className="text-sm text-gray-500">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">⏳</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Community Development NGO partnership pending</p>
                      <p className="text-sm text-gray-500">5 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📝</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">New partnership proposal submitted</p>
                      <p className="text-sm text-gray-500">1 week ago</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Partnership Performance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Multi-Platform Partnership</span>
                    <span className="font-semibold text-green-600">Excellent</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Radio Partnership</span>
                    <span className="font-semibold text-blue-600">Good</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Event Collaboration</span>
                    <span className="font-semibold text-yellow-600">Pending</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Partnerships Tab */}
        {activeTab === 'partnerships' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">My Partnerships</h2>
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-lg">
                + New Partnership
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Tech Solutions Ltd</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Active</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">Multi-platform technology partnership focusing on digital innovation</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Started:</span>
                    <span className="font-medium">Jan 2024</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Reach:</span>
                    <span className="font-medium">500K+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Status:</span>
                    <span className="font-medium text-green-600">Excellent</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Rwanda Business Group</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Active</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">Business development partnership with focus on economic growth</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Started:</span>
                    <span className="font-medium">Nov 2023</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Reach:</span>
                    <span className="font-medium">300K+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Status:</span>
                    <span className="font-medium text-green-600">Excellent</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Community Development NGO</h3>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">Pending</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">Community outreach partnership for social impact initiatives</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Submitted:</span>
                    <span className="font-medium">Dec 2024</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Expected Reach:</span>
                    <span className="font-medium">200K+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Status:</span>
                    <span className="font-medium text-yellow-600">Under Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Opportunities Tab */}
        {activeTab === 'opportunities' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Partnership Opportunities</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Opportunities</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-medium text-gray-900">Event Collaboration</h4>
                    <p className="text-sm text-gray-600 mt-1">Partner for community events and live broadcasts</p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-xs text-gray-500">Deadline: Feb 15, 2024</span>
                      <button className="text-green-600 hover:text-green-700 text-sm font-medium">Apply</button>
                    </div>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-medium text-gray-900">Content Partnership</h4>
                    <p className="text-sm text-gray-600 mt-1">Co-create engaging content in Kinyarwanda and English</p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-xs text-gray-500">Deadline: Mar 1, 2024</span>
                      <button className="text-green-600 hover:text-green-700 text-sm font-medium">Apply</button>
                    </div>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-medium text-gray-900">Radio Partnership</h4>
                    <p className="text-sm text-gray-600 mt-1">Leverage 80% national coverage for community outreach</p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-xs text-gray-500">Deadline: Mar 15, 2024</span>
                      <button className="text-green-600 hover:text-green-700 text-sm font-medium">Apply</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Partnership Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Multi-Platform Integration</h4>
                      <p className="text-sm text-gray-600">Seamlessly integrate across radio, print, and digital</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Cross-Media Campaigns</h4>
                      <p className="text-sm text-gray-600">Launch coordinated campaigns across all channels</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Content Collaboration</h4>
                      <p className="text-sm text-gray-600">Co-create engaging content in multiple languages</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Dedicated Support</h4>
                      <p className="text-sm text-gray-600">Personal account manager and ongoing support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Partnership Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl">📋</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Partnership Guidelines</h3>
                <p className="text-gray-600 text-sm mb-4">Comprehensive guide to partnership best practices and requirements</p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Download PDF</button>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-600 text-xl">📊</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Media Kit</h3>
                <p className="text-gray-600 text-sm mb-4">Brand assets, logos, and media resources for partnerships</p>
                <button className="text-green-600 hover:text-green-700 text-sm font-medium">Download ZIP</button>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-purple-600 text-xl">📞</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Contact Support</h3>
                <p className="text-gray-600 text-sm mb-4">Get in touch with our partnership team for assistance</p>
                <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">Contact Us</button>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-yellow-600 text-xl">🎯</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Success Stories</h3>
                <p className="text-gray-600 text-sm mb-4">Learn from successful partnerships and case studies</p>
                <button className="text-yellow-600 hover:text-yellow-700 text-sm font-medium">View Stories</button>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-red-600 text-xl">📅</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Event Calendar</h3>
                <p className="text-gray-600 text-sm mb-4">Upcoming events and partnership opportunities</p>
                <button className="text-red-600 hover:text-red-700 text-sm font-medium">View Calendar</button>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-indigo-600 text-xl">💡</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Best Practices</h3>
                <p className="text-gray-600 text-sm mb-4">Tips and strategies for successful partnerships</p>
                <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">Read More</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
