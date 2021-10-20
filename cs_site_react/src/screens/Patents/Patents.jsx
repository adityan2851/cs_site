import React from "react";
import { PatentsData } from "./Data";
import { Table } from "react-bootstrap";

const Patents = () => {
  return (
    <div>
      <div className="container">
      <div>
        <h2 className="page_heading">Patents</h2>
        <div className="underline_heading"></div>
      </div>
        {PatentsData.map((obj, i) => (
          <div>
            <br />

            <Table bordered responsive="md" hover>
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Year</th>
                  <th scope="col">CBR Number</th>
                  <th scope="col">Application Number</th>
                  <th scope="col">Faculty Name</th>
                  <th scope="col">Title</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {obj["data"].map((entry, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{entry["year"]}</td>
                    <td>{entry["cbrnumber"]}</td>
                    <td>{entry["appnumber"]}</td>
                    {console.log(entry["faculty"], "world")}
                    <td>{entry["faculty"].map((name,j) => (
                        <span>{name}<br/></span>
                    ))}</td>
                    <td>{entry["title"]}</td>
                    <td>{entry["status"]}</td>
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

export default Patents;
