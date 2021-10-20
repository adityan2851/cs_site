import React from "react";
import { studentWelfareDate } from "./Data";
import { Table } from "react-bootstrap";

const StudentWelfare = () => {
  return (
    <div>
      <div className="container">
        <br />
        <h2 style={{ textAlign: "center", fontWeight: "bold" }}>Patents</h2>

        {studentWelfareDate.map((obj, i) => (
          <div>
            <br />

            <Table bordered responsive="md" hover>
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Category</th>
                  <th scope="col">Staff Members</th>
                  
                </tr>
              </thead>
              <tbody>
                {obj["data"].map((entry, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{entry["category"]}</td>
                    <td>{entry["staff"].map((name,j) => (
                        <span>{name}<br/></span>
                    ))}</td>
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

export default StudentWelfare;
