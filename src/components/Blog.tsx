import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen, Code, Lightbulb, TrendingUp } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
}

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Scalable React Applications: Lessons from PreAssess",
      excerpt: "Key insights and best practices I learned while developing PreAssess, a dependency-aware assessment platform using React and TypeScript.",
      content: "In this post, I'll share the architectural decisions and optimization techniques that helped us build PreAssess, a scalable assessment platform...",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "TypeScript", "Architecture", "Performance"],
      featured: true
    },
    {
      id: 2,
      title: "My Journey to Amazon HackOn 2025 Semi-Finals",
      excerpt: "How our sustainable shopping platform made it to the semi-finals and what I learned about building eco-friendly tech solutions.",
      content: "Participating in Amazon HackOn 2025 was an incredible experience. Our team developed a sustainable shopping website that combines e-commerce with environmental consciousness...",
      date: "2025-01-10",
      readTime: "6 min read",
      category: "Hackathons",
      tags: ["Hackathon", "Sustainability", "Machine Learning", "Innovation"],
      featured: true
    },
    {
      id: 3,
      title: "Mastering Full-Stack Development: MERN Stack Deep Dive",
      excerpt: "A comprehensive guide to building modern web applications with MongoDB, Express.js, React, and Node.js based on my internship experience.",
      content: "During my internship at DLED Labs, IIT Ropar, I gained extensive experience with the MERN stack. Here's everything you need to know...",
      date: "2025-01-05",
      readTime: "12 min read",
      category: "Full Stack",
      tags: ["MERN", "MongoDB", "Express", "Node.js", "Backend"],
      featured: false
    },
    {
      id: 4,
      title: "Blockchain in Healthcare: Building MediCare",
      excerpt: "Exploring how blockchain technology can revolutionize healthcare data management and patient privacy.",
      content: "MediCare was our submission for Google Solution Challenge 2024, combining blockchain technology with AI to create a secure healthcare platform...",
      date: "2024-12-28",
      readTime: "10 min read",
      category: "Blockchain",
      tags: ["Blockchain", "Healthcare", "Security", "AI"],
      featured: false
    },
    {
      id: 5,
      title: "Placement Preparation: From 9.56 CGPA to Dream Job",
      excerpt: "My complete placement preparation strategy, including coding practice, system design, and interview tips that helped me excel.",
      content: "As placement season approaches, I want to share the strategies and resources that helped me maintain a 9.56 CGPA while preparing for technical interviews...",
      date: "2024-12-20",
      readTime: "15 min read",
      category: "Career",
      tags: ["Placement", "Interview", "DSA", "Career Tips"],
      featured: true
    },
    {
      id: 6,
      title: "AI Integration in Modern Web Apps: Llama3 Experience",
      excerpt: "How we integrated Llama3 AI model into PreAssess for intelligent question generation and personalized learning paths.",
      content: "Integrating AI into web applications is becoming increasingly important. In PreAssess, we used Llama3 to generate dynamic quizzes...",
      date: "2024-12-15",
      readTime: "9 min read",
      category: "AI/ML",
      tags: ["AI", "Llama3", "Machine Learning", "Integration"],
      featured: false
    }
  ];

  const categories = ['all', 'React', 'Full Stack', 'Blockchain', 'AI/ML', 'Hackathons', 'Career'];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'React': return <Code className="text-blue-500" size={16} />;
      case 'Full Stack': return <TrendingUp className="text-green-500" size={16} />;
      case 'Blockchain': return <Lightbulb className="text-purple-500" size={16} />;
      case 'AI/ML': return <BookOpen className="text-orange-500" size={16} />;
      case 'Hackathons': return <TrendingUp className="text-red-500" size={16} />;
      case 'Career': return <Lightbulb className="text-indigo-500" size={16} />;
      default: return <BookOpen className="text-gray-500" size={16} />;
    }
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'React': 'bg-blue-100 text-blue-800',
      'Full Stack': 'bg-green-100 text-green-800',
      'Blockchain': 'bg-purple-100 text-purple-800',
      'AI/ML': 'bg-orange-100 text-orange-800',
      'Hackathons': 'bg-red-100 text-red-800',
      'Career': 'bg-indigo-100 text-indigo-800'
    };
    return colorMap[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            📝 Tech Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights on development, placement preparation, and lessons learned from building innovative projects
          </p>
        </motion.div>

        {/* Featured Posts */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🌟 Featured Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.slice(0, 3).map((post, index) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                whileHover={{ y: -5 }}
                onClick={() => setSelectedPost(post)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {getCategoryIcon(post.category)}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <span className="text-yellow-500 text-sm">⭐</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="text-blue-500 group-hover:translate-x-1 transition-transform duration-200" size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                }`}
              >
                {category === 'all' ? 'All Posts' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* All Posts */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
              whileHover={{ y: -3 }}
              onClick={() => setSelectedPost(post)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(post.category)}
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                  {post.featured && <span className="text-yellow-500">⭐</span>}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight className="text-blue-500 group-hover:translate-x-1 transition-transform duration-200" size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Blog Stats */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-6 text-center">Blog Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{blogPosts.length}</div>
              <div className="text-blue-100">Total Posts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{featuredPosts.length}</div>
              <div className="text-blue-100">Featured Posts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{categories.length - 1}</div>
              <div className="text-blue-100">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Hours of Content</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPost(null)}
        >
          <motion.div
            className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  {getCategoryIcon(selectedPost.category)}
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedPost.category)}`}>
                    {selectedPost.category}
                  </span>
                  {selectedPost.featured && <span className="text-yellow-500">⭐</span>}
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {selectedPost.title}
              </h2>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedPost.content}
                </p>
                <p className="text-gray-600 italic">
                  This is a preview of the blog post. The full content would be available on the live blog platform.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-200">
                {selectedPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Blog;