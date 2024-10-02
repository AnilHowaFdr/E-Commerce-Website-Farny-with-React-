import { FaChevronRight } from "react-icons/fa6";

const SampleNextArrow = ({ onClick }) => {
  return (
    <div
      className="cursor-pointer flex items-center justify-center w-12 h-12 rounded-full text-2xl absolute top-1/2 -translate-y-1/2 right-0 bg-white text-brand"
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

export default SampleNextArrow;
