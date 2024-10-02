import { AiOutlineMinus } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
const BeautifulRoom = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className=" py-[44px] bg-[#FCF8F3] beautiful">
      <div className="container flex flex-col gap-11 lg:flex-row">
        <div className="w-2/5 flex flex-col justify-center">
          <h2 className="title w-[422px]">50+ Beautiful rooms inspiration</h2>
          <p className="detail w-[368px] pt-3 pb-6">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button className="py-2 px-4 sm:py-4 sm:px-9 bg-brand text-white font-semibold text-base w-fit font-primary">
            <Link to="/shop">Explore More</Link>
          </button>
        </div>
        <div className="w-3/5 ">
          <Slider {...settings}>
            <div className="slide_items">
              <div className="relative">
                <img
                  className="h-full w-full"
                  src="/beautiful1.png"
                  alt="beautiful"
                />
                <div className="flex absolute left-6 bottom-6 ">
                  <div className=" w-[217px] bg-[rgba(255,255,255,0.71)] pr-[17px] py-8 pl-8">
                    <ul className=" flex gap-2 items-center font-primary font-medium text-base pb-2">
                      <li>
                        <p>01</p>
                      </li>
                      <li>
                        <AiOutlineMinus className="text-2xl" />
                      </li>
                      <li>
                        <p>Bed Room</p>
                      </li>
                    </ul>
                    <h3 className="font-semibold font-primary text-2xl">
                      Inner Peace
                    </h3>
                  </div>
                  <div className="bg-brand py-3 mt-auto px-3 w-12 h-12 text-white text-2xl">
                    <FaArrowRightLong />
                  </div>
                </div>
              </div>
            </div>
            <div className="slide_items">
              <img
                className="w-full h-full"
                src="/beautiful2.png"
                alt="image"
              />
            </div>
            <div className="slide_items">
              <img
                className="w-full h-full"
                src="/beautiful3.png"
                alt="image"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BeautifulRoom;

// import { AiOutlineMinus } from "react-icons/ai";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import "slick-carousel/slick/slick.css";
// import Slider from "react-slick";
// import SampleNextArrow from "./SampleNextArrow";
// const BeautifulRoom = () => {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2.1,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <span></span>,
//   };
//   return (
//     <section className=" py-[44px] bg-[#FCF8F3] beautiful">
//       <div className="container">
//         <div className="flex gap-11">
{
  /* <div className="w-2/5 flex flex-col justify-center">
  <h2 className="title w-[422px]">50+ Beautiful rooms inspiration</h2>
  <p className="detail w-[368px] pt-3 pb-6">
    Our designer already made a lot of beautiful prototipe of rooms that inspire
    you
  </p>
  <button className="py-4 px-9 bg-brand text-white font-semibold text-base w-fit font-primary">
    <Link to="/shop">Explore More</Link>
  </button>
</div>; */
}
//           <div className="w-3/5">
//             <Slider {...settings}>
//               <div>
//                 <div className="relative">
{
  /* <img src="/beautiful1.png" className="w-full " alt="beautiful" />; */
}
//                 </div>
{
  /* <div className="flex absolute left-6 bottom-6 ">
  <div className=" w-fit bg-[rgba(255,255,255,0.71)] pr-[17px] py-8 pl-8">
    <ul className=" flex gap-2 items-center font-primary font-medium text-base pb-2">
      <li>
        <p>01</p>
      </li>
      <li>
        <AiOutlineMinus className="text-2xl" />
      </li>
      <li>
        <p>Bed Room</p>
      </li>
    </ul>
    <h3 className="font-semibold font-primary text-2xl">Inner Peace</h3>
  </div>
  <div className="bg-brand py-3 mt-auto px-3 w-fit h-fit text-white text-2xl">
    <FaArrowRightLong />
  </div>
</div>;
//               </div> */
}
//               <div>
//                 <img src="/beautiful2.png" alt="beautiful" />
//               </div>
//               <div>
//                 <img src="/beautiful3.png" alt="beautiful" />
//               </div>
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BeautifulRoom;
