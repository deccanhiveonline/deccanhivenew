"use client";

import { Calendar, Clock, User, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface ModernBlogCardProps {
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

const ModernBlogCard = ({ title, excerpt, category, author, date, readTime, tags, route }: ModernBlogCardProps) => {
  const router = useRouter();

  const handleReadMore = () => {
    router.push(route);
  };

  return (
    <div className="group premium-card p-6 sm:p-8 hover:border-primary/40 transition-all duration-500 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <span className="bg-primary/10 border border-primary/20 text-primary px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">{category}</span>
        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-primary" />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.slice(0, 2).map((tag, index) => (
          <span key={index} className="bg-secondary border border-border text-muted-foreground px-2.5 py-1 rounded-lg text-xs hover:bg-secondary/80 transition-colors">{tag}</span>
        ))}
      </div>
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2 flex-shrink-0">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed text-sm line-clamp-3 flex-grow">{excerpt}</p>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground mb-6 gap-2 sm:gap-4 flex-shrink-0">
        <div className="flex items-center flex-wrap gap-3">
          <div className="flex items-center"><User className="w-3 h-3 mr-1.5 flex-shrink-0" /><span className="truncate max-w-[100px]">{author}</span></div>
          <div className="flex items-center"><Calendar className="w-3 h-3 mr-1.5 flex-shrink-0" /><span>{new Date(date).toLocaleDateString()}</span></div>
        </div>
        <div className="flex items-center"><Clock className="w-3 h-3 mr-1.5 flex-shrink-0" /><span>{readTime}</span></div>
      </div>
      <Button onClick={handleReadMore} className="w-full bg-transparent border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground font-semibold py-3 rounded-xl transition-all duration-300 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20 flex-shrink-0">
        Read More
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
      </Button>
    </div>
  );
};

export default ModernBlogCard;