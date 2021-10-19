// import react from "react";
// import pdf from '../assets/pdfs/angel.pdf'

const FacultyCard = ({ year, pdfLink }) => {
  return (
    <div class="card mb-4 Box shadow">
      <div class="card-body text-center  ">
        <ul class="list-unstyled max-width-200 mx-auto">
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

        <a href={pdfLink} target="_blank">
          <button class="css-button-rounded--blue">View Details</button>
        </a>
      </div>
    </div>
  );
};

export default FacultyCard;
