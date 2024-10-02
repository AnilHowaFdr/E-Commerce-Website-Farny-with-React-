import { IoMdCloseCircleOutline } from "react-icons/io";
import CardSideBarItem from "./CardSideBarItem";
import CardButton from "./CardButton";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

const CardSideBar = ({ handleSideCard }) => {
  const [total, setTotal] = useState(0);
  const productList = useSelector((state) => state.cartList.product);
  const totalPrice = productList.reduce(
    (total, product) => total + product.total,
    0
  );
  const cartRef = useRef(null);
  const handleCartToggle = (e) => {
    if (e.target.contains(cartRef.current)) {
      handleSideCard(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleCartToggle);
    return () => document.removeEventListener("mousedown", handleCartToggle);
  }, []);
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-[rgba(0,0,0,0.20)] z-50">
      <div ref={cartRef} className="w-fit py-7 ml-auto bg-white h-[746px]">
        <div className="flex items-center justify-between mb-10 px-7 pb-7 border-b border-[#D9D9D9]">
          <h2 className="font-primary font-semibold text-xl">Shopping Cart</h2>
          <IoMdCloseCircleOutline
            onClick={() => handleSideCard(false)}
            className="text-2xl cursor-pointer"
          />
        </div>
        {productList.length > 0 ? (
          <>
            <div className="cartSideBar h-[480px] overflow-y-scroll px-7">
              {productList.map((item) => (
                <CardSideBarItem key={item.key} data={item} />
              ))}
            </div>
            <div className="flex px-7 pb-6 pt-4 border-b justify-between items-center">
              <p className="font-primary font-normal text-base text-black">
                Subtotal
              </p>
              <p className="font-primary font-semibold text-base text-brand">
                BDT. {totalPrice}
              </p>
            </div>
          </>
        ) : (
          <div className="h-[480px] text-center font-primary font-semibold text-base text-brand">
            <p>There are no items in this cart!</p>
          </div>
        )}
        <div className="flex px-7 gap-4 justify-center">
          <CardButton path="/cart" title="Cart" />
          <CardButton path="/checkout" title="Checkout" />
        </div>
      </div>
    </div>
  );
};

export default CardSideBar;
