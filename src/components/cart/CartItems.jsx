import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../reducer/productSlice";

const CartItems = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td className="pt-6">
        <div className="flex items-center gap-9">
          <div className="bg-[#F9F1E7] rounded-xl w-[108px] h-[105px] overflow-hidden">
            <img src={data?.images} className="w-full" alt="cart" />
          </div>
          <p className="font-primary font-normal text-base text-[#9F9F9F]">
            {data?.title}
          </p>
        </div>
      </td>
      <td className="pb-6">
        <p className="font-primary font-normal text-base text-[#9F9F9F]">
          BDT. {data?.price}
        </p>
      </td>
      <td className="pb-6">
        <p className="w-8 h-8 flex justify-center items-center bg-white border">
          {data?.quantity}
        </p>
      </td>
      <td className="pb-6">
        <div className="flex items-center gap-5">
          <p className="font-primary font-normal text-base text-[#9F9F9F]">
            {data?.total}
          </p>
          <button onClick={() => dispatch(removeFromCart(data?.id))}>
            <MdDelete className="text-2xl text-brand" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CartItems;
