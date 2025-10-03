'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PartnershipPage() {
  const [activeTab, setActiveTab] = useState('overview');

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
                <p className="text-sm text-gray-600 font-medium">Partnership Opportunities</p>
              </div>
            </Link>
            <div className="flex space-x-4">
              <Link
                href="/advertising"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-blue-50"
              >
                📢 Advertising
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
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 rounded-full text-sm font-bold">
              🤝 STRATEGIC PARTNERSHIPS
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            Partnership{' '}
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Opportunities
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
            Join forces with Kigali Today Ltd to create meaningful connections across Rwanda's most comprehensive media ecosystem. 
            Build lasting brand relationships that go beyond traditional advertising.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'overview'
                  ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-2xl'
                  : 'border-2 border-green-600 text-green-600 hover:bg-green-50 hover:shadow-lg'
              }`}
            >
              📋 Partnership Overview
            </button>
            <button
              onClick={() => setActiveTab('types')}
              className={`px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'types'
                  ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-2xl'
                  : 'border-2 border-green-600 text-green-600 hover:bg-green-50 hover:shadow-lg'
              }`}
            >
              🎯 Partnership Types
            </button>
            <button
              onClick={() => setActiveTab('process')}
              className={`px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'process'
                  ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-2xl'
                  : 'border-2 border-green-600 text-green-600 hover:bg-green-50 hover:shadow-lg'
              }`}
            >
              📝 Partnership Process
            </button>
          </div>
        </div>

        {/* Partnership Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-20">
            {/* Why Partner With Us */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Partner with Kigali Today Ltd?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our comprehensive media ecosystem offers unmatched reach and influence across Rwanda. 
                  Partner with us to amplify your brand message through strategic, long-term relationships.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Comprehensive Reach</h3>
                      <p className="text-gray-600">Access 750K+ monthly audience across radio, print, and digital platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Strategic Integration</h3>
                      <p className="text-gray-600">Seamlessly integrate your brand across all our media channels</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Trusted Platform</h3>
                      <p className="text-gray-600">Leverage our reputation as Rwanda's premier media group</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Start Your Partnership Journey?</h3>
                <p className="text-green-100 mb-8">
                  Join our partnership platform to access collaboration tools, partnership management, and exclusive partnership opportunities with Kigali Today Ltd.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span>Partnership management dashboard</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span>Collaboration tools & resources</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span>Dedicated partnership support</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/register"
                    className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
                  >
                    Create Account
                  </Link>
                  <Link
                    href="/login"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200 backdrop-blur-sm text-center"
                  >
                    Sign In
                  </Link>
                </div>

                <p className="text-green-200 text-sm mt-4">
                  Already have an account? Sign in to access your partnership dashboard.
                </p>
              </div>
            </div>

            {/* Our Media Ecosystem */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Media Ecosystem</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Partner with Rwanda's most comprehensive media platform
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📻</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">KT Radio</h3>
                  <p className="text-gray-600">80%+ national coverage</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    500K+ daily listeners
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    24/7 broadcasting
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Live event coverage
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📰</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">KT Press</h3>
                  <p className="text-gray-600">Premium print media</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    50K+ weekly circulation
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Business leaders audience
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    In-depth analysis
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🌐</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">kigalitoday.com</h3>
                  <p className="text-gray-600">Dynamic news platform</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    200K+ monthly visitors
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Real-time updates
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Mobile-optimized
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Partnership Types */}
        {activeTab === 'types' && (
          <div className="space-y-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Partnership Types</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the partnership model that best aligns with your brand and business objectives
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-200">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-3xl">🤝</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Multi-Platform Partnerships</h3>
                  <p className="text-lg text-gray-600">Strategic alliances across all our media channels</p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Cross-platform brand integration</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Coordinated content campaigns</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Exclusive partnership benefits</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Dedicated account management</span>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">Ideal For:</h4>
                  <p className="text-green-700">Large corporations, government agencies, and organizations seeking comprehensive media presence</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-200">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-3xl">📰</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Media Collaborations</h3>
                  <p className="text-lg text-gray-600">Focused partnerships with specific media platforms</p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Featured articles in KT Press</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Digital content on kigalitoday.com</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Executive thought leadership</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Targeted audience engagement</span>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-800 mb-2">Ideal For:</h4>
                  <p className="text-blue-700">Businesses, NGOs, and organizations targeting specific demographics</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-200">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-3xl">📻</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Radio Partnerships</h3>
                  <p className="text-lg text-gray-600">Leverage KT Radio's 80% national coverage</p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Live event coverage</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Community engagement programs</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Sponsored radio segments</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Rural community outreach</span>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-bold text-purple-800 mb-2">Ideal For:</h4>
                  <p className="text-purple-700">Community organizations, NGOs, and brands targeting rural audiences</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-indigo-200">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-3xl">🎉</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Event Collaborations</h3>
                  <p className="text-lg text-gray-600">Partner for community events and initiatives</p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Event co-hosting</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Live broadcast coverage</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Community engagement</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">Cross-platform promotion</span>
                  </div>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-bold text-indigo-800 mb-2">Ideal For:</h4>
                  <p className="text-indigo-700">Event organizers, festivals, and community initiatives</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Partnership Process */}
        {activeTab === 'process' && (
          <div className="space-y-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Partnership Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our streamlined process ensures successful partnerships from initial inquiry to long-term collaboration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Initial Inquiry</h3>
                <p className="text-gray-600">Submit your partnership proposal through our inquiry form or contact our partnership team directly.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Consultation</h3>
                <p className="text-gray-600">We'll schedule a consultation to understand your goals and explore partnership opportunities.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proposal & Agreement</h3>
                <p className="text-gray-600">We'll create a customized partnership proposal and finalize the collaboration agreement.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Launch & Support</h3>
                <p className="text-gray-600">We'll launch your partnership with full support and ongoing relationship management.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl shadow-2xl p-12 text-white">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-6">Ready to Partner with Us?</h3>
                <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                  Join leading organizations who trust Kigali Today Ltd to amplify their message across Rwanda
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    href="/register"
                    className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    Create Account
                  </Link>
                  <Link
                    href="/login"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
                  >
                    Sign In
                  </Link>
                </div>
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
                  <p className="text-gray-400 text-sm">Partnership Opportunities</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Building strategic partnerships that create lasting impact across Rwanda's media landscape.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/landing" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/advertising" className="hover:text-white transition-colors">Advertising</Link></li>
                <li><Link href="/login" className="hover:text-white transition-colors">Staff Portal</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 text-xs">📧</span>
                  partnerships@kigalitoday.rw
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 text-xs">📞</span>
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
