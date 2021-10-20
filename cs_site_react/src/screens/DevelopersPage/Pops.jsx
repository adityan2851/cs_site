import React from "react";
import "./Pops.css";
import fi from "../../assets/images/developers/fanion-img.png";
import ai from "../../assets/images/developers/adi-img.png";
import gi from "../../assets/images/developers/goblin-img.png";
import hi from "../../assets/images/developers/amonth-img.png";
import si from "../../assets/images/developers/sharmi-img.png";
import ri from "../../assets/images/developers/roshan-img.png";

const Pops = () => {
  return (
    <>
    <div>
        <h2 className="page_heading">Developer Team</h2>
        <div className="underline_heading"></div>
      </div>
      <div className="body">
        <div class="wrapper">
          <a
            class="linkedin"
            href="https://www.linkedin.com/in/fabchris10/"
            target="_blank"
            rel="noreferrer"
          >
            <div class="dev-card">
              <img alt="meow" src={fi}></img>
              <div class="info">
                <h2>Fabian Christopher</h2>
              </div>
            </div>
          </a>

          <a
            class="linkedin"
            href="https://www.linkedin.com/in/sharmila-s22/"
            target="_blank"
            rel="noreferrer"
          >
            <div class="dev-card">
              <img alt="meow" src={si}></img>
              <div class="info">
                <h2>Sharmila S</h2>
              </div>
            </div>
          </a>
          <a
            class="linkedin"
            href="https://www.linkedin.com/in/adityan-b-6b2a35183/"
            target="_blank"
            rel="noreferrer"
          >
            <div class="dev-card">
              <img alt="meow" src={ai}></img>
              <div class="info">
                <h2>Adityan B</h2>
              </div>
            </div>
          </a>
          <a
            class="linkedin"
            href="https://www.linkedin.com/in/godlin-hilda/"
            target="_blank"
            rel="noreferrer"
          >
            <div class="dev-card">
              <img alt="meow" src={gi}></img>
              <div class="info">
                <h2>Godlin Hilda J</h2>
              </div>
            </div>
          </a>
          <a
            class="linkedin"
            href="https://www.linkedin.com/in/jenisha-roshan/"
            target="_blank"
            rel="noreferrer"
          >
            <div class="dev-card">
              <img alt="meow" src={ri}></img>
              <div class="info">
                <h2>Jenisha Roshan</h2>
              </div>
            </div>
          </a>
          <a
            class="linkedin"
            href="https://www.linkedin.com/in/hemanthhari2000/"
            target="_blank"
            rel="noreferrer"
          >
            <div class="dev-card">
              <img alt="meow" src={hi}></img>
              <div class="info">
                <h2>Hemanth Kumar</h2>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Pops;
