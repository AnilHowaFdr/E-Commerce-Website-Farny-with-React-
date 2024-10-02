import { IoSearch } from "react-icons/io5";
import Category from "./Category";
import BlogPost from "./BlogPost";
import BlogPagination from "./BlogPagination";
const BlogBody = () => {
  return (
    <section className="pt-28 pb-14">
      <div className="container flex justify-between">
        <BlogPagination itemsPerPage={3} className="w-3/4" />
        <div className="w-1/4 px-10 pt-6 pb-16">
          <div className="flex border rounded-xl justify-between px-2 py-3">
            <input type="text" className="border-none " />
            <IoSearch className="text-2xl" />
          </div>
          <h3 className="heading2 pt-10 pb-8 ">Categories</h3>
          <Category />
          <h3 className="heading2 pt-24 pb-7">Recent Posts</h3>
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </div>
      </div>
    </section>
  );
};

export default BlogBody;