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
    <div>
      <ul>
        {initialDisplayPosts?.map(({ id, date, title }) => (
          <li key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </ul>
      <div>
        {pagination.currentPage}/{pagination.totalPages}
      </div>
    </div>
  );
}

export default Blog;
