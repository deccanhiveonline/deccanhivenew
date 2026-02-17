import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  type?: 'website' | 'article';
}

const SEOHead = ({ 
  title, 
  description, 
  canonicalPath = '', 
  keywords = 'digital marketing, SEO, social media marketing, Google Ads, Meta Ads, web development, Hyderabad',
  type = 'website'
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
    
    // --- FIX START: Force indexing ---
    updateMetaTag('robots', 'index, follow');
    // --- FIX END ---

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
      // Cleanup is optional since we're updating the same elements
    };
  }, [fullTitle, description, keywords, fullUrl, type]);

  return null;
};

export default SEOHead;
