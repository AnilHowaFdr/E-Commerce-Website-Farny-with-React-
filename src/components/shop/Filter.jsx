import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

const Filter = () => {
  return (
    <section className="bg-[#F9F1E7] py-6">
      <div className="container grid grid-cols-1 md:grid-cols-2  items-center gap-3 ">
        <div className="flex ">
          <p className="font-primary font-normal text-xl flex gap-3 text-black">
            <HiOutlineAdjustmentsHorizontal />
            <span>Filter</span>
          </p>
          <p className="font-primary font-normal w-48 sm:w-fit text-base pl-32">
            Showing 1–16 of 32 results
          </p>
        </div>
        <div className="flex gap-7 items-center">
          <div>
            <label
              htmlFor=""
              className="font-primary font-normal text-lg sm:text-xl pr-4"
            >
              Show
            </label>
            <input
              className="font-primary font-normal text-xl py-1 sm:py-3 w-14 text-center"
              type="number"
              value="16"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="font-primary font-normal text-lg sm:text-xl pr-4"
            >
              Show
            </label>
            <select className="font-primary font-normal text-xl py-1 px-3 sm:py-3 sm:px-5">
              <option value="default">Default</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
