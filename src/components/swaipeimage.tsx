// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";

import mainImage from "../images/biz01.jpg";
import mainImage2 from "../images/biz02.jpg";
import mainImage3 from "../images/biz03.jpg";
import { Swp01 } from "../swiperitems/swp01";

export const Swipeimage = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      navigation
      spaceBetween={1}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      centeredSlides={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: false }}
    >
      <SwiperSlide>
        <Swp01 />
        {/* <img src={mainImage} alt="1" width="100%" height="370px" /> */}
      </SwiperSlide>
      <SwiperSlide>
        <img src={mainImage2} alt="2" width="100%" height="370px" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={mainImage3} alt="3" width="100%" height="370px" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Swipeimage;
