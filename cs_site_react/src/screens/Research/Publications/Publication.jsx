import React from "react";
import { researchPublicationData } from "./Data";
import { Table } from "react-bootstrap";

import scopus from "../../../assets/images/publications/scopus.png";
import publons from "../../../assets/images/publications/publons.png";
import orcid from "../../../assets/images/publications/orcid.png";

const ResearchPublication = () => {
  return (
    <div>
      <div className="container">
      <div>
          <h2 className="page_heading">Publications</h2>
          <div className="underline_heading"></div>
        </div>

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

                    {/* <td><img src="" alt="1" /></td> */}
                    {/* <td>
                      <img src="" alt="2" />
                    </td>
                    <td>
                      <img src="" alt="3" />
                    </td> */}
                    <td>
                      <a
                        href={obj["publicationLink"][0]}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={scopus} alt="Scopus" width="80px"></img>
                      </a>
                    </td>
                    <td>
                      <a
                        href={obj["publicationLink"][1]}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={orcid} alt="orcid" width="35px" />
                      </a>
                    </td>
                    <td>
                      <a
                        href={obj["publicationLink"][2]}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={publons} alt="publons" width="35px" />
                      </a>
                    </td>
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
