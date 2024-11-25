import React from "react";
import "../../../App.css";
import "../../../responsive.app.css";
const Card = ({ data }) => {
  console.log(data);
  //   {
  //     pack: "1 Pack",
  //     weeks: " Every 4 Weeks (~1 month)",
  //     discount: "$49",
  //     price: "$29.40 Per Pack",
  //     save: "(Save $19.60)",
  //     benefit: "+ FREE SHIPPING",
  //   },
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="card-custom-border single-card-widt text-center px-2 py-3"
        >
          <div className="card-image">
            <img src={item.image} alt="img error" />
          </div>
          <div className="m-0 card-lg-display">
            <h2
              className="m-0 card-lg-heading-size"
              style={{
                color: "rgb(13, 79, 154)",
                fontWeight: "bold",
                // margin: "0%",
              }}
            >
              {item.pack}
            </h2>
            <p
              className="m-0 card-lg-weeks-size"
              style={{
                color: "rgb(13, 79, 154)",
                fontSize: "1.4em",
                margin: "0%",
              }}
            >
              {item.weeks}
            </p>
            <h3 className=" card-lg-discount-size">{item.discount}</h3>
            <p className="m-0">
              <strong
                className=" card-lg-price-size"
                style={{
                  color: "#2BB34D",
                  fontSize: "2em",
                  // margin: "0%",
                }}
              >
                {item.price}
              </strong>
            </p>
            <p
              className=" card-lg-save-size"
              style={{
                color: "#EC2D2E",
                fontWeight: "bold",
                fontSize: "1.3em",
                margin: "0%",
              }}
            >
              {item.save}
            </p>
            <p
              className="m-0 card-lg-benefit-size"
              style={{ fontWeight: "bold" }}
            >
              {item.benefit}
            </p>
          </div>
          <button
            className="m-0 card-lg-btn"
            style={{
              padding: "7% 15%",
              border: "none",
              borderRadius: "10px",
              background: "#2BB34D",
              margin: "0%",
            }}
          >
            <span style={{ color: "white", fontWeight: "bold", margin: "0%" }}>
              CHOOSE FLAVOR
            </span>
          </button>
        </div>
      ))}
    </>
  );
};

export default Card;
