import BeautifulRoom from "../components/home/BeautifulRoom";
import Browse from "../components/home/Browse";
import Products from "../components/home/Products";
import Banner from "./../components/home/Banner";
import SetUp from "./../components/home/SetUp";
const Home = () => {
  return (
    <>
      <Banner />
      <Browse />
      <Products />
      <BeautifulRoom />
      <SetUp />
    </>
  );
};

export default Home;
