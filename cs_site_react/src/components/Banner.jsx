import {Nav, Tab, Row} from "react-bootstrap"

const Banner = () => {

    const courseOutcome_style = { color: "white" };


    return (<Tab.Container id="banner-wrapper" defaultActiveKey="first" className="p-0">
    <Row md className="p-0">
        <Nav variant="pills" className="banner-tabs-nav">
          <Nav.Item className="pilledTabs">
            <Nav.Link eventKey="first">Vision & Mission</Nav.Link>
          </Nav.Item>
          <Nav.Item className="pilledTabs">
            <Nav.Link eventKey="second">PEO & PSO</Nav.Link>
          </Nav.Item>
          <Nav.Item className="pilledTabs">
            <Nav.Link eventKey="third">Program Outcome</Nav.Link>
          </Nav.Item>
          <Nav.Item className="pilledTabs">
            <Nav.Link eventKey="fourth">Course Outcome</Nav.Link>
          </Nav.Item>
        </Nav>
      
      
        <Tab.Content className="p-0 m-0">
          <Tab.Pane eventKey="first">
            <div
        id="visionAndMission"
        className="tabcontent"
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
          </Tab.Pane>
          <Tab.Pane eventKey="second">
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
          </Tab.Pane>
          <Tab.Pane eventKey="third">
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
          </Tab.Pane>
          <Tab.Pane eventKey="fourth">
         
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
    
          </Tab.Pane>
        </Tab.Content>
    </Row>
  </Tab.Container>)

}

export default Banner;