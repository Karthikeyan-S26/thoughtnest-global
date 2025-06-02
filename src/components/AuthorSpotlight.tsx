
import React from 'react';

const AuthorSpotlight = () => {
  const authors = [
    {
      id: 1,
      name: "Sarah Chen",
      bio: "Full-stack developer and tech enthusiast with a passion for creating innovative web solutions.",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=150&fit=crop&crop=face",
      postCount: 12,
      specialties: ["React", "Node.js", "AI"],
      followers: "2.4k"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      bio: "UX designer and creative director helping brands tell their stories through beautiful design.",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face",
      postCount: 8,
      specialties: ["Design", "UX", "Branding"],
      followers: "1.8k"
    },
    {
      id: 3,
      name: "Emily Watson",
      bio: "Lifestyle blogger and wellness coach sharing insights on mindful living and personal growth.",
      avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=150&h=150&fit=crop&crop=face",
      postCount: 15,
      specialties: ["Wellness", "Productivity", "Travel"],
      followers: "3.1k"
    }
  ];

  return (
    <section id="authors" className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Authors
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the brilliant minds behind our most engaging content
          </p>
        </div>

        {/* Authors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.map((author, index) => (
            <div
              key={author.id}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 group-hover:border-blue-300 transition-all duration-300 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Author Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {author.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {author.bio}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {author.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex justify-center space-x-6 mb-6 text-sm text-gray-500">
                  <div className="text-center">
                    <div className="font-bold text-gray-900">{author.postCount}</div>
                    <div>Posts</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">{author.followers}</div>
                    <div>Followers</div>
                  </div>
                </div>

                {/* Follow Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg">
                  Follow
                </button>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 blur-xl rounded-2xl transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* View All Authors Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Authors
          </button>
        </div>
      </div>
    </section>
  );
};

export default AuthorSpotlight;
