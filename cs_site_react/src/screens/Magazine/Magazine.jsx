import React from "react";
import "./Magazine.css";

import magazinePdf from "./Magazine.pdf"

const Magazine = () => {
  return (
    <div className="container pt-5">
      <div>
        <h1 className="page_heading">Magazine</h1>
        <div className="underline_heading"></div>
      </div>

      <div className="d-flex justify-content-center align-items-center flex-wrap">
        <ul className="list-unstyled max-width-200 mx-auto">
          <div className="cards__item">
            <a href={magazinePdf} target="_blank">
              <div className="book">
                <img src='https://stjosephs.ac.in/images/INFORMATION%20BROCHURE%202019.jpg' />
              </div>
            </a>
          </div>
        </ul>
      </div> {/* flex */}
    </div>
  );
};

export default Magazine;
