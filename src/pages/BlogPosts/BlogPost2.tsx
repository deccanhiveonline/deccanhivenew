import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { ArticleSchema } from '@/components/JsonLd';

const BlogPost2 = () => {
  const navigate = useNavigate();
  
  const sharePost = () => {
    if (navigator.share) {
      navigator.share({ title: 'How to Optimize Your Google Ads for Maximum ROI', url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => alert('Link copied!'));
    }
  };

  const post = {
    title: 'How to Optimize Your Google Ads for Maximum ROI',
    excerpt: 'Learn proven strategies to improve your Google Ads performance and achieve better return on investment for your advertising spend.',
    category: 'tips',
    author: 'Priya Sharma',
    date: '2024-01-10',
    readTime: '6 min read',
    tags: ['Google Ads', 'PPC', 'ROI', 'Optimization']
  };

  return (
    // UPDATED: Removed bg-background and min-h-screen
    <main className="w-full relative overflow-x-hidden text-foreground">
      <SEOHead 
        title="How to Optimize Google Ads for Maximum ROI - Tips"
        description="Learn proven strategies to improve your Google Ads performance and achieve better return on investment. Expert tips for PPC optimization and campaign success."
        canonicalPath="/blog/optimize-google-ads-roi"
        type="article"
      />
      <ArticleSchema 
        headline={post.title}
        description={post.excerpt}
        image="https://deccanhive.com/logo2.png" // Replace with actual blog image URL if available
        datePublished={post.date}
        authorName={post.author}
        url="https://deccanhive.com/blog/optimize-google-ads-roi"
      />
      
      <article>
        <header className="relative min-h-[50vh] flex items-center justify-center px-4 pt-24">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary self-start" onClick={() => navigate('/blog')}>
                <ArrowLeft className="mr-2 w-4 h-4" />Back to Blog
              </Button>
              <div className="flex items-center gap-3">
                <span className="label-tag"><Tag className="w-3 h-3 mr-1" />{post.category}</span>
                <Button variant="ghost" size="sm" onClick={sharePost} className="text-primary hover:bg-primary hover:text-primary-foreground rounded-full">
                  <Share2 className="w-4 h-4 mr-2" />Share
                </Button>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
            <p className="text-lg text-muted-foreground mb-8">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center"><User className="w-4 h-4 mr-2" />{post.author}</div>
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" />{new Date(post.date).toLocaleDateString()}</div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-2" />{post.readTime}</div>
            </div>
          </div>
        </header>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-muted-foreground text-lg">Google Ads can be a powerful tool for driving traffic and conversions, but without proper optimization, you might be wasting your advertising budget. Here's how to maximize your ROI.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Understanding Your Campaign Goals</h2>
              <p className="text-muted-foreground">Before diving into optimization tactics, it's crucial to define clear, measurable goals for your campaigns. Without defined goals, you won't know what success looks like.</p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Key Performance Indicators to Track</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Click-through rate (CTR) - Indicates ad relevance and appeal</li>
                <li>Quality Score - Google's rating of your ad relevance and landing page quality</li>
                <li>Cost per conversion - How much you're paying for each desired action</li>
                <li>Return on ad spend (ROAS) - Revenue generated per dollar spent on ads</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Keyword Optimization Strategies</h2>
              <p className="text-muted-foreground">Your keyword strategy can make or break your Google Ads campaigns. Focus on high-intent keywords that align with your business goals.</p>

              <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-foreground/90">
                "The key to Google Ads success is continuous testing and optimization. What works today might not work tomorrow."
              </blockquote>

              <h2 className="text-2xl font-bold mt-8 mb-4">Ad Copy Best Practices</h2>
              <p className="text-muted-foreground">Compelling ad copy is essential for attracting clicks and conversions. Include your main keyword, highlight unique benefits, and always include a clear call-to-action.</p>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="font-bold mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span key={i} className="label-tag text-xs">{tag}</span>
                ))}
              </div>
            </div>

            <div className="mt-12 premium-card p-8 text-center">
              <h3 className="text-xl font-bold mb-3">Ready to Optimize Your Google Ads?</h3>
              <p className="text-muted-foreground mb-4">Let our experts help you maximize your advertising ROI.</p>
              <Button className="bg-primary text-primary-foreground rounded-full px-6" asChild>
                <Link to="/contact">Get Expert Help</Link>
              </Button>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default BlogPost2;
