import React from "react";
import { researchSupervisorData } from "./Data";
import { Table } from "react-bootstrap";

const Supervisors = () => {
  return (
    <div>
      <div className="container">
        <div>
          <h2 className="page_heading">Supervisors</h2>
          <div className="underline_heading"></div>
        </div>

        {researchSupervisorData.map((obj, i) => (
          <div>

            <br />
            <Table bordered responsive="md" hover>
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Supervisor Name</th>
                  <th scope="col">Reference Number</th>
                  <th scope="col">Research Area</th>
                </tr>
              </thead>
              <tbody>
                {obj["data"].map((obj, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{obj["supervisorName"]}</td>
                    <td>{obj["referenceNo"]}</td>
                    <td>{obj["researchArea"]}</td>
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

export default Supervisors;
