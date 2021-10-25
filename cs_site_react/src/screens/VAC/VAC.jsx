import vac from "../../assets/pdfs/students/vsc.pdf";
const VAC = () => {
  return (
    <div width="100%" height="100%" style={{ textAlign: "center" }}>
      <div className="container">
        <embed
          src={vac}
          type="application/pdf"
          height="700px"
          width="100%"
        ></embed>
      </div>
    </div>
  );
};

export default VAC;
