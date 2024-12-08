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
    <div className="g:h-[650px] h-auto w-full">
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
          <img src={bannerImage1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerImage2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerImage3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerImage4} alt="" />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Banner;
