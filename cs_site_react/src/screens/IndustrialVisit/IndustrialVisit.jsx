import React from "react";
import { industrialVisitData } from "./Data";

const IndustrialVisit = () => {
  return (
    <div>
      <div className="container">
        <br />
        <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
          INDUSTRIAL VISITS{" "}
        </h2>

        {industrialVisitData.map((obj, i) => (
          <div>
            <h2 style={{ textAlign: "center" }}>Academic year: 2018 – 2019</h2>

            <br />
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Class</th>
                  <th scope="col">Industry Visited</th>
                  <th scope="col">Date</th>
                  <th scope="col">No of Students Attended</th>
                </tr>
              </thead>
              <tbody>
                {obj["data"].map((obj, index) => (
                  <tr>
                    <td scope="row">{index + 1}</td>
                    <td>{obj["class"]}</td>
                    <td>{obj["industry"]}</td>
                    <td>{obj["date"]}</td>
                    <td>{obj["noStudents"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustrialVisit;
