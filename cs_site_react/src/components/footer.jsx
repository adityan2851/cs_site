import React from "react";
// import background from "../images/Footer.svg";
import { useState, useEffect } from "react";
import { Collapse } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
const Footer = () => {
  // var open = true;
  var [openAbout, setAbout] = useState(true);
  var [openResources, setResources] = useState(true);
  const [dropDownStyle, setDropDownStyle] = useState({ display: "none" });

  useEffect(() => {
    if (window.innerWidth < 600) {
      setAbout(!openAbout);
      setResources(!openResources);
      setDropDownStyle({ display: "block" });
    }
  }, []);

  return (
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
            <i
              class="fa fa-caret-down dropdown"
              style={dropDownStyle}
              aria-hidden="true"
            ></i>
          </button>
          <Collapse in={openAbout}>
            <ul className="footer-list">
              <li className="d-block mt-3 mb-2 details"> Faculty</li>
              <li className="d-block mb-2 details"> Mentor</li>
              <li className="d-block mb-2 details">
                {" "}
                Student Welfare Committee
              </li>
            </ul>
          </Collapse>
        </div>
        <div className="col-md-3">
          <button
            className="footer-about"
            onClick={() => {
              console.log(window.innerWidth);
              setResources(!openResources);
            }}
            aria-controls="example-collapse-text"
            aria-expanded={openResources}
          >
            <span className="fw-bold"> RESOURCES</span>
            <i
              class="fa fa-caret-down dropdown"
              style={dropDownStyle}
              aria-hidden="true"
            ></i>
          </button>
          <Collapse in={openResources}>
            <ul className="footer-list">
              <li className="d-block mt-3 mb-2 details"> News Letter</li>
              <li className="d-block mb-2 details"> Magazine</li>
              <li className="d-block mb-2 details"> IEEE & CSI</li>
            </ul>
          </Collapse>
        </div>
        <div className="col-md-3">
          <span className="fw-bold"> CONTACT INFORMATION</span>
          <div className="row mt-3 mb-2">
            <div className="col-1">
              <i className="fa fa-map-marker"></i>
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
              <i className="fa fa-phone d-inline"></i>
            </div>
            <div className="col-11">
              <span className=""> +91-44-24500792</span>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <i className="fa fa-envelope"></i>
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
  );
};

export default Footer;
