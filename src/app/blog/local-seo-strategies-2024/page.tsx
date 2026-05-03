"use client";

import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArticleSchema, BreadcrumbSchema } from '@/components/JsonLd';

export default function BlogPost1() {
  const sharePost = () => {
    if (navigator.share) {
      navigator.share({ title: 'Local SEO Strategies That Actually Work in 2024', url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => alert('Link copied!'));
    }
  };

  const post = {
    title: 'Local SEO Strategies That Actually Work in 2024',
    excerpt: 'Proven local SEO techniques to help your business rank higher in local search results and attract more customers.',
    category: 'guide',
    author: 'Mohammed Ali',
    date: '2024-01-15',
    readTime: '9 min read',
    tags: ['SEO', 'Local Business', 'Google My Business', 'Rankings']
  };

  return (
    <>
      <ArticleSchema headline={post.title} description={post.excerpt} image="https://deccanhive.com/logo2.webp" datePublished={post.date} authorName={post.author} url="https://deccanhive.com/blog/local-seo-strategies-2024" />
      <BreadcrumbSchema items={[{ name: 'Home', url: 'https://deccanhive.com' }, { name: 'Blog', url: 'https://deccanhive.com/blog' }, { name: post.title, url: 'https://deccanhive.com/blog/local-seo-strategies-2024' }]} />

      <article>
        <header className="relative min-h-[50vh] flex items-center justify-center px-4 pt-24">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary self-start" asChild>
                <Link href="/blog"><ArrowLeft className="mr-2 w-4 h-4" />Back to Blog</Link>
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
              <p className="text-muted-foreground text-lg">Local SEO is crucial for businesses that serve customers in specific geographic areas. With the right strategies, you can improve your visibility in local search results and attract more customers to your business.</p>
              <h2 className="text-2xl font-bold mt-8 mb-4">Optimizing Your Google My Business Profile</h2>
              <p className="text-muted-foreground">Your Google My Business profile is the foundation of your local SEO strategy. A well-optimized GMB profile can significantly improve your local search rankings and help potential customers find you.</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Complete every section of your profile with accurate information</li>
                <li>Choose the most specific business category that matches your services</li>
                <li>Add high-quality photos of your business, products, and team</li>
                <li>Respond promptly and professionally to customer reviews</li>
                <li>Post regular updates about your business offerings</li>
              </ul>
              <h2 className="text-2xl font-bold mt-8 mb-4">Building Local Citations</h2>
              <p className="text-muted-foreground">Local citations are mentions of your business name, address, and phone number (NAP) on other websites. Consistent citations across the web help search engines verify your business information.</p>
              <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-foreground/90">
                "Consistency is key in local SEO. Make sure your business information is identical across all platforms and directories."
              </blockquote>
              <h2 className="text-2xl font-bold mt-8 mb-4">Getting Customer Reviews</h2>
              <p className="text-muted-foreground">Reviews are one of the most important local ranking factors. Encourage satisfied customers to leave reviews on your Google Business Profile and respond to all reviews professionally.</p>
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
              <h3 className="text-xl font-bold mb-3">Need Help with Local SEO?</h3>
              <p className="text-muted-foreground mb-4">Our local SEO experts can help you dominate local search results.</p>
              <Button className="bg-primary text-primary-foreground rounded-full px-6" asChild>
                <Link href="/contact">Get Local SEO Help</Link>
              </Button>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}