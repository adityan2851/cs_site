import DevCard from "../DevelopersPage/DevCard";
import devDetails from "./data";

const DevWrapper = () => {
  return (
    <div class="container my-5">
      <div>
        <h1 className="page_heading">Developers</h1>
        <div className="underline_heading"></div>
      </div>
      {devDetails.map((devRow, index) => {
        return (
          <div key={index} class="row">

            {devRow.map(({ image, devName, linkedinLink }, index) => {
              return (
                <div className="col-md-4">
                  <DevCard
                    key={index}
                    image={image}
                    devName={devName}
                    linkedinLink={linkedinLink}
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
export default DevWrapper;
