const Browse = () => {
  return (
    <section className=" py-14">
      <div className="container">
        <div className="text-center">
          <h2 className="title">Browse The Range</h2>
          <p className="detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="pt-[62px] flex flex-col gap-5 justify-center items-center md:flex-row">
          <div className="w-1/3">
            <img
              className="w-full pb-[30px]"
              src="/dinning.png"
              alt="dinning"
            />
            <h3 className="font-primary text-center text-2xl font-semibold">
              Dinning
            </h3>
          </div>
          <div className="w-1/3">
            <img className="w-full pb-[30px]" src="/living.png" alt="living" />
            <h3 className="font-primary text-center text-2xl font-semibold">
              Living
            </h3>
          </div>
          <div className="w-1/3">
            <img
              className="w-full pb-[30px]"
              src="/bedroom.png"
              alt="bedroom"
            />
            <h3 className="font-primary text-center text-2xl font-semibold">
              Bedroom
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Browse;
