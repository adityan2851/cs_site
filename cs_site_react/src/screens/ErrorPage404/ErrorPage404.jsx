import React from 'react'
import { Container } from 'react-bootstrap';
import Lottie from "react-lottie";

import ErrorAnim from "../../assets/animations/404_page.json";

const ErrorPage404 = () => {
    return (
        <>
        <div style={{height: "100vh"}}>
            
          <Lottie 
          isClickToPauseDisabled
          options ={{
              loop:true, 
              autoplay: true,
              animationData: ErrorAnim,
              rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice"
              },
          }}
          ></Lottie>  
        </div>
        </>
    )
};

export default ErrorPage404;
