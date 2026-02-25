import { type ReactNode } from "react";
import { siteMetadata } from "~/lib/metadata";
import Link from "next/link";
import styles from "~/styles";

const postDateTemplate: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

interface LayoutProps {
  content: {
    path: string;
    date: string;
    title: string;
  };
  authorsList: string[];
  tags: string[];
  next: { path?: string; title?: string };
  prev: { path?: string; title?: string };
  children: ReactNode;
}

export default function PostLayout({
  content,
  next,
  prev,
  children,
}: LayoutProps) {
  const { date, title } = content;

  return (
    <article className={`${styles.innerWidth} py-10`}>
      <header className="mb-10 pb-8 border-b border-[#e5e5e5]">
        <p className="text-sm text-[#737373] mb-3">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
          </time>
        </p>
        <h1 className="text-3xl font-semibold text-[#171717] tracking-tight leading-tight">
          {title}
        </h1>
      </header>

      <div className="prose prose-sm max-w-none text-[15px] leading-7 text-[#171717]">
        {children}
      </div>

      {(next?.path || prev?.path) && (
        <div className="mt-12 pt-6 border-t border-[#e5e5e5] flex justify-between gap-4">
          {prev?.path && (
            <Link
              href={`/blog/${prev.path}`}
              className="text-sm text-[#737373] transition-colors duration-150 hover:text-[#0a0a0a]"
            >
              ← {prev.title}
            </Link>
          )}
          {next?.path && (
            <Link
              href={`/blog/${next.path}`}
              className="text-sm text-[#737373] transition-colors duration-150 hover:text-[#0a0a0a] ml-auto"
            >
              {next.title} →
            </Link>
          )}
        </div>
      )}

      <div className="mt-8">
        <Link
          href="/blog"
          className="text-sm text-[#737373] transition-colors duration-150 hover:text-[#0a0a0a]"
        >
          ← Back to blog
        </Link>
      </div>
    </article>
  );
}
