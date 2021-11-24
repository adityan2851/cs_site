import { PlacementsData } from "./Data";
import Chart from "./components/Chart/Chart";
import PlacementCard from "./components/PlacementCard";

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
              <PlacementCard
                key={index}
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
