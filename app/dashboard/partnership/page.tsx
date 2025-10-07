'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PartnershipDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(true);
  const [showNewPartnershipModal, setShowNewPartnershipModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPartnership, setSelectedPartnership] = useState<any>(null);
  const [partnershipForm, setPartnershipForm] = useState({
    name: '',
    type: '',
    description: '',
    contactPerson: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    partnershipType: '',
    objectives: [] as string[],
    targetAudience: '',
    budget: '',
    duration: '',
    startDate: '',
    endDate: '',
    platforms: [] as string[],
    expectedReach: '',
    specialRequirements: '',
    demographics: {
      ageRange: '',
      gender: '',
      location: '',
      interests: [] as string[]
    },
    companyDetails: {
      size: '',
      founded: '',
      website: '',
      address: '',
      registrationNumber: '',
      taxId: ''
    }
  });

  // Form handling functions
  const handleInputChange = (field: string, value: any) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setPartnershipForm(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof typeof prev] as any),
          [child]: value
        }
      }));
    } else {
      setPartnershipForm(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleArrayChange = (field: string, value: string, checked: boolean) => {
    setPartnershipForm(prev => {
      const currentArray = prev[field as keyof typeof prev] as string[];
      return {
        ...prev,
        [field]: checked 
          ? [...currentArray, value]
          : currentArray.filter((item: string) => item !== value)
      };
    });
  };

  const handleInterestChange = (interest: string) => {
    setPartnershipForm(prev => ({
      ...prev,
      demographics: {
        ...prev.demographics,
        interests: prev.demographics.interests.includes(interest)
          ? prev.demographics.interests.filter(i => i !== interest)
          : [...prev.demographics.interests, interest]
      }
    }));
  };

  const handleSubmitPartnership = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New Partnership Submitted:', partnershipForm);
    alert('Partnership proposal submitted successfully!');
    setShowNewPartnershipModal(false);
    // Reset form
    setPartnershipForm({
      name: '',
      type: '',
      description: '',
      contactPerson: '',
      email: '',
      phone: '',
      company: '',
      industry: '',
      partnershipType: '',
      objectives: [],
      targetAudience: '',
      budget: '',
      duration: '',
      startDate: '',
      endDate: '',
      platforms: [],
      expectedReach: '',
      specialRequirements: '',
      demographics: {
        ageRange: '',
        gender: '',
        location: '',
        interests: []
      },
      companyDetails: {
        size: '',
        founded: '',
        website: '',
        address: '',
        registrationNumber: '',
        taxId: ''
      }
    });
  };

  const handleCloseModal = () => {
    setShowNewPartnershipModal(false);
  };

  const handleViewPartnership = (partnership: any) => {
    setSelectedPartnership(partnership);
    setShowViewModal(true);
  };

  const handleEditPartnership = (partnership: any) => {
    setSelectedPartnership(partnership);
    // Pre-populate form with partnership data
    setPartnershipForm({
      name: partnership.name || '',
      type: partnership.type || '',
      description: partnership.description || '',
      contactPerson: partnership.contact?.split(' - ')[0] || '',
      email: partnership.contact?.split(' - ')[1] || '',
      phone: '',
      company: partnership.name || '',
      industry: partnership.type?.toLowerCase().replace(/\s+/g, '-') || '',
      partnershipType: partnership.type || '',
      objectives: [],
      targetAudience: partnership.description || '',
      budget: partnership.value?.replace('$', '').replace(',', '') || '',
      duration: partnership.duration || '',
      startDate: partnership.startDate || '',
      endDate: '',
      platforms: [],
      expectedReach: partnership.reach || '',
      specialRequirements: '',
      demographics: {
        ageRange: '',
        gender: '',
        location: '',
        interests: []
      },
      companyDetails: {
        size: '',
        founded: '',
        website: '',
        address: '',
        registrationNumber: '',
        taxId: ''
      }
    });
    setShowEditModal(true);
  };

  const handleCloseViewModal = () => {
    setShowViewModal(false);
    setSelectedPartnership(null);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedPartnership(null);
  };

  const handleUpdatePartnership = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partnership Updated:', partnershipForm);
    alert('Partnership updated successfully!');
    setShowEditModal(false);
    setSelectedPartnership(null);
  };

  // Mock partnership data
  const mockPartnerships = [
    {
      id: 1,
      name: "Tech Solutions Ltd",
      type: "Multi-Platform Partnership",
      status: "Active",
      startDate: "Jan 15, 2024",
      reach: "500K+",
      performance: "Excellent",
      description: "Multi-platform technology partnership focusing on digital innovation and community outreach",
      contact: "John Smith - john@techsolutions.rw",
      value: "$25,000",
      duration: "12 months"
    },
    {
      id: 2,
      name: "Rwanda Business Group",
      type: "Business Development",
      status: "Active",
      startDate: "Nov 1, 2023",
      reach: "300K+",
      performance: "Good",
      description: "Business development partnership with focus on economic growth and entrepreneurship",
      contact: "Sarah Johnson - sarah@rwandabusiness.rw",
      value: "$18,000",
      duration: "18 months"
    },
    {
      id: 3,
      name: "Community Development NGO",
      type: "Social Impact",
      status: "Pending",
      startDate: "Feb 1, 2024",
      reach: "200K+",
      performance: "Under Review",
      description: "Community outreach partnership for social impact initiatives and youth development",
      contact: "David Kim - david@communitydev.rw",
      value: "$12,000",
      duration: "6 months"
    }
  ];

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
          <nav className="flex space-x-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'overview'
                  ? 'border-green-500 text-green-600 bg-green-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>📊</span>
                <span>Overview</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('partnerships')}
              className={`py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'partnerships'
                  ? 'border-green-500 text-green-600 bg-green-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>🤝</span>
                <span>My Partnerships</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('ourstats')}
              className={`py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'ourstats'
                  ? 'border-green-500 text-green-600 bg-green-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>📊</span>
                <span>Our Stats</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'analytics'
                  ? 'border-green-500 text-green-600 bg-green-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>📈</span>
                <span>Analytics</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'messages'
                  ? 'border-green-500 text-green-600 bg-green-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>💬</span>
                <span>Messages</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'profile'
                  ? 'border-green-500 text-green-600 bg-green-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>👤</span>
                <span>Profile</span>
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
            <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-3xl shadow-2xl p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="mb-4">
                      <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-bold">
                        🤝 PARTNERSHIP ACCOUNT
                      </span>
                    </div>
                    <h2 className="text-4xl font-bold mb-3">Welcome to Partnership Dashboard</h2>
                    <p className="text-green-100 text-xl">Manage your strategic partnerships across our comprehensive media ecosystem</p>
                  </div>
                  <div className="text-right">
                    <div className="text-6xl font-bold animate-bounce">🤝</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">Active Partnerships</p>
                    <p className="text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">3</p>
                    <p className="text-xs text-green-600 font-medium mt-1">+1 this month</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-white text-2xl">🤝</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">Pending Requests</p>
                    <p className="text-3xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">2</p>
                    <p className="text-xs text-yellow-600 font-medium mt-1">Under review</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-white text-2xl">⏳</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">Total Reach</p>
                    <p className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">750K+</p>
                    <p className="text-xs text-green-600 font-medium mt-1">+12% this month</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-white text-2xl">📊</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">Success Rate</p>
                    <p className="text-3xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">95%</p>
                    <p className="text-xs text-green-600 font-medium mt-1">+5% this month</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Recent Partnership Activity</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Active</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-md transition-all duration-200">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">Partnership with Tech Solutions Ltd approved</p>
                      <p className="text-sm text-gray-600">Multi-platform technology partnership successfully launched</p>
                      <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl border border-yellow-200 hover:shadow-md transition-all duration-200">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-sm">⏳</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">Community Development NGO partnership pending</p>
                      <p className="text-sm text-gray-600">Social impact initiative under review</p>
                      <p className="text-xs text-gray-500 mt-1">5 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-all duration-200">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-sm">📝</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">New partnership proposal submitted</p>
                      <p className="text-sm text-gray-600">Business development collaboration proposal</p>
                      <p className="text-xs text-gray-500 mt-1">1 week ago</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Partnership Performance</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Excellent</span>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">Multi-Platform Partnership</span>
                      <span className="font-bold text-green-600">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-1000" style={{ width: '95%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Tech Solutions Ltd - Outstanding performance</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">Business Development</span>
                      <span className="font-bold text-blue-600">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000" style={{ width: '78%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Rwanda Business Group - Good progress</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">Social Impact Initiative</span>
                      <span className="font-bold text-yellow-600">45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-3 rounded-full transition-all duration-1000" style={{ width: '45%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Community Development NGO - Under review</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Quick Actions</h3>
                  <p className="text-gray-600">Common partnership management tasks</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <button className="flex items-center space-x-4 p-6 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-white text-xl">➕</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">Submit New Proposal</h4>
                    <p className="text-sm text-gray-600">Create a new partnership proposal</p>
                  </div>
                </button>
                
                <button className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-white text-xl">📊</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">View Analytics</h4>
                    <p className="text-sm text-gray-600">Check partnership performance metrics</p>
                  </div>
                </button>
                
                <button className="flex items-center space-x-4 p-6 bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">Contact Support</h4>
                    <p className="text-sm text-gray-600">Get help with your partnerships</p>
                  </div>
                </button>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-2">My Partnerships</h2>
                <p className="text-gray-600">Manage and track your active partnership collaborations</p>
              </div>
              <div className="flex space-x-3">
                <button 
                  onClick={() => setShowNewPartnershipModal(true)}
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  + New Partnership
                </button>
              </div>
            </div>

            {/* Partnership Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Total Partnerships</p>
                    <p className="text-2xl font-bold text-gray-900">3</p>
                    <p className="text-xs text-green-600 font-medium">+1 this month</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🤝</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Active Value</p>
                    <p className="text-2xl font-bold text-gray-900">$55K</p>
                    <p className="text-xs text-blue-600 font-medium">Total investment</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">💰</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Success Rate</p>
                    <p className="text-2xl font-bold text-gray-900">95%</p>
                    <p className="text-xs text-green-600 font-medium">Excellent</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Total Reach</p>
                    <p className="text-2xl font-bold text-gray-900">750K+</p>
                    <p className="text-xs text-green-600 font-medium">+12% growth</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📊</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Partnership Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Tech Solutions Ltd */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl">🏢</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Tech Solutions Ltd</h3>
                      <p className="text-sm text-gray-500">Technology & Innovation</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Active</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">Multi-platform technology partnership focusing on digital innovation and community outreach across radio, print, and digital channels.</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Started:</span>
                    <span className="font-semibold text-gray-900">Jan 15, 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Duration:</span>
                    <span className="font-semibold text-gray-900">12 months</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Investment:</span>
                    <span className="font-semibold text-green-600">$25,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Reach:</span>
                    <span className="font-semibold text-blue-600">500K+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Performance:</span>
                    <span className="font-semibold text-green-600">Excellent</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button 
                    onClick={() => handleViewPartnership(mockPartnerships[0])}
                    className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 text-sm"
                  >
                    View Details
                  </button>
                  <button 
                    onClick={() => handleEditPartnership(mockPartnerships[0])}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 text-sm"
                  >
                    Edit
                  </button>
                </div>
              </div>

              {/* Rwanda Business Group */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl">🏛️</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Rwanda Business Group</h3>
                      <p className="text-sm text-gray-500">Business Development</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Active</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">Business development partnership with focus on economic growth and entrepreneurship across Rwanda's business ecosystem.</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Started:</span>
                    <span className="font-semibold text-gray-900">Nov 1, 2023</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Duration:</span>
                    <span className="font-semibold text-gray-900">18 months</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Investment:</span>
                    <span className="font-semibold text-green-600">$18,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Reach:</span>
                    <span className="font-semibold text-blue-600">300K+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Performance:</span>
                    <span className="font-semibold text-green-600">Good</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button 
                    onClick={() => handleViewPartnership(mockPartnerships[1])}
                    className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 text-sm"
                  >
                    View Details
                  </button>
                  <button 
                    onClick={() => handleEditPartnership(mockPartnerships[1])}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 text-sm"
                  >
                    Edit
                  </button>
                </div>
              </div>

              {/* Community Development NGO */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl">🌱</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Community Development NGO</h3>
                      <p className="text-sm text-gray-500">Social Impact</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">Pending</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">Community outreach partnership for social impact initiatives and youth development programs across Rwanda.</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Submitted:</span>
                    <span className="font-semibold text-gray-900">Feb 1, 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Duration:</span>
                    <span className="font-semibold text-gray-900">6 months</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Investment:</span>
                    <span className="font-semibold text-green-600">$12,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Expected Reach:</span>
                    <span className="font-semibold text-blue-600">200K+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Status:</span>
                    <span className="font-semibold text-yellow-600">Under Review</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button 
                    onClick={() => handleViewPartnership(mockPartnerships[2])}
                    className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 text-sm"
                  >
                    View Details
                  </button>
                  <button 
                    onClick={() => handleEditPartnership(mockPartnerships[2])}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 text-sm"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Our Stats Tab */}
        {activeTab === 'ourstats' && (
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Header Section */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Company Statistics</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover why Kigali Today Ltd is Rwanda's premier media partnership platform. 
                Our impressive reach and proven track record make us the ideal partner for your business growth.
              </p>
            </div>

            {/* Key Performance Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-xl p-8 text-white text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl font-bold mb-2">750K+</div>
                <div className="text-blue-100 text-lg font-semibold">Monthly Reach</div>
                <div className="text-blue-200 text-sm mt-2">Across all platforms</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl shadow-xl p-8 text-white text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl font-bold mb-2">80%+</div>
                <div className="text-green-100 text-lg font-semibold">National Coverage</div>
                <div className="text-green-200 text-sm mt-2">Radio & digital reach</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl shadow-xl p-8 text-white text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-purple-100 text-lg font-semibold">Years Experience</div>
                <div className="text-purple-200 text-sm mt-2">Media industry leader</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl shadow-xl p-8 text-white text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl font-bold mb-2">2000+</div>
                <div className="text-orange-100 text-lg font-semibold">Successful Partnerships</div>
                <div className="text-orange-200 text-sm mt-2">Trusted by brands</div>
              </div>
            </div>

            {/* Platform Performance */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-200 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Media Platform Performance</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* KT Radio */}
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📻</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">KT Radio</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">National Coverage</span>
                      <span className="font-bold text-blue-600">80%+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Daily Listeners</span>
                      <span className="font-bold text-blue-600">150K+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Live Shows</span>
                      <span className="font-bold text-blue-600">12+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Languages</span>
                      <span className="font-bold text-blue-600">3</span>
                    </div>
                  </div>
                </div>

                {/* KT Press */}
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📰</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">KT Press</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Weekly Circulation</span>
                      <span className="font-bold text-green-600">50K+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Distribution Points</span>
                      <span className="font-bold text-green-600">200+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Business Leaders</span>
                      <span className="font-bold text-green-600">85%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Readership</span>
                      <span className="font-bold text-green-600">200K+</span>
                    </div>
                  </div>
                </div>

                {/* kigalitoday.com */}
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🌐</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">kigalitoday.com</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Monthly Visitors</span>
                      <span className="font-bold text-purple-600">200K+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Page Views</span>
                      <span className="font-bold text-purple-600">1.2M+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Bounce Rate</span>
                      <span className="font-bold text-purple-600">35%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Avg. Session</span>
                      <span className="font-bold text-purple-600">4.2 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Audience Demographics */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-200 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Audience Demographics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">25-45</div>
                  <div className="text-gray-700 font-semibold">Primary Age Group</div>
                  <div className="text-gray-500 text-sm mt-1">Decision makers & professionals</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl">
                  <div className="text-3xl font-bold text-pink-600 mb-2">60/40</div>
                  <div className="text-gray-700 font-semibold">Gender Split</div>
                  <div className="text-gray-500 text-sm mt-1">Male/Female ratio</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl">
                  <div className="text-3xl font-bold text-teal-600 mb-2">Urban</div>
                  <div className="text-gray-700 font-semibold">Primary Location</div>
                  <div className="text-gray-500 text-sm mt-1">Kigali & major cities</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl">
                  <div className="text-3xl font-bold text-amber-600 mb-2">85%</div>
                  <div className="text-gray-700 font-semibold">Kinyarwanda</div>
                  <div className="text-gray-500 text-sm mt-1">Native language speakers</div>
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-3xl shadow-2xl p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8 text-center">Why Choose Kigali Today Ltd?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">🏆</span>
                    </div>
                    <h4 className="text-xl font-bold mb-3">Proven Track Record</h4>
                    <p className="text-white/90">15+ years of successful media partnerships and campaign management</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">📡</span>
                    </div>
                    <h4 className="text-xl font-bold mb-3">Unmatched Reach</h4>
                    <p className="text-white/90">80% national coverage through radio, print, and digital platforms</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">🤝</span>
                    </div>
                    <h4 className="text-xl font-bold mb-3">Trusted Partner</h4>
                    <p className="text-white/90">2000+ successful partnerships with leading brands and organizations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Partner with Rwanda's Leading Media Platform?</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of successful brands who trust Kigali Today Ltd for their media partnership needs. 
                Let's create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setShowNewPartnershipModal(true)}
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Start Your Partnership
                </button>
                <Link
                  href="/advertising"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
                >
                  Explore Advertising Options
                </Link>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Partnership Analytics</h2>
                <p className="text-gray-600">Track and analyze your partnership performance and impact</p>
              </div>
              <div className="flex space-x-3">
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Export Report
                </button>
                <button className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200">
                  Schedule Report
                </button>
              </div>
            </div>
            
            {/* Key Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🤝</span>
                  </div>
                  <span className="text-2xl font-bold text-green-600">+15%</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Active Partnerships</h3>
                <p className="text-gray-600 text-sm">3 partnerships generating impact</p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📊</span>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">750K+</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Total Reach</h3>
                <p className="text-gray-600 text-sm">Across all partnership channels</p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">💰</span>
                  </div>
                  <span className="text-2xl font-bold text-purple-600">$55K</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Partnership Value</h3>
                <p className="text-gray-600 text-sm">Total partnership investments</p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <span className="text-2xl font-bold text-yellow-600">95%</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Success Rate</h3>
                <p className="text-gray-600 text-sm">Partnership goal achievement</p>
              </div>
            </div>

            {/* Partnership Performance Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📈</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Partnership Growth</h3>
                    <p className="text-gray-600">Monthly partnership performance trends</p>
                  </div>
                </div>
                <div className="h-64 bg-gray-50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📊</div>
                    <p className="text-gray-500">Partnership growth chart</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Partnership Types</h3>
                    <p className="text-gray-600">Distribution across partnership categories</p>
                  </div>
                </div>
                <div className="h-64 bg-gray-50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🥧</div>
                    <p className="text-gray-500">Partnership type distribution</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Performing Partnerships */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🏆</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Top Performing Partnerships</h3>
                    <p className="text-gray-600">Best performing partnerships by impact and reach</p>
                  </div>
                </div>
                <button className="text-green-600 hover:text-green-700 text-sm font-medium">View All</button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Partnership</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Reach</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Performance</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="font-semibold text-gray-900">Tech Solutions Ltd</div>
                        <div className="text-sm text-gray-500">Multi-Platform Partnership</div>
                      </td>
                      <td className="py-4 px-4 text-gray-600">Technology</td>
                      <td className="py-4 px-4 font-semibold text-blue-600">500K+</td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Excellent</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Active</span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="font-semibold text-gray-900">Rwanda Business Group</div>
                        <div className="text-sm text-gray-500">Business Development</div>
                      </td>
                      <td className="py-4 px-4 text-gray-600">Business</td>
                      <td className="py-4 px-4 font-semibold text-blue-600">300K+</td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">Good</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Active</span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="font-semibold text-gray-900">Community Development NGO</div>
                        <div className="text-sm text-gray-500">Social Impact</div>
                      </td>
                      <td className="py-4 px-4 text-gray-600">NGO</td>
                      <td className="py-4 px-4 font-semibold text-blue-600">200K+</td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">Under Review</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">Pending</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Support</h2>
                <p className="text-gray-600">Get in touch with our partnership team via email for assistance</p>
              </div>
              <div className="flex space-x-3">
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Send Email
                </button>
                <button className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200">
                  View History
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Email Form */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Send Support Email</h3>
                    <p className="text-gray-600">Send us your partnership questions or concerns</p>
                  </div>
                </div>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                    <input
                      type="text"
                      placeholder="Brief description of your partnership inquiry"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200">
                      <option value="">Select a category</option>
                      <option value="partnership-proposal">Partnership Proposal</option>
                      <option value="partnership-management">Partnership Management</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="billing-inquiry">Billing Inquiry</option>
                      <option value="performance-review">Performance Review</option>
                      <option value="general-inquiry">General Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Priority *</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200">
                      <option value="low">Low - General question</option>
                      <option value="medium">Medium - Need assistance</option>
                      <option value="high">High - Urgent issue</option>
                      <option value="critical">Critical - Partnership issue</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea
                      rows={6}
                      placeholder="Please provide detailed information about your partnership inquiry. Include partnership names, specific issues, or any relevant details that can help us assist you better."
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 resize-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Attachments (Optional)</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-green-400 transition-colors">
                      <span className="text-4xl mb-2 block">📎</span>
                      <p className="text-gray-600 mb-2">Drop files here or click to upload</p>
                      <p className="text-xs text-gray-500">PDF, DOC, PNG, JPG up to 10MB</p>
                      <input type="file" multiple className="hidden" />
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                    Send Email to Partnership Team
                  </button>
                </form>
              </div>

              {/* Contact Information & History */}
              <div className="space-y-6">
                {/* Contact Information */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
                      <p className="text-gray-600">Multiple ways to reach our partnership team</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl border border-green-200">
                      <span className="text-green-600 text-xl">📧</span>
                      <div>
                        <p className="font-semibold text-green-800">Partnership Email</p>
                        <p className="text-sm text-green-600">partnerships@kigalitoday.com</p>
                        <p className="text-xs text-green-500">Response within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <span className="text-blue-600 text-xl">📞</span>
                      <div>
                        <p className="font-semibold text-blue-800">Partnership Phone</p>
                        <p className="text-sm text-blue-600">+250 788 123 456</p>
                        <p className="text-xs text-blue-500">Mon-Fri 8AM-6PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-xl border border-purple-200">
                      <span className="text-purple-600 text-xl">💬</span>
                      <div>
                        <p className="font-semibold text-purple-800">WhatsApp</p>
                        <p className="text-sm text-purple-600">+250 788 123 456</p>
                        <p className="text-xs text-purple-500">Quick responses</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Emails */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-white text-xl">📋</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Recent Emails</h3>
                        <p className="text-gray-600">Your partnership support history</p>
                      </div>
                    </div>
                    <button className="text-green-600 hover:text-green-700 text-sm font-medium">View All</button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">Partnership Proposal Review</h4>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Resolved</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Need feedback on new partnership proposal</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Sent: Jan 20, 2024</span>
                        <span>Replied: Jan 21, 2024</span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">Performance Metrics Question</h4>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">In Progress</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Question about partnership performance tracking</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Sent: Jan 18, 2024</span>
                        <span>Awaiting reply</span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">Partnership Agreement Update</h4>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Resolved</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Request to update partnership terms</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Sent: Jan 15, 2024</span>
                        <span>Replied: Jan 15, 2024</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Help */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white text-xl">❓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Quick Help</h3>
                      <p className="text-gray-600">Common partnership questions and resources</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                      <div className="flex items-center space-x-3">
                        <span className="text-green-600">🤝</span>
                        <span className="font-medium text-gray-900">How to submit a partnership proposal?</span>
                      </div>
                    </button>
                    <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                      <div className="flex items-center space-x-3">
                        <span className="text-blue-600">📊</span>
                        <span className="font-medium text-gray-900">Understanding partnership performance metrics</span>
                      </div>
                    </button>
                    <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                      <div className="flex items-center space-x-3">
                        <span className="text-purple-600">📝</span>
                        <span className="font-medium text-gray-900">Partnership agreement guidelines</span>
                      </div>
                    </button>
                    <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                      <div className="flex items-center space-x-3">
                        <span className="text-yellow-600">📚</span>
                        <span className="font-medium text-gray-900">View all partnership resources</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h2>
                <p className="text-gray-600">Manage your partnership account and preferences</p>
              </div>
              <div className="flex space-x-3">
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Save Changes
                </button>
                <button className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200">
                  Export Data
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Information */}
              <div className="lg:col-span-2 space-y-8">
                {/* Personal Information */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white text-xl">👤</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Personal Information</h3>
                      <p className="text-gray-600">Update your personal details</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        defaultValue="John Doe"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        defaultValue="john.doe@partnership.com"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        defaultValue="+250 788 123 456"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Organization</label>
                      <input
                        type="text"
                        defaultValue="Partnership Solutions Ltd"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Position</label>
                      <input
                        type="text"
                        defaultValue="Partnership Manager"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                      <input
                        type="text"
                        defaultValue="Kigali, Rwanda"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                {/* Company Details */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white text-xl">🏢</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Company Details</h3>
                      <p className="text-gray-600">Organization information for partnerships</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name *</label>
                      <input
                        type="text"
                        defaultValue="Partnership Solutions Ltd"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Company Type</label>
                      <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200">
                        <option value="private">Private Company</option>
                        <option value="public">Public Company</option>
                        <option value="ngo">NGO</option>
                        <option value="government">Government</option>
                        <option value="startup">Startup</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Industry</label>
                      <input
                        type="text"
                        defaultValue="Technology & Innovation"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Company Size</label>
                      <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200">
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="500+">500+ employees</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Registration Number</label>
                      <input
                        type="text"
                        defaultValue="RDB-2023-001234"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Tax ID</label>
                      <input
                        type="text"
                        defaultValue="TAX-2023-567890"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Company Address</label>
                      <textarea
                        rows={3}
                        defaultValue="KG 123 St, Kacyiru, Kigali, Rwanda"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 resize-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Website</label>
                      <input
                        type="url"
                        defaultValue="https://partnershipsolutions.rw"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Founded Year</label>
                      <input
                        type="number"
                        defaultValue="2020"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Company Description</label>
                      <textarea
                        rows={4}
                        defaultValue="We are a leading partnership solutions company focused on creating meaningful collaborations between organizations and communities across Rwanda."
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 resize-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Profile Picture */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white text-xl">📸</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Profile Picture</h3>
                      <p className="text-gray-600">Update your profile image</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">JD</span>
                    </div>
                    <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200">
                      Change Photo
                    </button>
                    <p className="text-xs text-gray-500 mt-2">JPG, PNG up to 5MB</p>
                  </div>
                </div>

                {/* Account Status */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white text-xl">✅</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Account Status</h3>
                      <p className="text-gray-600">Your partnership account status</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Account Type</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Partnership</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Verification</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Verified</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Active Partnerships</span>
                      <span className="font-semibold text-green-600">3</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Member Since</span>
                      <span className="font-semibold text-gray-900">Jan 2024</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white text-xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Quick Actions</h3>
                      <p className="text-gray-600">Common account actions</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                      <div className="flex items-center space-x-3">
                        <span className="text-green-600">🔒</span>
                        <span className="font-medium text-gray-900">Change Password</span>
                      </div>
                    </button>
                    <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                      <div className="flex items-center space-x-3">
                        <span className="text-blue-600">📧</span>
                        <span className="font-medium text-gray-900">Email Preferences</span>
                      </div>
                    </button>
                    <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                      <div className="flex items-center space-x-3">
                        <span className="text-purple-600">🔔</span>
                        <span className="font-medium text-gray-900">Notification Settings</span>
                      </div>
                    </button>
                    <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                      <div className="flex items-center space-x-3">
                        <span className="text-red-600">🗑️</span>
                        <span className="font-medium text-gray-900">Delete Account</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* New Partnership Modal */}
      {showNewPartnershipModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🤝</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Create New Partnership</h2>
                    <p className="text-gray-600">Submit a new partnership proposal</p>
                  </div>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="text-gray-500 text-xl">×</span>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <form onSubmit={handleSubmitPartnership} className="p-8 space-y-8">
              {/* Basic Information */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm">1</span>
                  </span>
                  Basic Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company/Organization Name *</label>
                    <input
                      type="text"
                      value={partnershipForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      placeholder="Enter company name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Industry *</label>
                    <select
                      value={partnershipForm.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      required
                    >
                      <option value="">Select industry</option>
                      <option value="technology">Technology & Innovation</option>
                      <option value="business">Business & Finance</option>
                      <option value="ngo">NGO & Social Impact</option>
                      <option value="education">Education</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="government">Government</option>
                      <option value="media">Media & Entertainment</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Partnership Type *</label>
                    <select
                      value={partnershipForm.partnershipType}
                      onChange={(e) => handleInputChange('partnershipType', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      required
                    >
                      <option value="">Select partnership type</option>
                      <option value="multi-platform">Multi-Platform Partnership</option>
                      <option value="radio-only">Radio Partnership</option>
                      <option value="digital-only">Digital Partnership</option>
                      <option value="event-collaboration">Event Collaboration</option>
                      <option value="content-partnership">Content Partnership</option>
                      <option value="sponsorship">Sponsorship</option>
                      <option value="community-initiative">Community Initiative</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Size</label>
                    <select
                      value={partnershipForm.companyDetails.size}
                      onChange={(e) => handleInputChange('companyDetails.size', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Partnership Description *</label>
                  <textarea
                    value={partnershipForm.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 resize-none"
                    placeholder="Describe your partnership proposal, objectives, and expected outcomes..."
                    required
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm">2</span>
                  </span>
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Primary Contact Person *</label>
                    <input
                      type="text"
                      value={partnershipForm.contactPerson}
                      onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      placeholder="Full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={partnershipForm.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      placeholder="contact@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={partnershipForm.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      placeholder="+250 788 123 456"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Website</label>
                    <input
                      type="url"
                      value={partnershipForm.companyDetails.website}
                      onChange={(e) => handleInputChange('companyDetails.website', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      placeholder="https://company.com"
                    />
                  </div>
                </div>
              </div>

              {/* Partnership Details */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm">3</span>
                  </span>
                  Partnership Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Range *</label>
                    <select
                      value={partnershipForm.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      required
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Partnership Duration *</label>
                    <select
                      value={partnershipForm.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      required
                    >
                      <option value="">Select duration</option>
                      <option value="3-months">3 months</option>
                      <option value="6-months">6 months</option>
                      <option value="12-months">12 months</option>
                      <option value="18-months">18 months</option>
                      <option value="24-months">24 months</option>
                      <option value="ongoing">Ongoing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Expected Start Date</label>
                    <input
                      type="date"
                      value={partnershipForm.startDate}
                      onChange={(e) => handleInputChange('startDate', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Expected Reach</label>
                    <input
                      type="text"
                      value={partnershipForm.expectedReach}
                      onChange={(e) => handleInputChange('expectedReach', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      placeholder="e.g., 100K+ audience"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Target Audience Description</label>
                  <input
                    type="text"
                    value={partnershipForm.targetAudience}
                    onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                    placeholder="Brief description of your target audience (e.g., 'Business professionals in Kigali')"
                  />
                </div>
              </div>

              {/* Target Audience Demographics */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm">👥</span>
                  </span>
                  Target Audience Demographics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Age Range *</label>
                    <select
                      value={partnershipForm.demographics.ageRange}
                      onChange={(e) => handleInputChange('demographics.ageRange', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      required
                    >
                      <option value="">Select age range</option>
                      <option value="18-24">18-24 years</option>
                      <option value="25-34">25-34 years</option>
                      <option value="35-44">35-44 years</option>
                      <option value="45-54">45-54 years</option>
                      <option value="55-64">55-64 years</option>
                      <option value="65+">65+ years</option>
                      <option value="all">All ages</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
                    <select
                      value={partnershipForm.demographics.gender}
                      onChange={(e) => handleInputChange('demographics.gender', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="all">All genders</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Primary Location *</label>
                    <input
                      type="text"
                      value={partnershipForm.demographics.location}
                      onChange={(e) => handleInputChange('demographics.location', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      placeholder="e.g., Kigali, Rwanda or All of Rwanda"
                      required
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Target Interests & Behaviors</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {['Technology', 'Business', 'Finance', 'Health', 'Education', 'Agriculture', 'Tourism', 'Sports', 'Entertainment', 'Social Impact', 'Environment', 'Innovation'].map((interest) => (
                      <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={partnershipForm.demographics.interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                          className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                        />
                        <span className="text-sm text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Platforms & Objectives */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm">5</span>
                  </span>
                  Platforms & Objectives
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Preferred Platforms *</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['KT Radio', 'KT Press', 'kigalitoday.com', 'Social Media'].map((platform) => (
                        <label key={platform} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={partnershipForm.platforms.includes(platform)}
                            onChange={(e) => handleArrayChange('platforms', platform, e.target.checked)}
                            className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                          />
                          <span className="text-sm text-gray-700">{platform}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Partnership Objectives *</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['Brand Awareness', 'Lead Generation', 'Community Engagement', 'Social Impact', 'Revenue Growth', 'Market Expansion'].map((objective) => (
                        <label key={objective} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={partnershipForm.objectives.includes(objective)}
                            onChange={(e) => handleArrayChange('objectives', objective, e.target.checked)}
                            className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                          />
                          <span className="text-sm text-gray-700">{objective}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm">6</span>
                  </span>
                  Additional Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Special Requirements</label>
                    <textarea
                      value={partnershipForm.specialRequirements}
                      onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 resize-none"
                      placeholder="Any special requirements, preferences, or additional information..."
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Company Registration Number</label>
                      <input
                        type="text"
                        value={partnershipForm.companyDetails.registrationNumber}
                        onChange={(e) => handleInputChange('companyDetails.registrationNumber', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                        placeholder="RDB-2023-001234"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Tax ID</label>
                      <input
                        type="text"
                        value={partnershipForm.companyDetails.taxId}
                        onChange={(e) => handleInputChange('companyDetails.taxId', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                        placeholder="TAX-2023-567890"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Submit Partnership Proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Partnership Details Modal */}
      {showViewModal && selectedPartnership && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🤝</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Partnership Details</h2>
                    <p className="text-gray-600">{selectedPartnership.name}</p>
                  </div>
                </div>
                <button
                  onClick={handleCloseViewModal}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="text-gray-500 text-xl">×</span>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8">
              {/* Partnership Overview */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm">📋</span>
                  </span>
                  Partnership Overview
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Company Name</label>
                    <p className="text-gray-900">{selectedPartnership.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Partnership Type</label>
                    <p className="text-gray-900">{selectedPartnership.type}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Status</label>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      selectedPartnership.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {selectedPartnership.status}
                    </span>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Performance</label>
                    <p className="text-gray-900">{selectedPartnership.performance}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                  <p className="text-gray-900 leading-relaxed">{selectedPartnership.description}</p>
                </div>
              </div>

              {/* Partnership Details */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm">📊</span>
                  </span>
                  Partnership Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Start Date</label>
                    <p className="text-gray-900">{selectedPartnership.startDate}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Duration</label>
                    <p className="text-gray-900">{selectedPartnership.duration}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Investment Value</label>
                    <p className="text-green-600 font-semibold">{selectedPartnership.value}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Reach</label>
                    <p className="text-blue-600 font-semibold">{selectedPartnership.reach}</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm">👤</span>
                  </span>
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Primary Contact</label>
                    <p className="text-gray-900">{selectedPartnership.contact}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Partnership ID</label>
                    <p className="text-gray-900">#{selectedPartnership.id}</p>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  onClick={handleCloseViewModal}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    handleCloseViewModal();
                    handleEditPartnership(selectedPartnership);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Edit Partnership
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Partnership Modal */}
      {showEditModal && selectedPartnership && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">✏️</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Edit Partnership</h2>
                    <p className="text-gray-600">Update partnership information</p>
                  </div>
                </div>
                <button
                  onClick={handleCloseEditModal}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="text-gray-500 text-xl">×</span>
                </button>
              </div>
            </div>

            {/* Modal Content - Reuse the same form structure as New Partnership */}
            <form onSubmit={handleUpdatePartnership} className="p-8 space-y-8">
              {/* Basic Information */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm">1</span>
                  </span>
                  Basic Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company/Organization Name *</label>
                    <input
                      type="text"
                      value={partnershipForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      placeholder="Enter company name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Industry *</label>
                    <select
                      value={partnershipForm.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      required
                    >
                      <option value="">Select industry</option>
                      <option value="technology">Technology & Innovation</option>
                      <option value="business">Business & Finance</option>
                      <option value="ngo">NGO & Social Impact</option>
                      <option value="education">Education</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="government">Government</option>
                      <option value="media">Media & Entertainment</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Partnership Type *</label>
                    <select
                      value={partnershipForm.partnershipType}
                      onChange={(e) => handleInputChange('partnershipType', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      required
                    >
                      <option value="">Select partnership type</option>
                      <option value="multi-platform">Multi-Platform Partnership</option>
                      <option value="radio-only">Radio Partnership</option>
                      <option value="digital-only">Digital Partnership</option>
                      <option value="event-collaboration">Event Collaboration</option>
                      <option value="content-partnership">Content Partnership</option>
                      <option value="sponsorship">Sponsorship</option>
                      <option value="community-initiative">Community Initiative</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Size</label>
                    <select
                      value={partnershipForm.companyDetails.size}
                      onChange={(e) => handleInputChange('companyDetails.size', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Partnership Description *</label>
                  <textarea
                    value={partnershipForm.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 resize-none"
                    placeholder="Describe your partnership proposal, objectives, and expected outcomes..."
                    required
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm">2</span>
                  </span>
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Primary Contact Person *</label>
                    <input
                      type="text"
                      value={partnershipForm.contactPerson}
                      onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      placeholder="Full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={partnershipForm.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      placeholder="contact@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={partnershipForm.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      placeholder="+250 788 123 456"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company Website</label>
                    <input
                      type="url"
                      value={partnershipForm.companyDetails.website}
                      onChange={(e) => handleInputChange('companyDetails.website', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      placeholder="https://company.com"
                    />
                  </div>
                </div>
              </div>

              {/* Partnership Details */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm">3</span>
                  </span>
                  Partnership Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Range *</label>
                    <select
                      value={partnershipForm.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      required
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Partnership Duration *</label>
                    <select
                      value={partnershipForm.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      required
                    >
                      <option value="">Select duration</option>
                      <option value="3-months">3 months</option>
                      <option value="6-months">6 months</option>
                      <option value="12-months">12 months</option>
                      <option value="18-months">18 months</option>
                      <option value="24-months">24 months</option>
                      <option value="ongoing">Ongoing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Expected Start Date</label>
                    <input
                      type="date"
                      value={partnershipForm.startDate}
                      onChange={(e) => handleInputChange('startDate', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Expected Reach</label>
                    <input
                      type="text"
                      value={partnershipForm.expectedReach}
                      onChange={(e) => handleInputChange('expectedReach', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                      placeholder="e.g., 100K+ audience"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Target Audience Description</label>
                  <input
                    type="text"
                    value={partnershipForm.targetAudience}
                    onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                    placeholder="Brief description of your target audience (e.g., 'Business professionals in Kigali')"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handleCloseEditModal}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Update Partnership
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
