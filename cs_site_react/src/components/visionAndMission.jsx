import React from "react";

const VisionAndMission = () => {

    const clickMe = (event, cityName) => {
        // Declare all variables
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        //   document.getElementById(cityName).className += " transition";
        document.getElementById(cityName).style.display = "block";
        
        evt.currentTarget.className += " active";
    }

    return (
        
        <div class="banner-wrapper">
        
            <div class="tab align-center">
                <button class="tablinks active"  onClick={(event) => {
                    this.clickMe(event, 'visionAndMission')
                }}>Vision & Mission</button>
                <button class="tablinks" onclick="openCity(event, 'PEOPSO')">PEO & PSO</button>
                <button class="tablinks" onclick="openCity(event, 'programOutcome')">Program Outcome</button>
                <button class="tablinks" onclick="openCity(event, 'courseOutcome')">Course Outcome</button>
            </div>

            <div id="visionAndMission" class="tabcontent">
                <h2>Vision</h2>
                <p>The Department of Computer Science and Engineering believes in providing quality education to students
                    who will excel in design and development of hardware and software integrated devices through continuous
                    learning and research activities, ethically meeting the social needs.</p>

                <h2>Mission</h2>
                <p>
                    <strong>Excellence: </strong> Achieve academic excellence through innovative teaching and continuous
                    improvement thereby
                    promoting research and development in the field of Computer Science and Engineering.
                </p>
                <p>
                    <strong>Adaptability: </strong> Inculcate team work, ethical practices and build necessary skill set in
                    students through
                    career development training programmes to help them adapt to the ever changing market demands.
                </p>
                <p>
                    <strong>Service: </strong> Enrich students with moral values, discipline and high integrity to serve the
                    society and work
                    towards its betterment
                </p>
            </div>

            <div id="PEOPSO" class="tabcontent">
                <h2>Vision</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic necessitatibus facilis ullam neque totam
                    minima quos. Fugiat quidem cupiditate quisquam voluptatum sit. Eum natus rerum, doloribus delectus modi
                    iure illo!Enrich students with moral values, discipline and high integrity to serve the society and work
                    towards its bettermen</p>

                <h2>Mission</h2>
                <p>
                    <strong>Excellence: </strong> Achieve academic excellence through innovative teaching and continuous
                    improvement thereby
                    promoting research and development in the field of Computer Science and Engineering.
                </p>
                <p>
                    <strong>Adaptability: </strong> Inculcate team work, ethical practices and build necessary skill set in
                    students through
                    career development training programmes to help them adapt to the ever changing market demands.
                </p>
                <p>
                    <strong>Service: </strong> Enrich students with moral values, discipline and high integrity to serve the
                    society and work
                    towards its betterment
                </p>
            </div>

            <div id="programOutcome" class="tabcontent">
                <h2>Tokyo</h2>
                <p>Tokyo is the capital of Japan.</p>
            </div>

            <div id="courseOutcome" class="tabcontent">
                <h2>Tokyo</h2>
                <p>Tokyo is the capital of Japan.</p>
            </div>

        </div>
    );
}

export default VisionAndMission;