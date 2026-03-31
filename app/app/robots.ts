import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.stitrust.com"; // Replace with actual domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/'], // Standard directories to prevent bot crawling
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
