import { getSortedPostsData } from "~/lib/posts";
import { genPageMetadata } from "../seo";

const POSTS_PER_PAGE = 5;

export const metadata = genPageMetadata({ title: "Blog" });

function Blog() {
  const pageNumber = 1;
  const allPostsData = getSortedPostsData();
  const initialDisplayPosts = allPostsData.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(allPostsData.length / POSTS_PER_PAGE),
  };

  return (
    <div className="bg-primary-black h-inherit w-full items-center max-w-[1280px] flex flex-col gap-2 pt-8 p-8">
      <div>
        {initialDisplayPosts?.map(({ id, date, title, description, slug }) => (
          <div key={id} className="py-4">
            <a href={`/blog/${slug}`} className="text-purple-200 text-2xl hover:text-purple-500 hover:underline">{title}</a>
            <p className="text-gray-200 text-sm py-2 text-justify">{description}</p>
            <span className="text-gray-100 text-xs opacity-70">{date}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2 justify-start items-center">
        <span className="text-white">Page</span>
        <p className="text-white">{pagination.currentPage} - {pagination.totalPages}</p>
      </div>
    </div>
  );
}

export default Blog;
