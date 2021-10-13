import FacultyCard from "./FacultCard";
import PlacementsData from "./Data";

const Placements = () => {
  return (
    <div class="row m-4">
      <h1 className="m-4"> Placements Details</h1>
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
  );
};
export default Placements;
