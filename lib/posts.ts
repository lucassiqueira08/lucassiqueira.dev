import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface PostData {
  id: string;
  slug: string;
  date: string;
  title: string;
  description: string;
  content: string;
}
type PostMetadata = {
  slug: string;
  title: string;
  authors: string[];
  tags: string[];
};

export const allPosts: PostMetadata[] = [
  {
    slug: "hello-world",
    authors: ["Lucas Siqueira"],
    title: "Hello World",
    tags: [],
  },
];

export function getSortedPostsData(): PostData[] {
  const postsDirectory = path.resolve(process.cwd(), "data/posts");
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData: PostData[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      id,
      slug: id,
      content: matterResult.content.toString(),
      ...matterResult.data,
    } as PostData;
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostsData(fileName: string): PostData {
  const postPath = path.resolve(process.cwd(), "data/posts");
  const id = fileName.replace(/\.md$/, "");
  const fullPath = path.join(postPath, fileName);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);
  return {
    id,
    slug: fullPath,
    content: matterResult.content.toString(),
    ...matterResult.data,
  } as PostData;
}
