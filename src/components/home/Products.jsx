import { Link } from "react-router-dom";
import ProductsItems from "./ProductsItems";
import { useEffect, useState } from "react";
import { productData } from "../../api";

const Products = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    productData()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  productList.length = 12;
  return (
    <section className=" py-14">
      <div className="container">
        <h2 className="title text-center">Our Products</h2>
        <div className="pt-[62px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productList.map((item) => (
            <ProductsItems data={item} key={item.id} />
          ))}
        </div>
        <div className=" flex justify-center mt-8 mb-[69px]">
          <Link
            className="text-brand text-base font-primary font-semibold inline-block border-brand border-2 cursor-pointer py-4 px-[76px]"
            to="/shop"
          >
            Show More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
