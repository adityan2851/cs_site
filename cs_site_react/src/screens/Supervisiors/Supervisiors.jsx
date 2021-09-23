import React from "react";
import { supervisorData } from "./Data";
import { Table } from "react-bootstrap";

const Supervisiors = () => {
  return (
    <div>
      <div className="container">
        <br />
        <h2 style={{ textAlign: "center", fontWeight: "bold" }}>Supervisors</h2>

        {supervisorData.map((obj, i) => (
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
                    <td>{obj["name"]}</td>
                    <td>{obj["refno"]}</td>
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

export default Supervisiors;