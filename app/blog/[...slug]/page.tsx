import type { Metadata } from "next";
import Markdoc from "@markdoc/markdoc";
import React from "react";
import PostLayout from "~/components/PostLayout";
import { siteMetadata } from "~/lib/metadata";
import { getPostData, getSortedPostsData } from "~/lib/posts";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join("/"));
  const post = await getPostData(slug);
  if (!post || !post.date || post.draft) return;

  const publishedAt = new Date(post.date).toISOString();

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      url: `${siteMetadata.siteUrl}/blog/${slug}`,
      authors: [siteMetadata.author],
      tags: [...post.tags],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export async function generateStaticParams() {
  const allPostsData = await getSortedPostsData();
  return allPostsData.map((post) => ({
    slug: post.slug.split("/"),
  }));
}

export default async function Page({
  params,
}: {
  params: { slug: string[] };
}) {
  const slug = decodeURI(params.slug.join("/"));
  const post = await getPostData(slug);
  if (!post || post.draft || !post.date) return notFound();

  const publishedAt = new Date(post.date).toISOString();

  const allPostsData = await getSortedPostsData();
  const postIndex = allPostsData.findIndex((p) => p.slug === slug);
  const prev = allPostsData[postIndex + 1];
  const next = allPostsData[postIndex - 1];

  const mainContent = {
    path: slug,
    date: publishedAt,
    title: post.title,
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: publishedAt,
    author: [{ "@type": "Person", name: siteMetadata.author }],
    url: `${siteMetadata.siteUrl}/blog/${slug}`,
    publisher: {
      "@type": "Person",
      name: siteMetadata.author,
      url: siteMetadata.siteUrl,
    },
  };

  const renderable = Markdoc.transform(post.content.node);
  const rendered = Markdoc.renderers.react(renderable, React);

  return (
    <div className="h-full min-h-[100vh]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PostLayout
        content={mainContent}
        authorsList={[siteMetadata.author]}
        tags={[...post.tags]}
        next={{ path: next?.slug, title: next?.title }}
        prev={{ path: prev?.slug, title: prev?.title }}
      >
        <div className="overflow-x-auto max-w-full whitespace-pre-wrap font-sans text-sm font-normal">
          {rendered}
        </div>
      </PostLayout>
    </div>
  );
}
