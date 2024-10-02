import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import About from "./../../pages/About";
import CardButton from "./CardButton";

const CartBody = () => {
  const productList = useSelector((state) => state.cartList.product);
  const totalPrice = productList.reduce(
    (total, product) => total + product.total,
    0
  );
  return (
    <section className="pt-[72px] pb-[85px] bg-white">
      <div className="container flex gap-8">
        {productList.length > 0 ? (
          <>
            <table className="w-3/4">
              <thead className="bg-[#F9F1E7] font-primary font-medium text-base">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {productList.map((item) => (
                  <CartItems key={item.key} data={item} />
                ))}
              </tbody>
            </table>
            <div className="w-1/4 h-fit px-[75px] bg-[#F9F1E7] ">
              <h3 className="pt-4 font-primary font-semibold text-3xl text-center">
                Cart Totals
              </h3>
              <div className="flex justify-between pt-[61px] pb-[31px]">
                <p>Subtotal</p>
                <p>{totalPrice}</p>
              </div>
              <div className="pb-12 flex justify-between">
                <p>Total</p>
                <p>BDT. {totalPrice}</p>
              </div>
              <div className="flex justify-center">
                <button className="py-3 flex justify-center mb-20 px-14 rounded-xl border-2 border-black cursor-pointer">
                  <Link to="/checkout">CheckOut</Link>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full text-center font-primary font-semibold text-brand text-xl">
            <p className="pb-8">There are no items in this cart</p>
            <CardButton title="Shop Now" path="/shop" />
          </div>
        )}
      </div>
    </section>
  );
};

export default CartBody;
