import React from "react";
import "../../App.css";
import "../../responsive.app.css";

const Reviews = () => {
  const stars = Array(5).fill(null);
  return (
    <div className="d-flex revies-parent">
      <div className="revies-parent-left">
        <p className="m-0 revies-parent-left-1stpgraph">
          FEATURED CUSTOMER REVIEW
        </p>
        <p className="m-0 revies-parent-left-2stpgraph">Read more reviews</p>
      </div>
      <div className="revies-parent-right">
        {stars.map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
            style={{ color: "#2BB34D", margin: "3px" }}
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        ))}
        <p className="m-0 revies-parent-right-1stpgraph">
          "I love it! No taste or smell. I put it in my coffee first thing. Cuts
          my hunger and gives me energy."
        </p>
        <p className="m-0 revies-parent-right-2stpgraph">Jacqueline T.</p>
        <p className="m-0 revies-parent-right-3stpgraph">VERIFIED BUYER</p>
      </div>
    </div>
  );
};

export default Reviews;
