import React from "react";
import { researchPublicationData } from "./Data";
import { Table } from "react-bootstrap";

const ResearchPublication = () => {
  return (
    <div>
      <div className="container">
        <br />
        <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
          Publications{" "}
        </h2>

        {researchPublicationData.map((obj, i) => (
          <div>

            <br />
            <Table bordered responsive="md" hover>
              <thead>
                <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Faculty Name</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Scopus</th>
                    <th scope="col">Orchid</th>
                    <th scope="col">Publons</th>
                </tr>
              </thead>
              <tbody>
                {obj["data"].map((obj, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{obj["facultyName"]}</td>
                    <td>{obj["designation"]}</td>
                    <td><img src="" alt="1" /></td>
                    <td><img src="" alt="2" /></td>
                    <td><img src="" alt="3" /></td>
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

export default ResearchPublication;