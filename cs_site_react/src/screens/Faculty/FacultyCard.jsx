// import react from "react";
// import pdf from "../assets/pdfs/angel.pdf";

const FacultyCard = ({ image, name, education, designation, pdfLink }) => {
  return (
    <div class="card mb-4 Box shadow">
      <div class="card-body text-center">
        <ul class="list-unstyled max-width-200 mx-auto">
          <img
            alt="profile"
            class="card-img-top contributor-img faculty-profile"
            src={image}
          />

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

        <a href={pdfLink} target="_blank">
          <button class="css-button-rounded--blue"> View Profile</button>
        </a>
      </div>
    </div>
  );
};

export default FacultyCard;
