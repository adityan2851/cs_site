import React from "react";
import { Container, Table } from "react-bootstrap";
import { laboratoryData } from "./Data";

const Laboratory = () => {
  return (
    <div>
      <br />
      <h1 style={{ textAlign: "center" }}>Laboratory</h1>

      {laboratoryData.map((labdata, i) => (
        <div>
          <Container md>
            <h2 style={{ fontWeight: "bolder" }}>{labdata["labName"]}</h2>
            <br />
            {labdata["labData"].map((obj, i) => (
              <div>
                <h4 style={{ fontWeight: "bold", textAlign: "center" }}>
                  {obj["name"]}
                </h4>
                <Table bordered responsive="md" hover>
                  <thead>
                    <tr>
                      <th scope="col">Computer with Configuration</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {obj["data"].map((data, i) => (
                      <tr>
                        <td>
                          <strong>{data["cwc"][0]}</strong>
                          <br />
                          {data["cwc"][1]}
                        </td>
                        <td>{data["quantity"]}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            ))}
          </Container>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Laboratory;
