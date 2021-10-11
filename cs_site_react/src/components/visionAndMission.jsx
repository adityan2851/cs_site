import React from "react";

const VisionAndMission = () => {
  const courseOutcome_style = { color: "white" };

  const clickMe = (event, cityName) => {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with className="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with className="tablinks" and remove the className "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    const tabToBeActive = document.getElementById(cityName);
    tabToBeActive.style.display = "block";
    // tabToBeActive.classList.add("active");

    event.currentTarget.className += " active";
  };

  return (
    <div className="banner-wrapper">
      {/* <ul
        className="nav mb-3 d-flex justify-content-center"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item text-black" role="presentation">
          <button
            className="nav-link active tab-button-custom"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Home
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link tab-button-custom"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Profile
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link tab-button-custom"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Contact
          </button>
        </li>
      </ul> */}
      {/* <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          /...
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          ...
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          ...
        </div>
      </div> */}

      <div className="tab align-center">
        <button
          className="tablinks active"
          onClick={(event) => {
            clickMe(event, "visionAndMission");
          }}
        >
          Vision and Mission
        </button>
        <button
          className="tablinks"
          onClick={(event) => {
            clickMe(event, "PEOPSO");
          }}
        >
          PEO & PSO
        </button>
        <button
          className="tablinks"
          onClick={(event) => {
            clickMe(event, "programOutcome");
          }}
        >
          Program Outcome
        </button>
        <button
          className="tablinks"
          onClick={(event) => {
            clickMe(event, "courseOutcome");
          }}
        >
          Course Outcome
        </button>
      </div>

      <div id="visionAndMission"
        className="tabcontent"
        style={{ display: "block" }}
      >
        <h2>Vision</h2>
        <p>
          The Department of Computer Science and Engineering believes in
          providing quality education to students who will excel in design and
          development of hardware and software integrated devices through
          continuous learning and research activities, ethically meeting the
          social needs.
        </p>

        <h2>Mission</h2>
        <p>
          <strong>Excellence: </strong> Achieve academic excellence through
          innovative teaching and continuous improvement thereby promoting
          research and development in the field of Computer Science and
          Engineering.
        </p>
        <p>
          <strong>Adaptability: </strong> Inculcate team work, ethical practices
          and build necessary skill set in students through career development
          training programmes to help them adapt to the ever changing market
          demands.
        </p>
        <p>
          <strong>Service: </strong> Enrich students with moral values,
          discipline and high integrity to serve the society and work towards
          its betterment
        </p>
      </div>

      <div id="PEOPSO" className="tabcontent">
        <h2>Program Educational Objectives (PEO)</h2>
        <p>
          <strong>Profession: </strong> Graduates excel in computer technology
          in order to pursue higher education and research, or have a successful
          career in industries or as entrepreneurs.
        </p>
        <p>
          <strong>Technophile: </strong> Graduates will have the ability and
          attitude to adapt emerging technological changes in the field of
          Computer Science and Engineering.
        </p>
        <p>
          <strong>Team Player: </strong> Possess an ability to collaborate as a
          team member and team leader to affect technical solutions for
          computing systems, providing improved function and outcomes.
        </p>

        <h2>Program Specific Outcomes (PSO)</h2>
        <p>
          <strong>Efficacy: </strong> Ability to apply mathematical
          methodologies and foundational concepts of Computer Science and
          Engineering to solve computational tasks, model the real world problem
          using appropriate data structure and algorithm with suitable
          programming languages.
        </p>
        <p>
          <strong>Potentiality to design: </strong>Analyze, design and evaluate
          a computer based system by applying software engineering principles
          and practices for developing quality software for scientific and
          business applications.
        </p>
        <p>
          <strong>Technical Expertise: </strong> Adapt to modern engineering
          technologies and thereby build robust, reliable, maintainable,
          scalable, innovative and efficient computing systems by considering
          social, environmental, economic, and security constraints.
        </p>
      </div>

      <div id="programOutcome" className="tabcontent">
        <p>
          <strong>Engineering knowledge: </strong> Apply the knowledge of
          mathematics, science, engineering fundamentals, and an engineering
          specialization to the solution of complex engineering problems.
        </p>
        <p>
          <strong>Problem analysis: </strong> Identify, formulate, review
          research literature, and analyze complex engineering problems reaching
          substantiated conclusions using first principles of mathematics,
          natural sciences, and engineering sciences.
        </p>
        <p>
          <strong>Design/development of solutions: </strong>Use research-based
          knowledge and research methods including design of experiments,
          analysis and interpretation of data, and synthesis of the information
          to provide valid conclusions.
        </p>
        <p>
          <strong>Conduct investigations of complex problems: </strong>Design
          solutions for complex engineering problems and design system
          components or processes that meet the specified needs with appropriate
          consideration for the public health and safety, and the cultural,
          Societal and environmental considerations.
        </p>
        <p>
          <strong>Modern tool usage: </strong> Create, select, and apply
          appropriate techniques, resources, and modern engineering and IT tools
          including Prediction and modeling to complex engineering activities
          with an understanding of the limitations.
        </p>
        <p>
          <strong>The engineer and society: </strong>Apply reasoning informed by
          the contextual knowledge to assess societal, health, safety, legal and
          Cultural issues and the consequent responsibilities relevant to the
          professional engineering practice.
        </p>
        <p>
          <strong>Environment and sustainability:</strong>Understand the impact
          of the professional engineering solutions in societal and
          environmental contexts, and demonstrate the knowledge of, and need for
          sustainable development.
        </p>
        <p>
          <strong>Ethics: </strong>Apply ethical principles and commit to
          professional ethics and responsibilities and norms of the engineering
          practice.
        </p>
        <p>
          <strong>Individual and team work: </strong> Function effectively as an
          individual, and as a member or leader in diverse teams, and in
          multidisciplinary settings.
        </p>
        <p>
          <strong>Communication: </strong>Communicate effectively on complex
          engineering activities with the engineering community and with society
          at large, such as, being able to comprehend and write effective
          reports and design documentation, make effective Presentations, and
          give and receive clear instructions.
        </p>
        <p>
          <strong>Project management and finance: </strong>Demonstrate knowledge
          and understanding of the engineering and management principles and
          apply these to one’s own work, as a member and leader in a team, to
          manage projects and in multidisciplinary environments.
        </p>
        <p>
          <strong>Life-long learning: </strong>Recognize the need for, and have
          the preparation and ability to engage in independent and life-long
          learning in the broadest context of technological change.
        </p>
      </div>

      <div id="courseOutcome" className="tabcontent">
        <h3>Undergraduate Courses</h3>
        <ul>
          <li>
            <a href="/#" style={courseOutcome_style}>
              Course Outcomes 2017
            </a>
          </li>
          <li>
            <a href="/#" style={courseOutcome_style}>
              Course Outcomes 2013
            </a>
          </li>
        </ul>

        <h3>Postgraduate Courses</h3>
        <ul>
          <li>
            <a href="/#" style={courseOutcome_style}>
              Course Outcomes 2017
            </a>
          </li>
          <li>
            <a href="/#" style={courseOutcome_style}>
              Course Outcomes 2013
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VisionAndMission;
