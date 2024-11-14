import BlogItems from "./BlogItems";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const BlogPagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  return (
    <div>
      {currentItems &&
        currentItems.map((item, i) => (
          <div>
            <BlogItems key={i} />
          </div>
        ))}
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<div previous"
        renderOnZeroPageCount={null}
        className="flex justify-center md:justify-end mt-7 gap-3 md:gap-9 blogPagination "
      />
    </div>
  );
};

export default BlogPagination;
