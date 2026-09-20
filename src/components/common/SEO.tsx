import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  breadcrumbs?: Array<{ name: string; path: string }>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '',
  breadcrumbs = [],
}) => {
  useEffect(() => {
    // 1. Page Title
    const fullTitle = title.includes('Madhav Tours & Travels')
      ? title
      : `${title} | Madhav Tours & Travels`;
    document.title = fullTitle;

    // 2. Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. OpenGraph Tags
    const setMeta = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('og:title', fullTitle);
    setMeta('og:description', description);
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://madhavtoursandtravels.com';
    const currentUrl = `${origin}${canonicalPath || (typeof window !== 'undefined' ? window.location.pathname : '')}`;
    setMeta('og:url', currentUrl);

    // 4. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // 5. Breadcrumb Schema
    const breadcrumbSchemaId = 'breadcrumb-schema';
    let scriptTag = document.getElementById(breadcrumbSchemaId);
    if (breadcrumbs.length > 0) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = breadcrumbSchemaId;
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }

      const itemListElement = [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: origin,
        },
        ...breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 2,
          name: crumb.name,
          item: `${origin}${crumb.path}`,
        })),
      ];

      scriptTag.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement,
      });
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, canonicalPath, breadcrumbs]);

  return null;
};
