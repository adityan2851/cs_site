
import { Accordion, Card } from "react-bootstrap";

const AlumniCard = ({image, designation, year, place, pg, alumniName, testimonial}) => {
    return (
        <div class="card mb-4 Box shadow">
          <div class="card-body text-center">
            <ul class="list-unstyled max-width-200 mx-auto">

                <h4 className="alumni-name">{alumniName}</h4>
                <b><p className = "staff-name">{year}</p></b>
                {/* <img src="" alt="profile" className = "card-img-top contributor-img"/> */}
              <img alt="profile" class="card-img-top contributor-img" src={image} />
              {/* <div className = "accordion accordion-flush" ></div> */}
              {(pg) && (<Accordion defaultActiveKey = "1" flush>
                  <Card>
                      <Accordion.Toggle as = {Card.Header} eventKey = "0"> PG Details </Accordion.Toggle>
                      <Accordion.Collapse eventKey = "0"> 
                      <Card.Body> 
                          <span>{pg['course']} <br/>
                          {pg['university']} <br/>
                          {pg['year']}
                              </span>
                              </Card.Body></Accordion.Collapse>
                  </Card>
                </Accordion>) }
              
                

    
              <li style={{ marginTop: "20px" }}>
                <b>
                  <span class="alumni-designation">{designation}</span>{" "}
                </b>
                <p style={{ opacity: "80%" }}>
                  {" "}
                  {place}
                </p>
              </li>
            </ul>
    
           
          </div>
        </div>
      );
};

export default AlumniCard;