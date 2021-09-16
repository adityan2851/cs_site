import React from 'react'
import background from "../images/Footer.svg"
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
    return (
        <div className="footer d-flex container-fluid" style={{ backgroundImage: `url(${background})` }}>
            <div className="row mt-3 pt-5 footer-contents">
                <div className="col-3">
                    <span className="fw-bold"> ABOUT</span>
                    <span className="d-block mt-3 mb-2 details"> Faculty</span>
                    <span className="d-block mb-2 details"> Mentor</span>
                    <span className="d-block mb-2 details"> Student Welfare Committee</span>
                </div>
                <div className="col-3">
                    <span className="fw-bold"> RESOURCES</span>
                    <span className="d-block mt-3 mb-2 details">News letter</span>
                    <span className="d-block mb-2 details">Magazine</span>
                    <span className="d-block mb-2 details">IEEE & CSI</span>
                </div>
                <div className="col-4">
                    <span className="fw-bold"> CONTACT INFORMATION</span>
                    <div className="row mt-3 mb-2">
                        <div className="col-1">
                            <i className="fa fa-map-marker"></i>
                        </div>
                        <div className="col-11">
                            <span className=""> St. Joseph's College Of Engineering<br /> OMR Chennai</span>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-1">
                            <i className="fa fa-phone"></i>
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
                    <span> 2021 All rights reserved by St. Joseph's College Of Engineering</span>
                    <span className="d-block mt-2 credits"> Maintained by the Department of Computer Science and Engineering</span>
                </div>
            </div>

        </div>
    )
}

export default Footer