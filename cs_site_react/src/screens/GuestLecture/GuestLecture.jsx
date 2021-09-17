import React from 'react'
import { guestLectureData } from './Data'

const GuestLecture = () => {


    return (
        <div>
            <div className="container">
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
            </div>
        </div>
    )
}

export default GuestLecture
