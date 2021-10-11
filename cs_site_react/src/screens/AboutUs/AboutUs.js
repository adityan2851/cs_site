import React from 'react'
import './AboutUs.css'
const AboutUs = () => {

    return (
        <div>
            <h1 class="Heading">About Us</h1>
            <div class="Points">
            <ul><li>Computer Science & Engineering department was incepted in the year 2002 and Accredited by NBA since 2003.</li></ul>
            <ul><li>Having 36 professionally qualified faculty members  among that 21 of them holding doctoral degree from various reputed Universities.</li></ul>
            <ul><li>Computer Science & Engineering department offers Bachelors , Masters , Ph.D and M.S. ( by research ) which are affiliated to Anna University Chennai.</li></ul>
            <ul><li>36 Nos. of well qualified dedicated faculties among that 21 of them holding doctoral degree from various reputed Universities.</li></ul>
            <ul><li>B.E Computer Science & Engineering: full time course with 8 semesters with current annual intake of 180 students.</li></ul>
            <ul><li>M.E Computer Science & Engineering: full time course with 4 semesters with current annual intake of 18 students.</li></ul>
            <ul><li>Recognized as Research Centre by Anna University, Chennai.</li></ul>
            <ul><li>Well-equipped spacious laboratories with high end computing systems suitable for Research and Development activities.</li></ul>
            <ul><li>Our Students participated in Smart India Hackathon 2017, 2018 and 2019 organized by Govt. of India and in which prize amount were sanctioned for the project and further financial assistance were provided by AICTE which are mentioned below.</li></ul>
            </div>

            <table class="tableAbout">
                <tr>
                    <th>S.No</th>
                    <th>Smart India hackathon</th>
                    <th>Prize Amount</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2019</td>
                    <td>2x ₹ 1,00,000 and ₹ 10,000</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2018</td>
                    <td>₹ 60,000 and ₹ 10,000</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>2017</td>
                    <td>₹ 25,000 and ₹ 3,00,000 by DST (Department of Science & Technology.)</td>
                </tr>
            </table>
          
            <div class="Points">
            <ul><li>Applied few patents by the faculty members of our department.</li></ul>
            <ul><li>Every year a large number of students win accolades at the National and International level awards for their projects, cultural and sports achievements besides securing many University Ranks.</li></ul>
            <ul><li>Many of our students got placements in top notch organizations besides securing admissions in world class Universities in India and abroad.</li></ul>
            </div>
        </div>
    )
}

export default AboutUs;
