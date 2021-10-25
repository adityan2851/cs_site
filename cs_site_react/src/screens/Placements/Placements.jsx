import FacultyCard from "./components/FacultCard";
import { PlacementsData } from "./Data";
import Chart from "./components/Chart/Chart";

const Placements = () => {
  return (
    <>
      <div className="row m-4">
        <div className="text-center">
          <h2>Student's Placed So Far</h2>
          <Chart />
        </div>
      </div>
      <div class="row m-4">
        <div>
          <h2 className="page_heading">Placement Details</h2>
          <div className="underline_heading"></div>
        </div>
        {PlacementsData.map((object, index) => {
          return (
            <div className="col-md-4">
              <FacultyCard
                // key={index}
                // image={image}
                // name={facultyName}
                // education={education}
                // designation={designation}
                // pdfLink={pdfLink}
                year={object["year"]}
                pdfLink={object["pdfLink"]}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Placements;
