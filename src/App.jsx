import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import logo1 from "./images/telegram.png";
import logo2 from "./images/eng.png";
import logo3 from "./images/uzbekistan.png";
import "./css/1.css";
import logo4 from "./images/russia.png";
import { Link } from "react-router-dom";
import About from "./About";
import logo8 from "./images/flex.png";
import logo9 from "./images/design.png";
import Products from "./Products";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ width: "101%", marginLeft: "-10px", marginTop: "-8px" }}>
      <header>
        <div
          style={{
            height: "60px",
            backgroundColor: "#57C40F",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              width: "280px",
              height: "40px",
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <img style={{ width: "30px", height: "30px" }} src={logo1} alt="" />

            <Link
              className="link"
              style={{
                fontFamily: "Roboto",
                fontSize: "16px",
                textDecoration: "none",
                color: "black",
              }}
            >
              contact@isoflex-europe.eu
            </Link>
          </div>
          <div
            style={{
              width: "200px",
              height: "40px",
              display: "flex",
              gap: "20px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img style={{ width: "30px", height: "30px" }} src={logo2} alt="" />
            <img style={{ width: "30px", height: "30px" }} src={logo3} alt="" />
            <img style={{ width: "30px", height: "30px" }} src={logo4} alt="" />
          </div>
        </div>
      </header>
      <section>
        <div
          style={{
            width: "100%",
            height: "130px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>
            <Link to={"/"}>
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </Link>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "17px",
                fontFamily: "Roboto",
              }}
            >
              Home
            </Link>
            <Link
              to={"/about"}
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "17px",
                fontFamily: "Roboto",
              }}
            >
              About Us
            </Link>
            <Link
              to={"/products"}
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "17px",
                fontFamily: "Roboto",
              }}
            >
              Products
            </Link>
          </div>
        </div>
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <div
        style={{
          width: "100%",
          backgroundColor: "#C8C8C8",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Home
        </Link>
        <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
          About Us
        </Link>
        <Link
          to={"/products"}
          style={{ textDecoration: "none", color: "black" }}
        >
          Products
        </Link>
      </div>
      <div
        style={{
          width: "100%",
          height: "80px",
          backgroundColor: "#00123E",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          style={{ width: "120px", height: "60px", marginLeft: "120px" }}
          src={logo8}
          alt=""
        />
        <p style={{ color: "white", marginLeft: "-90px" }}>
          Isoflex Ltd. © All rights reserved.
        </p>
        <img src={logo9} alt="" />
      </div>
    </div>
  );
}

export default App;
