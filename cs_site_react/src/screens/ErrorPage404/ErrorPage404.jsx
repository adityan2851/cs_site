import React from "react";
import { Container } from "react-bootstrap";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

import ErrorAnim from "../../assets/animations/404_page.json";
import ErrorAnimMobile from "../../assets/animations/404-mobile-anim.json";

const ErrorPage404 = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/">
          {window.innerWidth < 768 ? (
            <Container
              md
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Lottie
                isClickToPauseDisabled
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: ErrorAnimMobile,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              ></Lottie>
            </Container>
          ) : (
            <Lottie
              isClickToPauseDisabled
              options={{
                loop: true,
                autoplay: true,
                animationData: ErrorAnim,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
            ></Lottie>
          )}
        </Link>
      </div>
    </>
  );
};

export default ErrorPage404;
