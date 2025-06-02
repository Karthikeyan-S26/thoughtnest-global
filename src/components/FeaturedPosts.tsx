
import React, { useState } from 'react';

const FeaturedPosts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends and technologies shaping the web development landscape in 2024.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
      category: "Tech",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Mindful Living in a Digital Age",
      excerpt: "How to maintain balance and mindfulness while navigating our increasingly connected world.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&q=80",
      category: "Lifestyle",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Hidden Gems of Southeast Asia",
      excerpt: "Discover breathtaking destinations off the beaten path in Southeast Asia's most beautiful countries.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
      category: "Travel",
      readTime: "12 min read"
    },
    {
      id: 4,
      title: "The Art of Sustainable Cooking",
      excerpt: "Learn how to create delicious meals while reducing your environmental impact through mindful cooking.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&q=80",
      category: "Food",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Learning Languages Through Immersion",
      excerpt: "Effective strategies for mastering new languages through cultural immersion and practice.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
      category: "Education",
      readTime: "10 min read"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
  };

  const handleReadMore = (postId: number) => {
    console.log(`Reading post ${postId}`);
    // Navigate to blog post page
    window.location.href = `/blog/${postId}`;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and impactful articles, handpicked by our editorial team
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredPosts.map((post) => (
                <div key={post.id} className="w-full flex-shrink-0 relative">
                  <div className="relative h-96 lg:h-[500px]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                      <div className="max-w-2xl">
                        <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                          {post.category}
                        </span>
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <button 
                            onClick={() => handleReadMore(post.id)}
                            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 cursor-pointer"
                          >
                            Read More
                          </button>
                          <span className="text-gray-300 text-sm">
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 cursor-pointer"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 cursor-pointer"
          >
            →
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {featuredPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
                  index === currentSlide 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
