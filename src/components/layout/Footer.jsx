import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-[44px] bg-black">
      <div className="container">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:gap-5 items-center md:grid-cols-3 lg:grid-cols-4 gap-12 pb-10 border-b">
          <div className="w-1/4 pl-5">
            <img src="/logo.png" alt="logo" />
            <p className="detail text-[#9F9F9F] w-32 sm:w-[285px] pt-12 ">
              400 University Drive Suite 200 Coral Gables,
            </p>
            <p className="detail text-[#9F9F9F] pt-12">FL 33134 USA</p>
          </div>
          <div className="w-1/4 pl-5">
            <ul className="flex flex-col gap-5 sm:gap-12 font-primary text-white font-semibold text-base cursor-pointer">
              <li>
                <p className="text-[#9F9F9F]">Links</p>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="w-1/4 pl-5">
            <ul className="flex flex-col gap-5  sm:gap-12 text-white font-primary font-semibold text-base cursor-pointer">
              <li>
                <p className="text-[#9F9F9F]">Help</p>
              </li>
              <li>
                <Link to="/">Payment Options</Link>
              </li>
              <li>
                <Link to="/shop">Returns</Link>
              </li>
              <li>
                <Link to="/about">Privacy Policies</Link>
              </li>
            </ul>
          </div>
          <div className="w-1/4 pl-5">
            <p className="text-[#9F9F9F] pb-12">Newsletter</p>
            <input
              type="text"
              placeholder="Enter Your Email"
              className=" border-b font-primary p-2 font-normal text-lg border-b-black"
            />
            <button className="border-b ml-4 my-5 sm:mb-0 underline text-white cursor-pointer border-b-black uppercase font-primary font-medium text-sm">
              Subscribe
            </button>
          </div>
        </div>
        <p className="font-primary font-normal text-[#9F9F9F] text-center sm:text-start text-base pt-[35px]">
          2024 farny. All rights reverved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
