// import react from "react";
// import pdf from "../assets/pdfs/angel.pdf";
import "./Faculty.css";

const FacultyCard = ({ image, name, education, designation, pdfLink }) => {
  return (
    <div class="card mb-4 Box shadow">
      <div class="over">
      <div class="card-body text-center">
        <ul class="list-unstyled display-block mx-auto">
        <div class="layer"></div>
          <div>
          <img alt="profile" class="contributor-img faculty-image" src={image}/>
          </div>
          <li style={{ marginTop: "20px" }}>
            <b>
              <span class="staff-name">{name}</span>{" "}
            </b>
            <p style={{ opacity: "80%" }}>
              {" "}
              {education} <br /> <span class="role">{designation}</span>
            </p>
          </li>
        </ul>

        <a href={pdfLink} target="_blank" rel="noreferrer">
          <button class="css-button-rounded--blue"> View Profile</button>
        </a>
        {/* <Link
          to={pdfLink}
          className="css-button-rounded--blue"
          style={{ textDecoration: "none", fontWeight: "normal" }}
        >
          View Profile
        </Link> */}
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
