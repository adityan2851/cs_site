import React from "react";
import "./DevCard";
import DevCard from "./DevCard";
import {IoLogoFacebook, IoLogoLinkedin, IoLogoGithub} from "react-icons/io5";
import hi from "../../assets/DevAssets/meow.jpg"
import "./Dev.css";

function Dev() {
    return (
        <div>
        <h2 className="page_heading">Developer Team</h2>
        <div className="dev-body">            
            <DevCard className="devo-cards class-1"></DevCard>
            <DevCard className="devo-cards class-2"></DevCard>
            <DevCard className="devo-cards class-3"></DevCard>
            <DevCard className="devo-cards class-4"></DevCard>
            <DevCard className="devo-cards class-5"></DevCard>
            <DevCard className="devo-cards class-6"></DevCard>
        </div>
        </div>
    );
  }
  
  export default Dev;