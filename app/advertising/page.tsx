'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AdvertisingPage() {
  const [activeTab, setActiveTab] = useState('packages');
  const [selectedPackage, setSelectedPackage] = useState('premium');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/landing" className="flex items-center group">
              <div className="h-14 w-14 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-2xl">KT</span>
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Kigali Today Ltd</h1>
                <p className="text-sm text-gray-600 font-medium">Advertising Packages</p>
              </div>
            </Link>
            <div className="flex space-x-4">
              <Link
                href="/partnership"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-blue-50"
              >
                🤝 Partnership
              </Link>
              <Link
                href="/login"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Staff Portal
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-bold">
              📢 ADVERTISING PACKAGES
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            Advertising{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Packages
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
            Maximize your reach across Rwanda's most comprehensive media ecosystem. 
            Choose from our flexible advertising packages designed to deliver measurable results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={() => setActiveTab('packages')}
              className={`px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'packages'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl'
                  : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:shadow-lg'
              }`}
            >
              💰 Advertising Packages
            </button>
            <button
              onClick={() => setActiveTab('benefits')}
              className={`px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'benefits'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl'
                  : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:shadow-lg'
              }`}
            >
              🎯 Why Advertise With Us
            </button>
            <button
              onClick={() => setActiveTab('process')}
              className={`px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'process'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl'
                  : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:shadow-lg'
              }`}
            >
              📋 How It Works
            </button>
          </div>
        </div>

        {/* Advertising Packages */}
        {activeTab === 'packages' && (
          <div className="space-y-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Advertising Package</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Flexible packages designed to maximize your reach and impact across all our media platforms
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Basic Package */}
              <div className={`bg-white rounded-2xl shadow-xl p-8 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                selectedPackage === 'basic' ? 'border-blue-500' : 'border-gray-200'
              }`}>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl">📊</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Reach</h3>
                  <div className="text-4xl font-bold text-gray-600 mb-2">$299</div>
                  <p className="text-gray-500">per month</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">10 KT Radio spots per week</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Quarter-page KT Press ad</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Banner ad on kigalitoday.com</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Basic analytics report</span>
                  </li>
                </ul>
                <button 
                  onClick={() => setSelectedPackage('basic')}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    selectedPackage === 'basic'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-600 text-white hover:bg-gray-700'
                  }`}
                >
                  {selectedPackage === 'basic' ? 'Selected' : 'Choose Basic'}
                </button>
              </div>

              {/* Premium Package */}
              <div className={`bg-white rounded-2xl shadow-xl p-8 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative ${
                selectedPackage === 'premium' ? 'border-blue-500' : 'border-blue-300'
              }`}>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Impact</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">$599</div>
                  <p className="text-gray-500">per month</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">25 KT Radio spots per week</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Half-page KT Press ad</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Featured content on kigalitoday.com</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Detailed analytics dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Cross-platform brand mentions</span>
                  </li>
                </ul>
                <button 
                  onClick={() => setSelectedPackage('premium')}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    selectedPackage === 'premium'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {selectedPackage === 'premium' ? 'Selected' : 'Choose Premium'}
                </button>
              </div>

              {/* Enterprise Package */}
              <div className={`bg-white rounded-2xl shadow-xl p-8 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                selectedPackage === 'enterprise' ? 'border-blue-500' : 'border-gray-200'
              }`}>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl">👑</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Power</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">$1,299</div>
                  <p className="text-gray-500">per month</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Unlimited KT Radio spots</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Full-page KT Press ads</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Homepage takeover on kigalitoday.com</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Real-time analytics dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Custom content creation</span>
                  </li>
                </ul>
                <button 
                  onClick={() => setSelectedPackage('enterprise')}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    selectedPackage === 'enterprise'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-600 text-white hover:bg-gray-700'
                  }`}
                >
                  {selectedPackage === 'enterprise' ? 'Selected' : 'Contact Sales'}
                </button>
              </div>
            </div>

            {/* Package Comparison */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Package Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Features</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-600">Basic</th>
                      <th className="text-center py-4 px-6 font-semibold text-blue-600">Premium</th>
                      <th className="text-center py-4 px-6 font-semibold text-purple-600">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-6 font-medium text-gray-900">KT Radio Spots</td>
                      <td className="py-4 px-6 text-center text-gray-600">10/week</td>
                      <td className="py-4 px-6 text-center text-blue-600">25/week</td>
                      <td className="py-4 px-6 text-center text-purple-600">Unlimited</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-gray-900">KT Press Ads</td>
                      <td className="py-4 px-6 text-center text-gray-600">Quarter-page</td>
                      <td className="py-4 px-6 text-center text-blue-600">Half-page</td>
                      <td className="py-4 px-6 text-center text-purple-600">Full-page</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-gray-900">Digital Presence</td>
                      <td className="py-4 px-6 text-center text-gray-600">Banner ads</td>
                      <td className="py-4 px-6 text-center text-blue-600">Featured content</td>
                      <td className="py-4 px-6 text-center text-purple-600">Homepage takeover</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-gray-900">Analytics</td>
                      <td className="py-4 px-6 text-center text-gray-600">Basic report</td>
                      <td className="py-4 px-6 text-center text-blue-600">Detailed dashboard</td>
                      <td className="py-4 px-6 text-center text-purple-600">Real-time dashboard</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-gray-900">Support</td>
                      <td className="py-4 px-6 text-center text-gray-600">Email support</td>
                      <td className="py-4 px-6 text-center text-blue-600">Priority support</td>
                      <td className="py-4 px-6 text-center text-purple-600">Dedicated manager</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-12 text-white">
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-6">Ready to Start Your Advertising Campaign?</h3>
                <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
                  Join our advertising platform to access campaign management tools, detailed analytics, and personalized support for your advertising needs.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="flex items-center justify-center">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span>Campaign management dashboard</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span>Real-time analytics & reporting</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span>Dedicated account support</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    href="/register"
                    className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Create Account
                  </Link>
                  <Link
                    href="/login"
                    className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
                  >
                    Sign In
                  </Link>
                </div>

                <p className="text-blue-200 text-sm mt-6">
                  Already have an account? Sign in to manage your campaigns and view analytics.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Benefits Section */}
        {activeTab === 'benefits' && (
          <div className="space-y-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Advertise with Kigali Today Ltd?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leverage Rwanda's most comprehensive media ecosystem for maximum impact and measurable results
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📻</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Reach</h3>
                      <p className="text-gray-600">
                        Connect with 750K+ monthly audience across radio, print, and digital platforms. 
                        Our multi-platform approach ensures maximum visibility and engagement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Platform Targeting</h3>
                      <p className="text-gray-600">
                        Reach different demographics through radio, print, and digital channels. 
                        Target business leaders through KT Press, mass market through radio, and mobile users through digital.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📊</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Cross-Platform Analytics</h3>
                      <p className="text-gray-600">
                        Track performance across all media channels with unified reporting. 
                        Get detailed insights into your campaign effectiveness and ROI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">🤝</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Trusted Media Group</h3>
                      <p className="text-gray-600">
                        Leverage our reputation as Rwanda's premier media ecosystem. 
                        Benefit from 15+ years of experience and established credibility.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">🇷🇼</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">National Coverage</h3>
                      <p className="text-gray-600">
                        Reach audiences across Rwanda with our 80%+ national radio coverage. 
                        Connect with both urban and rural communities effectively.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">💡</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Creative Solutions</h3>
                      <p className="text-gray-600">
                        Work with our creative team to develop compelling campaigns that resonate with your target audience. 
                        Custom content creation and strategic messaging.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl shadow-2xl p-12 text-white">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-6">Success Stories</h3>
                <p className="text-xl text-green-100 max-w-3xl mx-auto">
                  See how our advertising partners have achieved remarkable results
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">300%</div>
                  <div className="text-green-100 mb-4">Increase in Brand Awareness</div>
                  <p className="text-sm text-green-200">Tech Solutions Ltd saw a 300% increase in brand awareness after 6 months of multi-platform advertising.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">150%</div>
                  <div className="text-green-100 mb-4">ROI Improvement</div>
                  <p className="text-sm text-green-200">Rwanda Business Group achieved 150% ROI improvement with our targeted advertising campaigns.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">85%</div>
                  <div className="text-green-100 mb-4">Customer Satisfaction</div>
                  <p className="text-sm text-green-200">85% of our advertising partners report high satisfaction with campaign performance and results.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Process Section */}
        {activeTab === 'process' && (
          <div className="space-y-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">How Our Advertising Process Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our streamlined process ensures successful campaigns from strategy to execution
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Discovery & Strategy</h3>
                <p className="text-gray-600">We'll analyze your business goals, target audience, and create a customized advertising strategy.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Campaign Design</h3>
                <p className="text-gray-600">Our creative team develops compelling campaigns tailored to your brand and objectives.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Launch & Monitor</h3>
                <p className="text-gray-600">We launch your campaign across all platforms and monitor performance in real-time.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Optimize & Report</h3>
                <p className="text-gray-600">We continuously optimize your campaign and provide detailed performance reports.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Campaign?</h3>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Create your account to access our advertising platform and start building your campaign today
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/register"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
                >
                  Create Account
                </Link>
                <Link
                  href="/login"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-200 text-center"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <div className="flex items-center mb-6">
                <div className="h-14 w-14 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">KT</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold">Kigali Today Ltd</h3>
                  <p className="text-gray-400 text-sm">Advertising Packages</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Maximizing your reach across Rwanda's most comprehensive media ecosystem with measurable results.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/landing" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/partnership" className="hover:text-white transition-colors">Partnership</Link></li>
                <li><Link href="/login" className="hover:text-white transition-colors">Staff Portal</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 text-xs">📧</span>
                  advertising@kigalitoday.rw
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 text-xs">📞</span>
                  +250 788 123 456
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-3 text-xs">📍</span>
                  Kigali, Rwanda
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <span className="text-white">📘</span>
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                  <span className="text-white">🐦</span>
                </div>
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                  <span className="text-white">📺</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Kigali Today Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
