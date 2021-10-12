import { useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";

import {AchievementsData} from "./data";

const AchievementsCard = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div class="achievements-card" data-toggle="modal" data-target="#exampleModalCenter" onClick={handleShow}>
                <img src="https://www.w3schools.com/howto/img_avatar.png" />
                <div class="info">
                    <h1>Ideathon 2018</h1>
                    <p>Tencor – Advertisement using Facial Recognition</p>
                    <button>Read More</button>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} dialogClassName="modal-90w" size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table bordered responsive="md" hover>
                        <thead>
                            <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Faculty Name</th>
                            <th scope="col">Supervisor Name</th>
                            <th scope="col">University Name</th>
                            <th scope="col">Awarded Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {AchievementsData.map((entry, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{entry.title}</td>
                                <td>{entry.title}</td>
                                <td>{entry.title}</td>
                                <td>{entry.title}</td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AchievementsCard;