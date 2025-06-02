
import React from 'react';

const RecentBlogs = () => {
  const recentPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for creating React apps that can grow with your business needs.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&q=80",
      author: "Sarah Chen",
      category: "Tech",
      tags: ["React", "JavaScript", "Web Dev"],
      readTime: "8 min read",
      publishDate: "Dec 1, 2024"
    },
    {
      id: 2,
      title: "The Art of Minimalist Design",
      excerpt: "Discover how less can be more when it comes to creating beautiful, functional designs.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
      author: "Marcus Rodriguez",
      category: "Design",
      tags: ["Design", "Minimalism", "UX"],
      readTime: "6 min read",
      publishDate: "Nov 28, 2024"
    },
    {
      id: 3,
      title: "Remote Work Revolution",
      excerpt: "How the shift to remote work is transforming companies and employee experiences worldwide.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&q=80",
      author: "Emily Watson",
      category: "Lifestyle",
      tags: ["Remote Work", "Productivity", "Career"],
      readTime: "10 min read",
      publishDate: "Nov 25, 2024"
    },
    {
      id: 4,
      title: "Sustainable Travel Tips",
      excerpt: "Explore the world responsibly with these eco-friendly travel practices and destinations.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&q=80",
      author: "David Park",
      category: "Travel",
      tags: ["Travel", "Sustainability", "Environment"],
      readTime: "7 min read",
      publishDate: "Nov 22, 2024"
    },
    {
      id: 5,
      title: "Machine Learning Fundamentals",
      excerpt: "A beginner-friendly introduction to machine learning concepts and practical applications.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
      author: "Alex Kim",
      category: "Tech",
      tags: ["AI", "Machine Learning", "Python"],
      readTime: "12 min read",
      publishDate: "Nov 20, 2024"
    },
    {
      id: 6,
      title: "Mindfulness in Daily Life",
      excerpt: "Simple techniques to bring mindfulness into your everyday routine for better mental health.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&q=80",
      author: "Lisa Thompson",
      category: "Wellness",
      tags: ["Mindfulness", "Mental Health", "Lifestyle"],
      readTime: "5 min read",
      publishDate: "Nov 18, 2024"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Recent Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest articles and insights from talented writers
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>By {post.author}</span>
                  <span>{post.publishDate}</span>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group-hover:translate-x-1 transform">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Load More Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;
