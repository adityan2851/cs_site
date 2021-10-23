// import React, { useState, useEffect } from "react";
// import VisionAndMission from "../../components/visionAndMission";
// import { silderInfo } from "./Data";
// import wireSVG from "../../images/wire.svg";
// import Shapes from "./Shapes";
// import { Carousel } from "react-bootstrap";

// const HomePage = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   const handleResize = () => {
//     if (window.innerWidth < 720) {
//       setIsMobile(true);
//     } else {
//       setIsMobile(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//   });

//   let mobDesign = isMobile ? "flex-column" : "flex-row-reverse";

//   const sliderContentItems = silderInfo.map((obj, index) => (
//     <Carousel.Item key={index}>
//       <img className="d-block w-100" src={obj["imageURL"]} alt="First slide" />
//       <Carousel.Caption>
//         <h3>{obj["heading"]}</h3>
//         <p>{obj["content"]}</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//   ));

//   const wireStyle = {
//     position: "absolute",
//     left: "0",
//     right: "0",
//     top: "50vh",
//   };
//   return (
//     <div>
//       <main>
//         <section style={{ height: "100vh" }}>
//           <div
//             className={`container d-flex ${mobDesign} justify-content-center align-items-center`}
//           >
//             <div className="container">
//               <Carousel
//                 className="carousel-dark"
//                 keyboard="true"
//                 nextLabel=""
//                 prevLabel=""
//                 pause="hover"
//                 wrap="true"
//                 variant="dark"
//               >
//                 {sliderContentItems}
//               </Carousel>
//             </div>
//             <div className="container d-flex justify-content-center align-items-center">
//               <div
//                 className="container d-flex justify-content-center align-items-center"
//                 style={{ textAlign: isMobile ? "center" : "left" }}
//               >
//                 {isMobile ? <></> : <Shapes />}
//                 <h1>Providing the best in Computer Education Since 1995.</h1>
//               </div>
//             </div>
//           </div>
//         </section>

//         {isMobile ? (
//           <></>
//         ) : (
//           <div className="container" style={wireStyle}>
//             <img src={wireSVG} alt="wireImage" width="100%" />
//           </div>
//         )}

//         <section style={{ height: "100vh" }}>
//           <div
//             className={`container d-flex ${mobDesign} justify-content-center align-items-center`}
//           >
//             <div className="container d-flex" style={{ textAlign: "center" }}>
//               {isMobile ? <></> : <Shapes />}
//               <h1>Watch our Testimonials</h1>
//             </div>

//             <div className="container">
//               <iframe
//                 width={isMobile ? "100%" : "800"}
//                 height="500"
//                 title="Youtube-Video"
//                 src="https://www.youtube.com/embed/0Mh8KPg1xNU?autoplay=0&mute=1&loop=1&playlist=0Mh8KPg1xNU"
//               ></iframe>
//             </div>
//           </div>
//         </section>
//       </main>
//       <VisionAndMission />
//     </div>
//   );
// };

// export default HomePage;

import React from "react";

import { silderInfo } from "./Data";

import { Container, Col, Row } from "react-bootstrap";
import Lottie from "react-lottie";

import coderAnim2 from "../../assets/animations/coder2.json";
import HomeContent from "../../components/HomeContent/HomeContent";
// import Banner from "../../components/Banner"
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-background">
      <br />
      <br />

      <Container>
        <Row md>
          <Col
            md
            className="left d-flex justify-content-center align-items-start flex-column"
          >
            <h1 style={{ fontWeight: "bold" }}>
              Department of Computer Science and Engineering
            </h1>
            <p>
            Building The Future On A Foundation of Excellence.
            </p>
          </Col>
          <Col md>
            <Lottie
              className="lottie-animation"
              isClickToPauseDisabled
              options={{
                loop: true,
                autoplay: true,
                animationData: coderAnim2,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
            ></Lottie>
          </Col>
        </Row>
      </Container>

      <div className="home-content-wrapper">
        <HomeContent content={silderInfo} />
      </div>
    </div>
  );
};

export default HomePage;
