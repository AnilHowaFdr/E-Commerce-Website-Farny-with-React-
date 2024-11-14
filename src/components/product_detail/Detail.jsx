import ProductSlide from "product-slide";
import { useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducer/productSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const Detail = ({ data }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const settings = {
    direction: "vertical",
    zoom: true, // or false
  };
  const handleAddToCart = () => {
    // data.quantity = quantity;
    data = {
      ...data,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
      images: data?.images[0],
      total: data?.price * quantity,
    };
    dispatch(addToCart(data));
    toast.success(
      "Product added successfully! Please continue your shopping. "
    );
  };
  return (
    <section className="pt-9 pb-14">
      <div className="container">
        <ToastContainer position="top-right" />
        <ToastContainer />
        <div className=" flex flex-col md:flex-row gap-24">
          <div className="w-auto md:w-1/2">
            <ProductSlide settings={settings} api={data.images} />
          </div>
          <div className="w-auto md:w-1/2">
            <h2 className="font-primary font-normal text-[42px]">
              {data?.title}
            </h2>
            <p className="font-primary font-medium text-2xl pt-2 text-[#9F9F9F]">
              BDT {data?.price}.00
            </p>
            <ul className="flex gap-1 text-[#FFC700] py-5 text-xl">
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStarHalf />
              </li>
            </ul>
            <p className="font-primary font-normal text-base w-auto md:w-[450px] ">
              {data?.description}
            </p>
            <div className="py-5 ml-4 sm:ml-0">
              <p className="font-primary pb-2 font-normal text-base text-[#9F9F9F]">
                Size
              </p>
              <div className="flex gap-4">
                <label
                  htmlFor="L"
                  className={`w-8 h-8 ${
                    selectedSize === "L" ? "bg-brand" : "bg-[#F9F1E7]"
                  } font-primary cursor-pointer justify-center flex items-center rounded-lg`}
                >
                  L
                  <input
                    type="radio"
                    id="L"
                    name="size"
                    value="L"
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="hidden"
                  />
                </label>
                <label
                  htmlFor="XL"
                  className={`w-8 h-8 ${
                    selectedSize === "XL" ? "bg-brand" : "bg-[#F9F1E7]"
                  } font-primary cursor-pointer flex justify-center items-center rounded-lg`}
                >
                  XL
                  <input
                    type="radio"
                    id="XL"
                    name="size"
                    value="XL"
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="hidden"
                  />
                </label>
                <label
                  htmlFor="XS"
                  className={`w-8 h-8 ${
                    selectedSize === "XS" ? "bg-brand" : "bg-[#F9F1E7]"
                  } font-primary justify-center cursor-pointer flex items-center rounded-lg`}
                >
                  XS
                  <input
                    type="radio"
                    id="XS"
                    name="size"
                    value="XS"
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
            <div className="pb-5 ml-4 sm:ml-0">
              <p className="font-primary pb-2 font-normal text-base text-[#9F9F9F]">
                Color
              </p>
              <div className="flex gap-4 ">
                <label
                  htmlFor="blue"
                  className={`w-6 h-6 rounded-full cursor-pointer ${
                    selectedColor === "blue" && "scale-125"
                  }`}
                  style={{ background: "blue" }}
                >
                  <input
                    type="radio"
                    id="blue"
                    name="color"
                    value="blue"
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="hidden"
                  />
                </label>
                <label
                  htmlFor="black"
                  className={`w-6 h-6 rounded-full cursor-pointer ${
                    selectedColor === "black" && "scale-125"
                  }`}
                  style={{ background: "black" }}
                >
                  <input
                    type="radio"
                    id="black"
                    name="color"
                    value="black"
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="hidden"
                  />
                </label>
                <label
                  htmlFor="orange"
                  className={`w-6 h-6 rounded-full cursor-pointer ${
                    selectedColor === "orange" && "scale-125"
                  }`}
                  style={{ background: "orange" }}
                >
                  <input
                    type="radio"
                    id="orange"
                    name="color"
                    value="orange"
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-col ml-4 sm:ml-0 sm:flex-row gap-5 pb-14 border-b">
              <div className="flex gap-8 px-3 py-4 border font-primary font-medium text-lg items-center border-[#9F9F9F] rounded-xl w-fit">
                <button
                  onClick={() => {
                    quantity > 1 && setQuantity(quantity - 1);
                  }}
                >
                  -
                </button>
                <p>{quantity}</p>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button
                onClick={handleAddToCart}
                className="px-5 w-fit sm:px-12 cursor-pointer py-4 border font-primary font-normal text-xl rounded-xl "
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
