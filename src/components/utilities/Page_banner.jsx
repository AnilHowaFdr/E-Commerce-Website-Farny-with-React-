import BreadCrumb from "./BreadCrumb";

const Page_banner = ({ title }) => {
  return (
    <section className="relative mt-52 md:mt-10 py-14 bg-cover bg-no-repeat bg-center bg-[url('/shop_banner.png')] ">
      <div className="container ">
        <div className="w-full flex justify-center items-center pb-3">
          <img src="/logoIcon.png" alt="icon" />
        </div>
        <h2 className="page_heading pb-3 ">{title}</h2>
        <BreadCrumb />
      </div>
    </section>
  );
};

export default Page_banner;
