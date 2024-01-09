import type { Metadata } from "next";
import PostLayout from "~/components/PostLayout";
import { siteMetadata } from "~/lib/metadata";
import { allPosts, getPostsData, getSortedPostsData } from "~/lib/posts";
import { redirect } from "next/navigation";
import { marked } from "marked";

export function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Metadata | undefined {
  const slug = decodeURI(params.slug.join("/"));
  const postMetadata = allPosts.find((p) => p.slug === slug);
  if (!postMetadata) {
    return;
  }

  const { authors, tags } = postMetadata;

  const post = getPostsData(`${slug}.md`);
  const { title, description, date } = post;
  const publishedAt = new Date(date).toISOString();

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      url: "./",
      authors,
      tags,
    },
  } as Metadata;
}

export const generateStaticParams = () => {
  const allPostsData = getSortedPostsData();

  const paths = allPostsData.map((post): { slug: string[] } => ({
    slug: post.slug.split("/"),
  }));

  return paths;
};

export default function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join("/"));
  const postMetadata = allPosts.find((p) => p.slug === slug);
  if (!postMetadata) {
    return redirect("/404");
  }

  const post = getPostsData(`${slug}.md`);
  const { title, description, date } = post;
  const { authors, tags } = postMetadata;
  const publishedAt = new Date(date).toISOString();

  const postIndex = allPosts.indexOf(postMetadata);
  const prev = allPosts[postIndex + 1];
  const next = allPosts[postIndex - 1];

  const mainContent = {
    path: post?.slug || "",
    date: publishedAt,
    title,
    description,
  };
  return (
    <div className="h-full min-h-[100vh]">
      <PostLayout
        content={mainContent}
        authorsList={authors}
        tags={tags}
        next={{ path: next?.slug, title: next?.title }}
        prev={{ path: prev?.slug, title: prev?.title }}
      >
        <div
          className="overflow-w-auto max-w-full whitespace-pre-wrap font-sans text-sm font-normal text-gray-200"
          dangerouslySetInnerHTML={{ __html: marked.parse(post.content, {}) }}
        />
      </PostLayout>
    </div>
  );
}
