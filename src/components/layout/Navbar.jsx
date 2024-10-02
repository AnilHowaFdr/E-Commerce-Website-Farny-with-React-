import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { RiBarChartFill } from "react-icons/ri";
import { VscSearch } from "react-icons/vsc";
import { Link } from "react-router-dom";
import CardSideBar from "../cart/CardSideBar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [show, setshow] = useState(true);
  const [sideCart, setSideCart] = useState(false);
  const handleSideCard = (result) => {
    setSideCart(result);
  };
  const productList = useSelector((state) => state.cartList.product);
  return (
    <>
      <nav>
        <div className="container font-primary">
          {/* upper navbar */}
          <div className="flex flex-col gap-6 items-center text-center md:flex-row md:justify-between md:items-center py-6 border-b">
            <div className="w-auto lg-1/4">
              <Link to="/">
                <img className="w-full" src="/logo.png" alt="image" />
              </Link>
            </div>
            <div className="w-auto md:w-1/2 py-2 px-5 border cursor-pointer rounded-xl flex justify-between items-center">
              <input
                className="w-full text-lg border-none outline-none "
                type="text"
                placeholder="Search Product"
              />
              <span>
                <VscSearch className="text-2xl" />
              </span>
            </div>
            <div className="w-auto lg-1/4 ">
              <ul className="flex justify-end gap-8 md:gap-6 text-2xl items-center">
                <li>
                  <Link>
                    <LuUser2 />
                  </Link>
                </li>
                <li>
                  <Link>
                    <IoHeartOutline />
                  </Link>
                </li>
                <li className="relative" onClick={() => setSideCart(true)}>
                  <IoCartOutline className="cursor-pointer" />
                  <span className="absolute -top-4 -right-2 bg-brand text-white w-6 h-6 text-base rounded-full flex justify-center items-center">
                    {productList.length}
                  </span>
                </li>
                <li>
                  <button
                    className="block md:hidden"
                    onClick={() => setshow(!show)}
                  >
                    <RiBarChartFill />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* lower navbar */}
          <div className="py-9 flex flex-col md:flex-row relative">
            <ul
              className={`w-full ${
                show ? "-translate-x-0" : "-translate-x-full"
              } transition-all flex flex-col justify-center items-center gap-7 lg:gap-16 md:flex-row md:justify-center font-medium text-xl absolute text-black lg:static top-full left-0 bg-white h-auto`}
            >
              <li>
                <Link
                  className="flex gap-2 md:gap-3 items-center hover:text-[#B88E2F]"
                  to="/"
                >
                  Home
                  <span className="text-2xl pt-1">
                    <GoChevronDown />
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  className="flex gap-3 items-center hover:text-[#B88E2F]"
                  to="/shop"
                >
                  Shop
                  <span className="text-2xl pt-1">
                    <GoChevronDown />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex gap-3 items-center hover:text-[#B88E2F]"
                  to="/blog"
                >
                  Blog
                  <span className="text-2xl pt-1">
                    <GoChevronDown />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex gap-3 items-center hover:text-[#B88E2F] pb-5 md:pb-0"
                  to="/contact"
                >
                  Contact
                  <span className="text-2xl pt-1">
                    <GoChevronDown />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {sideCart && <CardSideBar handleSideCard={handleSideCard} />}
    </>
  );
};

export default Navbar;
