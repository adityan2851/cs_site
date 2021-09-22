import React from "react";
import { Table } from "react-bootstrap";
import { workshopData } from "./Data";

const Workshop = () => {
  return (
    <div>
      <div className="container">
        <br />
        <h2 style={{ textAlign: "center", fontWeight: "bold" }}>Workshop</h2>

        {workshopData.map((obj, i) => (
          <div>
            <br />

            <Table bordered responsive="md" hover>
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Batch</th>
                  <th scope="col">Date</th>
                  <th scope="col">Name of the Course</th>
                  <th scope="col">No of Days</th>
                  <th scope="col">No of Students</th>
                  <th scope="col">Organization</th>
                </tr>
              </thead>
              <tbody>
                {obj["data"].map((obj, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{obj["batch"]}</td>
                    <td>{obj["date"]}</td>
                    <td>{obj["name"]}</td>
                    <td>{obj["noDays"]}</td>
                    <td>{obj["noStudents"]}</td>
                    <td>{obj["organization"]}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workshop;
