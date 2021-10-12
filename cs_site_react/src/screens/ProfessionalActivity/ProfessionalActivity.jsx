import React from "react";
import { Container, Table } from "react-bootstrap";
import { professionalActivityData } from "./Data";

const ProfessionalActivity = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Professional Activity</h1>

      {professionalActivityData.map((obj, i) => (
        <div>
          <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
            {obj["year"]}
          </h2>
          <br />
          <Container>
            <Table bordered responsive="md" hover>
              <thead>
                <tr>
                  <th scope="col">Professional Society</th>
                  <th scope="col">Event Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Participants</th>
                  <th scope="col">Guest Name and Designation</th>
                </tr>
              </thead>
              <tbody>
                {obj["data"].map((data, i) => (
                  <tr>
                    <td>{data["society"]}</td>
                    <td>{data["name"]}</td>
                    <td>{data["date"]}</td>
                    <td>{data["participants"]}</td>
                    <td>{data["guestName"]}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalActivity;
