import React from "react";
import Crousel from "../herocrousel";
import AdvertismentImage from "../heroimage";
import Cards from "../herocards";
import "../../../responsive.app.css";
import CrouselHorizontal from "../../Reuseable/crousel-horizontal";
import crouselimgpng1 from "../../../assets/crouselimgpng1.png";
import crouselimgpng2 from "../../../assets/crouselimgpng2.png";
import crouselimgpng3 from "../../../assets/croselimgpng3.png";
import crouselimgpng4 from "../../../assets/crouselimgpng4.png";

const Hero = () => {
  const sliderimages = [
    {
      key: 1,
      img: crouselimgpng1,
    },
    {
      key: 2,
      img: crouselimgpng2,
    },
    {
      key: 3,
      img: crouselimgpng3,
    },
    {
      key: 4,
      img: crouselimgpng4,
    },
    {
      key: 5,
      img: crouselimgpng1,
    },
  ];
  return (
    <div
      className="py-5"
      style={{
        borderTop: "5px solid rgb(13, 79, 154)", // Top border
        borderBottom: "5px solid rgb(13, 79, 154)", // Bottom border
      }}
    >
      <div className="d-flex justify-content-between align-items-start card-md-alignmnet">
        <div className="col-2 d-flex card-md-Crousel justify-content-center align-items-center ">
          <Crousel />
        </div>
        <div className="col-4 card-md-AdvertismentImage d-flex justify-content-center align-items-center ">
          <AdvertismentImage />
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center cards-md-full-width">
          <Cards />
        </div>
      </div>
      <div className="hero-bottom-right-parent">
        <div className="hero-bottom-right">
          <CrouselHorizontal images={sliderimages} />
          {/* <p className="m-0 text-center">world</p> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
