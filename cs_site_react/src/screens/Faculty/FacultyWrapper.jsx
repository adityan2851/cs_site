import FacultyCard from "../../screens/Faculty/FacultyCard";
import facultyDetails from "./data";

const FacultyWrapper = () => {
  return (
    <div class="container my-5">
      <div>
        <h1 className="page_heading">Faculty</h1>
        <div className="underline_heading"></div>
      </div>
      {facultyDetails.map((facultyRow, index) => {
        return (
          <div key={index} class="row">
            {facultyRow.map(
              (
                { image, facultyName, education, designation, pdfLink },
                index
              ) => {
                return (
                  <div className="col-md-4">
                    <FacultyCard
                      key={index}
                      image={image}
                      name={facultyName}
                      education={education}
                      designation={designation}
                      pdfLink={pdfLink}
                      count={index}
                    />
                  </div>
                );
              }
            )}
          </div>
        );
      })}
    </div>
  );
};
export default FacultyWrapper;
