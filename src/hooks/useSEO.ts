'use client';

import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

export function useSEO({
  title,
  description,
  keywords = [],
  ogTitle,
  ogDescription,
  ogImage,
  canonical
}: SEOProps) {
  useEffect(() => {
    // 设置页面标题
    document.title = title;
    
    // 设置或更新meta description
    updateMetaTag('name', 'description', description);
    
    // 设置keywords
    if (keywords.length > 0) {
      updateMetaTag('name', 'keywords', keywords.join(', '));
    }
    
    // 设置Open Graph标签
    if (ogTitle) {
      updateMetaTag('property', 'og:title', ogTitle);
    }
    
    if (ogDescription) {
      updateMetaTag('property', 'og:description', ogDescription);
    }
    
    if (ogImage) {
      updateMetaTag('property', 'og:image', ogImage);
    }
    
    // 设置canonical URL
    if (canonical) {
      updateLinkTag('canonical', canonical);
    }
    
    // 设置Twitter Card标签
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', ogTitle || title);
    updateMetaTag('name', 'twitter:description', ogDescription || description);
    if (ogImage) {
      updateMetaTag('name', 'twitter:image', ogImage);
    }
    
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonical]);
}

function updateMetaTag(attribute: string, value: string, content: string) {
  const existingTag = document.querySelector(`meta[${attribute}="${value}"]`);
  
  if (existingTag) {
    existingTag.setAttribute('content', content);
  } else {
    const meta = document.createElement('meta');
    meta.setAttribute(attribute, value);
    meta.setAttribute('content', content);
    document.head.appendChild(meta);
  }
}

function updateLinkTag(rel: string, href: string) {
  const existingTag = document.querySelector(`link[rel="${rel}"]`);
  
  if (existingTag) {
    existingTag.setAttribute('href', href);
  } else {
    const link = document.createElement('link');
    link.setAttribute('rel', rel);
    link.setAttribute('href', href);
    document.head.appendChild(link);
  }
}
