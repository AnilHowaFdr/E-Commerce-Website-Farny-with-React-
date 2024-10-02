import React from "react";

const Category = () => {
  return (
    <ul className="flex flex-col gap-8 text-[#9F9F9F] font-primary font-normal text-base">
      <li className="flex justify-between">
        <p>Crafts</p>
        <p>2</p>
      </li>
      <li className="flex justify-between">
        <p>Design</p>
        <p>8</p>
      </li>
      <li className="flex justify-between">
        <p>Handmade</p>
        <p>7</p>
      </li>
      <li className="flex justify-between">
        <p>Interior</p>
        <p>1</p>
      </li>
      <li className="flex justify-between">
        <p>Wood</p>
        <p>2</p>
      </li>
      <li className="flex justify-between">
        <p>Crafts</p>
        <p>6</p>
      </li>
    </ul>
  );
};

export default Category;
