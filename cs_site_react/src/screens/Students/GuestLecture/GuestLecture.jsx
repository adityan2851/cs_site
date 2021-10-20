import React from "react";
import { totalGuestLectureData } from "./Data";

import { Table } from "react-bootstrap";

const GuestLecture = () => {
  return (
    <div>
      {/* <div className="container">
            <br />
            <h2 style={{textAlign: "center", fontWeight: 'bold'}}>Guest Lectures Conducted for the Academic Year : 2013 – 2014</h2>
            <br />
            <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col">S.No</th>
                <th scope="col">Class (Year and Section)</th>
                <th scope="col">Date</th>
                <th scope="col">Name, Designation and Address</th>
                <th scope="col">Topic and Objective of the Guest Lecture</th>
                </tr>
            </thead>
            <tbody>
                {
                guestLectureData.map((obj, index)=>
                    <tr>
                        <td scope="row">{index + 1}</td>
                        <td>{obj['class']}</td>
                        <td>{obj['date']}</td>
                        <td>{obj['name']}</td>
                        <td>{obj['topic']}</td>
                    </tr>
                )
                }
            </tbody>
            </table>
            </div> */}

      <div className="container">
        <br />
        <h2 style={{ textAlign: "center", fontWeight: "bold", margin: "2rem"}}>
          Guest Lectures Conducted for the Academic Year
        </h2>
        {totalGuestLectureData.map((obj, i) => (
          <div>
            {/* <h2 style={{ textAlign: "center", fontWeight: "bold", margin: "3rem 0 2rem" }}>
              {obj["year"]}
            </h2> */}
            <div>
                <h2 className="page_heading">{obj["year"]}</h2>
                <div className="underline_heading"></div>
            </div>
            <Table bordered responsive="md" hover>
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Class (Year and Section)</th>
                  <th scope="col">Date</th>
                  <th scope="col">Name, Designation and Address</th>
                  <th scope="col">Topic and Objective of the Guest Lecture</th>
                </tr>
              </thead>
              <tbody>
                {obj["data"].map((obj, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{obj["class"]}</td>
                    <td>{obj["date"]}</td>
                    <td>{obj["name"]}</td>
                    <td>{obj["topic"]}</td>
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

export default GuestLecture;
