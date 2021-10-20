import React from "react";
import { researchPhDData } from "./Data";
import { Table } from "react-bootstrap";

const PhDAwarded = () => {
  return (
    <div>
      <div className="container">
      <div>
          <h2 className="page_heading">Ph. D. Awarded</h2>
          <div className="underline_heading"></div>
        </div>


        {researchPhDData.map((obj, i) => (
          <div>

            <br />
            <Table bordered responsive="md" hover>
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Faculty Name</th>
                  <th scope="col">Supervisor Name</th>
                  <th scope="col">University Name</th>
                  <th scope="col">Awarded Year</th>
                </tr>
              </thead>
              <tbody>
                {obj["data"].map((obj, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{obj["FacultyName"]}</td>
                    <td>{obj["SuperVisor"]}</td>
                    <td>{obj["UniversityName"]}</td>
                    <td>{obj["AwardedYear"]}</td>
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

export default PhDAwarded;
