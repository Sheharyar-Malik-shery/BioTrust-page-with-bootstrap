import React from "react";
import "../../../App.css";
import "../../../responsive.app.css";
import moneyback from "../../../assets/money-back-guarantee-png.png";
const ProductClaim = () => {
  const card = Array(4).fill(null);
  return (
    <div className="d-flex ProductClaim-1nd-parnet gap-1 text-center">
      {card.map((_, index) => (
        <div key={index} className="ProductClaim-2nd-parnet">
          <div className=" text-center product-claim">
            <div className="img-container">
              <img
                src={moneyback}
                alt="img load error"
                className="product-claim-img"
              />
            </div>
            <p className="m-0 product-claim-text">
              60-Day Money Back Guarantee
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductClaim;
