import React from "react";
import { researchProjectData } from "./Data";
import { Table } from "react-bootstrap";

const ResearchProjects = () => {
  return (
    <div>
      <div className="container">
        <div>
          <h2 className="page_heading"> Research Projects</h2>
          <div className="underline_heading"></div>
        </div>

        {researchProjectData.map((obj, i) => (
          <div>

            <br />
            <Table bordered responsive="md" hover>
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Academic Year</th>
                  <th scope="col">Reference Number</th>
                  <th scope="col">Principle Investigator</th>
                  <th scope="col">Co-Principle Investigator</th>
                  <th scope="col">Title</th>
                  <th scope="col">Agency</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {obj["data"].map((obj, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{obj["AcademicYear"]}</td>
                    <td>{obj["ReferenceNumber"]}</td>
                    <td>{obj["PrincipleInvestigator"]}</td>
                    <td>{obj["CoPrincipleInvestigator"]}</td>
                    <td>{obj["Title"]}</td>
                    <td>{obj["Agency"]}</td>
                    <td>{obj["Amount"]}</td>
                    <td>{obj["Status"]}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Table bordered responsive="md">
              <tbody>
                <td>Total Amount</td>
                <td>Rs. 3,12,02,950/-</td>
              </tbody>
            </Table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchProjects;
