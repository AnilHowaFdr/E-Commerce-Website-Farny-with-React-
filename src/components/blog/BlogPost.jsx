const BlogPost = () => {
  return (
    <div className="flex gap-3 pb-10">
      <div>
        <img className="w-full rounded-xl" src="/blogpost.png" alt="blog" />
      </div>
      <div>
        <p className="font-primary font-normal text-base w-[120px]">
          Going all-in with millennial design
        </p>
        <p className="font-primary font-normal text-sm pt-1 text-[#9F9F9F]">
          03 Aug 2022
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
