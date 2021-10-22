import React from "react";
import { mentorData } from "./Data";
import { Table } from "react-bootstrap";

const Mentors = () => {
  return (
    <div>
      <div className="container">
      <div>
        <h2 className="page_heading">Faculty Mentors</h2>
        <div className="underline_heading"></div>
      </div>
        {mentorData.slice(0,mentorData.length-1).map((obj, i) => (
          <div>
            <br />
            <h4>Chair person : {obj['chairPerson']}</h4>

            <Table bordered responsive="md" hover className="mb-5">
              <thead>
                <tr className="text-center" >
                  <th scope="col">S.No</th>
                  <th scope="col">Staff Members</th>
                  <th scope="col">Designation</th>
                  <th scope="col">Year</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                  <td>1</td>
                    <td>{obj['staff'][0]['name']}</td>
                    <td>{obj['staff'][0]['designation']}</td>
                    <td rowspan={obj['staff'].length +1} className="text-center p-auto" style ={{verticalAlign : "middle"}}>{obj['batch']}</td>
                  </tr>
                  
                {obj["staff"].slice(1).map((entry, index) => (
                  <tr>
                    <td>{index + 2}</td>
                    <td>{entry['name']}</td>
                    <td>{entry['designation']}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ))}
        <Table bordered responsive="md" hover>
             <thead>
               <tr className="text-center">
                 <th scope="col">S.No</th>
                 <th scope="col">Staff Members</th>
                 <th scope="col">Designation</th>
                 <th scope="col">Heads</th>
               </tr>
             </thead>
             <tbody>
                 
               {mentorData[mentorData.length -1]['staff'].map((entry, index) => (
                 <tr>
                   <td>{index + 2}</td>
                   <td>{entry['name']}</td>
                   <td>{entry['designation']}</td>
                   <td className="text-center">{entry['head']}</td>
                 </tr>
               ))}
             </tbody>
           </Table>
      </div>
    </div>
  );
};

export default Mentors;
