import React from "react";

const About = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "fit-content",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <img
          style={{ width: "500px", height: "400px" }}
          src="https://isoflex-europe.eu/wp-content/uploads/2021/06/isoflex-building.jpg"
          alt=""
        />
        <div style={{ width: "650px", height: "400px" }}>
          <h1 style={{ fontFamily: "Roboto", color: "#57C40F" }}>About Us</h1>
          <p
            style={{ fontFamily: "Roboto", fontSize: "16px", lineHeight: 1.5 }}
          >
            We at Isoflex Kft. have manufactured a variety of pipe insulation
            and pipe shell types since 1997, and the continuous expansion of our
            product range have made us one of the three largest insulated pipe
            support manufacturers in Europe. Our engineering insulation
            materials gradually reached every point in Hungary and spread to an
            increasing number of markets in Europe. Our products comply with
            both European and American standards for insulation materials, and
            stocks from our manufacturing units are kept continuously high to
            ensure fast service for customers. We are proud that, in spite of
            the dynamic expansion of production, we retain the capacity to
            manufacture individual insulation material to order, enabling us to
            satisfy extreme or especially complex customer requirements.
            <br />
            Our main insulating materials are polyurethane, rubber, polyethylene
            and, more recently, rock wool, and our shells and pipe support
            linings have long been complemented by different insulation tapes.
          </p>
        </div>
      </div>
      <div style={{ width: "70%", height: "1400px", margin: "0 auto" }}>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <div style={{ display: "flex", gap: "20px" }}>
          <img
            style={{ width: "500px", height: "400px" }}
            src="https://isoflex-europe.eu/wp-content/uploads/2021/06/heart-shaped-photography-sky-rain-forest-nature-background-1024x683.jpeg"
            alt=""
          />
          <div style={{ width: "650px", height: "400px" }}>
            <h1 style={{ fontFamily: "Roboto", color: "#57C40F" }}>
              Our mission
            </h1>
            <p
              style={{
                fontFamily: "Roboto",
                fontSize: "16px",
                lineHeight: 1.5,
              }}
            >
              {" "}
              Isoflex Kft. is not just a manufacturer and distributor of
              different types of engineering insulation, pipe supports and pipe
              shells. Our professionals and owners have an overall commitment to
              environmental protection in addition to the best possible use of
              energy. We feel honoured that our continuously developed pipe
              shell and pipe support products contribute to reducing the
              environmental footprint everywhere. We assume individual
              responsibility for protecting our planet, thus ecological criteria
              are taken into account not only at the place of installation of
              our insulation solutions but also during production, striving for
              carbon neutrality and zero emissions operation.
            </p>
          </div>
        </div>
        <br />
        <br />

        <hr />
        <br />
        <br />
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ width: "60%", height: "180px" }}>
            <h1
              style={{
                fontFamily: "Roboto",
                color: "#57C40F",
                textAlign: "end",
              }}
            >
              Management
            </h1>
            <p
              style={{
                fontFamily: "Roboto",
                fontSize: "16px",
                lineHeight: 1.5,
              }}
            >
              Isoflex is a second-generation family business, but the company
              has long since outgrown the size where family members could
              actually perform all the major tasks. Fortunately, our team of
              highly competent and innovative professionals are as equally
              committed to manufacturing high-quality, modern insulation
              materials and continuous development as the founders themselves.
            </p>
          </div>
          <img
            src="https://isoflex-europe.eu/wp-content/uploads/elementor/thumbs/business-team-manager-meeting-qm42tjzdkx6jh3vrapt3irzkutv2uu2rvw22lm4xxg.jpg"
            alt=""
          />
        </div>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <div style={{ display: "flex", gap: "20px" }}>
          <img
            style={{ width: "500px", height: "400px" }}
            src="https://isoflex-europe.eu/wp-content/uploads/elementor/thumbs/businessman-holding-tablet-showing-growing-virtual-hologram-statistics-graph-chart-with-arrow-up-1-scaled-qm42szazu9zyal1ozemc0qn6fsskdu6w4v4hdrqicw.jpeg"
            alt=""
          />

          <div style={{ width: "650px", height: "400px" }}>
            <h1
              style={{
                fontFamily: "Roboto",
                color: "#57C40F",
                fontSize: "50px",
                marginTop: "-10px",
              }}
            >
              Innovation
            </h1>
            <p
              style={{
                fontFamily: "Roboto",
                fontSize: "16px",
                lineHeight: 1.5,
              }}
            >
              Since its establishment, Isoflex has striven to offer customers
              the most modern, best value for money, highest quality insulation
              materials, mainly insulated pipe supports and their linings, and
              pipe shells. Special attention is devoted to making our products
              easy and quick to install in addition to ensuring that they have
              outstanding thermal technological, physical, chemical and other
              properties. We are well aware that it is not simply price and
              quality which influence the value of a polyurethane pipe shell or
              pipe support. The expertise and time required for installation are
              serious cost factors. The simpler and faster insulation material
              can be installed – be it polyurethane, rubber, polyethylene or
              another material –, the lower the labour costs of installation and
              the more efficient its use.
              <br />
              <br />
              This knowledge leads us to periodically rethink our product
              structure in order to continuously keep pace with the advances in
              materials used in engineering and other insulation, and the
              manufacturing technologies.
              <br />
              <br />
              In the spirit of environmental awareness, we have installed solar
              arrays, which ensure that 70% of the energy required for
              production is now provided from a renewable source.
              <br />
              <br />
              Among our other goals is to ensure that the materials needed for
              production which have hitherto been imported are purchased from
              suppliers in Hungary.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default About;
