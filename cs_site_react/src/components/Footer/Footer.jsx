import React from "react";
// import background from "../images/Footer.svg";
import background from "../../assets/images/footer.svg";
import { useState, useEffect } from "react";
import { Collapse } from "react-bootstrap";

import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  // var open = true;
  const [openAbout, setAbout] = useState(true);
  const [openResources, setResources] = useState(true);
  const [dropDownStyle, setDropDownStyle] = useState({ display: "block" });

  useEffect(() => {
    if (window.innerWidth < 600) {
      setAbout(!openAbout);
      setResources(!openResources);
      setDropDownStyle({ display: "none" });
    }
  }, []);

  return (
    <div className="booter-wrapper">
      <div className="mt-5">
        <img
          className="waves waveStyle"
          src={background}
          alt="waves"
          // style={dropDownStyle}
        />
        <div className="footer d-flex container-fluid">
          <div className="row pt-5 footer-contents">
            <div className="col-md-3">
              <button
                className="footer-about"
                onClick={() => {
                  setAbout(!openAbout);
                }}
                aria-controls="example-collapse-text"
                aria-expanded={openAbout}
              >
                <span className="fw-bold"> ABOUT</span>
                {/* <i
              class="fa fa-caret-down dropdown"
              style={dropDownStyle}
              aria-hidden="true"
            ></i> */}
              </button>
              <Collapse in={openAbout}>
                <ul className="footer-list">
                  {/* <li className="d-block mt-3 mb-2 details"> Faculty</li> */}
                  {/* <li className="d-block mb-2 details"> Mentor</li> */}
                  {/* <li className="d-block mb-2 details">
                    Student Welfare Committee
                  </li> */}
                  <li className="d-block mt-3 mb-2 details">
                    <Link href="/faculty">Faculty</Link>{" "}
                  </li>
                  <li className="d-block mb-2 details">
                    {" "}
                    <Link href="/mentors">Mentor</Link>
                  </li>
                  <li className="d-block mb-2 details">
                    <Link href="/student-welfare">
                      Student Welfare Committee
                    </Link>
                  </li>
                </ul>
              </Collapse>
            </div>
            <div className="col-md-3">
              <button
                className="footer-about"
                onClick={() => {
                  console.log(window.innerWidth);
                  console.log(openResources);
                  setResources(!openResources);
                }}
                aria-controls="example-collapse-text"
                aria-expanded={openResources}
              >
                <span className="fw-bold"> RESOURCES </span>
                {/* <i
              class="fa fa-caret-down dropdown"
              style={dropDownStyle}
              aria-hidden="true"
            ></i> */}
              </button>
              <Collapse in={openResources}>
                <ul className="footer-list">
                  {/* <li className="d-block mt-3 mb-2 details"> News Letter</li>
                  <li className="d-block mb-2 details"> Magazine</li>
                  <li className="d-block mb-2 details"> IEEE & CSI</li> */}
                  <li className="d-block mt-3 mb-2 details">
                    {" "}
                    <a href="/newsletter">News Letter</a>
                  </li>
                  <li className="d-block mb-2 details">
                    {" "}
                    <a href="/magazine">Magazine</a>
                  </li>
                  <li className="d-block mb-2 details">
                    {" "}
                    <a href="/professional-activity">IEEE &amp; CSI</a>
                  </li>
                </ul>
              </Collapse>
            </div>
            <div className="col-md-3">
              <span className="fw-bold"> CONTACT INFORMATION</span>
              <div className="row mt-3 mb-2">
                <div className="col-1">
                  <i className="fa fa-map-marker" style={dropDownStyle}></i>
                </div>
                <div className="col-11">
                  <span className="">
                    {" "}
                    St. Joseph's College Of Engineering
                    <br /> OMR Chennai
                  </span>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-1">
                  <i className="fa fa-phone" style={dropDownStyle}></i>
                </div>
                <div className="col-11">
                  <span className=""> +91-44-24500792</span>
                </div>
              </div>
              <div className="row">
                <div className="col-1">
                  <i className="fa fa-envelope" style={dropDownStyle}></i>
                </div>
                <div className="col-11">
                  <span className=""> cse@stjosephs.ac.in</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-3 copyright">
            <div className="text-center">
              <i className="fa fa-copyright"></i>
              <span>
                {" "}
                2021 All rights reserved by St. Joseph's College Of Engineering
              </span>
              <span className="d-block mt-2 credits">
                {" "}
                Maintained by the Department of Computer Science and Engineering
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
