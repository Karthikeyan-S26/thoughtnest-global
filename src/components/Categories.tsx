
import React from 'react';

const Categories = () => {
  const categories = [
    {
      name: "Technology",
      description: "Latest trends in tech, programming, and innovation",
      icon: "💻",
      postCount: 24,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Lifestyle",
      description: "Tips for better living, wellness, and personal growth",
      icon: "🌱",
      postCount: 18,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "Travel",
      description: "Explore the world through inspiring travel stories",
      icon: "✈️",
      postCount: 32,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Food",
      description: "Culinary adventures, recipes, and food culture",
      icon: "🍳",
      postCount: 15,
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Education",
      description: "Learning resources, tutorials, and academic insights",
      icon: "📚",
      postCount: 21,
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="categories" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dive into diverse topics and discover content that sparks your curiosity
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                
                {/* Category name */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {category.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                {/* Post count */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {category.postCount} posts
                  </span>
                  <div className={`w-8 h-8 bg-gradient-to-r ${category.gradient} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110`}>
                    <span className="text-white text-sm font-bold">→</span>
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity duration-300 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
