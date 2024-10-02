import BreadCrumb from "./../components/utilities/BreadCrumb";
import RelatedProduct from "./../components/product_detail/RelatedProduct";
import Detail from "./../components/product_detail/Detail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productData } from "../api";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [relatedProductList, setRelatedProductList] = useState([]);
  const params = useParams();
  useEffect(() => {
    productData()
      .then((res) => {
        for (let item of res.data) {
          if (item.id == params.id) {
            console.log(item.category.name);
            setProduct(item);
            for (let related of res.data) {
              if (item.category.name == related.category.name) {
                setRelatedProductList((prev) => [...prev, related]);
              }
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  return (
    <section>
      <div className="py-8 bg-[#F9F1E7]">
        <BreadCrumb title={product?.title} />
      </div>
      <Detail data={product} />
      <RelatedProduct products={relatedProductList} />
    </section>
  );
};

export default ProductDetail;
