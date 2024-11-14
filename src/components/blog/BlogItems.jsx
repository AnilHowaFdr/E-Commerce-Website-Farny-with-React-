import { FaTag, FaUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const BlogItems = () => {
  return (
    <div className="pb-14">
      <img
        className="w-auto sm:w-full rounded-xl"
        src="/blogItemsImage.png"
        alt="blog"
      />
      <ul className="flex items-center py-4 gap-9 font-primary font-normal flex-col sm:flex-row text-base text-[#9F9F9F]">
        <li className="flex  gap-3 items-center">
          <span>
            <FaUser />
          </span>
          <p>Admin</p>
        </li>
        <li className="flex gap-3 items-center">
          <span>
            <MdDateRange />
          </span>
          <p>14 Oct 2022</p>
        </li>
        <li className="flex gap-3 items-center">
          <span>
            <FaTag />
          </span>
          <p>Handmade</p>
        </li>
      </ul>
      <h3 className="font-primary font-medium sm:text-start text-center sm:text-2xl w-auto text-3xl">
        Exploring new ways of decorating
      </h3>
      <p className="w-auto lg:w-[750px] text-center sm:text-start pt-3 font-primary text-[#9F9F9F] font-normal text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae
        ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
        aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus
        imperdiet. Libero enim sed faucibus turpis in.
      </p>
      <h4 className="font-primary w-fit m-auto lg:m-0 font-normal text-base pt-8 pb-4 cursor-pointer hover:border-b-2 hover:border-black">
        Read more
      </h4>
    </div>
  );
};

export default BlogItems;
