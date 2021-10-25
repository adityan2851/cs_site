import React from "react";
import { Link } from "react-router-dom";

import ErrorAnim from "../../assets/animations/404_page.json";
import ErrorAnimMobile from "../../assets/animations/404-mobile-anim.json";
import Animation from "../../components/Animation";

const ErrorPage404 = () => {
  return (
    <>
      {window.innerWidth < 760 ? (
        <>
          <br />
          <h3 className="text-center">Page Not Found</h3>
          <Link to="/">
            <div>
              <Animation animation={ErrorAnimMobile} height="400" />
            </div>
          </Link>
        </>
      ) : (
        <>
          <Link to="/">
            <div style={{ height: "100vh" }}>
              <Animation animation={ErrorAnim} />
            </div>
          </Link>
        </>
      )}
    </>
  );
};

export default ErrorPage404;
