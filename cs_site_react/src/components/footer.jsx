import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="row m-auto p-5">
                <div className="col-4">
                    <span className="fw-bold"> ABOUT</span>
                    <span className="d-block mt-3 details"> Faculty</span>
                    <span className="d-block details"> Mentor</span>
                    <span className="d-block details"> Student Welfare Committee</span>
                </div>
                <div className="col-4">
                    <span className="fw-bold"> RESOURCES</span>
                    <span className="d-block mt-3 details">News letter</span>
                    <span className="d-block details">Magazine</span>
                    <span className="d-block details">IEEE & CSI</span>
                </div>
                <div className="col-4">
                    <span className="fw-bold"> CONTACT INFORMATION</span>
                    <div className="row mt-3">
                        <div className="col-1">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="col-11">
                            <span className=""> St. Joseph's College Of Engineering<br /> OMR <br />Chennai</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            <i className="fas fa-phone"></i>
                        </div>
                        <div className="col-11">
                            <span className=""> +91-44-24500792</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="col-11">
                            <span className=""> cse@stjosephs.ac.in</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row p-4 copyright">
                <div className="text-center ">
                    <i className="far fa-copyright"></i>
                    <span> 2021 All rights reserved by St. Joseph's College Of Engineering</span>
                    <span className="d-block mt-2 credits"> Maintained by the Department of Computer Science and Engineering</span>
                </div>
            </div>
        </div>
    )
}

export default Footer