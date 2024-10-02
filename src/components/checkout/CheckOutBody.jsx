import React from "react";
import InputBox from "../utilities/InputBox";
import SelectedBox from "../utilities/SelectedBox";
import { useSelector } from "react-redux";

const CheckOutBody = () => {
  const productList = useSelector((state) => state.cartList.product);
  const totalPrice = productList.reduce(
    (total, product) => total + product.total,
    0
  );
  return (
    <section className="py-24 ">
      <div className="container flex justify-between">
        <div className="px-[76px] py-9 w-2/5">
          <h2 className="title pb-9">Billing Details</h2>
          <div className="flex gap-8 ">
            <InputBox title="First Name" />
            <InputBox title="Last Name" />
          </div>
          <InputBox title="Company Name (Optional)" />
          <SelectedBox title="Country / Region" />
          <InputBox title="Street address" />
          <InputBox title="Town / City" />
          <SelectedBox title="Province" />
          <InputBox title="ZIP code" type="number" />
          <InputBox title="Phone" type="number" />
          <InputBox title="Email address" type="email" />
          <InputBox placeholder="Additional Information" />
        </div>
        <div className="px-10 py-14 w-2/5">
          <div className="flex justify-between items-center font-primary font-medium text-2xl">
            <h3>Product</h3>
            <h3>Subtotal</h3>
          </div>

          {productList.map((item) => (
            <div
              key={item}
              className="flex justify-between items-center font-primary pt-4 pb-5 font-normal text-[#9F9F9F] text-base"
            >
              <p key={item.id}>
                {item?.title} <span> x {item?.quantity}</span>
              </p>
              <p>BDT {item?.total}</p>
            </div>
          ))}

          <div className="flex justify-between items-center font-primary font-normal text-base">
            <p>Subtotal</p>
            <p>BDT. {totalPrice}</p>
          </div>
          <div className="flex justify-between items-center pt-5 pb-10 border-b">
            <p className="font-primary font-normal text-base">Total</p>
            <p className="font-primary font-normal text-2xl text-brand">
              BDT. {totalPrice}
            </p>
          </div>
          <div>
            <h3 className="pt-6 pb-3 font-primary font-medium text-base">
              <span className="w-[14px] h-[14px] rounded-full bg-black mr-4 inline-block"></span>
              Direct Bank Transfer
            </h3>
            <p className="text-[#9F9F9F] font-primary font-normal text-base">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          </div>
          <div className="flex gap-4 pt-6 text-[#9F9F9F] font-primary font-normal text-base">
            <input id="bank" type="radio" />
            <label htmlFor="bank">Direct Bank Transfer</label>
          </div>
          <div className="flex gap-4 py-6 text-[#9F9F9F] font-primary font-normal text-base">
            <input id="cash" type="radio" />
            <label htmlFor="cash">Cash On Delivery</label>
          </div>
          <p className="detail pb-10">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="font-primary font-semibold text-base ">
              privacy policy
            </span>
            .
          </p>
          <button className="font-primary font-normal text-xl py-5 px-24 border rounded-xl cursor-pointer border-black">
            Place order
          </button>
        </div>
      </div>
    </section>
  );
};

export default CheckOutBody;
