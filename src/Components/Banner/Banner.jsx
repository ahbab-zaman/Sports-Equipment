import bannerImage1 from "../../assets/bannerSports.jpg";
import bannerImage2 from "../../assets/bannerSports2.jpg";
import bannerImage3 from "../../assets/bannerSports3.jpg";
import bannerImage4 from "../../assets/bannerSports4.jpg";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
const Banner = () => {
  return (
    <div className="lg:h-[550px] h-auto w-full">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img className="h-[520px] w-full " src={bannerImage1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[520px] w-full" src={bannerImage2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[520px] w-full" src={bannerImage3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[520px] w-full" src={bannerImage4} alt="" />
        </SwiperSlide>
        <style>
          {`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background-color: #4b5563;
          border-radius: 9999px;
          padding: 10px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: #F7F6F9; 
          color:#000;
          border:1px solid black
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 1rem;
        }
        `}
        </style>
      </Swiper>
    </div>
  );
};

export default Banner;
