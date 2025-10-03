'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RadioDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(true);

  // Mock data for radio dashboard
  const mockStats = {
    liveListeners: 2847,
    totalShows: 24,
    monthlyRevenue: 125000,
    socialEngagement: 89,
    currentShow: 'Morning Show with Sarah',
    nextShow: 'News Update',
    systemStatus: 'Live',
    transmissionPower: '50kW'
  };

  const mockShows = [
    { id: 1, name: 'Morning Show with Sarah', host: 'Sarah Johnson', time: '6:00 AM - 10:00 AM', status: 'Live', listeners: '1,234', genre: 'Talk Show' },
    { id: 2, name: 'News Update', host: 'David Kim', time: '12:00 PM - 12:30 PM', status: 'Scheduled', listeners: '0', genre: 'News' },
    { id: 3, name: 'Afternoon Drive', host: 'Maria Garcia', time: '3:00 PM - 7:00 PM', status: 'Scheduled', listeners: '0', genre: 'Music' },
    { id: 4, name: 'Evening Talk', host: 'James Wilson', time: '8:00 PM - 10:00 PM', status: 'Scheduled', listeners: '0', genre: 'Talk Show' },
    { id: 5, name: 'Late Night Music', host: 'Alex Thompson', time: '10:00 PM - 2:00 AM', status: 'Scheduled', listeners: '0', genre: 'Music' }
  ];

  const mockListeners = [
    { id: 1, location: 'Kigali', percentage: 45, listeners: '1,281' },
    { id: 2, location: 'Huye', percentage: 18, listeners: '512' },
    { id: 3, location: 'Musanze', percentage: 12, listeners: '342' },
    { id: 4, location: 'Rubavu', percentage: 8, listeners: '228' },
    { id: 5, location: 'Other', percentage: 17, listeners: '484' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/landing" className="flex items-center group">
              <div className="h-14 w-14 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-2xl">KT</span>
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Radio Dashboard</h1>
                <p className="text-sm text-gray-600 font-medium">KT Radio - Live Broadcasting Control</p>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link href="/dashboard/partnership" className="text-gray-600 hover:text-blue-600 transition-colors">
                Partnership
              </Link>
              <Link href="/dashboard/advertising" className="text-gray-600 hover:text-blue-600 transition-colors">
                Advertising
              </Link>
              <Link href="/dashboard/admin" className="text-gray-600 hover:text-blue-600 transition-colors">
                Admin
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">R</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Radio</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-[88px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>📊</span>
                <span>Overview</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('shows')}
              className={`py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'shows'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>📻</span>
                <span>Shows</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('listeners')}
              className={`py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'listeners'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>👥</span>
                <span>Listeners</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('content')}
              className={`py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'content'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>🎵</span>
                <span>Content</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'analytics'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>📈</span>
                <span>Analytics</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('social')}
              className={`py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'social'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>📱</span>
                <span>Social Media</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'settings'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>⚙️</span>
                <span>Settings</span>
              </span>
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Live Status Banner */}
            <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      <span className="text-lg font-semibold">LIVE ON AIR</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-2">{mockStats.currentShow}</h2>
                    <p className="text-pink-100 text-lg">Currently broadcasting to {mockStats.liveListeners.toLocaleString()} listeners</p>
                    <div className="mt-4 flex items-center space-x-2">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">📻 LIVE</span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">🎙️ {mockStats.transmissionPower}</span>
                    </div>
                  </div>
                  <div className="text-6xl opacity-20">📻</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-purple-600/20"></div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Live Listeners</p>
                    <p className="text-3xl font-bold text-gray-900">{mockStats.liveListeners.toLocaleString()}</p>
                    <p className="text-xs text-green-600 font-medium">+12% from yesterday</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">👥</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Total Shows</p>
                    <p className="text-3xl font-bold text-gray-900">{mockStats.totalShows}</p>
                    <p className="text-xs text-green-600 font-medium">+2 new shows</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📻</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Monthly Revenue</p>
                    <p className="text-3xl font-bold text-gray-900">${mockStats.monthlyRevenue.toLocaleString()}</p>
                    <p className="text-xs text-green-600 font-medium">+8% this month</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">💰</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Social Engagement</p>
                    <p className="text-3xl font-bold text-gray-900">{mockStats.socialEngagement}%</p>
                    <p className="text-xs text-green-600 font-medium">+5% this week</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📱</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Today's Schedule */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Today's Schedule</h3>
                <div className="space-y-4">
                  {mockShows.map((show) => (
                    <div key={show.id} className={`flex items-center justify-between p-4 rounded-xl transition-all duration-200 ${
                      show.status === 'Live' 
                        ? 'bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}>
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${
                          show.status === 'Live' ? 'bg-red-500 animate-pulse' : 'bg-gray-300'
                        }`}></div>
                        <div>
                          <p className="font-semibold text-gray-900">{show.name}</p>
                          <p className="text-sm text-gray-600">{show.host} • {show.genre}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{show.time}</p>
                        {show.status === 'Live' && (
                          <p className="text-sm text-red-600 font-semibold">{show.listeners} listeners</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Listener Distribution</h3>
                <div className="space-y-4">
                  {mockListeners.map((location) => (
                    <div key={location.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-900">{location.location}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${location.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-16 text-right">{location.listeners}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🎙️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Start Broadcasting</h3>
                    <p className="text-sm text-gray-600">Begin live transmission</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📊</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">View Analytics</h3>
                    <p className="text-sm text-gray-600">Check listener metrics</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📢</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Send Announcement</h3>
                    <p className="text-sm text-gray-600">Broadcast to all listeners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Shows Tab */}
        {activeTab === 'shows' && (
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Show Management</h2>
                <p className="text-gray-600">Manage all radio shows, schedules, and hosts</p>
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                + Add New Show
              </button>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">All Shows</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Show</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Host</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Genre</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockShows.map((show) => (
                      <tr key={show.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{show.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{show.host}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{show.time}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                            {show.genre}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            show.status === 'Live'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {show.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                          <button className="text-green-600 hover:text-green-900 mr-3">Start</button>
                          <button className="text-red-600 hover:text-red-900">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Other tabs would be implemented similarly */}
        {activeTab === 'listeners' && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">👥</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Listener Analytics</h2>
            <p className="text-gray-600">Detailed listener demographics and engagement metrics</p>
          </div>
        )}

        {activeTab === 'content' && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🎵</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Content Management</h2>
            <p className="text-gray-600">Manage music library, playlists, and audio content</p>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📈</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Radio Analytics</h2>
            <p className="text-gray-600">Comprehensive analytics and performance metrics</p>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">⚙️</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Radio Settings</h2>
            <p className="text-gray-600">Configure radio station settings and preferences</p>
          </div>
        )}
      </main>
    </div>
  );
}
