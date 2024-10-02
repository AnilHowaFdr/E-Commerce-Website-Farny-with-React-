import { Link } from "react-router-dom";
import ProductsItems from "../home/ProductsItems";

const RelatedProduct = ({ products }) => {
  const shortListProduct = products.slice(0, 4);

  return (
    <section className="pt-14 pb-24">
      <div className="container ">
        <h2 className="title text-center pb-8">Related Products</h2>
        <div className="flex justify-between gap-5">
          {shortListProduct.map((item) => (
            <ProductsItems key={item.id} data={item} />
          ))}
        </div>
        <div className=" flex justify-center mt-12 ">
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

export default RelatedProduct;
