import React from "react";
import "./Dev.css";
import {IoLogoFacebook, IoLogoLinkedin, IoLogoGithub} from "react-icons/io5";
// import hi from "../../assets/DevAssets/amonth-img.png"
import ai from "../../assets/DevAssets/meow.jpg"

const DevCard = () => {
    return (        
        <div id="curve" class="dev-card">            
                <img className="img-over" src={ai} alt="color" />
        <div class="dev-footer">
            <div class="connections">
                <div class="connection  facebook"><div class="icon"> <IoLogoFacebook  size="25" style={{color:"#4267B2"}}/> </div></div>
                <div class="connection  twitter"><div class="icon"> <IoLogoLinkedin size="20" style={{color:"#0077b5"}}/> </div></div>
                <div class="connection  behance"><div class="icon"> <IoLogoGithub size="25" style={{color:"black"}}/> </div></div>
            </div>
            <svg id="curve">
                <path id="p" d="M0,200 Q80,100 400,200 V150 H0 V50" transform="translate(0 300)" />
                <rect id="dummyRect" x="0" y="0" height="450" width="400"
            fill="transparent" />
                
                <animate xlinkHref="#p" attributeName   ="d" to="M0,50 Q80,100 400,50 V150 H0 V50" fill="freeze" begin="dummyRect.mouseover" end="dummyRect.mouseout" dur="0.1s" id="bounce1" />
                
                <animate xlinkHref="#p" attributeName="d" to="M0,50 Q80,0 400,50 V150 H0 V50" fill="freeze" begin="bounce1.end" end="dummyRect.mouseout" dur="0.15s" id="bounce2" />
                
                <animate xlinkHref="#p" attributeName="d" to="M0,50 Q80,80 400,50 V150 H0 V50" fill="freeze" begin="bounce2.end" end="dummyRect.mouseout" dur="0.15s" id="bounce3" />
                
                <animate xlinkHref="#p" attributeName="d" to="M0,50 Q80,45 400,50 V150 H0 V50" fill="freeze" begin="bounce3.end" end="dummyRect.mouseout" dur="0.1s" id="bounce4" />
                
                <animate xlinkHref="#p" attributeName="d" to="M0,50 Q80,50 400,50 V150 H0 V50" fill="freeze" begin="bounce4.end" end="dummyRect.mouseout" dur="0.05s" id="bounce5" />

                <animate xlinkHref="#p" attributeName="d" to="M0,200 Q80,100 400,200 V150 H0 V50" fill="freeze" begin="dummyRect.mouseout" dur="0.15s" id="bounceOut" />
            </svg>
            <div class="info">
                <div class="name">Filan Fisteku</div>
                <div class="job">Architect Manager</div>
            </div>
        </div>
        <div class="card-blur"></div>
    </div>
    );
};

export default DevCard;
