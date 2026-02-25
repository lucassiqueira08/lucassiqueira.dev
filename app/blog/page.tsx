import { getSortedPostsData } from "~/lib/posts";
import { genPageMetadata } from "../seo";

const POSTS_PER_PAGE = 5;

export const metadata = genPageMetadata({ title: "Blog" });

async function Blog() {
  const pageNumber = 1;
  const allPostsData = await getSortedPostsData();
  const initialDisplayPosts = allPostsData.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );

  return (
    <div className="py-8">
      <div className="flex flex-col">
        {initialDisplayPosts?.map(({ date, title, slug }) => (
          <a
            key={slug}
            href={`/blog/${slug}`}
            className="-mx-4 px-4 py-3 rounded-lg flex justify-between items-baseline gap-4 transition-colors duration-150 hover:bg-[#fafafa] group"
          >
            <span className="text-sm font-medium text-[#171717] group-hover:text-[#0a0a0a]">
              {title}
            </span>
            <span className="text-sm text-[#737373] shrink-0">{date}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Blog;
