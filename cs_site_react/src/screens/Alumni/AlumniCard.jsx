import { Accordion, Card } from "react-bootstrap";
import "./Alumni.css";


const AlumniCard = ({
  image,
  designation,
  year,
  place,
  pg,
  alumniName,
  testimonial,
}) => {
  return (
    <div class="card mb-4 Box shadow">      
      <div class="over">
      <div class="card-body text-center">      
        <ul class="list-unstyled display-block mx-auto">
          <h4 className="alumni-name">{alumniName}</h4>
          <b>
            <p className="staff-name" >{year}</p>
          </b>
          <div class="layer"></div>
          <div> 
            {/* <img src="" alt="profile" className = "card-img-top contributor-img"/> */}          
            <img alt="profile" class="contributor-img alumini-image" src={image}/>          
            {/* <div className = "accordion accordion-flush" ></div> */}
          </div> 
          {pg && (
            <Accordion
              className="accordion-dropdown"
              defaultActiveKey="1"
              flush
            >
              <Card className="accordion-card">
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  {" "}
                  PG Details{" "}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <span>
                      {pg["course"]} <br />
                      {pg["university"]} <br />
                      {pg["year"]}
                    </span>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          )}

          <li style={{ marginTop: "20px" }}>
            <b>
              <span class="alumni-designation">{designation}</span>{" "}
            </b>
            <p style={{ opacity: "80%" }}> {place}</p>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default AlumniCard;
