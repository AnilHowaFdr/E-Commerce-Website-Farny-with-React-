import { Link } from "react-router-dom";
import Products from "./../shop/Products";
const ProductsItems = ({ data }) => {
  return (
    <Link
      to={`/shop/${data?.id}`}
      className="group h-fit relative overflow-hidden"
    >
      <div className=" flex justify-center items-center mb-6 bg-[rgba(137,137,137,0.75)] w-full h-full absolute top-0 left-0 scale-0 group-hover:scale-100">
        <button className="text-brand text-base font-primary font-semibold inline-block bg-white py-4 px-[76px]">
          Add to Cart
        </button>
      </div>
      <div className="w-full">
        <img className="w-full" src={data?.images[0]} alt="image" />
      </div>
      <div className="bg-[#F4F5F7] px-[18px] pt-4 pb-8 block">
        <h3 className="font-primary text-primary  font-semibold text-2xl">
          {data?.title.substring(0, 20)}...
        </h3>
        <p className="detail py-2 ">{data?.description.substring(0, 25)}...</p>
        <div className="flex gap-4 items-center">
          <h4 className="font-primary font-semibold text-xl text-primary">
            BDT {data?.price}.00
          </h4>
          <p className="detail text-[#B0B0B0] line-through">BDT 25.00</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductsItems;
