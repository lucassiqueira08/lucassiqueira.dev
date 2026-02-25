import type { MetadataRoute } from "next";
import { getSortedPostsData } from "~/lib/posts";
import { siteMetadata } from "~/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPostsData();
  const blogPosts = posts.map((post) => ({
    url: `${siteMetadata.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: siteMetadata.siteUrl,
      lastModified: new Date(),
    },
    {
      url: `${siteMetadata.siteUrl}/blog`,
      lastModified: new Date(),
    },
    ...blogPosts,
  ];
}
