'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center group">
              <div className="h-12 w-12 bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                <span className="text-white font-bold text-xl">KT</span>
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">Kigali Today Ltd</h1>
                <p className="text-xs text-gray-600 font-medium">Rwanda's Premier Media Group</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/login"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-50"
              >
                Sign in
              </Link>
              <Link
                href="/register"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-orange-100 to-pink-100 border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="text-center">
            <p className="text-sm text-orange-800 font-medium">
              🚀 Elevate your brand with Rwanda's most comprehensive media reach! Partner with Kigali Today Ltd for unmatched 80% national coverage across radio, print, and digital platforms. 
              <span className="font-semibold"> Click to discover our partnership opportunities!</span>
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Magnetize
                  <br />
                  <span className="text-4xl md:text-5xl">Your Media</span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                    Partnership
                  </span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Unlock efficiency with Kigali Today Ltd, your all-in-one media partnership platform. 
                  Simplify brand reach and elevate audience engagement across radio, print, and digital channels. 
                  Ready to transform your media presence?
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/partnership"
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold text-center hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/advertising"
                  className="px-8 py-4 bg-orange-100 text-orange-700 rounded-lg font-semibold text-center border border-orange-200 hover:bg-orange-200 transition-all duration-200"
                >
                  Book a Demo
                </Link>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main Visual Container */}
                <div className="relative">
                  <div className="w-80 h-96 mx-auto relative">
                    {/* Abstract Background Shapes */}
                    <div className="absolute inset-0">
                      <div className="absolute top-0 left-0 w-32 h-32 bg-orange-200 rounded-2xl transform rotate-12"></div>
                      <div className="absolute top-8 right-0 w-24 h-24 bg-blue-200 rounded-2xl transform -rotate-12"></div>
                      <div className="absolute bottom-0 left-8 w-28 h-28 bg-purple-200 rounded-full"></div>
                    </div>
                    
                    {/* Main Professional Image */}
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                      <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-white">
                        <img 
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                          alt="Professional media executive" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Media Platform Cards with Images */}
                    <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">📻</span>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-900">KT Radio</div>
                          <div className="text-xs text-gray-600">Live Now</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute top-20 right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">📰</span>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-900">KT Press</div>
                          <div className="text-xs text-gray-600">Weekly</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 border border-gray-200">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">🌐</span>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-900">kigalitoday.com</div>
                          <div className="text-xs text-gray-600">200K+ visitors</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 text-center">
            <p className="text-sm text-gray-500 mb-8">Trust built on 2000+ successful partnerships</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">750K+</div>
                <div className="text-sm text-gray-600 font-medium">Monthly Reach</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">80%+</div>
                <div className="text-sm text-gray-600 font-medium">National Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                <div className="text-sm text-gray-600 font-medium">Media Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="py-20 bg-gray-50">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the complete capabilities of our media platform with comprehensive reach across Rwanda's most engaged audiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* KT Radio Feature */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📻</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Radio Broadcasting</h3>
              <p className="text-gray-600 leading-relaxed">
                Effortlessly manage your brand reach with real-time radio broadcasting across 80% of Rwanda's population
              </p>
            </div>

            {/* Analytics Feature */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics Dashboard</h3>
              <p className="text-gray-600 leading-relaxed">
                Make data-driven decisions and foster professional growth with our comprehensive performance analytics dashboard
              </p>
            </div>

            {/* Multi-Platform Management */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🌐</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-Platform Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Simplify media management with efficient cross-platform coordination through our centralized media ecosystem
              </p>
            </div>
          </div>
        </div>

        {/* Our Media Ecosystem */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Media Ecosystem</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kigali Today Ltd operates Rwanda's most comprehensive media platform, reaching audiences 
              through radio, print, and digital channels with unmatched coverage and influence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* KT Radio */}
            <div className="group bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-white text-3xl">📻</span>
                </div>
                <div className="w-full h-32 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop" 
                    alt="Radio studio broadcasting" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">KT Radio</h3>
                <p className="text-gray-600 text-lg font-medium">One of only 3 radio stations with 80%+ national coverage</p>
              </div>
              <div className="space-y-5">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-gray-700 font-medium">National Coverage</span>
                  <span className="font-bold text-blue-600 text-lg">80%+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Daily Listeners</span>
                  <span className="font-bold text-blue-600 text-lg">500K+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Broadcasting</span>
                  <span className="font-bold text-blue-600 text-lg">24/7</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Languages</span>
                  <span className="font-bold text-blue-600 text-lg">Kinyarwanda, English</span>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Features:</h4>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Morning shows with highest listenership
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    News updates every hour
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Community-focused programming
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Live event coverage
                  </li>
                </ul>
              </div>
            </div>

            {/* KT Press */}
            <div className="group bg-white rounded-2xl shadow-xl p-8 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-white text-3xl">📰</span>
                </div>
                <div className="w-full h-32 bg-gradient-to-r from-green-100 to-green-200 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=200&fit=crop" 
                    alt="Newspaper and print media" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">KT Press</h3>
                <p className="text-gray-600 text-lg font-medium">Premium print media reaching Rwanda's decision makers</p>
              </div>
              <div className="space-y-5">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Circulation</span>
                  <span className="font-bold text-green-600 text-lg">50K+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Frequency</span>
                  <span className="font-bold text-green-600 text-lg">Weekly</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Target Audience</span>
                  <span className="font-bold text-green-600 text-lg">Business Leaders</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Languages</span>
                  <span className="font-bold text-green-600 text-lg">English, Kinyarwanda</span>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Features:</h4>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    In-depth business analysis
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Government and policy coverage
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Premium advertising placements
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Executive readership
                  </li>
                </ul>
              </div>
            </div>

            {/* kigalitoday.com */}
            <div className="group bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-white text-3xl">🌐</span>
                </div>
                <div className="w-full h-32 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop" 
                    alt="Digital news website and analytics" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">kigalitoday.com</h3>
                <p className="text-gray-600 text-lg font-medium">Dynamic news site in Kinyarwanda, Rwanda's national language</p>
              </div>
              <div className="space-y-5">
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Monthly Visitors</span>
                  <span className="font-bold text-purple-600 text-lg">200K+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Updates</span>
                  <span className="font-bold text-purple-600 text-lg">Real-time</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Primary Language</span>
                  <span className="font-bold text-purple-600 text-lg">Kinyarwanda</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Mobile Users</span>
                  <span className="font-bold text-purple-600 text-lg">85%</span>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Features:</h4>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Breaking news in Kinyarwanda
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Local and national coverage
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Mobile-optimized platform
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Social media integration
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Combined Reach Stats */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl shadow-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="mb-6">
                  <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-bold">
                    🚀 COMPREHENSIVE REACH
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">Combined Media Reach</h3>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">Kigali Today Ltd's comprehensive media ecosystem delivering unmatched coverage across Rwanda</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="group">
                  <div className="text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">750K+</div>
                  <div className="text-blue-100 font-medium">Total Monthly Reach</div>
                </div>
                <div className="group">
                  <div className="text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">80%+</div>
                  <div className="text-blue-100 font-medium">National Coverage</div>
                </div>
                <div className="group">
                  <div className="text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">3</div>
                  <div className="text-blue-100 font-medium">Media Platforms</div>
                </div>
                <div className="group">
                  <div className="text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <div className="text-blue-100 font-medium">Content Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Testimonials Section */}
        <div className="py-20 bg-gray-50">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Partners Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Trusted by leading brands and organizations across Rwanda</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Testimonial */}
            <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
                    alt="Jean Kamanzi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Jean Kamanzi</h4>
                  <p className="text-gray-600">CEO, Rwanda Business Group</p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                "Since using Kigali Today Ltd's media platform, our brand reach has become more efficient and organized. It's a game-changer!"
              </blockquote>
              <div className="flex text-yellow-400 mt-4">
                <span className="text-2xl">⭐⭐⭐⭐⭐</span>
              </div>
            </div>

            {/* Right Side - Additional Testimonials */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden shadow-md mr-3">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" 
                      alt="Marie Uwimana" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Marie Uwimana</h4>
                    <p className="text-gray-600 text-sm">Marketing Director, Tech Solutions Ltd</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  "The combination of KT Press for business leaders and kigalitoday.com for the general public gave us comprehensive market penetration."
                </p>
                <div className="flex text-yellow-400 mt-2">
                  <span className="text-lg">⭐⭐⭐⭐⭐</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden shadow-md mr-3">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
                      alt="Paul Nkurunziza" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Paul Nkurunziza</h4>
                    <p className="text-gray-600 text-sm">Founder, Community Development NGO</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  "Working with Kigali Today Ltd was a game-changer. Their 80% national radio coverage helped us connect with communities across the country."
                </p>
                <div className="flex text-yellow-400 mt-2">
                  <span className="text-lg">⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
          <div className="text-center mb-12">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-bold">
                📊 WHY CHOOSE US
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Kigali Today Ltd?</h2>
            <p className="text-xl text-gray-600">Rwanda's most comprehensive and trusted media ecosystem</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300">750K+</div>
              <div className="text-gray-600 font-medium">Monthly Reach</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-green-600 mb-3 group-hover:scale-110 transition-transform duration-300">80%+</div>
              <div className="text-gray-600 font-medium">National Coverage</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-purple-600 mb-3 group-hover:scale-110 transition-transform duration-300">3</div>
              <div className="text-gray-600 font-medium">Media Platforms</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-indigo-600 mb-3 group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo Section */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">KT</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-gray-900">Kigali Today Ltd</h3>
                </div>
              </div>
              <p className="text-gray-500 text-sm mb-6">
                Rwanda's premier media group connecting communities through radio, print, and digital platforms.
              </p>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <span className="text-white text-sm">📘</span>
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                  <span className="text-white text-sm">🐦</span>
                </div>
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                  <span className="text-white text-sm">📺</span>
                </div>
                <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors cursor-pointer">
                  <span className="text-white text-sm">💼</span>
                </div>
              </div>
            </div>
            
            {/* Product */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="/partnership" className="hover:text-gray-900 transition-colors">Partnerships</a></li>
                <li><a href="/advertising" className="hover:text-gray-900 transition-colors">Advertising</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">User guides</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Webinars</a></li>
              </ul>
            </div>
            
            {/* Platform */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Partners & integrations</a></li>
                <li><a href="/partnership" className="hover:text-gray-900 transition-colors">Become a partner</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Developer API</a></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="/register" className="hover:text-gray-900 transition-colors">Join us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                © 2024 Kigali Today Ltd. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex space-x-4 text-sm text-gray-500">
                  <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
                  <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
                  <a href="#" className="hover:text-gray-900 transition-colors">Sitemap</a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Language:</span>
                  <select className="text-sm text-gray-700 bg-transparent border-none focus:outline-none">
                    <option>English</option>
                    <option>Kinyarwanda</option>
                    <option>Français</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
