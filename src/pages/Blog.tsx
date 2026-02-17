import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ModernBlogCard from '@/components/ModernBlogCard';
import { motion } from 'framer-motion';
import { GradualSpacing } from '@/components/ui/gradual-spacing';
import SEOHead from '@/components/SEOHead';
import { BreadcrumbSchema } from '@/components/JsonLd'; // FIXED: Import

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  route: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 2,
    title: 'Local SEO Strategies That Actually Work in 2024',
    excerpt: 'Proven local SEO techniques to help your business rank higher in local search results and attract more customers.',
    category: 'guide',
    author: 'Mohammed Ali',
    date: '2024-01-15',
    readTime: '9 min read',
    tags: ['SEO', 'Local Business', 'Rankings'],
    slug: 'local-seo-strategies-2024',
    route: '/blog/local-seo-strategies-2024'
  },
  {
    id: 1,
    title: 'How to Optimize Your Google Ads for Maximum ROI',
    excerpt: 'Learn proven strategies to improve your Google Ads performance and achieve better return on investment.',
    category: 'tips',
    author: 'Priya Sharma',
    date: '2024-01-10',
    readTime: '6 min read',
    tags: ['Google Ads', 'PPC', 'ROI'],
    slug: 'optimize-google-ads-roi',
    route: '/blog/optimize-google-ads-roi'
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'tips', name: 'Tips & Tricks', count: blogPosts.filter(p => p.category === 'tips').length },
    { id: 'guide', name: 'Guides', count: blogPosts.filter(p => p.category === 'guide').length }
  ];

  const filteredPosts = blogPosts.filter(post =>
    (activeCategory === 'all' || post.category === activeCategory) &&
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    // UPDATED: Removed bg-background and min-h-screen
    <main className="w-full relative overflow-x-hidden text-foreground">
      <SEOHead 
        title="Blog - Digital Marketing Tips & Insights"
        description="Stay ahead with our latest insights, tips, and strategies in digital marketing. Learn SEO, Google Ads, social media marketing, and more."
        canonicalPath="/blog"
      />
      {/* FIXED: Added BreadcrumbSchema */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://deccanhive.com' }, 
        { name: 'Blog', url: 'https://deccanhive.com/blog' }
      ]} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 pt-24">
        <div className="container mx-auto text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* FIXED: Added Hidden H1 */}
            <h1 className="sr-only">Latest Digital Marketing Insights & Blog</h1>

            <span className="label-tag mb-6">Knowledge Hub</span>
            <GradualSpacing
              text="RECENT ARTICLES"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
              duration={0.3}
              delayMultiple={0.03}
            />
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
              Stay ahead with our latest insights, tips, and strategies in digital marketing.
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto mt-8 relative">
              <div className="relative premium-card p-2">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent px-6 py-4 text-foreground placeholder-muted-foreground focus:outline-none"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Search className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all text-sm ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground hover:bg-primary/10'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-70">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">No articles found</h3>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="bg-primary text-primary-foreground rounded-full px-6"
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <ModernBlogCard key={post.id} {...post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Blog;
