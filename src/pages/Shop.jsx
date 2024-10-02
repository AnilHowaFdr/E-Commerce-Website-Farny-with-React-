import Page_banner from "../components/utilities/Page_banner";
import Filter from "./../components/shop/Filter";
import Products from "./../components/shop/Products";

const Shop = () => {
  return (
    <>
      <Page_banner title="Shop" />
      <Filter />
      <Products itemsPerPage={16} />
    </>
  );
};

export default Shop;
