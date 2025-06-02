
import React from 'react';
import { Mail, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const footerSections = {
    about: {
      title: "About ThoughtNest",
      links: [
        "Our Story",
        "Meet the Team",
        "Careers",
        "Press Kit",
        "Contact Us"
      ]
    },
    categories: {
      title: "Categories",
      links: [
        "Technology",
        "Lifestyle",
        "Travel",
        "Food & Cooking",
        "Education"
      ]
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        "Write for Us",
        "Advertise",
        "Privacy Policy",
        "Terms of Service",
        "RSS Feed"
      ]
    }
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:hello@thoughtnest.com",
      hoverColor: "hover:text-blue-400"
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      hoverColor: "hover:text-pink-400"
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      hoverColor: "hover:text-blue-400"
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "#",
      hoverColor: "hover:text-red-400"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              ThoughtNest
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A place where ideas take flight. Join our community of writers, thinkers, 
              and dreamers sharing stories that inspire and educate.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-gray-400 ${social.hoverColor} transition-all duration-300 transform hover:scale-110 p-2 bg-gray-800 rounded-full hover:bg-gray-700`}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer sections */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-lg font-semibold mb-4 text-white">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter signup in footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h4 className="text-lg font-semibold mb-2">Never miss a story</h4>
              <p className="text-gray-400 text-sm">
                Get the latest insights delivered to your inbox
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>
              © 2024 ThoughtNest. All rights reserved. Made with ❤️ for writers and readers.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
