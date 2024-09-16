import React from "react";
import logo1 from "./images/quvur.png";

const Products = () => {
  return (
    <div>
      <div style={{ width: "100%", height: "400px", display: "flex" }}>
        <div
          style={{
            backgroundColor: "#54BF0D",
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "60px", color: "white" }}>Polyurethane</h1>
        </div>
        <div>
          <img style={{ width: "100%", height: "100%" }} src={logo1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Products;
