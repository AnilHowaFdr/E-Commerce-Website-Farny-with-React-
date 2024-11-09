import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import ProductsItems from "./../home/ProductsItems";
import { productData } from "../../api";

const Products = ({ itemsPerPage }) => {
  const [productList, setProductList] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = productList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productList.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productList.length;
    setItemOffset(newOffset);
  };
  useEffect(() => {
    productData()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="pt-12 pb-20 ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8">
          {currentItems &&
            currentItems.map((item) => (
              <ProductsItems key={item.id} data={item} />
            ))}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="flex justify-start lg:justify-center mt-10 gap-2 lg:gap-9 productPagination "
        />
      </div>
    </section>
  );
};

export default Products;
