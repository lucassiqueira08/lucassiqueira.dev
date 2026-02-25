import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "~/keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);

export interface PostData {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImage: string | null;
  tags: readonly string[];
  draft: boolean;
}

export async function getSortedPostsData(): Promise<PostData[]> {
  const posts = await reader.collections.posts.all();

  return posts
    .filter((post) => !post.entry.draft)
    .map((post) => ({
      slug: post.slug,
      title: post.entry.title,
      date: post.entry.date ?? "",
      description: post.entry.description,
      coverImage: post.entry.coverImage ?? null,
      tags: post.entry.tags,
      draft: post.entry.draft,
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(slug: string) {
  const post = await reader.collections.posts.read(slug);
  if (!post) return null;

  const content = await post.content();

  return {
    slug,
    title: post.title,
    date: post.date ?? "",
    description: post.description,
    coverImage: post.coverImage ?? null,
    tags: post.tags,
    draft: post.draft,
    content,
  };
}

export async function getAllPostSlugs(): Promise<string[]> {
  return reader.collections.posts.list();
}
