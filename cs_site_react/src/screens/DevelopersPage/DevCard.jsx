import "./Dev.css";

const DevCard = ({ image, devName, linkedinLink }) => {
  return (
    <div class="card mb-4 Box shadow">
      <div class="over">
      <div class="card-body text-center">
        <ul class="list-unstyled display-block mx-auto">
        <div class="layer"></div>
        <div>
          <img alt="profile" class="dev-image contributor-img" src={image} />
        </div>
          <li style={{ marginTop: "20px" }}>
            {/* <p style={{ opacity: "80%" }}>
              {" "}
              <br /> <span class="role"></span>
            </p> */}
          </li>
        </ul>
        <h4 style={{textColor: "black"}} className="dev-name">{devName}</h4>
        <br />
        <a href={linkedinLink} target="_blank" rel="noreferrer">
          <button class="css-button-rounded--blue"> View Profile</button>
        </a>
      </div>
    </div>
    </div>
  );
};

export default DevCard;
