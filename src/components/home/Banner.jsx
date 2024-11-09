const Banner = () => {
  return (
    <section className="pt-[153px] pb-[100px] bg-[url('/hero.jpg')]">
      <div className="container ">
        <div className="w-full md:w-1/2 ml-auto bg-[#FFF3E3] px-9 py-10  ">
          <h3 className="uppercase font-semibold font-primary text-base pt-8 text-black">
            smart Solutions
          </h3>
          <h1 className="font-primary pt-3 pb-12 font-bold text-3xl sm:text-6xl leading-9 sm:leading-[70px] text-brand">
            Natural Purity from the Perfect Furniture Design
          </h1>
          <p className="font-medium pb-12 font-primary text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit non error velit tempora debitis!lorem12
          </p>
          <button className="px-8 py-3 sm:py-[25px] sm:px-[72px] bg-brand text-white font-bold text-base font-primary">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
