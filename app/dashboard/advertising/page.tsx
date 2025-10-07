'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdvertisingDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null);
  const [campaignForm, setCampaignForm] = useState({
    name: '',
    description: '',
    package: '',
    targetAudience: '',
    budget: '',
    duration: '',
    platforms: [] as string[],
    startDate: '',
    endDate: '',
    campaignType: '',
    industry: '',
    objectives: [] as string[],
    demographics: {
      ageRange: '',
      gender: '',
      location: '',
      interests: [] as string[]
    },
    creativeAssets: {
      hasLogo: false,
      hasImages: false,
      hasVideo: false,
      hasAudio: false,
      uploadedFiles: {
        logo: null as File | null,
        images: [] as File[],
        video: null as File | null,
        audio: null as File | null
      }
    },
    contactInfo: {
      primaryContact: '',
      email: '',
      phone: '',
      company: ''
    },
    specialRequirements: '',
    budgetAllocation: {
      radio: 0,
      press: 0,
      digital: 0
    }
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCreateCampaign = () => {
    setShowCreateModal(true);
  };

  const handleCloseModal = () => {
    setShowCreateModal(false);
    setCampaignForm({
      name: '',
      description: '',
      package: '',
      targetAudience: '',
      budget: '',
      duration: '',
      platforms: [] as string[],
      startDate: '',
      endDate: '',
      campaignType: '',
      industry: '',
      objectives: [] as string[],
      demographics: {
        ageRange: '',
        gender: '',
        location: '',
        interests: [] as string[]
      },
      creativeAssets: {
        hasLogo: false,
        hasImages: false,
        hasVideo: false,
        hasAudio: false,
        uploadedFiles: {
          logo: null,
          images: [],
          video: null,
          audio: null
        }
      },
      contactInfo: {
        primaryContact: '',
        email: '',
        phone: '',
        company: ''
      },
      specialRequirements: '',
      budgetAllocation: {
        radio: 0,
        press: 0,
        digital: 0
      }
    });
  };

  const handleSubmitCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Creating campaign:', campaignForm);
    alert('Campaign created successfully!');
    handleCloseModal();
  };

  const handlePlatformChange = (platform: string) => {
    setCampaignForm(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter(p => p !== platform)
        : [...prev.platforms, platform]
    }));
  };

  const handleObjectiveChange = (objective: string) => {
    setCampaignForm(prev => ({
      ...prev,
      objectives: prev.objectives.includes(objective)
        ? prev.objectives.filter(o => o !== objective)
        : [...prev.objectives, objective]
    }));
  };

  const handleInterestChange = (interest: string) => {
    setCampaignForm(prev => ({
      ...prev,
      demographics: {
        ...prev.demographics,
        interests: prev.demographics.interests.includes(interest)
          ? prev.demographics.interests.filter(i => i !== interest)
          : [...prev.demographics.interests, interest]
      }
    }));
  };

  const handleCreativeAssetChange = (asset: string) => {
    setCampaignForm(prev => ({
      ...prev,
      creativeAssets: {
        ...prev.creativeAssets,
        [asset]: !prev.creativeAssets[asset as keyof typeof prev.creativeAssets]
      }
    }));
  };

  const handleBudgetAllocationChange = (platform: string, value: number) => {
    setCampaignForm(prev => ({
      ...prev,
      budgetAllocation: {
        ...prev.budgetAllocation,
        [platform]: value
      }
    }));
  };

  const handleFileUpload = (assetType: string, files: FileList | null) => {
    if (!files) return;

    setCampaignForm(prev => ({
      ...prev,
      creativeAssets: {
        ...prev.creativeAssets,
        uploadedFiles: {
          ...prev.creativeAssets.uploadedFiles,
          [assetType]: assetType === 'images' ? Array.from(files) : files[0]
        }
      }
    }));
  };

  const removeUploadedFile = (assetType: string) => {
    setCampaignForm(prev => ({
      ...prev,
      creativeAssets: {
        ...prev.creativeAssets,
        uploadedFiles: {
          ...prev.creativeAssets.uploadedFiles,
          [assetType]: assetType === 'images' ? [] : null
        }
      }
    }));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleViewCampaign = (campaign: any) => {
    setSelectedCampaign(campaign);
    setShowViewModal(true);
  };

  const handleEditCampaign = (campaign: any) => {
    setSelectedCampaign(campaign);
    // Pre-populate form with campaign data
    setCampaignForm({
      name: campaign.name || '',
      description: campaign.description || '',
      package: campaign.package || '',
      targetAudience: campaign.targetAudience || '',
      budget: campaign.budget || '',
      duration: campaign.duration || '',
      platforms: campaign.platforms || [],
      startDate: campaign.startDate || '',
      endDate: campaign.endDate || '',
      campaignType: campaign.campaignType || '',
      industry: campaign.industry || '',
      objectives: campaign.objectives || [],
      demographics: {
        ageRange: campaign.demographics?.ageRange || '',
        gender: campaign.demographics?.gender || '',
        location: campaign.demographics?.location || '',
        interests: campaign.demographics?.interests || []
      },
      creativeAssets: {
        hasLogo: campaign.creativeAssets?.hasLogo || false,
        hasImages: campaign.creativeAssets?.hasImages || false,
        hasVideo: campaign.creativeAssets?.hasVideo || false,
        hasAudio: campaign.creativeAssets?.hasAudio || false,
        uploadedFiles: {
          logo: null,
          images: [],
          video: null,
          audio: null
        }
      },
      contactInfo: {
        primaryContact: campaign.contactInfo?.primaryContact || '',
        email: campaign.contactInfo?.email || '',
        phone: campaign.contactInfo?.phone || '',
        company: campaign.contactInfo?.company || ''
      },
      specialRequirements: campaign.specialRequirements || '',
      budgetAllocation: {
        radio: campaign.budgetAllocation?.radio || 0,
        press: campaign.budgetAllocation?.press || 0,
        digital: campaign.budgetAllocation?.digital || 0
      }
    });
    setShowEditModal(true);
  };

  const handleCloseViewModal = () => {
    setShowViewModal(false);
    setSelectedCampaign(null);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedCampaign(null);
    // Reset form
    setCampaignForm({
      name: '',
      description: '',
      package: '',
      targetAudience: '',
      budget: '',
      duration: '',
      platforms: [] as string[],
      startDate: '',
      endDate: '',
      campaignType: '',
      industry: '',
      objectives: [] as string[],
      demographics: {
        ageRange: '',
        gender: '',
        location: '',
        interests: [] as string[]
      },
      creativeAssets: {
        hasLogo: false,
        hasImages: false,
        hasVideo: false,
        hasAudio: false,
        uploadedFiles: {
          logo: null,
          images: [],
          video: null,
          audio: null
        }
      },
      contactInfo: {
        primaryContact: '',
        email: '',
        phone: '',
        company: ''
      },
      specialRequirements: '',
      budgetAllocation: {
        radio: 0,
        press: 0,
        digital: 0
      }
    });
  };

  const handleUpdateCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updating campaign:', selectedCampaign.id, campaignForm);
    alert('Campaign updated successfully!');
    handleCloseEditModal();
  };

  // Mock campaign data
  const mockCampaigns = [
    {
      id: 1,
      name: 'Tech Solutions',
      description: 'Multi-platform campaign for technology services targeting business professionals and decision makers.',
      package: 'Premium Impact',
      targetAudience: 'Business professionals, IT decision makers',
      budget: '2500',
      duration: '3',
      platforms: ['radio', 'digital'],
      startDate: '2024-01-15',
      endDate: '2024-04-15',
      campaignType: 'brand-awareness',
      industry: 'technology',
      objectives: ['Increase Brand Awareness', 'Generate Leads'],
      demographics: {
        ageRange: '25-44',
        gender: 'all',
        location: 'Kigali, Rwanda',
        interests: ['Technology', 'Business']
      },
      creativeAssets: {
        hasLogo: true,
        hasImages: true,
        hasVideo: false,
        hasAudio: true
      },
      contactInfo: {
        primaryContact: 'John Doe',
        email: 'john@techsolutions.com',
        phone: '+250 788 123 456',
        company: 'Tech Solutions Ltd'
      },
      specialRequirements: 'Focus on business hours for radio spots',
      budgetAllocation: {
        radio: 1500,
        press: 0,
        digital: 1000
      },
      status: 'Active',
      performance: '92%',
      reach: '750K+'
    },
    {
      id: 2,
      name: 'Business Group',
      description: 'Business development and networking campaign focused on corporate partnerships and B2B engagement.',
      package: 'Basic Reach',
      targetAudience: 'Corporate executives, business owners',
      budget: '1200',
      duration: '6',
      platforms: ['press', 'digital'],
      startDate: '2023-12-01',
      endDate: '2024-06-01',
      campaignType: 'lead-generation',
      industry: 'finance',
      objectives: ['Generate Leads', 'Drive Website Traffic'],
      demographics: {
        ageRange: '35-54',
        gender: 'all',
        location: 'Kigali, Rwanda',
        interests: ['Business', 'Finance']
      },
      creativeAssets: {
        hasLogo: true,
        hasImages: false,
        hasVideo: false,
        hasAudio: false
      },
      contactInfo: {
        primaryContact: 'Jane Smith',
        email: 'jane@businessgroup.com',
        phone: '+250 788 987 654',
        company: 'Business Group Ltd'
      },
      specialRequirements: 'Premium placement in business section',
      budgetAllocation: {
        radio: 0,
        press: 800,
        digital: 400
      },
      status: 'Active',
      performance: '78%',
      reach: '300K+'
    },
    {
      id: 3,
      name: 'Community NGO',
      description: 'Community outreach and social impact campaign targeting local communities and social causes.',
      package: 'Enterprise Power',
      targetAudience: 'Local communities, social activists',
      budget: '5000',
      duration: '12',
      platforms: ['radio', 'press', 'digital'],
      startDate: '2024-02-01',
      endDate: '2025-02-01',
      campaignType: 'social-impact',
      industry: 'ngo',
      objectives: ['Community Engagement', 'Increase Brand Awareness'],
      demographics: {
        ageRange: 'all',
        gender: 'all',
        location: 'Rwanda',
        interests: ['Health', 'Education']
      },
      creativeAssets: {
        hasLogo: true,
        hasImages: true,
        hasVideo: true,
        hasAudio: true
      },
      contactInfo: {
        primaryContact: 'Dr. Marie Uwimana',
        email: 'marie@communityngo.org',
        phone: '+250 788 555 123',
        company: 'Community NGO'
      },
      specialRequirements: 'Multi-language support needed',
      budgetAllocation: {
        radio: 2000,
        press: 1500,
        digital: 1500
      },
      status: 'Draft',
      performance: 'N/A',
      reach: '1M+'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-xl border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/landing" className="flex items-center group">
              <div className="h-16 w-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                <span className="text-white font-bold text-2xl">KT</span>
              </div>
              <div className="ml-6">
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Advertising Dashboard</h1>
                <p className="text-sm text-gray-600 font-medium flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Kigali Today Ltd • Premium Account
                </p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">JD</span>
                </div>
                <span className="text-sm font-medium text-gray-700">John Doe</span>
              </div>
              <Link
                href="/dashboard/partnership"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-blue-50 hover:shadow-md"
              >
                🤝 Partnership
              </Link>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-1">
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
              onClick={() => setActiveTab('campaigns')}
              className={`py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'campaigns'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>📢</span>
                <span>My Campaigns</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('ourstats')}
              className={`py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'ourstats'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>📊</span>
                <span>Our Stats</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('packages')}
              className={`py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'packages'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>💰</span>
                <span>Packages</span>
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
              onClick={() => setActiveTab('messages')}
              className={`py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                activeTab === 'messages'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
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
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
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
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl shadow-2xl p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="mb-4">
                      <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-bold">
                        🚀 PREMIUM ACCOUNT
                      </span>
                    </div>
                    <h2 className="text-4xl font-bold mb-3">Welcome to Advertising Dashboard</h2>
                    <p className="text-blue-100 text-xl">Manage your advertising campaigns across our comprehensive media ecosystem</p>
                  </div>
                  <div className="text-right">
                    <div className="text-6xl font-bold animate-bounce">📢</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">Active Campaigns</p>
                    <p className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">5</p>
                    <p className="text-xs text-green-600 font-medium mt-1">+2 this month</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-white text-2xl">📢</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">Total Reach</p>
                    <p className="text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">2.1M</p>
                    <p className="text-xs text-green-600 font-medium mt-1">+15% this month</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-white text-2xl">👥</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">Monthly Spend</p>
                    <p className="text-3xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">$2,400</p>
                    <p className="text-xs text-green-600 font-medium mt-1">On budget</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-white text-2xl">💰</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">ROI</p>
                    <p className="text-3xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">340%</p>
                    <p className="text-xs text-green-600 font-medium mt-1">+25% this month</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-white text-2xl">📈</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Recent Campaign Activity</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">Live</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-md transition-all duration-200">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">Tech Solutions campaign launched</p>
                      <p className="text-sm text-gray-600">Successfully deployed across all platforms</p>
                      <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-all duration-200">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-sm">📊</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">Monthly report generated</p>
                      <p className="text-sm text-gray-600">Performance analytics ready for review</p>
                      <p className="text-xs text-gray-500 mt-1">5 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200 hover:shadow-md transition-all duration-200">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-sm">💰</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">Payment processed for Premium package</p>
                      <p className="text-sm text-gray-600">Monthly subscription renewed successfully</p>
                      <p className="text-xs text-gray-500 mt-1">1 week ago</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Campaign Performance</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Excellent</span>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">KT Radio Campaign</span>
                      <span className="font-bold text-green-600">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-1000" style={{ width: '92%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Excellent performance across all metrics</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">KT Press Campaign</span>
                      <span className="font-bold text-blue-600">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000" style={{ width: '78%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Good engagement with business audience</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">Digital Campaign</span>
                      <span className="font-bold text-purple-600">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Strong digital presence and engagement</p>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-2">My Campaigns</h2>
                <p className="text-gray-600">Manage and monitor your advertising campaigns across all platforms</p>
              </div>
              <button 
                onClick={handleCreateCampaign}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2"
              >
                <span className="text-xl">+</span>
                <span>Create Campaign</span>
              </button>
            </div>

            {/* Campaign Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Total Campaigns</p>
                    <p className="text-2xl font-bold text-gray-900">5</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-lg">📢</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Active</p>
                    <p className="text-2xl font-bold text-green-600">3</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-lg">✓</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Draft</p>
                    <p className="text-2xl font-bold text-yellow-600">1</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-lg">📝</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Paused</p>
                    <p className="text-2xl font-bold text-gray-600">1</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-lg">⏸️</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Campaigns Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockCampaigns.map((campaign) => (
                <div key={campaign.id} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                        campaign.id === 1 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                        campaign.id === 2 ? 'bg-gradient-to-r from-green-500 to-green-600' :
                        'bg-gradient-to-r from-purple-500 to-purple-600'
                      }`}>
                        <span className="text-white text-lg">
                          {campaign.id === 1 ? '💻' : campaign.id === 2 ? '🏢' : '🤝'}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{campaign.name}</h3>
                        <p className="text-sm text-gray-500 capitalize">{campaign.industry}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                      campaign.status === 'Active' ? 'bg-green-100 text-green-800' :
                      campaign.status === 'Draft' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {campaign.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{campaign.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">Package:</span>
                      <span className={`font-semibold ${
                        campaign.package === 'Premium Impact' ? 'text-blue-600' :
                        campaign.package === 'Basic Reach' ? 'text-green-600' :
                        'text-purple-600'
                      }`}>
                        {campaign.package}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">Reach:</span>
                      <span className="font-semibold text-gray-900">{campaign.reach}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">Performance:</span>
                      <span className={`font-semibold ${
                        campaign.performance === '92%' ? 'text-green-600' :
                        campaign.performance === '78%' ? 'text-blue-600' :
                        'text-yellow-600'
                      }`}>
                        {campaign.performance}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">Started:</span>
                      <span className="font-semibold text-gray-900">
                        {new Date(campaign.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleViewCampaign(campaign)}
                      className={`flex-1 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-colors ${
                        campaign.id === 1 ? 'bg-blue-600 hover:bg-blue-700' :
                        campaign.id === 2 ? 'bg-green-600 hover:bg-green-700' :
                        'bg-purple-600 hover:bg-purple-700'
                      }`}
                    >
                      View Details
                    </button>
                    <button 
                      onClick={() => handleEditCampaign(campaign)}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Create Campaign Modal Trigger */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl shadow-2xl p-8 text-white text-center">
              <div className="max-w-2xl mx-auto">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4">Ready to Launch Your Next Campaign?</h3>
                <p className="text-blue-100 text-lg mb-6">Create powerful advertising campaigns that reach your target audience across our comprehensive media ecosystem.</p>
                <button 
                  onClick={handleCreateCampaign}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  + Create New Campaign
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Packages Tab */}
        {activeTab === 'packages' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Advertising Packages</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Basic Package */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📊</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Reach</h3>
                  <div className="text-4xl font-bold text-gray-600 mb-2">$299</div>
                  <p className="text-gray-500">per month</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">10 KT Radio spots per week</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">Quarter-page KT Press ad</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">Banner ad on kigalitoday.com</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">Basic analytics report</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                  Current Package
                </button>
              </div>

              {/* Premium Package */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Impact</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">$599</div>
                  <p className="text-gray-500">per month</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">25 KT Radio spots per week</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">Half-page KT Press ad</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">Featured content on kigalitoday.com</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">Detailed analytics dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">Cross-platform brand mentions</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Upgrade Now
                </button>
              </div>

              {/* Enterprise Package */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">👑</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Power</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">$1,299</div>
                  <p className="text-gray-500">per month</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">Unlimited KT Radio spots</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">Full-page KT Press ads</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">Homepage takeover on kigalitoday.com</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">Real-time analytics dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">Custom content creation</span>
                  </li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Our Stats Tab */}
        {activeTab === 'ourstats' && (
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Header Section */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Advertising Platform Statistics</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover why Kigali Today Ltd is Rwanda's most effective advertising platform. 
                Our impressive reach, engagement rates, and proven results make us the ideal choice for your advertising campaigns.
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
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-green-100 text-lg font-semibold">Campaign Success Rate</div>
                <div className="text-green-200 text-sm mt-2">Exceeding client goals</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl shadow-xl p-8 text-white text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl font-bold mb-2">2000+</div>
                <div className="text-purple-100 text-lg font-semibold">Successful Campaigns</div>
                <div className="text-purple-200 text-sm mt-2">Trusted by brands</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl shadow-xl p-8 text-white text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-orange-100 text-lg font-semibold">Years Experience</div>
                <div className="text-orange-200 text-sm mt-2">Media advertising leader</div>
              </div>
            </div>

            {/* Platform Performance */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-200 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Advertising Platform Performance</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* KT Radio */}
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📻</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">KT Radio Advertising</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Daily Listeners</span>
                      <span className="font-bold text-blue-600">150K+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Ad Recall Rate</span>
                      <span className="font-bold text-blue-600">78%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Engagement Rate</span>
                      <span className="font-bold text-blue-600">65%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">ROI Average</span>
                      <span className="font-bold text-blue-600">320%</span>
                    </div>
                  </div>
                </div>

                {/* KT Press */}
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📰</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">KT Press Advertising</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Weekly Circulation</span>
                      <span className="font-bold text-green-600">50K+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Readership</span>
                      <span className="font-bold text-green-600">200K+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Business Leaders</span>
                      <span className="font-bold text-green-600">85%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Ad Effectiveness</span>
                      <span className="font-bold text-green-600">92%</span>
                    </div>
                  </div>
                </div>

                {/* kigalitoday.com */}
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🌐</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Digital Advertising</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Monthly Visitors</span>
                      <span className="font-bold text-purple-600">200K+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Click-Through Rate</span>
                      <span className="font-bold text-purple-600">4.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Conversion Rate</span>
                      <span className="font-bold text-purple-600">8.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cost Per Click</span>
                      <span className="font-bold text-purple-600">$0.15</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Audience Demographics */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-200 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Advertising Audience Demographics</h3>
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

            {/* Campaign Success Metrics */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-200 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Campaign Success Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl">
                  <div className="text-4xl font-bold text-emerald-600 mb-3">85%</div>
                  <div className="text-gray-700 font-semibold text-lg mb-2">Campaign Success Rate</div>
                  <div className="text-gray-500 text-sm">Campaigns exceeding client goals</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl">
                  <div className="text-4xl font-bold text-cyan-600 mb-3">320%</div>
                  <div className="text-gray-700 font-semibold text-lg mb-2">Average ROI</div>
                  <div className="text-gray-500 text-sm">Return on advertising investment</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl">
                  <div className="text-4xl font-bold text-rose-600 mb-3">92%</div>
                  <div className="text-gray-700 font-semibold text-lg mb-2">Client Satisfaction</div>
                  <div className="text-gray-500 text-sm">Repeat business rate</div>
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl shadow-2xl p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8 text-center">Why Advertise with Kigali Today Ltd?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">🎯</span>
                    </div>
                    <h4 className="text-xl font-bold mb-3">Precise Targeting</h4>
                    <p className="text-white/90">Reach your exact audience with our advanced demographic and geographic targeting</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">📈</span>
                    </div>
                    <h4 className="text-xl font-bold mb-3">Proven Results</h4>
                    <p className="text-white/90">85% campaign success rate with average 320% ROI across all platforms</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">🏆</span>
                    </div>
                    <h4 className="text-xl font-bold mb-3">Industry Leader</h4>
                    <p className="text-white/90">15+ years of advertising excellence with 2000+ successful campaigns</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Launch Your Next Successful Campaign?</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of successful brands who trust Kigali Today Ltd for their advertising needs. 
                Let's create a campaign that delivers real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleCreateCampaign}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Create Your Campaign
                </button>
                <Link
                  href="/partnership"
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
                >
                  Explore Partnership Options
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
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Campaign Analytics</h2>
                <p className="text-gray-600">Comprehensive insights and performance metrics for your advertising campaigns</p>
              </div>
              <div className="flex space-x-3">
                <select className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white">
                  <option>Last 30 days</option>
                  <option>Last 7 days</option>
                  <option>Last 90 days</option>
                  <option>Last year</option>
                </select>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Export Report
                </button>
              </div>
            </div>

            {/* Key Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">Total Impressions</p>
                    <p className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">2.4M</p>
                    <p className="text-xs text-green-600 font-medium mt-1">+18% this month</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-white text-2xl">👁️</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">Click-Through Rate</p>
                    <p className="text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">4.2%</p>
                    <p className="text-xs text-green-600 font-medium mt-1">+0.8% this month</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">Conversion Rate</p>
                    <p className="text-3xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">12.8%</p>
                    <p className="text-xs text-green-600 font-medium mt-1">+2.1% this month</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-white text-2xl">📈</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">Cost Per Click</p>
                    <p className="text-3xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">$0.45</p>
                    <p className="text-xs text-green-600 font-medium mt-1">-12% this month</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-white text-2xl">💰</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Campaign Performance Overview */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl shadow-2xl p-8 text-white">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Campaign Performance Overview</h3>
                  <p className="text-blue-100">Real-time insights across all your advertising campaigns</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold">📊</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold">$8,420</div>
                  <div className="text-blue-100 text-sm">Total Revenue Generated</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold">340%</div>
                  <div className="text-blue-100 text-sm">Average ROI</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold">15.2K</div>
                  <div className="text-blue-100 text-sm">Total Conversions</div>
                </div>
              </div>
            </div>

            {/* Analytics Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Audience Demographics */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Audience Demographics</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">Live Data</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">25-34 years</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">45%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">35-44 years</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '32%' }}></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">32%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">18-24 years</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '18%' }}></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">18%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">45+ years</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">5%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Platform Performance */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Platform Performance</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Excellent</span>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📻</span>
                      <div>
                        <p className="font-semibold text-gray-900">KT Radio</p>
                        <p className="text-sm text-gray-600">1.2M impressions</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-blue-600">92%</p>
                      <p className="text-xs text-gray-500">Performance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🌐</span>
                      <div>
                        <p className="font-semibold text-gray-900">kigalitoday.com</p>
                        <p className="text-sm text-gray-600">850K impressions</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-green-600">88%</p>
                      <p className="text-xs text-gray-500">Performance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📰</span>
                      <div>
                        <p className="font-semibold text-gray-900">KT Press</p>
                        <p className="text-sm text-gray-600">350K impressions</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-purple-600">78%</p>
                      <p className="text-xs text-gray-500">Performance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Analytics Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Campaign Performance Trends */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Campaign Performance Trends</h3>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">7D</button>
                    <button className="px-3 py-1 text-gray-600 text-xs font-semibold rounded-full hover:bg-gray-100">30D</button>
                    <button className="px-3 py-1 text-gray-600 text-xs font-semibold rounded-full hover:bg-gray-100">90D</button>
                  </div>
                </div>
                
                <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center border border-gray-200">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📈</div>
                    <p className="text-gray-600 font-medium">Performance Trend Chart</p>
                    <p className="text-sm text-gray-500 mt-1">Interactive chart showing campaign performance over time</p>
                  </div>
                </div>
              </div>

              {/* Conversion Funnel */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Conversion Funnel</h3>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">Optimizing</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Impressions</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">2.4M</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Clicks</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '4.2%' }}></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">100.8K</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Leads</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '12.8%' }}></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">12.9K</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Conversions</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '1.6%' }}></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">1.6K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Performing Campaigns */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Top Performing Campaigns</h3>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Campaign</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Impressions</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">CTR</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Conversions</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">ROI</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm">💻</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">Tech Solutions</p>
                            <p className="text-sm text-gray-500">Premium Impact</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-900">1.2M</td>
                      <td className="py-4 px-4 text-green-600 font-semibold">5.2%</td>
                      <td className="py-4 px-4 text-gray-900">2,340</td>
                      <td className="py-4 px-4 text-green-600 font-semibold">420%</td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Active</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm">🏢</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">Business Group</p>
                            <p className="text-sm text-gray-500">Basic Reach</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-900">850K</td>
                      <td className="py-4 px-4 text-blue-600 font-semibold">3.8%</td>
                      <td className="py-4 px-4 text-gray-900">1,890</td>
                      <td className="py-4 px-4 text-blue-600 font-semibold">280%</td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Active</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm">🤝</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">Community NGO</p>
                            <p className="text-sm text-gray-500">Enterprise Power</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-900">350K</td>
                      <td className="py-4 px-4 text-yellow-600 font-semibold">2.1%</td>
                      <td className="py-4 px-4 text-gray-900">890</td>
                      <td className="py-4 px-4 text-yellow-600 font-semibold">180%</td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">Draft</span>
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
                <p className="text-gray-600">Get in touch with our support team via email for campaign assistance</p>
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
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Send Support Email</h3>
                    <p className="text-gray-600">Send us your questions or concerns</p>
                  </div>
                </div>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                    <input
                      type="text"
                      placeholder="Brief description of your inquiry"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200">
                      <option value="">Select a category</option>
                      <option value="campaign-optimization">Campaign Optimization</option>
                      <option value="billing-inquiry">Billing Inquiry</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="account-management">Account Management</option>
                      <option value="feature-request">Feature Request</option>
                      <option value="general-inquiry">General Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Priority *</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200">
                      <option value="low">Low - General question</option>
                      <option value="medium">Medium - Need assistance</option>
                      <option value="high">High - Urgent issue</option>
                      <option value="critical">Critical - Campaign down</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea
                      rows={6}
                      placeholder="Please provide detailed information about your inquiry. Include campaign names, specific issues, or any relevant details that can help us assist you better."
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Attachments (Optional)</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
                      <span className="text-4xl mb-2 block">📎</span>
                      <p className="text-gray-600 mb-2">Drop files here or click to upload</p>
                      <p className="text-xs text-gray-500">PDF, DOC, PNG, JPG up to 10MB</p>
                      <input type="file" multiple className="hidden" />
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                    Send Email to Support
                  </button>
                </form>
              </div>

              {/* Contact Information & History */}
              <div className="space-y-6">
                {/* Contact Information */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
                      <p className="text-gray-600">Multiple ways to reach us</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <span className="text-blue-600 text-xl">📧</span>
                      <div>
                        <p className="font-semibold text-blue-800">Email Support</p>
                        <p className="text-sm text-blue-600">support@kigalitoday.com</p>
                        <p className="text-xs text-blue-500">Response within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl border border-green-200">
                      <span className="text-green-600 text-xl">📞</span>
                      <div>
                        <p className="font-semibold text-green-800">Phone Support</p>
                        <p className="text-sm text-green-600">+250 788 123 456</p>
                        <p className="text-xs text-green-500">Mon-Fri 8AM-6PM</p>
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
                        <p className="text-gray-600">Your support history</p>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">Campaign Optimization Help</h4>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Resolved</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Need help improving CTR for Tech Solutions campaign</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Sent: Jan 20, 2024</span>
                        <span>Replied: Jan 21, 2024</span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">Billing Question</h4>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">In Progress</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Question about monthly billing cycle</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Sent: Jan 18, 2024</span>
                        <span>Awaiting reply</span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">Account Access Issue</h4>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Resolved</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Unable to access dashboard</p>
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
                      <p className="text-gray-600">Common questions and resources</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                      <div className="flex items-center space-x-3">
                        <span className="text-blue-600">📊</span>
                        <span className="font-medium text-gray-900">How to optimize campaign performance?</span>
                      </div>
                    </button>
                    <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                      <div className="flex items-center space-x-3">
                        <span className="text-green-600">💰</span>
                        <span className="font-medium text-gray-900">Understanding billing and payments</span>
                      </div>
                    </button>
                    <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                      <div className="flex items-center space-x-3">
                        <span className="text-purple-600">🔧</span>
                        <span className="font-medium text-gray-900">Technical troubleshooting guide</span>
                      </div>
                    </button>
                    <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                      <div className="flex items-center space-x-3">
                        <span className="text-yellow-600">📚</span>
                        <span className="font-medium text-gray-900">View all help articles</span>
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
                <p className="text-gray-600">Manage your account information, preferences, and billing details</p>
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
              {/* Main Profile Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Personal Information */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white text-xl">👤</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Personal Information</h3>
                      <p className="text-gray-600">Update your personal details and contact information</p>
                    </div>
                  </div>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                        <input
                          type="text"
                          defaultValue="John"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          defaultValue="Doe"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          defaultValue="john.doe@example.com"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          placeholder="Enter your email address"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          defaultValue="+250 788 123 456"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name *</label>
                        <input
                          type="text"
                          defaultValue="Tech Solutions Ltd"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          placeholder="Enter your company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Job Title</label>
                        <input
                          type="text"
                          defaultValue="Marketing Manager"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          placeholder="Enter your job title"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Bio</label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
                        placeholder="Tell us about yourself and your role..."
                        defaultValue="Experienced marketing professional with 8+ years in digital advertising and campaign management."
                      />
                    </div>
                  </form>
                </div>

                {/* Company Details */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white text-xl">🏢</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Company Details</h3>
                      <p className="text-gray-600">Manage your company information and business details</p>
                    </div>
                  </div>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name *</label>
                        <input
                          type="text"
                          defaultValue="Tech Solutions Ltd"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          placeholder="Enter your company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Company Type</label>
                        <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200">
                          <option value="corporation">Corporation</option>
                          <option value="llc">Limited Liability Company (LLC)</option>
                          <option value="partnership">Partnership</option>
                          <option value="sole-proprietorship">Sole Proprietorship</option>
                          <option value="ngo">Non-Profit Organization</option>
                          <option value="government">Government Agency</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Industry *</label>
                        <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200">
                          <option value="technology">Technology</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="finance">Finance & Banking</option>
                          <option value="education">Education</option>
                          <option value="retail">Retail & E-commerce</option>
                          <option value="real-estate">Real Estate</option>
                          <option value="hospitality">Hospitality & Tourism</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="consulting">Consulting</option>
                          <option value="ngo">NGO & Non-profit</option>
                          <option value="government">Government</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Company Size</label>
                        <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200">
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="501-1000">501-1000 employees</option>
                          <option value="1000+">1000+ employees</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Registration Number</label>
                        <input
                          type="text"
                          defaultValue="RDB-2024-001234"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          placeholder="Enter company registration number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Tax ID</label>
                        <input
                          type="text"
                          defaultValue="1234567890123"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          placeholder="Enter tax identification number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Company Address *</label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
                        placeholder="Enter your company's full address"
                        defaultValue="KG 123 St, Kacyiru, Kigali, Rwanda"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                        <input
                          type="text"
                          defaultValue="Kigali"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          placeholder="Enter city"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Province</label>
                        <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200">
                          <option value="kigali">Kigali</option>
                          <option value="north">Northern Province</option>
                          <option value="south">Southern Province</option>
                          <option value="east">Eastern Province</option>
                          <option value="west">Western Province</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Postal Code</label>
                        <input
                          type="text"
                          defaultValue="0000"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          placeholder="Enter postal code"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Website</label>
                        <input
                          type="url"
                          defaultValue="https://www.techsolutions.rw"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          placeholder="https://www.yourcompany.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Founded Year</label>
                        <input
                          type="number"
                          defaultValue="2020"
                          min="1900"
                          max="2024"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          placeholder="Enter founding year"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Company Description</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
                        placeholder="Describe your company, its mission, and what it does..."
                        defaultValue="Tech Solutions Ltd is a leading technology company in Rwanda, specializing in digital transformation, software development, and IT consulting services. We help businesses leverage technology to improve efficiency and drive growth."
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Primary Contact Person</label>
                        <input
                          type="text"
                          defaultValue="John Doe"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          placeholder="Enter primary contact person"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Title</label>
                        <input
                          type="text"
                          defaultValue="Marketing Manager"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          placeholder="Enter contact person's title"
                        />
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                      <div className="flex items-start">
                        <span className="text-blue-600 text-lg mr-3">ℹ️</span>
                        <div>
                          <h4 className="font-semibold text-blue-800 mb-1">Company Information</h4>
                          <p className="text-sm text-blue-700">
                            This information will be used for billing, legal compliance, and to provide you with relevant advertising opportunities. 
                            All information is kept secure and confidential.
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                {/* Security Settings */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white text-xl">🔒</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Security Settings</h3>
                      <p className="text-gray-600">Manage your password and security preferences</p>
                    </div>
                  </div>
                  
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Current Password *</label>
                      <div className="relative">
                        <input
                          type="password"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 pr-12"
                          placeholder="Enter your current password"
                        />
                        <button type="button" className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600">
                          👁️
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">New Password *</label>
                        <div className="relative">
                          <input
                            type="password"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 pr-12"
                            placeholder="Enter new password"
                          />
                          <button type="button" className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600">
                            👁️
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm New Password *</label>
                        <div className="relative">
                          <input
                            type="password"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 pr-12"
                            placeholder="Confirm new password"
                          />
                          <button type="button" className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600">
                            👁️
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                      <div className="flex items-start">
                        <span className="text-yellow-600 text-lg mr-3">⚠️</span>
                        <div>
                          <h4 className="font-semibold text-yellow-800 mb-1">Password Requirements</h4>
                          <ul className="text-sm text-yellow-700 space-y-1">
                            <li>• At least 8 characters long</li>
                            <li>• Contains uppercase and lowercase letters</li>
                            <li>• Contains at least one number</li>
                            <li>• Contains at least one special character</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <button className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                      Update Password
                    </button>
                  </form>
                </div>

                {/* Notification Preferences */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white text-xl">🔔</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Notification Preferences</h3>
                      <p className="text-gray-600">Choose how you want to be notified about your campaigns</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <h4 className="font-semibold text-gray-900">Email Notifications</h4>
                        <p className="text-sm text-gray-600">Receive updates about campaign performance and account activity</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <h4 className="font-semibold text-gray-900">SMS Notifications</h4>
                        <p className="text-sm text-gray-600">Get text messages for urgent campaign updates</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <h4 className="font-semibold text-gray-900">Weekly Reports</h4>
                        <p className="text-sm text-gray-600">Receive comprehensive weekly performance reports</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Sidebar */}
              <div className="space-y-8">
                {/* Profile Picture */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Profile Picture</h3>
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <span className="text-white text-4xl">👤</span>
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                      Change Picture
                    </button>
                    <p className="text-xs text-gray-500 mt-2">JPG, PNG or GIF. Max size 2MB.</p>
                  </div>
                </div>

                {/* Account Status */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Account Status</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-xl border border-green-200">
                      <span className="text-gray-700 font-medium">Account Type</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">Premium</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl border border-blue-200">
                      <span className="text-gray-700 font-medium">Member Since</span>
                      <span className="text-gray-900 font-semibold">Jan 2024</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-xl border border-purple-200">
                      <span className="text-gray-700 font-medium">Last Login</span>
                      <span className="text-gray-900 font-semibold">Today</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-xl border border-yellow-200">
                      <span className="text-gray-700 font-medium">Account Status</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">Active</span>
                    </div>
                  </div>
                </div>

                {/* Billing Information */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Billing Information</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                      <span className="text-gray-700 font-medium">Current Plan</span>
                      <span className="text-gray-900 font-semibold">Premium Impact</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                      <span className="text-gray-700 font-medium">Next Billing</span>
                      <span className="text-gray-900 font-semibold">Feb 15, 2024</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                      <span className="text-gray-700 font-medium">Amount</span>
                      <span className="text-2xl font-bold text-green-600">$2,500</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                      <span className="text-gray-700 font-medium">Payment Method</span>
                      <span className="text-gray-900 font-semibold">•••• 4242</span>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                      Manage Billing
                    </button>
                    <button className="w-full bg-white border-2 border-gray-300 text-gray-700 px-4 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200">
                      Download Invoice
                    </button>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors">
                      <span className="text-blue-600 text-xl">📊</span>
                      <span className="text-blue-800 font-medium">View Analytics</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 bg-green-50 hover:bg-green-100 rounded-xl transition-colors">
                      <span className="text-green-600 text-xl">📢</span>
                      <span className="text-green-800 font-medium">Create Campaign</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors">
                      <span className="text-purple-600 text-xl">💬</span>
                      <span className="text-purple-800 font-medium">Contact Support</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 bg-red-50 hover:bg-red-100 rounded-xl transition-colors">
                      <span className="text-red-600 text-xl">🚪</span>
                      <span className="text-red-800 font-medium">Sign Out</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Create Campaign Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Create New Campaign</h2>
                  <p className="text-gray-600 mt-2">Launch your advertising campaign across our comprehensive media ecosystem</p>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="text-gray-600 text-xl">×</span>
                </button>
              </div>

              {/* Modal Form */}
              <form onSubmit={handleSubmitCampaign} className="space-y-8">
                {/* Basic Information Section */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="text-2xl mr-3">📋</span>
                    Basic Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Campaign Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={campaignForm.name}
                        onChange={(e) => setCampaignForm(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Enter campaign name"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Campaign Type *
                      </label>
                      <select
                        required
                        value={campaignForm.campaignType}
                        onChange={(e) => setCampaignForm(prev => ({ ...prev, campaignType: e.target.value }))}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      >
                        <option value="">Select campaign type</option>
                        <option value="brand-awareness">Brand Awareness</option>
                        <option value="lead-generation">Lead Generation</option>
                        <option value="product-launch">Product Launch</option>
                        <option value="event-promotion">Event Promotion</option>
                        <option value="seasonal">Seasonal Campaign</option>
                        <option value="social-impact">Social Impact</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Campaign Description *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={campaignForm.description}
                      onChange={(e) => setCampaignForm(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Describe your campaign goals, key messages, and expected outcomes"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Industry *
                      </label>
                      <select
                        required
                        value={campaignForm.industry}
                        onChange={(e) => setCampaignForm(prev => ({ ...prev, industry: e.target.value }))}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      >
                        <option value="">Select industry</option>
                        <option value="technology">Technology</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Finance & Banking</option>
                        <option value="education">Education</option>
                        <option value="retail">Retail & E-commerce</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="hospitality">Hospitality & Tourism</option>
                        <option value="ngo">NGO & Non-profit</option>
                        <option value="government">Government</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={campaignForm.contactInfo.company}
                        onChange={(e) => setCampaignForm(prev => ({ 
                          ...prev, 
                          contactInfo: { ...prev.contactInfo, company: e.target.value }
                        }))}
                        placeholder="Enter company name"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                {/* Campaign Objectives Section */}
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="text-2xl mr-3">🎯</span>
                    Campaign Objectives
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Increase Brand Awareness',
                      'Generate Leads',
                      'Drive Website Traffic',
                      'Boost Sales',
                      'Promote Event',
                      'Community Engagement',
                      'Product Launch',
                      'Customer Retention'
                    ].map((objective) => (
                      <label key={objective} className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-blue-300 cursor-pointer transition-all duration-200">
                        <input
                          type="checkbox"
                          checked={campaignForm.objectives.includes(objective)}
                          onChange={() => handleObjectiveChange(objective)}
                          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="font-medium text-gray-900">{objective}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Target Audience & Demographics Section */}
                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="text-2xl mr-3">👥</span>
                    Target Audience & Demographics
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Age Range *
                      </label>
                      <select
                        required
                        value={campaignForm.demographics.ageRange}
                        onChange={(e) => setCampaignForm(prev => ({ 
                          ...prev, 
                          demographics: { ...prev.demographics, ageRange: e.target.value }
                        }))}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
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
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Gender
                      </label>
                      <select
                        value={campaignForm.demographics.gender}
                        onChange={(e) => setCampaignForm(prev => ({ 
                          ...prev, 
                          demographics: { ...prev.demographics, gender: e.target.value }
                        }))}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="all">All genders</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Primary Location *
                      </label>
                      <input
                        type="text"
                        required
                        value={campaignForm.demographics.location}
                        onChange={(e) => setCampaignForm(prev => ({ 
                          ...prev, 
                          demographics: { ...prev.demographics, location: e.target.value }
                        }))}
                        placeholder="e.g., Kigali, Rwanda"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Target Interests
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        'Technology', 'Business', 'Health', 'Education',
                        'Entertainment', 'Sports', 'Travel', 'Food',
                        'Fashion', 'Finance', 'Real Estate', 'Automotive'
                      ].map((interest) => (
                        <label key={interest} className="flex items-center space-x-2 p-2 bg-white rounded-lg border border-gray-200 hover:border-green-300 cursor-pointer transition-all duration-200">
                          <input
                            type="checkbox"
                            checked={campaignForm.demographics.interests.includes(interest)}
                            onChange={() => handleInterestChange(interest)}
                            className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                          />
                          <span className="text-sm font-medium text-gray-900">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Budget & Timeline Section */}
                <div className="bg-purple-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="text-2xl mr-3">💰</span>
                    Budget & Timeline
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Total Budget (USD) *
                      </label>
                      <input
                        type="number"
                        required
                        min="299"
                        value={campaignForm.budget}
                        onChange={(e) => setCampaignForm(prev => ({ ...prev, budget: e.target.value }))}
                        placeholder="Enter budget"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Start Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={campaignForm.startDate}
                        onChange={(e) => setCampaignForm(prev => ({ ...prev, startDate: e.target.value }))}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        End Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={campaignForm.endDate}
                        onChange={(e) => setCampaignForm(prev => ({ ...prev, endDate: e.target.value }))}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Budget Allocation by Platform
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { id: 'radio', name: 'KT Radio', icon: '📻' },
                        { id: 'press', name: 'KT Press', icon: '📰' },
                        { id: 'digital', name: 'kigalitoday.com', icon: '🌐' }
                      ].map((platform) => (
                        <div key={platform.id} className="bg-white rounded-xl p-4 border border-gray-200">
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="text-2xl">{platform.icon}</span>
                            <span className="font-semibold text-gray-900">{platform.name}</span>
                          </div>
                          <input
                            type="number"
                            min="0"
                            value={campaignForm.budgetAllocation[platform.id as keyof typeof campaignForm.budgetAllocation]}
                            onChange={(e) => handleBudgetAllocationChange(platform.id, parseInt(e.target.value) || 0)}
                            placeholder="Budget amount"
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Platform Selection Section */}
                <div className="bg-yellow-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="text-2xl mr-3">📺</span>
                    Platform Selection
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { id: 'radio', name: 'KT Radio', icon: '📻', description: 'Reach listeners across Rwanda' },
                      { id: 'press', name: 'KT Press', icon: '📰', description: 'Print and digital newspaper' },
                      { id: 'digital', name: 'kigalitoday.com', icon: '🌐', description: 'Online news and content' }
                    ].map((platform) => (
                      <label key={platform.id} className="flex flex-col p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-yellow-300 cursor-pointer transition-all duration-200">
                        <div className="flex items-center space-x-3 mb-3">
                          <input
                            type="checkbox"
                            checked={campaignForm.platforms.includes(platform.id)}
                            onChange={() => handlePlatformChange(platform.id)}
                            className="w-5 h-5 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                          />
                          <span className="text-3xl">{platform.icon}</span>
                          <span className="font-bold text-gray-900 text-lg">{platform.name}</span>
                        </div>
                        <p className="text-sm text-gray-600">{platform.description}</p>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Creative Assets Section */}
                <div className="bg-indigo-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="text-2xl mr-3">🎨</span>
                    Creative Assets & File Uploads
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Company Logo Upload */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-2xl">🏷️</span>
                        <div>
                          <h4 className="font-semibold text-gray-900">Company Logo</h4>
                          <p className="text-sm text-gray-600">Upload your company logo (PNG, JPG, SVG)</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={campaignForm.creativeAssets.hasLogo}
                            onChange={() => handleCreativeAssetChange('hasLogo')}
                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          />
                          <span className="text-sm font-medium text-gray-700">I have a logo to upload</span>
                        </label>
                        
                        {campaignForm.creativeAssets.hasLogo && (
                          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 hover:border-indigo-400 transition-colors">
                            {campaignForm.creativeAssets.uploadedFiles.logo ? (
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <span className="text-green-500 text-xl">✅</span>
                                  <div>
                                    <p className="font-medium text-gray-900">{campaignForm.creativeAssets.uploadedFiles.logo.name}</p>
                                    <p className="text-sm text-gray-500">{formatFileSize(campaignForm.creativeAssets.uploadedFiles.logo.size)}</p>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => removeUploadedFile('logo')}
                                  className="text-red-500 hover:text-red-700 text-sm font-medium"
                                >
                                  Remove
                                </button>
                              </div>
                            ) : (
                              <label className="cursor-pointer">
                                <input
                                  type="file"
                                  accept=".png,.jpg,.jpeg,.svg"
                                  onChange={(e) => handleFileUpload('logo', e.target.files)}
                                  className="hidden"
                                />
                                <div className="text-center">
                                  <span className="text-4xl mb-2 block">📁</span>
                                  <p className="text-sm font-medium text-gray-700">Click to upload logo</p>
                                  <p className="text-xs text-gray-500 mt-1">PNG, JPG, SVG up to 10MB</p>
                                </div>
                              </label>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Images/Photos Upload */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-2xl">📸</span>
                        <div>
                          <h4 className="font-semibold text-gray-900">Images/Photos</h4>
                          <p className="text-sm text-gray-600">Upload product images, photos (PNG, JPG)</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={campaignForm.creativeAssets.hasImages}
                            onChange={() => handleCreativeAssetChange('hasImages')}
                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          />
                          <span className="text-sm font-medium text-gray-700">I have images to upload</span>
                        </label>
                        
                        {campaignForm.creativeAssets.hasImages && (
                          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 hover:border-indigo-400 transition-colors">
                            {campaignForm.creativeAssets.uploadedFiles.images.length > 0 ? (
                              <div className="space-y-2">
                                {campaignForm.creativeAssets.uploadedFiles.images.map((file, index) => (
                                  <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-2">
                                    <div className="flex items-center space-x-3">
                                      <span className="text-green-500 text-lg">✅</span>
                                      <div>
                                        <p className="font-medium text-gray-900 text-sm">{file.name}</p>
                                        <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                                      </div>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        const newImages = campaignForm.creativeAssets.uploadedFiles.images.filter((_, i) => i !== index);
                                        setCampaignForm(prev => ({
                                          ...prev,
                                          creativeAssets: {
                                            ...prev.creativeAssets,
                                            uploadedFiles: {
                                              ...prev.creativeAssets.uploadedFiles,
                                              images: newImages
                                            }
                                          }
                                        }));
                                      }}
                                      className="text-red-500 hover:text-red-700 text-xs font-medium"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                ))}
                                <label className="cursor-pointer block">
                                  <input
                                    type="file"
                                    accept=".png,.jpg,.jpeg"
                                    multiple
                                    onChange={(e) => handleFileUpload('images', e.target.files)}
                                    className="hidden"
                                  />
                                  <div className="text-center py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                    <span className="text-sm font-medium text-indigo-600">+ Add More Images</span>
                                  </div>
                                </label>
                              </div>
                            ) : (
                              <label className="cursor-pointer">
                                <input
                                  type="file"
                                  accept=".png,.jpg,.jpeg"
                                  multiple
                                  onChange={(e) => handleFileUpload('images', e.target.files)}
                                  className="hidden"
                                />
                                <div className="text-center">
                                  <span className="text-4xl mb-2 block">📁</span>
                                  <p className="text-sm font-medium text-gray-700">Click to upload images</p>
                                  <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB each</p>
                                </div>
                              </label>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Video Content Upload */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-2xl">🎥</span>
                        <div>
                          <h4 className="font-semibold text-gray-900">Video Content</h4>
                          <p className="text-sm text-gray-600">Upload promotional videos (MP4, MOV)</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={campaignForm.creativeAssets.hasVideo}
                            onChange={() => handleCreativeAssetChange('hasVideo')}
                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          />
                          <span className="text-sm font-medium text-gray-700">I have video content to upload</span>
                        </label>
                        
                        {campaignForm.creativeAssets.hasVideo && (
                          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 hover:border-indigo-400 transition-colors">
                            {campaignForm.creativeAssets.uploadedFiles.video ? (
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <span className="text-green-500 text-xl">✅</span>
                                  <div>
                                    <p className="font-medium text-gray-900">{campaignForm.creativeAssets.uploadedFiles.video.name}</p>
                                    <p className="text-sm text-gray-500">{formatFileSize(campaignForm.creativeAssets.uploadedFiles.video.size)}</p>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => removeUploadedFile('video')}
                                  className="text-red-500 hover:text-red-700 text-sm font-medium"
                                >
                                  Remove
                                </button>
                              </div>
                            ) : (
                              <label className="cursor-pointer">
                                <input
                                  type="file"
                                  accept=".mp4,.mov,.avi"
                                  onChange={(e) => handleFileUpload('video', e.target.files)}
                                  className="hidden"
                                />
                                <div className="text-center">
                                  <span className="text-4xl mb-2 block">📁</span>
                                  <p className="text-sm font-medium text-gray-700">Click to upload video</p>
                                  <p className="text-xs text-gray-500 mt-1">MP4, MOV up to 100MB</p>
                                </div>
                              </label>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Audio Content Upload */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-2xl">🎵</span>
                        <div>
                          <h4 className="font-semibold text-gray-900">Audio Content</h4>
                          <p className="text-sm text-gray-600">Upload audio files for radio ads (MP3, WAV)</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={campaignForm.creativeAssets.hasAudio}
                            onChange={() => handleCreativeAssetChange('hasAudio')}
                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          />
                          <span className="text-sm font-medium text-gray-700">I have audio content to upload</span>
                        </label>
                        
                        {campaignForm.creativeAssets.hasAudio && (
                          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 hover:border-indigo-400 transition-colors">
                            {campaignForm.creativeAssets.uploadedFiles.audio ? (
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <span className="text-green-500 text-xl">✅</span>
                                  <div>
                                    <p className="font-medium text-gray-900">{campaignForm.creativeAssets.uploadedFiles.audio.name}</p>
                                    <p className="text-sm text-gray-500">{formatFileSize(campaignForm.creativeAssets.uploadedFiles.audio.size)}</p>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => removeUploadedFile('audio')}
                                  className="text-red-500 hover:text-red-700 text-sm font-medium"
                                >
                                  Remove
                                </button>
                              </div>
                            ) : (
                              <label className="cursor-pointer">
                                <input
                                  type="file"
                                  accept=".mp3,.wav,.m4a"
                                  onChange={(e) => handleFileUpload('audio', e.target.files)}
                                  className="hidden"
                                />
                                <div className="text-center">
                                  <span className="text-4xl mb-2 block">📁</span>
                                  <p className="text-sm font-medium text-gray-700">Click to upload audio</p>
                                  <p className="text-xs text-gray-500 mt-1">MP3, WAV up to 50MB</p>
                                </div>
                              </label>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Upload Summary */}
                  <div className="mt-6 bg-white rounded-xl p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">Upload Summary</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-lg font-bold text-indigo-600">
                          {campaignForm.creativeAssets.uploadedFiles.logo ? '1' : '0'}
                        </div>
                        <div className="text-gray-600">Logo</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-indigo-600">
                          {campaignForm.creativeAssets.uploadedFiles.images.length}
                        </div>
                        <div className="text-gray-600">Images</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-indigo-600">
                          {campaignForm.creativeAssets.uploadedFiles.video ? '1' : '0'}
                        </div>
                        <div className="text-gray-600">Video</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-indigo-600">
                          {campaignForm.creativeAssets.uploadedFiles.audio ? '1' : '0'}
                        </div>
                        <div className="text-gray-600">Audio</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information Section */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="text-2xl mr-3">📞</span>
                    Contact Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Primary Contact Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={campaignForm.contactInfo.primaryContact}
                        onChange={(e) => setCampaignForm(prev => ({ 
                          ...prev, 
                          contactInfo: { ...prev.contactInfo, primaryContact: e.target.value }
                        }))}
                        placeholder="Enter contact name"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={campaignForm.contactInfo.email}
                        onChange={(e) => setCampaignForm(prev => ({ 
                          ...prev, 
                          contactInfo: { ...prev.contactInfo, email: e.target.value }
                        }))}
                        placeholder="Enter email address"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={campaignForm.contactInfo.phone}
                        onChange={(e) => setCampaignForm(prev => ({ 
                          ...prev, 
                          contactInfo: { ...prev.contactInfo, phone: e.target.value }
                        }))}
                        placeholder="Enter phone number"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Special Requirements
                      </label>
                      <textarea
                        rows={3}
                        value={campaignForm.specialRequirements}
                        onChange={(e) => setCampaignForm(prev => ({ ...prev, specialRequirements: e.target.value }))}
                        placeholder="Any special requirements, timing constraints, or additional notes"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex space-x-4 pt-6">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Create Campaign
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* View Campaign Details Modal */}
      {showViewModal && selectedCampaign && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{selectedCampaign.name}</h2>
                  <p className="text-gray-600 mt-2">Campaign Details & Performance</p>
                </div>
                <button
                  onClick={handleCloseViewModal}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="text-gray-600 text-xl">×</span>
                </button>
              </div>

              {/* Campaign Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Details */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Basic Information */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="text-2xl mr-3">📋</span>
                      Campaign Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Campaign Type</label>
                        <p className="text-gray-900 capitalize">{selectedCampaign.campaignType?.replace('-', ' ')}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Industry</label>
                        <p className="text-gray-900 capitalize">{selectedCampaign.industry}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Package</label>
                        <p className="text-gray-900">{selectedCampaign.package}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Status</label>
                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                          selectedCampaign.status === 'Active' ? 'bg-green-100 text-green-800' :
                          selectedCampaign.status === 'Draft' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {selectedCampaign.status}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
                      <p className="text-gray-900">{selectedCampaign.description}</p>
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="text-2xl mr-3">👥</span>
                      Target Audience
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Primary Audience</label>
                        <p className="text-gray-900">{selectedCampaign.targetAudience}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Age Range</label>
                        <p className="text-gray-900 capitalize">{selectedCampaign.demographics?.ageRange || 'Not specified'}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Gender</label>
                        <p className="text-gray-900 capitalize">{selectedCampaign.demographics?.gender || 'All'}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Location</label>
                        <p className="text-gray-900">{selectedCampaign.demographics?.location || 'Not specified'}</p>
                      </div>
                    </div>
                    {selectedCampaign.demographics?.interests && selectedCampaign.demographics.interests.length > 0 && (
                      <div className="mt-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Interests</label>
                        <div className="flex flex-wrap gap-2">
                          {selectedCampaign.demographics.interests.map((interest: string, index: number) => (
                            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Budget & Timeline */}
                  <div className="bg-purple-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="text-2xl mr-3">💰</span>
                      Budget & Timeline
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Total Budget</label>
                        <p className="text-2xl font-bold text-purple-600">${selectedCampaign.budget}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Duration</label>
                        <p className="text-gray-900">{selectedCampaign.duration} months</p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Start Date</label>
                        <p className="text-gray-900">{new Date(selectedCampaign.startDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">End Date</label>
                        <p className="text-gray-900">{new Date(selectedCampaign.endDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Allocation</label>
                      <div className="grid grid-cols-3 gap-4">
                        {selectedCampaign.budgetAllocation && Object.entries(selectedCampaign.budgetAllocation).map(([platform, amount]) => (
                          <div key={platform} className="text-center">
                            <div className="text-lg font-bold text-purple-600">${amount as number}</div>
                            <div className="text-sm text-gray-600 capitalize">{platform}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="text-2xl mr-3">📞</span>
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Primary Contact</label>
                        <p className="text-gray-900">{selectedCampaign.contactInfo?.primaryContact}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Company</label>
                        <p className="text-gray-900">{selectedCampaign.contactInfo?.company}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                        <p className="text-gray-900">{selectedCampaign.contactInfo?.email}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                        <p className="text-gray-900">{selectedCampaign.contactInfo?.phone}</p>
                      </div>
                    </div>
                    {selectedCampaign.specialRequirements && (
                      <div className="mt-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Special Requirements</label>
                        <p className="text-gray-900">{selectedCampaign.specialRequirements}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Performance Metrics */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Performance Metrics</h3>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">{selectedCampaign.performance}</div>
                        <div className="text-sm text-gray-600">Overall Performance</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">{selectedCampaign.reach}</div>
                        <div className="text-sm text-gray-600">Total Reach</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600">${selectedCampaign.budget}</div>
                        <div className="text-sm text-gray-600">Total Budget</div>
                      </div>
                    </div>
                  </div>

                  {/* Platforms */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Active Platforms</h3>
                    <div className="space-y-3">
                      {selectedCampaign.platforms?.map((platform: string) => (
                        <div key={platform} className="flex items-center space-x-3">
                          <span className="text-2xl">
                            {platform === 'radio' ? '📻' : platform === 'press' ? '📰' : '🌐'}
                          </span>
                          <span className="font-medium text-gray-900 capitalize">
                            {platform === 'radio' ? 'KT Radio' : platform === 'press' ? 'KT Press' : 'kigalitoday.com'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Objectives */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Campaign Objectives</h3>
                    <div className="space-y-2">
                      {selectedCampaign.objectives?.map((objective: string, index: number) => (
                        <div key={index} className="flex items-center space-x-2">
                          <span className="text-green-500">✓</span>
                          <span className="text-sm text-gray-700">{objective}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Creative Assets */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Available Assets</h3>
                    <div className="space-y-2">
                      {selectedCampaign.creativeAssets && Object.entries(selectedCampaign.creativeAssets).map(([asset, available]) => (
                        <div key={asset} className="flex items-center space-x-2">
                          <span className={available ? 'text-green-500' : 'text-gray-400'}>
                            {available ? '✓' : '✗'}
                          </span>
                          <span className="text-sm text-gray-700 capitalize">
                            {asset.replace('has', '').replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-6">
                <button
                  onClick={handleCloseViewModal}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    handleCloseViewModal();
                    handleEditCampaign(selectedCampaign);
                  }}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Edit Campaign
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Campaign Modal */}
      {showEditModal && selectedCampaign && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Edit Campaign</h2>
                  <p className="text-gray-600 mt-2">Update your campaign details and settings</p>
                </div>
                <button
                  onClick={handleCloseEditModal}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="text-gray-600 text-xl">×</span>
                </button>
              </div>

              {/* Edit Form - Reuse the same form structure as Create Campaign */}
              <form onSubmit={handleUpdateCampaign} className="space-y-8">
                {/* Basic Information Section */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="text-2xl mr-3">📋</span>
                    Basic Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Campaign Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={campaignForm.name}
                        onChange={(e) => setCampaignForm(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Enter campaign name"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Campaign Type *
                      </label>
                      <select
                        required
                        value={campaignForm.campaignType}
                        onChange={(e) => setCampaignForm(prev => ({ ...prev, campaignType: e.target.value }))}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      >
                        <option value="">Select campaign type</option>
                        <option value="brand-awareness">Brand Awareness</option>
                        <option value="lead-generation">Lead Generation</option>
                        <option value="product-launch">Product Launch</option>
                        <option value="event-promotion">Event Promotion</option>
                        <option value="seasonal">Seasonal Campaign</option>
                        <option value="social-impact">Social Impact</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Campaign Description *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={campaignForm.description}
                      onChange={(e) => setCampaignForm(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Describe your campaign goals, key messages, and expected outcomes"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Industry *
                      </label>
                      <select
                        required
                        value={campaignForm.industry}
                        onChange={(e) => setCampaignForm(prev => ({ ...prev, industry: e.target.value }))}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      >
                        <option value="">Select industry</option>
                        <option value="technology">Technology</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Finance & Banking</option>
                        <option value="education">Education</option>
                        <option value="retail">Retail & E-commerce</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="hospitality">Hospitality & Tourism</option>
                        <option value="ngo">NGO & Non-profit</option>
                        <option value="government">Government</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={campaignForm.contactInfo.company}
                        onChange={(e) => setCampaignForm(prev => ({ 
                          ...prev, 
                          contactInfo: { ...prev.contactInfo, company: e.target.value }
                        }))}
                        placeholder="Enter company name"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex space-x-4 pt-6">
                  <button
                    type="button"
                    onClick={handleCloseEditModal}
                    className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Update Campaign
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

