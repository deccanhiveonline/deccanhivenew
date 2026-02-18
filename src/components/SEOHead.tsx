import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  type?: 'website' | 'article';
  robots?: string;
}

const SEOHead = ({ 
  title, 
  description, 
  canonicalPath, 
  keywords = 'digital marketing, SEO, social media marketing, Google Ads, Meta Ads, web development, Hyderabad',
  type = 'website',
  robots = 'index, follow'
}: SEOHeadProps) => {
  const baseUrl = 'https://deccanhive.com';
  
  // Logic to build the correct canonical URL
  let fullUrl = baseUrl;
  if (canonicalPath) {
    // Ensure path starts with /
    const path = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    fullUrl = `${baseUrl}${path}`;
  } else {
    // If no path provided, use current window location or default to base
    fullUrl = typeof window !== 'undefined' ? window.location.href : baseUrl;
  }

  // FIXED: Cleaner, shorter title logic
  const fullTitle = title.includes('Deccan Hive') ? title : `${title} | Deccan Hive`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEOHead;
