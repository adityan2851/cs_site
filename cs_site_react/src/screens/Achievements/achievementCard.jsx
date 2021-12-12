import { useState } from "react";
import { Modal, Table } from "react-bootstrap";

const AchievementsCard = ({
  eventName,
  image,
  students,
  venue,
  title,
  year,
  amount,
  place,
  date,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* Card */}
      <div
        class="achievements-card"
        data-toggle="modal"
        data-target="#exampleModalCenter"
        onClick={handleShow}
      >
        <img src={image} alt="event_picture" />
        <div class="info">
          <h1>{eventName}</h1>
          <p>{title}</p>
          <button class="css-button-rounded--blue"> Read More </button>
        </div>
      </div>

      {/* Model */}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body style={{ padding: "3rem" }}>
          <Table bordered responsive="md" hover>
            <tbody>
              <tr>
                <th>Name</th>
                <td>
                  {students.map((student, index) => (
                    <p key={index}>{student}</p>
                  ))}
                </td>
              </tr>
              <tr>
                <th>Year & Dept.</th>
                <td>{year}</td>
              </tr>
              <tr>
                <th>Place Won</th>
                <td>{place}</td>
              </tr>
              <tr>
                <th>Cash Prize</th>
                <td>{amount}</td>
              </tr>
              <tr>
                <th>Venue</th>
                <td>{venue}</td>
              </tr>
              <tr>
                <th>Date</th>
                <td>{date}</td>
              </tr>
            </tbody>
          </Table>
          <button
            class="css-button-rounded--blue mt-2 float-end"
            onClick={handleClose}
          >
            {" "}
            Close{" "}
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AchievementsCard;
