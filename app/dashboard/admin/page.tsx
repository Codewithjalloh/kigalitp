'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(true);

  // Mock data for admin dashboard
  const mockStats = {
    totalUsers: 1247,
    activePartnerships: 23,
    activeCampaigns: 45,
    totalRevenue: 125000,
    monthlyGrowth: 12.5,
    systemHealth: 99.8
  };

  const mockRecentActivity = [
    { id: 1, type: 'partnership', action: 'New partnership approved', user: 'Tech Solutions Ltd', time: '2 hours ago', status: 'success' },
    { id: 2, type: 'campaign', action: 'Campaign launched', user: 'Business Group', time: '4 hours ago', status: 'success' },
    { id: 3, type: 'user', action: 'New user registered', user: 'Community NGO', time: '6 hours ago', status: 'info' },
    { id: 4, type: 'system', action: 'System backup completed', user: 'System', time: '8 hours ago', status: 'success' },
    { id: 5, type: 'partnership', action: 'Partnership renewal', user: 'Rwanda Business Group', time: '1 day ago', status: 'warning' }
  ];

  const mockUsers = [
    { id: 1, name: 'John Smith', email: 'john@techsolutions.rw', role: 'partnership', status: 'active', lastLogin: '2 hours ago', partnerships: 3 },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@businessgroup.rw', role: 'advertising', status: 'active', lastLogin: '1 hour ago', campaigns: 5 },
    { id: 3, name: 'David Kim', email: 'david@communityngo.org', role: 'partnership', status: 'pending', lastLogin: 'Never', partnerships: 0 },
    { id: 4, name: 'Maria Garcia', email: 'maria@kigalitoday.rw', role: 'admin', status: 'active', lastLogin: '30 min ago', permissions: 'full' }
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
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Admin Dashboard</h1>
                <p className="text-sm text-gray-600 font-medium">Kigali Today Ltd - System Administration</p>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link href="/dashboard/partnership" className="text-gray-600 hover:text-blue-600 transition-colors">
                Partnership
              </Link>
              <Link href="/dashboard/advertising" className="text-gray-600 hover:text-blue-600 transition-colors">
                Advertising
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">A</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Admin</span>
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
              <span className="flex flex-col items-center space-y-1">
                <span>📊</span>
                <span>Overview</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'users'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="flex flex-col items-center space-y-1">
                <span>👥</span>
                <span>Users</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('partnerships')}
              className={`py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'partnerships'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="flex flex-col items-center space-y-1">
                <span>🤝</span>
                <span>Partnerships</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('campaigns')}
              className={`py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'campaigns'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="flex flex-col items-center space-y-1">
                <span>📢</span>
                <span>Campaigns</span>
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
              <span className="flex flex-col items-center space-y-1">
                <span>📈</span>
                <span>Analytics</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('websites')}
              className={`py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'websites'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="flex flex-col items-center space-y-1">
                <span>🌐</span>
                <span>Website Analytics</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('radio')}
              className={`py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'radio'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="flex flex-col items-center space-y-1">
                <span>📻</span>
                <span>Radio Analytics</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('radioapp')}
              className={`py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'radioapp'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="flex flex-col items-center space-y-1">
                <span>📱</span>
                <span>Radio App</span>
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
              <span className="flex flex-col items-center space-y-1">
                <span>📱</span>
                <span>Social Media</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'messages'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="flex flex-col items-center space-y-1">
                <span>💬</span>
                <span>Messages</span>
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
              <span className="flex flex-col items-center space-y-1">
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
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Welcome to Admin Dashboard</h2>
                    <p className="text-blue-100 text-lg">Manage the entire Kigali Today ecosystem</p>
                    <div className="mt-4 flex items-center space-x-2">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">🔐 ADMIN ACCESS</span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">📊 SYSTEM OVERVIEW</span>
                    </div>
                  </div>
                  <div className="text-6xl opacity-20">👑</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Total Users</p>
                    <p className="text-3xl font-bold text-gray-900">{mockStats.totalUsers.toLocaleString()}</p>
                    <p className="text-xs text-green-600 font-medium">+{mockStats.monthlyGrowth}% this month</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">👥</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Active Partnerships</p>
                    <p className="text-3xl font-bold text-gray-900">{mockStats.activePartnerships}</p>
                    <p className="text-xs text-green-600 font-medium">+3 this week</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🤝</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Active Campaigns</p>
                    <p className="text-3xl font-bold text-gray-900">{mockStats.activeCampaigns}</p>
                    <p className="text-xs text-green-600 font-medium">+8 this week</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📢</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Total Revenue</p>
                    <p className="text-3xl font-bold text-gray-900">${mockStats.totalRevenue.toLocaleString()}</p>
                    <p className="text-xs text-green-600 font-medium">+15% this month</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">💰</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">System Health</p>
                    <p className="text-3xl font-bold text-gray-900">{mockStats.systemHealth}%</p>
                    <p className="text-xs text-green-600 font-medium">All systems operational</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">💚</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Monthly Growth</p>
                    <p className="text-3xl font-bold text-gray-900">+{mockStats.monthlyGrowth}%</p>
                    <p className="text-xs text-green-600 font-medium">Excellent performance</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📈</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {mockRecentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.status === 'success' ? 'bg-green-100' :
                      activity.status === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
                    }`}>
                      <span className={`text-sm ${
                        activity.status === 'success' ? 'text-green-600' :
                        activity.status === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                      }`}>
                        {activity.type === 'partnership' ? '🤝' :
                         activity.type === 'campaign' ? '📢' :
                         activity.type === 'user' ? '👤' : '⚙️'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-600">{activity.user}</p>
                    </div>
                    <div className="text-sm text-gray-500">{activity.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">User Management</h2>
                <p className="text-gray-600">Manage all system users and their permissions</p>
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                + Add User
              </button>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">All Users</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm font-bold">{user.name.charAt(0)}</span>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{user.name}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            user.role === 'admin' ? 'bg-red-100 text-red-800' :
                            user.role === 'partnership' ? 'bg-green-100 text-green-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.lastLogin}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {user.partnerships ? `${user.partnerships} partnerships` : 
                           user.campaigns ? `${user.campaigns} campaigns` : 
                           user.permissions || 'No activity'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
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

        {/* Partnerships Tab */}
        {activeTab === 'partnerships' && (
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Partnership Management</h2>
                <p className="text-gray-600">Oversee and manage all partnership proposals and active partnerships</p>
              </div>
              <div className="flex space-x-3">
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Export Data
                </button>
                <button className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200">
                  Bulk Actions
                </button>
              </div>
            </div>

            {/* Partnership Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Total Proposals</p>
                    <p className="text-2xl font-bold text-gray-900">47</p>
                    <p className="text-xs text-green-600 font-medium">+8 this week</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📋</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Pending Review</p>
                    <p className="text-2xl font-bold text-gray-900">12</p>
                    <p className="text-xs text-yellow-600 font-medium">Needs attention</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">⏳</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Active Partnerships</p>
                    <p className="text-2xl font-bold text-gray-900">23</p>
                    <p className="text-xs text-green-600 font-medium">+3 this month</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">✅</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Total Value</p>
                    <p className="text-2xl font-bold text-gray-900">$2.1M</p>
                    <p className="text-xs text-green-600 font-medium">+15% growth</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">💰</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Partnership Management Table */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">All Partnership Proposals</h3>
                  <div className="flex space-x-2">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option value="">All Status</option>
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                      <option value="active">Active</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Search partnerships..."
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
                    />
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">TS</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Tech Solutions Ltd</div>
                            <div className="text-sm text-gray-500">john@techsolutions.rw</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Multi-Platform</div>
                        <div className="text-sm text-gray-500">Technology</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">$25,000</div>
                        <div className="text-sm text-gray-500">12 months</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Jan 15, 2024</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                        <button className="text-green-600 hover:text-green-900 mr-3">Edit</button>
                        <button className="text-red-600 hover:text-red-900">Archive</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">RB</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Rwanda Business Group</div>
                            <div className="text-sm text-gray-500">sarah@rwandabusiness.rw</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Business Development</div>
                        <div className="text-sm text-gray-500">Finance</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">$18,000</div>
                        <div className="text-sm text-gray-500">18 months</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Nov 1, 2023</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                        <button className="text-green-600 hover:text-green-900 mr-3">Edit</button>
                        <button className="text-red-600 hover:text-red-900">Archive</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">CD</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Community Development NGO</div>
                            <div className="text-sm text-gray-500">david@communitydev.rw</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Social Impact</div>
                        <div className="text-sm text-gray-500">NGO</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">$12,000</div>
                        <div className="text-sm text-gray-500">6 months</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Feb 1, 2024</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-green-600 hover:text-green-900 mr-3">Approve</button>
                        <button className="text-blue-600 hover:text-blue-900 mr-3">Review</button>
                        <button className="text-red-600 hover:text-red-900">Reject</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">ED</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Education Foundation</div>
                            <div className="text-sm text-gray-500">marie@education.rw</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Content Partnership</div>
                        <div className="text-sm text-gray-500">Education</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">$8,500</div>
                        <div className="text-sm text-gray-500">9 months</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Under Review</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Feb 5, 2024</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-green-600 hover:text-green-900 mr-3">Approve</button>
                        <button className="text-blue-600 hover:text-blue-900 mr-3">Review</button>
                        <button className="text-red-600 hover:text-red-900">Reject</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">✅</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Approve Partnership</h3>
                    <p className="text-sm text-gray-600">Review and approve pending partnerships</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📊</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Generate Report</h3>
                    <p className="text-sm text-gray-600">Create partnership performance reports</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">⚙️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Manage Templates</h3>
                    <p className="text-sm text-gray-600">Configure partnership templates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Campaigns Tab */}
        {activeTab === 'campaigns' && (
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Campaign Management</h2>
                <p className="text-gray-600">Monitor and manage all advertising campaigns across platforms</p>
              </div>
              <div className="flex space-x-3">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Export Data
                </button>
                <button className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200">
                  Bulk Actions
                </button>
              </div>
            </div>

            {/* Campaign Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Total Campaigns</p>
                    <p className="text-2xl font-bold text-gray-900">89</p>
                    <p className="text-xs text-green-600 font-medium">+12 this month</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📢</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Active Campaigns</p>
                    <p className="text-2xl font-bold text-gray-900">45</p>
                    <p className="text-xs text-green-600 font-medium">Running smoothly</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">▶️</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Total Spend</p>
                    <p className="text-2xl font-bold text-gray-900">$156K</p>
                    <p className="text-xs text-green-600 font-medium">+8% this month</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">💰</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Avg. Performance</p>
                    <p className="text-2xl font-bold text-gray-900">87%</p>
                    <p className="text-xs text-green-600 font-medium">Above target</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📈</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Campaign Management Table */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">All Campaigns</h3>
                  <div className="flex space-x-2">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                      <option value="">All Status</option>
                      <option value="active">Active</option>
                      <option value="paused">Paused</option>
                      <option value="completed">Completed</option>
                      <option value="draft">Draft</option>
                    </select>
                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                      <option value="">All Platforms</option>
                      <option value="radio">KT Radio</option>
                      <option value="press">KT Press</option>
                      <option value="digital">Digital</option>
                      <option value="social">Social Media</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Search campaigns..."
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 w-64"
                    />
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">TS</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Tech Solutions Campaign</div>
                            <div className="text-sm text-gray-500">Jan 15 - Apr 15, 2024</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Tech Solutions Ltd</div>
                        <div className="text-sm text-gray-500">Technology</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-1">
                          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">Radio</span>
                          <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Digital</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">$2,500</div>
                        <div className="text-sm text-gray-500">$1,800 spent</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-green-600">95%</div>
                        <div className="text-sm text-gray-500">Excellent</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                        <button className="text-green-600 hover:text-green-900 mr-3">Edit</button>
                        <button className="text-yellow-600 hover:text-yellow-900">Pause</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">BG</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Business Group Campaign</div>
                            <div className="text-sm text-gray-500">Dec 1 - Jun 1, 2024</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Rwanda Business Group</div>
                        <div className="text-sm text-gray-500">Finance</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-1">
                          <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full">Press</span>
                          <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Digital</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">$1,200</div>
                        <div className="text-sm text-gray-500">$950 spent</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-blue-600">78%</div>
                        <div className="text-sm text-gray-500">Good</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                        <button className="text-green-600 hover:text-green-900 mr-3">Edit</button>
                        <button className="text-yellow-600 hover:text-yellow-900">Pause</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">CD</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Community NGO Campaign</div>
                            <div className="text-sm text-gray-500">Feb 1 - Feb 1, 2025</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Community Development NGO</div>
                        <div className="text-sm text-gray-500">NGO</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-1">
                          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">Radio</span>
                          <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full">Press</span>
                          <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Digital</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">$5,000</div>
                        <div className="text-sm text-gray-500">$2,100 spent</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-green-600">92%</div>
                        <div className="text-sm text-gray-500">Excellent</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                        <button className="text-green-600 hover:text-green-900 mr-3">Edit</button>
                        <button className="text-yellow-600 hover:text-yellow-900">Pause</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📊</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Campaign Analytics</h3>
                    <p className="text-sm text-gray-600">View detailed performance metrics</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">⚙️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Campaign Settings</h3>
                    <p className="text-sm text-gray-600">Configure campaign parameters</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📈</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Performance Report</h3>
                    <p className="text-sm text-gray-600">Generate comprehensive reports</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">System Analytics</h2>
                <p className="text-gray-600">Comprehensive analytics and reporting dashboard for the entire ecosystem</p>
              </div>
              <div className="flex space-x-3">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Export Report
                </button>
                <button className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200">
                  Schedule Report
                </button>
              </div>
            </div>

            {/* Key Performance Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Total Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">$281K</p>
                    <p className="text-xs text-green-600 font-medium">+18% this month</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">💰</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Active Users</p>
                    <p className="text-2xl font-bold text-gray-900">1,247</p>
                    <p className="text-xs text-green-600 font-medium">+12% growth</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">👥</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Platform Reach</p>
                    <p className="text-2xl font-bold text-gray-900">2.1M</p>
                    <p className="text-xs text-green-600 font-medium">+8% this month</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📡</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Engagement Rate</p>
                    <p className="text-2xl font-bold text-gray-900">89%</p>
                    <p className="text-xs text-green-600 font-medium">Excellent</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📈</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Revenue Trends */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Revenue Trends</h3>
                <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📊</div>
                    <p className="text-gray-600 font-medium">Revenue Chart</p>
                    <p className="text-sm text-gray-500">Monthly revenue breakdown</p>
                  </div>
                </div>
              </div>

              {/* User Growth */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">User Growth</h3>
                <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">👥</div>
                    <p className="text-gray-600 font-medium">User Growth Chart</p>
                    <p className="text-sm text-gray-500">New user registrations</p>
                  </div>
                </div>
              </div>

              {/* Platform Performance */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Platform Performance</h3>
                <div className="h-64 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📡</div>
                    <p className="text-gray-600 font-medium">Platform Analytics</p>
                    <p className="text-sm text-gray-500">Radio, Press, Digital performance</p>
                  </div>
                </div>
              </div>

              {/* Engagement Metrics */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Engagement Metrics</h3>
                <div className="h-64 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📈</div>
                    <p className="text-gray-600 font-medium">Engagement Chart</p>
                    <p className="text-sm text-gray-500">User interaction rates</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Analytics Table */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Platform Performance Breakdown</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Users</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm">📻</span>
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-medium text-gray-900">KT Radio</div>
                            <div className="text-sm text-gray-500">80% national coverage</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1.2M</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$125K</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">92%</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+15%</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm">📰</span>
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-medium text-gray-900">KT Press</div>
                            <div className="text-sm text-gray-500">Print & digital</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">450K</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$68K</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">78%</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+12%</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm">🌐</span>
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-medium text-gray-900">kigalitoday.com</div>
                            <div className="text-sm text-gray-500">Digital platform</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">380K</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$88K</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">95%</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+22%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Website Analytics Tab */}
        {activeTab === 'websites' && (
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Website Analytics</h2>
                <p className="text-gray-600">Comprehensive analytics for kigalitoday.com and ktpress.rw</p>
              </div>
              <div className="flex space-x-3">
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Sync GA Data
                </button>
                <button className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200">
                  Export Report
                </button>
              </div>
            </div>

            {/* Overall Website Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Total Page Views</p>
                    <p className="text-2xl font-bold text-gray-900">2.8M</p>
                    <p className="text-xs text-green-600 font-medium">+18% this month</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">👁️</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Unique Visitors</p>
                    <p className="text-2xl font-bold text-gray-900">485K</p>
                    <p className="text-xs text-green-600 font-medium">+12% this month</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">👥</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Avg. Session Duration</p>
                    <p className="text-2xl font-bold text-gray-900">3:24</p>
                    <p className="text-xs text-green-600 font-medium">+8% improvement</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">⏱️</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Bounce Rate</p>
                    <p className="text-2xl font-bold text-gray-900">42%</p>
                    <p className="text-xs text-green-600 font-medium">-5% improvement</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📊</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Website Performance Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* kigalitoday.com */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-lg font-bold">KT</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">kigalitoday.com</h3>
                      <p className="text-sm text-gray-600">Main website</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Live</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">1.8M</div>
                    <div className="text-sm text-gray-600">Page Views</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">320K</div>
                    <div className="text-sm text-gray-600">Unique Visitors</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Avg. Session Duration</span>
                    <span className="font-semibold">4:12</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Bounce Rate</span>
                    <span className="font-semibold">38%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Pages per Session</span>
                    <span className="font-semibold">3.2</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>New Visitors</span>
                    <span className="font-semibold">68%</span>
                  </div>
                </div>
              </div>

              {/* ktpress.rw */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-lg font-bold">KP</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">ktpress.rw</h3>
                      <p className="text-sm text-gray-600">Press website</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Live</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">1.0M</div>
                    <div className="text-sm text-gray-600">Page Views</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">165K</div>
                    <div className="text-sm text-gray-600">Unique Visitors</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Avg. Session Duration</span>
                    <span className="font-semibold">2:48</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Bounce Rate</span>
                    <span className="font-semibold">46%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Pages per Session</span>
                    <span className="font-semibold">2.8</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>New Visitors</span>
                    <span className="font-semibold">72%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Traffic Sources */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Traffic Sources Chart */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Traffic Sources</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">Organic Search</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">45%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">Direct Traffic</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">28%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">Social Media</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">15%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">Referrals</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '12%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">12%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Device Analytics */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Device Analytics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">Mobile</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '62%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">62%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">Desktop</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '32%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">32%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">Tablet</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '6%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">6%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Performing Pages */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Top Performing Pages</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-sm font-bold">KT</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">kigalitoday.com/news</p>
                      <p className="text-sm text-gray-600">Latest news and updates</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">245K views</p>
                    <p className="text-sm text-green-600">+15% this week</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-sm font-bold">KP</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">ktpress.rw/articles</p>
                      <p className="text-sm text-gray-600">Press articles and features</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">180K views</p>
                    <p className="text-sm text-green-600">+22% this week</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-sm font-bold">KT</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">kigalitoday.com/radio</p>
                      <p className="text-sm text-gray-600">Live radio streaming</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">156K views</p>
                    <p className="text-sm text-green-600">+8% this week</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-sm font-bold">KP</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">ktpress.rw/opinion</p>
                      <p className="text-sm text-gray-600">Opinion pieces and editorials</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">98K views</p>
                    <p className="text-sm text-green-600">+12% this week</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Geographic Analytics */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Geographic Distribution</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 mb-1">🇷🇼</div>
                  <div className="text-lg font-semibold text-gray-900">Rwanda</div>
                  <div className="text-sm text-gray-600">68% of traffic</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 mb-1">🇺🇬</div>
                  <div className="text-lg font-semibold text-gray-900">Uganda</div>
                  <div className="text-sm text-gray-600">12% of traffic</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 mb-1">🇰🇪</div>
                  <div className="text-lg font-semibold text-gray-900">Kenya</div>
                  <div className="text-sm text-gray-600">8% of traffic</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 mb-1">🇹🇿</div>
                  <div className="text-lg font-semibold text-gray-900">Tanzania</div>
                  <div className="text-sm text-gray-600">5% of traffic</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 mb-1">🇺🇸</div>
                  <div className="text-lg font-semibold text-gray-900">United States</div>
                  <div className="text-sm text-gray-600">4% of traffic</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 mb-1">🌍</div>
                  <div className="text-lg font-semibold text-gray-900">Other</div>
                  <div className="text-sm text-gray-600">3% of traffic</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Radio Analytics Tab */}
        {activeTab === 'radio' && (
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Radio Analytics</h2>
                <p className="text-gray-600">Comprehensive analytics for KT Radio operations and listener engagement</p>
              </div>
              <div className="flex space-x-3">
                <button className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Sync Radio Data
                </button>
                <button className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200">
                  Export Report
                </button>
              </div>
            </div>

            {/* Live Radio Status Banner */}
            <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      <span className="text-lg font-semibold">LIVE ON AIR</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Morning Show with Sarah</h3>
                    <p className="text-pink-100 text-lg">Currently broadcasting to 2,847 live listeners</p>
                    <div className="mt-4 flex items-center space-x-2">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">📻 LIVE</span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">🎙️ 50kW</span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">📡 FM 98.5</span>
                    </div>
                  </div>
                  <div className="text-6xl opacity-20">📻</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-purple-600/20"></div>
            </div>

            {/* Radio Performance Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Live Listeners</p>
                    <p className="text-2xl font-bold text-gray-900">2,847</p>
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
                    <p className="text-2xl font-bold text-gray-900">24</p>
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
                    <p className="text-sm font-semibold text-gray-600 mb-1">Avg. Listen Time</p>
                    <p className="text-2xl font-bold text-gray-900">42 min</p>
                    <p className="text-xs text-green-600 font-medium">+8% improvement</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">⏱️</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Peak Listeners</p>
                    <p className="text-2xl font-bold text-gray-900">4,250</p>
                    <p className="text-xs text-green-600 font-medium">Today's peak</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📈</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Show Performance Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Top Performing Shows */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Top Performing Shows</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Morning Show with Sarah</p>
                        <p className="text-sm text-gray-600">6:00 AM - 10:00 AM • LIVE</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">2,847 listeners</p>
                      <p className="text-sm text-green-600">+15% this week</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Afternoon Drive</p>
                        <p className="text-sm text-gray-600">3:00 PM - 7:00 PM • Scheduled</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">1,890 avg</p>
                      <p className="text-sm text-green-600">+8% this week</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <div>
                        <p className="font-semibold text-gray-900">Evening Talk</p>
                        <p className="text-sm text-gray-600">8:00 PM - 10:00 PM • Scheduled</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">1,456 avg</p>
                      <p className="text-sm text-green-600">+12% this week</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <div>
                        <p className="font-semibold text-gray-900">News Update</p>
                        <p className="text-sm text-gray-600">12:00 PM - 12:30 PM • Scheduled</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">2,156 avg</p>
                      <p className="text-sm text-green-600">+5% this week</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Listener Demographics */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Listener Demographics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">Age 25-34</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">35%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">Age 35-44</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">28%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">Age 18-24</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '22%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">22%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">Age 45+</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">15%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Geographic Distribution & Time Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Geographic Distribution */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Geographic Distribution</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">Kigali</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">45%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">Huye</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '18%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">18%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">Musanze</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '12%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">12%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">Rubavu</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '8%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">8%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">Other</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-gray-500 h-2 rounded-full" style={{ width: '17%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">17%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Peak Listening Hours */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Peak Listening Hours</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">6:00 AM - 10:00 AM</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">Peak</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">12:00 PM - 2:00 PM</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">High</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">3:00 PM - 7:00 PM</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">High</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">8:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">Medium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Performance & Engagement */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Content Performance */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Content Performance</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <span className="text-white text-sm">🎵</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Music Content</p>
                        <p className="text-sm text-gray-600">Popular songs and playlists</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">85% engagement</p>
                      <p className="text-sm text-green-600">+12% this week</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <span className="text-white text-sm">📰</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">News & Updates</p>
                        <p className="text-sm text-gray-600">Breaking news and current events</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">92% engagement</p>
                      <p className="text-sm text-green-600">+18% this week</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <span className="text-white text-sm">💬</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Talk Shows</p>
                        <p className="text-sm text-gray-600">Interactive discussions and interviews</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">78% engagement</p>
                      <p className="text-sm text-green-600">+8% this week</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engagement Metrics */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Engagement Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">1,247</div>
                    <div className="text-sm text-gray-600">Call-ins Today</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">892</div>
                    <div className="text-sm text-gray-600">Text Messages</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">456</div>
                    <div className="text-sm text-gray-600">Social Interactions</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">234</div>
                    <div className="text-sm text-gray-600">Email Responses</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Radio Revenue Analytics */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Radio Revenue Analytics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                  <div className="text-3xl font-bold text-gray-900 mb-2">$125K</div>
                  <div className="text-sm text-gray-600 mb-1">Monthly Revenue</div>
                  <div className="text-xs text-green-600 font-medium">+8% this month</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                  <div className="text-3xl font-bold text-gray-900 mb-2">$45K</div>
                  <div className="text-sm text-gray-600 mb-1">Advertising Revenue</div>
                  <div className="text-xs text-green-600 font-medium">+15% this month</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                  <div className="text-3xl font-bold text-gray-900 mb-2">$80K</div>
                  <div className="text-sm text-gray-600 mb-1">Sponsorship Revenue</div>
                  <div className="text-xs text-green-600 font-medium">+5% this month</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Radio App Analytics Tab */}
        {activeTab === 'radioapp' && (
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Radio App Analytics</h2>
                <p className="text-gray-600">Mobile app data, user engagements, and campaign feedback from KT Radio app</p>
              </div>
              <div className="flex space-x-3">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Sync App Data
                </button>
                <button className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200">
                  Export Report
                </button>
              </div>
            </div>

            {/* App Performance Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Total App Users</p>
                    <p className="text-2xl font-bold text-gray-900">45.2K</p>
                    <p className="text-xs text-green-600 font-medium">+18% this month</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">👥</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Active Users</p>
                    <p className="text-2xl font-bold text-gray-900">28.7K</p>
                    <p className="text-xs text-green-600 font-medium">+12% this week</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📱</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Avg. Session Time</p>
                    <p className="text-2xl font-bold text-gray-900">24 min</p>
                    <p className="text-xs text-green-600 font-medium">+8% improvement</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">⏱️</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">App Rating</p>
                    <p className="text-2xl font-bold text-gray-900">4.7★</p>
                    <p className="text-xs text-green-600 font-medium">+0.2 this month</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">⭐</span>
                  </div>
                </div>
              </div>
            </div>

            {/* App Store Performance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Downloads & Reviews */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">App Store Performance</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                        <span className="text-white text-sm">📥</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Total Downloads</p>
                        <p className="text-sm text-gray-600">All time</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-900">45.2K</p>
                      <p className="text-sm text-green-600">+2.1K this week</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <span className="text-white text-sm">⭐</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">App Store Rating</p>
                        <p className="text-sm text-gray-600">iOS App Store</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-900">4.7★</p>
                      <p className="text-sm text-green-600">Based on 1,247 reviews</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <span className="text-white text-sm">⭐</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Play Store Rating</p>
                        <p className="text-sm text-gray-600">Google Play Store</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-900">4.6★</p>
                      <p className="text-sm text-green-600">Based on 892 reviews</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Engagement Metrics */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">User Engagement</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">3.2</div>
                    <div className="text-sm text-gray-600">Sessions per User</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">68%</div>
                    <div className="text-sm text-gray-600">Retention Rate</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">24 min</div>
                    <div className="text-sm text-gray-600">Avg. Session</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">12%</div>
                    <div className="text-sm text-gray-600">Crash Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Campaign Performance in App */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Campaign Performance in App</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-sm">📢</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Tech Solutions Campaign</p>
                      <p className="text-sm text-gray-600">Jan 15 - Apr 15, 2024</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">2,847 app views</p>
                    <p className="text-sm text-green-600">+15% engagement</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-sm">📢</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Business Group Campaign</p>
                      <p className="text-sm text-gray-600">Dec 1 - Jun 1, 2024</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">1,890 app views</p>
                    <p className="text-sm text-green-600">+8% engagement</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-sm">📢</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Community Development Campaign</p>
                      <p className="text-sm text-gray-600">Feb 1 - Aug 1, 2024</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">1,456 app views</p>
                    <p className="text-sm text-green-600">+12% engagement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* User Feedback & Reviews */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent User Reviews */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Recent User Reviews</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                        <span className="text-sm font-semibold text-gray-900">5.0</span>
                      </div>
                      <span className="text-xs text-gray-500">2 hours ago</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">"Amazing radio app! Great sound quality and easy to use. Love the live shows!"</p>
                    <p className="text-xs text-gray-500">- Sarah M.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                        <span className="text-sm font-semibold text-gray-900">5.0</span>
                      </div>
                      <span className="text-xs text-gray-500">1 day ago</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">"Best radio app in Rwanda! Always updated with latest news and music."</p>
                    <p className="text-xs text-gray-500">- John K.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-yellow-500">⭐⭐⭐⭐</span>
                        <span className="text-sm font-semibold text-gray-900">4.0</span>
                      </div>
                      <span className="text-xs text-gray-500">2 days ago</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">"Good app but sometimes crashes. Please fix the streaming issues."</p>
                    <p className="text-xs text-gray-500">- Maria G.</p>
                  </div>
                </div>
              </div>

              {/* User Feedback Analytics */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Feedback Analytics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">Positive Feedback</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">78%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">Neutral Feedback</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">15%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">Negative Feedback</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '7%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">7%</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">1,247</div>
                    <div className="text-sm text-gray-600">Total Reviews</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">4.7</div>
                    <div className="text-sm text-gray-600">Avg. Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Push Notifications & Features Usage */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Push Notifications */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Push Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <span className="text-white text-sm">📢</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Campaign Notifications</p>
                        <p className="text-sm text-gray-600">Sent this week</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">2,847 sent</p>
                      <p className="text-sm text-green-600">85% open rate</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                        <span className="text-white text-sm">📰</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">News Alerts</p>
                        <p className="text-sm text-gray-600">Breaking news</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">1,890 sent</p>
                      <p className="text-sm text-green-600">92% open rate</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <span className="text-white text-sm">🎵</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Show Reminders</p>
                        <p className="text-sm text-gray-600">Favorite shows</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">1,456 sent</p>
                      <p className="text-sm text-green-600">78% open rate</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Usage */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Feature Usage</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">Live Radio</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">95%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">Podcasts</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">68%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">News Section</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">82%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">Social Features</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 w-16 text-right">45%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* App Performance Metrics */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">App Performance Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                  <div className="text-3xl font-bold text-gray-900 mb-2">2.1s</div>
                  <div className="text-sm text-gray-600 mb-1">Avg. Load Time</div>
                  <div className="text-xs text-green-600 font-medium">-0.3s improvement</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                  <div className="text-3xl font-bold text-gray-900 mb-2">12%</div>
                  <div className="text-sm text-gray-600 mb-1">Crash Rate</div>
                  <div className="text-xs text-green-600 font-medium">-2% improvement</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                  <div className="text-3xl font-bold text-gray-900 mb-2">68%</div>
                  <div className="text-sm text-gray-600 mb-1">Retention Rate</div>
                  <div className="text-xs text-green-600 font-medium">+5% improvement</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                  <div className="text-3xl font-bold text-gray-900 mb-2">4.7★</div>
                  <div className="text-sm text-gray-600 mb-1">User Rating</div>
                  <div className="text-xs text-green-600 font-medium">+0.2 improvement</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Social Media Tab */}
        {activeTab === 'social' && (
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Social Media Analytics</h2>
                <p className="text-gray-600">Comprehensive social media performance across all Kigali Today platforms</p>
              </div>
              <div className="flex space-x-3">
                <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Sync Data
                </button>
                <button className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200">
                  Export Report
                </button>
              </div>
            </div>

            {/* Overall Social Media Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Total Followers</p>
                    <p className="text-2xl font-bold text-gray-900">2.4M</p>
                    <p className="text-xs text-green-600 font-medium">+15% this month</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">👥</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Total Engagement</p>
                    <p className="text-2xl font-bold text-gray-900">89.2K</p>
                    <p className="text-xs text-green-600 font-medium">+22% this week</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">❤️</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Avg. Engagement Rate</p>
                    <p className="text-2xl font-bold text-gray-900">4.2%</p>
                    <p className="text-xs text-green-600 font-medium">Above industry avg</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📊</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Total Reach</p>
                    <p className="text-2xl font-bold text-gray-900">5.8M</p>
                    <p className="text-xs text-green-600 font-medium">+18% this month</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📡</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Facebook */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-lg font-bold">f</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Facebook</h3>
                      <p className="text-sm text-gray-600">3 pages connected</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Connected</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">1.2M</div>
                    <div className="text-sm text-gray-600">Total Followers</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">45.2K</div>
                    <div className="text-sm text-gray-600">Engagement</div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>KT Radio Page</span>
                    <span className="font-semibold">850K followers</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>KT Press Page</span>
                    <span className="font-semibold">280K followers</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Kigali Today Page</span>
                    <span className="font-semibold">70K followers</span>
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-lg">📷</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Instagram</h3>
                      <p className="text-sm text-gray-600">3 accounts connected</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Connected</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">680K</div>
                    <div className="text-sm text-gray-600">Total Followers</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">28.5K</div>
                    <div className="text-sm text-gray-600">Engagement</div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>@ktradio_rw</span>
                    <span className="font-semibold">420K followers</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>@ktpress_rw</span>
                    <span className="font-semibold">180K followers</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>@kigalitoday_rw</span>
                    <span className="font-semibold">80K followers</span>
                  </div>
                </div>
              </div>

              {/* Twitter/X */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                      <span className="text-white text-lg font-bold">X</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Twitter/X</h3>
                      <p className="text-sm text-gray-600">3 accounts connected</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Connected</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">320K</div>
                    <div className="text-sm text-gray-600">Total Followers</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">12.8K</div>
                    <div className="text-sm text-gray-600">Engagement</div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>@KTRadioRW</span>
                    <span className="font-semibold">200K followers</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>@KTPressRW</span>
                    <span className="font-semibold">85K followers</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>@KigaliTodayRW</span>
                    <span className="font-semibold">35K followers</span>
                  </div>
                </div>
              </div>

              {/* YouTube */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-lg">📺</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">YouTube</h3>
                      <p className="text-sm text-gray-600">2 channels connected</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Connected</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">180K</div>
                    <div className="text-sm text-gray-600">Total Subscribers</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">2.1M</div>
                    <div className="text-sm text-gray-600">Total Views</div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>KT Radio Channel</span>
                    <span className="font-semibold">120K subscribers</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>KT Press Channel</span>
                    <span className="font-semibold">60K subscribers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* TikTok & LinkedIn */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* TikTok */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                      <span className="text-white text-lg">🎵</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">TikTok</h3>
                      <p className="text-sm text-gray-600">2 accounts connected</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Connected</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">95K</div>
                    <div className="text-sm text-gray-600">Total Followers</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">1.8M</div>
                    <div className="text-sm text-gray-600">Total Views</div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>@ktradio_rw</span>
                    <span className="font-semibold">65K followers</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>@ktpress_rw</span>
                    <span className="font-semibold">30K followers</span>
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center">
                      <span className="text-white text-lg font-bold">in</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">LinkedIn</h3>
                      <p className="text-sm text-gray-600">1 company page</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Connected</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">25K</div>
                    <div className="text-sm text-gray-600">Total Followers</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">2.5K</div>
                    <div className="text-sm text-gray-600">Engagement</div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Kigali Today Ltd</span>
                    <span className="font-semibold">25K followers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Performing Content */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Top Performing Content This Week</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-sm font-bold">f</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">KT Radio - Live Interview with Minister</p>
                      <p className="text-sm text-gray-600">Facebook • 2 days ago</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">45.2K views</p>
                    <p className="text-sm text-green-600">+2.1K engagement</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-sm">📷</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Behind the Scenes at KT Press</p>
                      <p className="text-sm text-gray-600">Instagram • 1 day ago</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">28.5K views</p>
                    <p className="text-sm text-green-600">+1.8K engagement</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-sm">📺</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">KT Radio Morning Show Highlights</p>
                      <p className="text-sm text-gray-600">YouTube • 3 days ago</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">125K views</p>
                    <p className="text-sm text-green-600">+8.5K engagement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Messages</h2>
                <p className="text-gray-600">Manage and respond to all contact messages and inquiries</p>
              </div>
              <div className="flex space-x-3">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Mark All Read
                </button>
                <button className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200">
                  Export Messages
                </button>
              </div>
            </div>

            {/* Message Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Total Messages</p>
                    <p className="text-2xl font-bold text-gray-900">156</p>
                    <p className="text-xs text-green-600 font-medium">+12 this week</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">💬</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Unread Messages</p>
                    <p className="text-2xl font-bold text-gray-900">23</p>
                    <p className="text-xs text-yellow-600 font-medium">Needs attention</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📩</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Replied Today</p>
                    <p className="text-2xl font-bold text-gray-900">8</p>
                    <p className="text-xs text-green-600 font-medium">Good response time</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">✅</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Avg. Response Time</p>
                    <p className="text-2xl font-bold text-gray-900">2.4h</p>
                    <p className="text-xs text-green-600 font-medium">Excellent</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">⏱️</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Partnership Inquiries</h3>
                    <p className="text-sm text-gray-600">45 messages</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📢</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Advertising Inquiries</h3>
                    <p className="text-sm text-gray-600">38 messages</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">❓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">General Support</h3>
                    <p className="text-sm text-gray-600">73 messages</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages Management Table */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">All Messages</h3>
                  <div className="flex space-x-2">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option value="">All Categories</option>
                      <option value="partnership">Partnership</option>
                      <option value="advertising">Advertising</option>
                      <option value="support">General Support</option>
                    </select>
                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option value="">All Status</option>
                      <option value="unread">Unread</option>
                      <option value="read">Read</option>
                      <option value="replied">Replied</option>
                      <option value="closed">Closed</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Search messages..."
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
                    />
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Received</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">JS</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">John Smith</div>
                            <div className="text-sm text-gray-500">john@techsolutions.rw</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">Partnership Opportunity Inquiry</div>
                        <div className="text-sm text-gray-500">Interested in multi-platform partnership...</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">Partnership</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Unread</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2 hours ago</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                        <button className="text-green-600 hover:text-green-900 mr-3">Reply</button>
                        <button className="text-gray-600 hover:text-gray-900">Archive</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">SJ</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Sarah Johnson</div>
                            <div className="text-sm text-gray-500">sarah@businessgroup.rw</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">Advertising Campaign Inquiry</div>
                        <div className="text-sm text-gray-500">Looking to launch a new campaign...</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">Advertising</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Replied</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4 hours ago</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                        <button className="text-green-600 hover:text-green-900 mr-3">Reply</button>
                        <button className="text-gray-600 hover:text-gray-900">Archive</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">DK</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">David Kim</div>
                            <div className="text-sm text-gray-500">david@communityngo.org</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">General Support Request</div>
                        <div className="text-sm text-gray-500">Need help with account access...</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Support</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Unread</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">6 hours ago</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                        <button className="text-green-600 hover:text-green-900 mr-3">Reply</button>
                        <button className="text-gray-600 hover:text-gray-900">Archive</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">MG</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Maria Garcia</div>
                            <div className="text-sm text-gray-500">maria@education.rw</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">Partnership Follow-up</div>
                        <div className="text-sm text-gray-500">Following up on our previous discussion...</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">Partnership</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Replied</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1 day ago</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                        <button className="text-green-600 hover:text-green-900 mr-3">Reply</button>
                        <button className="text-gray-600 hover:text-gray-900">Archive</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📝</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Quick Reply Templates</h3>
                    <p className="text-sm text-gray-600">Use pre-written response templates</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📊</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Message Analytics</h3>
                    <p className="text-sm text-gray-600">View response time and volume metrics</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🔔</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Notification Settings</h3>
                    <p className="text-sm text-gray-600">Configure message alerts and notifications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">System Settings</h2>
                <p className="text-gray-600">Configure system-wide settings, security, and preferences</p>
              </div>
              <div className="flex space-x-3">
                <button className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Save Changes
                </button>
                <button className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200">
                  Reset to Default
                </button>
              </div>
            </div>

            {/* Settings Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* General Settings */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm">⚙️</span>
                  </span>
                  General Settings
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">System Name</label>
                    <input
                      type="text"
                      defaultValue="Kigali Today Portal"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Default Language</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200">
                      <option value="en">English</option>
                      <option value="rw">Kinyarwanda</option>
                      <option value="fr">French</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Timezone</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200">
                      <option value="Africa/Kigali">Africa/Kigali (GMT+2)</option>
                      <option value="UTC">UTC (GMT+0)</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700">Maintenance Mode</label>
                      <p className="text-sm text-gray-500">Enable maintenance mode for system updates</p>
                    </div>
                    <button className="w-12 h-6 bg-gray-300 rounded-full relative transition-colors">
                      <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform"></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Security Settings */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm">🔒</span>
                  </span>
                  Security Settings
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Session Timeout (minutes)</label>
                    <input
                      type="number"
                      defaultValue="30"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Password Policy</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200">
                      <option value="strong">Strong (8+ chars, special chars)</option>
                      <option value="medium">Medium (6+ chars)</option>
                      <option value="weak">Weak (4+ chars)</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700">Two-Factor Authentication</label>
                      <p className="text-sm text-gray-500">Require 2FA for admin accounts</p>
                    </div>
                    <button className="w-12 h-6 bg-green-500 rounded-full relative transition-colors">
                      <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform"></div>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700">IP Whitelist</label>
                      <p className="text-sm text-gray-500">Restrict access to specific IP addresses</p>
                    </div>
                    <button className="w-12 h-6 bg-gray-300 rounded-full relative transition-colors">
                      <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform"></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Email Settings */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm">📧</span>
                  </span>
                  Email Settings
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">SMTP Server</label>
                    <input
                      type="text"
                      defaultValue="smtp.kigalitoday.rw"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">SMTP Port</label>
                    <input
                      type="number"
                      defaultValue="587"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">From Email</label>
                    <input
                      type="email"
                      defaultValue="noreply@kigalitoday.rw"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700">Email Notifications</label>
                      <p className="text-sm text-gray-500">Send system notifications via email</p>
                    </div>
                    <button className="w-12 h-6 bg-green-500 rounded-full relative transition-colors">
                      <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform"></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Integration Settings */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm">🔗</span>
                  </span>
                  Integration Settings
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">API Rate Limit</label>
                    <input
                      type="number"
                      defaultValue="1000"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Webhook URL</label>
                    <input
                      type="url"
                      placeholder="https://api.kigalitoday.rw/webhook"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700">Analytics Tracking</label>
                      <p className="text-sm text-gray-500">Enable Google Analytics integration</p>
                    </div>
                    <button className="w-12 h-6 bg-green-500 rounded-full relative transition-colors">
                      <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform"></div>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700">Social Media Integration</label>
                      <p className="text-sm text-gray-500">Connect with social media platforms</p>
                    </div>
                    <button className="w-12 h-6 bg-green-500 rounded-full relative transition-colors">
                      <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform"></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Google Analytics API Keys */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm">📊</span>
                  </span>
                  Google Analytics API Keys
                </h3>
                <div className="space-y-6">
                  {/* Google Analytics 4 Configuration */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Google Analytics 4 Configuration</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="GA4 Measurement ID (G-XXXXXXXXXX)"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                      />
                      <input
                        type="password"
                        placeholder="GA4 API Key"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Website-specific GA4 Properties */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Website-specific GA4 Properties</label>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="kigalitoday.com GA4 Property ID"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        />
                        <input
                          type="text"
                          placeholder="ktpress.rw GA4 Property ID"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Google Analytics Service Account */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Account Credentials</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Service Account Email"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                      />
                      <input
                        type="password"
                        placeholder="Private Key (JSON)"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700">Real-time Analytics Sync</label>
                      <p className="text-sm text-gray-500">Automatically sync Google Analytics data every 15 minutes</p>
                    </div>
                    <button className="w-12 h-6 bg-green-500 rounded-full relative transition-colors">
                      <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform"></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Social Media API Keys */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm">📱</span>
                  </span>
                  Social Media API Keys
                </h3>
                <div className="space-y-6">
                  {/* Facebook API */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Facebook App ID & Secret</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Facebook App ID"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      />
                      <input
                        type="password"
                        placeholder="Facebook App Secret"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Instagram API */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Instagram Access Token</label>
                    <input
                      type="password"
                      placeholder="Instagram Basic Display API Token"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
                    />
                  </div>

                  {/* Twitter/X API */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Twitter/X API Keys</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Twitter API Key"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all duration-200"
                      />
                      <input
                        type="password"
                        placeholder="Twitter API Secret"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* YouTube API */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">YouTube Data API Key</label>
                    <input
                      type="password"
                      placeholder="YouTube Data API v3 Key"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                    />
                  </div>

                  {/* TikTok API */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">TikTok Business API</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="TikTok Client Key"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all duration-200"
                      />
                      <input
                        type="password"
                        placeholder="TikTok Client Secret"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* LinkedIn API */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">LinkedIn API Credentials</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="LinkedIn Client ID"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition-all duration-200"
                      />
                      <input
                        type="password"
                        placeholder="LinkedIn Client Secret"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700">Auto-Sync Social Data</label>
                      <p className="text-sm text-gray-500">Automatically sync social media data every hour</p>
                    </div>
                    <button className="w-12 h-6 bg-green-500 rounded-full relative transition-colors">
                      <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* System Information */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">ℹ️</span>
                </span>
                System Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 mb-1">v2.1.4</div>
                  <div className="text-sm text-gray-600">Current Version</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 mb-1">99.8%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 mb-1">2.3GB</div>
                  <div className="text-sm text-gray-600">Storage Used</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
