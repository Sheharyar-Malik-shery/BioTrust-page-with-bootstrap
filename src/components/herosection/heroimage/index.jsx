import React from "react";
import heroimgpng from "../../../assets/heroimgpng.png";
import herobottomimgpng from "../../../assets/herobottomimgpng.png";
import Crouselone from "../../Reuseable/crousel";
import "../../../crousel.css";
import "../../../responsive.app.css";
import "../../../ImageZoom.css";
import crouselimgpng1 from "../../../assets/crouselimgpng1.png";
import crouselimgpng2 from "../../../assets/crouselimgpng2.png";
import crouselimgpng3 from "../../../assets/croselimgpng3.png";
import crouselimgpng4 from "../../../assets/crouselimgpng4.png";

const AdvertismentImage = () => {
  const stars = Array(5).fill(null);

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
    <div className="overflow-hidden text-center px-3">
      <div>
        <p className="hero-img-heading ">
          AGELESS MULTI-COLLAGEN® PROTEIN POWDER
        </p>
      </div>
      <div>
        <p className="m-0 mb-2  d-flex justify-content-center align-items-center">
          {stars.map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-star-fill"
              viewBox="0 0 16 16"
              style={{ color: "#2BB34D" }}
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          ))}
          <span className="text-primary">3428Reviews</span>
        </p>
      </div>
      <div className=" overflow-hidden mb-2 zoom-container ">
        <div className="crousel-display">
          <Crouselone
            className="d-none crousel-display"
            images={sliderimages}
          />
        </div>
        <img src={heroimgpng} alt="img error" className="hero-img zoom-image" />
      </div>
      <div className="m-0">
        <img src={herobottomimgpng} alt="img error" style={{ width: "96%" }} />
      </div>
    </div>
  );
};

export default AdvertismentImage;
