
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedPosts from '../components/FeaturedPosts';
import Categories from '../components/Categories';
import RecentBlogs from '../components/RecentBlogs';
import AuthorSpotlight from '../components/AuthorSpotlight';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar />
      <Hero />
      <FeaturedPosts />
      <Categories />
      <RecentBlogs />
      <AuthorSpotlight />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
