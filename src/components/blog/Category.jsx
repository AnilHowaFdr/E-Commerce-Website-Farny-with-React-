import React from "react";

const Category = () => {
  return (
    <ul className="flex flex-col gap-8 text-[#9F9F9F] font-primary font-normal text-base">
      <li className="flex sm:justify-between gap-4">
        <p>Crafts</p>
        <p>2</p>
      </li>
      <li className="flex sm:justify-between gap-4">
        <p>Design</p>
        <p>8</p>
      </li>
      <li className="flex sm:justify-between gap-4">
        <p>Handmade</p>
        <p>7</p>
      </li>
      <li className="flex sm:justify-between gap-4">
        <p>Interior</p>
        <p>1</p>
      </li>
      <li className="flex sm:justify-between gap-4">
        <p>Wood</p>
        <p>2</p>
      </li>
      <li className="flex sm:justify-between gap-4">
        <p>Crafts</p>
        <p>6</p>
      </li>
    </ul>
  );
};

export default Category;
