import React from "react";
import { researchScholarsData } from "./Data";
import { Table } from "react-bootstrap";

const ResearchScholars = () => {
  return (
    <div>
      <div className="container">
      <div>
          <h2 className="page_heading">Scholars</h2>
          <div className="underline_heading"></div>
        </div>

        {researchScholarsData.map((obj, i) => (
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

export default ResearchScholars;
