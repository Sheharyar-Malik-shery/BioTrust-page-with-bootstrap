import React from "react";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../../crousel.css";
import "../../../responsive.app.css";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Crouselone = ({ images }) => {
  console.log(images);

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide>
            <img
              src={img.img}
              alt="img error"
              className="crouselone-img-size"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Crouselone;
