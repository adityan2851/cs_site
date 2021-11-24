import React from "react";
import { Link } from "react-router-dom";
// import pdf from '../assets/pdfs/angel.pdf'

const PlacementCard = ({ year, pdfLink }) => {
  return (
    <div class="card mb-4 Box shadow">
      <div class="card-body text-center  ">
        <ul class="list-unstyled display-block mx-auto">
          {/* <img alt="profile" class="card-img-top placement-card-image"
          src=""/> */}

          <li style={{ marginTop: "20px" }}>
            <b>
              <span class="staff-name">Placements</span>{" "}
            </b>
            <br />
            <span class="role" style={{ fontWeight: "bold" }}>
              {year}
            </span>
          </li>
        </ul>

        {/* <a href={pdfLink} target="_blank" rel="noreferrer">
          <button class="css-button-rounded--blue">View Details</button>
        </a> */}
        <Link
          to={pdfLink}
          className="css-button-rounded--blue"
          style={{ textDecoration: "none", fontWeight: "normal" }}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PlacementCard;
