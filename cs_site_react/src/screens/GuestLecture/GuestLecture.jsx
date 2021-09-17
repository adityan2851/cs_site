import React from 'react'
import { guestLectureData } from './Data'

const GuestLecture = () => {


    // const sliderContentItems = silderInfo.map((obj, index) => 
    // <Carousel.Item key={index}>
    //     <img
    //     className="d-block w-100"
    //     src={obj['imageURL']}
    //     alt="First slide"
    //     />
    //     <Carousel.Caption>
    //     <h3>{obj['heading']}</h3>
    //     <p>{obj['content']}</p>
    //     </Carousel.Caption>
    // </Carousel.Item>
// )


    return (
        <div>
            <div className="container">

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
                        <th scope="row">{index + 1}</th>
                        <td>{obj['class']}</td>
                        <td>{obj['date']}</td>
                        <td>{obj['name']}</td>
                        <td>{obj['topic']}</td>
                    </tr>
                )
                }
            </tbody>
            </table>
            </div>
        </div>
    )
}

export default GuestLecture
