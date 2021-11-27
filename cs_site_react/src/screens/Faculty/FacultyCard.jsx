// import pdf from '../assets/pdfs/angel.pdf'
import { Link } from "react-router-dom";
import PDFViewer from "../../components/PDFViewer/PDFViewer";
import "./Faculty.css";

const FacultyCard = ({
  image,
  name,
  education,
  designation,
  pdfLink,
  count,
}) => {
  return (
    <div class="card mb-4 Box shadow">
      <div class="over">
        <div class="card-body text-center">
          <ul class="list-unstyled display-block mx-auto">
            <div class="layer"></div>
            <div>
              <img
                alt="profile"
                className="faculty-image"
                src={image}
                width="200px"
                height="230px"
                style={{ objectFit: "cover" }}
              />
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

          {/* <a href={pdfLink} target="_blank" rel="noreferrer">
            <button class="css-button-rounded--blue"> View Profile</button>
          </a> */}
          <Link
            to={{
              pathname: `/faculty/fac-${count + 1}`,
              state: {
                pdfLink: pdfLink,
              },
            }}
            className="css-button-rounded--blue"
            style={{ textDecoration: "none", fontWeight: "normal" }}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
