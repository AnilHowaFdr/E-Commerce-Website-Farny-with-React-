import { IoMdCloseCircleOutline } from "react-icons/io";
import { removeFromCart } from "../../reducer/productSlice";
import { useDispatch } from "react-redux";

const CardSideBarItem = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center mb-5">
      <div className="bg-[#B88E2F] rounded-xl w-[108px] h-[105px] overflow-hidden">
        <img src={data?.images} alt="cart" />
      </div>
      <div className="ml-8 mr-16">
        <h3 className="font-primary w-36 text-black font-medium texe-base">
          {data?.title}
        </h3>
        <p className="font-primary text-black font-light text-base">
          {data?.quantity} x
          <span className="text-brand text-sm">BDT. {data?.total}</span>
        </p>
      </div>
      <IoMdCloseCircleOutline
        onClick={() => dispatch(removeFromCart(data?.id))}
        className="text-2xl text-[#9F9F9F] cursor-pointer"
      />
    </div>
  );
};

export default CardSideBarItem;
