import React from "react";
import Card from "../../Reuseable/card";
import "../../../responsive.app.css";
const Cards = () => {
  const carddata = [
    {
      pack: "1 Pack",
      weeks: " Every 4 Weeks (~1 month)",
      discount: "$49",
      price: "$29.40 Per Pack",
      save: "(Save $19.60)",
      benefit: "+ FREE SHIPPING",
      image:
        "https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/buy-1-1571245639778.png",
    },
    {
      pack: "1 Pack",
      weeks: " Every 4 Weeks (~1 month)",
      discount: "$49",
      price: "$29.40 Per Pack",
      save: "(Save $19.60)",
      benefit: "+ FREE SHIPPING",
      image:
        "https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/buy-3-1571245639780.png",
    },
    {
      pack: "1 Pack",
      weeks: " Every 4 Weeks (~1 month)",
      discount: "$49",
      price: "$29.40 Per Pack",
      save: "(Save $19.60)",
      benefit: "+ FREE SHIPPING",
      image:
        "https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/buy-6-1571245639782.png",
    },
  ];

  return (
    <div className="container text-center card-md-alignmnet">
      <div>
        <h3 className="card-heading">Choose Your Package</h3>
        <p>Select your money-saving option below:</p>
      </div>
      <div className="card-btns-info mb-3 d-flex justify-content-around">
        <div className="card-info-Purchase ">
          <p className="m-0 card-info-p1">One-Time Purchase </p>
        </div>
        <div className="card-info card-info-p2 ">
          <p className="m-0">Subscribe & Save Up To 50%</p>{" "}
        </div>
      </div>
      <div className="justify-content-center card-alignment">
        <Card data={carddata} />
      </div>
    </div>
  );
};

export default Cards;
