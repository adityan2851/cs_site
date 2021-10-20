import React from "react";
import { industrialVisitData } from "./Data";
import { Table } from "react-bootstrap";

const IndustrialVisit = () => {
  return (
    <div>
      <div className="container">
        <div>
          <h1 className="page_heading">Industrial Visits</h1>
          <div className="underline_heading"></div>
        </div>

        {industrialVisitData.map((obj, i) => (
          <div>
            <h2 style={{ textAlign: "center" }}>Academic year: 2018 – 2019</h2>

            <br />
            <Table bordered responsive="md" hover>
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
                    <td>{index + 1}</td>
                    <td>{obj["class"]}</td>
                    <td>{obj["industry"]}</td>
                    <td>{obj["date"]}</td>
                    <td>{obj["noStudents"]}</td>
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

export default IndustrialVisit;
