import AlumniCard from "../../screens/Alumni/AlumniCard";
import EliteAlumniData from "./Data";

const AlumniWrapper = () => {
  return (
    <div class="container my-5">
      {EliteAlumniData.map((facultyRow, index) => {
        return (
          <div key={index} class="row">
            {facultyRow.map(
              (
                {
                  image,
                  designation,
                  year,
                  place,
                  pg,
                  alumniName,
                  testimonial,
                },
                index
              ) => {
                return (
                  <div className="col-md-4" key={index}>
                    <AlumniCard
                      image={image}
                      // name={facultyName}
                      // education={education}
                      // designation={designation}
                      // pdfLink={pdfLink}
                      // image="jjj"
                      designation={designation}
                      year={year}
                      place={place}
                      pg={pg}
                      alumniName={alumniName}
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
export default AlumniWrapper;
