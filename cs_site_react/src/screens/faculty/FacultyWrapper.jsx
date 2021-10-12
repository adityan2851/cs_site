import FacultyCard from "./FacultyCard";
import facultyDetails from "./data";

const FacultyWrapper = () => {
  return (
    <div class="container my-5">
      {facultyDetails.map((facultyRow, index) => {
        return (
          <div key={index} class="row">

            {facultyRow.map(({ image, facultyName, education, designation, pdfLink }, index) => {
              return (
                <div className="col-md-4">
                  <FacultyCard
                    key={index}
                    image={image}
                    name={facultyName}
                    education={education}
                    designation={designation}
                    pdfLink={pdfLink}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default FacultyWrapper;
