
import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      return;
    }
    
    // Simulate subscription
    setIsSubscribed(true);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-pink-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/20 p-4 rounded-full">
              <Mail size={48} className="text-white animate-pulse" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Stay Inspired
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of readers who get fresh insights, stories, and inspiration 
            delivered straight to their inbox every week.
          </p>

          {/* Subscription Form */}
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className={`flex flex-col sm:flex-row gap-4 ${isShaking ? 'animate-pulse' : ''}`}>
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className={`w-full px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 bg-white/95 backdrop-blur-sm border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30 focus:border-white ${
                      isShaking ? 'border-red-400 animate-pulse' : 'border-transparent'
                    }`}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              
              {isShaking && (
                <p className="text-red-200 text-sm mt-2 animate-pulse">
                  Please enter a valid email address
                </p>
              )}
            </form>
          ) : (
            <div className="text-center">
              <div className="bg-green-500 text-white px-8 py-4 rounded-full inline-flex items-center space-x-2 font-semibold animate-bounce">
                <span>✓</span>
                <span>Successfully subscribed!</span>
              </div>
              <p className="text-blue-100 mt-4">
                Welcome to the ThoughtNest community!
              </p>
            </div>
          )}

          {/* Additional info */}
          <div className="mt-8 text-blue-200 text-sm space-y-2">
            <p>✨ Weekly curated content</p>
            <p>🚀 No spam, unsubscribe anytime</p>
            <p>💝 Join 12,000+ happy subscribers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
