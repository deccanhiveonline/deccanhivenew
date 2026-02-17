import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  type?: 'website' | 'article';
  robots?: string; // NEW: Allows us to override robots (e.g., for 404 pages)
}

const SEOHead = ({ 
  title, 
  description, 
  canonicalPath = '', 
  keywords = 'digital marketing, SEO, social media marketing, Google Ads, Meta Ads, web development, Hyderabad',
  type = 'website',
  robots = 'index, follow' // Default to index
}: SEOHeadProps) => {
  const baseUrl = 'https://deccanhive.com';
  const fullUrl = `${baseUrl}${canonicalPath}`;
  const fullTitle = title.includes('Deccan Hive') ? title : `${title} | Deccan Hive`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', robots); // FIXED: Uses the prop now

    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    return () => {
      // Cleanup optional
    };
  }, [fullTitle, description, keywords, fullUrl, type, robots]);

  return null;
};

export default SEOHead;
