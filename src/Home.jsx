import React from "react";

import logo1 from "./images/flag.png";
import logo2 from "./images/garage.png";
import logo3 from "./images/logo.png";
import logo4 from "./images/microsoft.png";
import logo5 from "./images/behance.png";
import logo6 from "./images/badge.png";
import logo7 from "./images/iso.png";

const Home = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{ width: "50%", height: "450px", backgroundColor: "#02153D" }}
        >
          <h1
            style={{
              color: "white",
              marginTop: "120px",
              textAlign: "center",
              fontSize: "40px",
            }}
          >
            Insulation Technology
          </h1>
          <h4
            style={{
              color: "white",
              marginLeft: "230px",
              fontSize: "20px",
              fontFamily: "Roboto",
            }}
          >
            High quality products for building industry <br /> and building
            industrial plants{" "}
          </h4>
          <br />
          <button
            style={{
              padding: "10px",
              marginLeft: "230px",
              backgroundColor: "#57C40F",
              border: "none",
              fontSize: "16px",
              fontFamily: "Roboto",
              fontWeight: 500,
            }}
          >
            Our Products
          </button>
        </div>

        <div style={{ width: "50%" }}>
          <img
            style={{ width: "100%", height: "450px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfRx6IadYueJh6Ivoq5MI93tEPhtkEMkRyQ&s"
            alt=""
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#57C40F",
          width: "100%",
          height: "280px",
          marginTop: "-4px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "180px",
            height: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img style={{ width: "40px", height: "40px" }} src={logo1} alt="" />
          <p style={{ textAlign: "center", color: "white" }}>
            Our company profile is the wholesale and manufacture of engineering
            insulation materials.
          </p>
        </div>

        <div
          style={{
            width: "180px",
            height: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img style={{ width: "40px", height: "40px" }} src={logo2} alt="" />
          <p style={{ textAlign: "center", color: "white" }}>
            Our company is based in Székesfehérvár (Hungary), where we supply
            the Hungarian market from our newly built high-bay warehouse.
          </p>
        </div>

        <div
          style={{
            width: "180px",
            height: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img style={{ width: "40px", height: "40px" }} src={logo3} alt="" />
          <p style={{ textAlign: "center", color: "white" }}>
            Our philosophy is to keep large stocks of all our distributed
            products to be able to guarantee continuous supplies for our
            partners.
          </p>
        </div>

        <div
          style={{
            width: "180px",
            height: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img style={{ width: "40px", height: "40px" }} src={logo4} alt="" />
          <p style={{ textAlign: "center", color: "white" }}>
            Our products comply with all European and American UL standards.
          </p>
        </div>

        <div
          style={{
            width: "180px",
            height: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img style={{ width: "40px", height: "40px" }} src={logo5} alt="" />
          <p style={{ textAlign: "center", color: "white" }}>
            The range of our own products and the turnover of our polyurethane
            products is expanding dynamically year by year.
          </p>
        </div>

        <div
          style={{
            width: "180px",
            height: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img style={{ width: "40px", height: "40px" }} src={logo6} alt="" />
          <p style={{ textAlign: "center", color: "white" }}>
            We are one of the TOP 3 pipe support lining manufacturers in Europe.
          </p>
        </div>
      </div>

      <br />
      <br />

      <div style={{ width: "83%", height: "100px", margin: "0 auto" }}>
        <p style={{ fontFamily: "Roboto", fontSize: "16px" }}>
          Hungarian-owned, 25-year-old Isoflex is one of Europe’s largest
          manufacturers of pipe clamp inserts and pipe shells. On our
          state-of-the-art production lines we offer our customers a full range
          of PU and PE pipe clamp inserts and pipe shells with all European,
          American and NATO certifications. Thanks to our considerable warehouse
          capacity, we are able to serve even large projects at short notice,
          and our products are available with the desired cladding (Alu,
          Alu-Clad, plastic). With our design and engineering capacities, we can
          also cater for individual, special insulation requirements.
        </p>
      </div>
      <div>
        <div className="server">
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <br />
              <br />
              <br />
              <br />
              <br />

              <h1
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "40px",
                }}
              >
                Ask Our Experts For Assistance
              </h1>
              <p
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                Ask quotations/free product samples for the products included in
                our product list, or for the specific <br />
                dimensions that you need.
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  style={{
                    backgroundColor: "#57C40F",
                    border: "none",
                    padding: "15px",
                    color: "white",
                  }}
                >
                  Contact
                </button>
              </div>
            </div>
            <div>
              <img style={{ marginTop: "18px" }} src={logo7} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
