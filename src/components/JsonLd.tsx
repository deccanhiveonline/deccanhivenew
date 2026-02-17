interface OrganizationSchemaProps {
  type?: 'Organization' | 'LocalBusiness';
}

export const OrganizationSchema = ({ type = 'LocalBusiness' }: OrganizationSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    "name": "Deccan Hive Private Limited",
    "alternateName": "Deccan Hive",
    "url": "https://deccanhive.com",
    "logo": "https://deccanhive.com/logo2.png",
    "description": "Full-service digital marketing agency helping micro and local businesses grow with proven strategies.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Beside Pochamma Temple Alwal Rd, Anand Rao Nagar, Srilaxmi Nagar, Alwal, Secunderabad",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500010",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-90631-17093",
      "contactType": "customer service",
      "email": "deccanhiveonline@gmail.com",
      "availableLanguage": ["English", "Hindi", "Telugu"]
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://instagram.com/deccanhive.digitalagency",
      "https://facebook.com/deccanhive",
      "https://linkedin.com/company/deccanhive",
      "https://youtube.com/@deccanhive"
    ],
    "priceRange": "$$",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 17.4374,
        "longitude": 78.4906
      },
      "geoRadius": "50000"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// --- NEW: Website Schema for Homepage ---
export const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Deccan Hive",
    "alternateName": "Deccan Hive Digital Agency",
    "url": "https://deccanhive.com"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
// ----------------------------------------

interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
}

export const ServiceSchema = ({ serviceName, serviceDescription }: ServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Deccan Hive Private Limited",
      "url": "https://deccanhive.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[];
}

export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  authorName: string;
  url: string;
}

export const ArticleSchema = ({
  headline,
  description,
  image,
  datePublished,
  authorName,
  url
}: ArticleSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": headline,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": "Deccan Hive",
      "logo": {
        "@type": "ImageObject",
        "url": "https://deccanhive.com/logo2.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
