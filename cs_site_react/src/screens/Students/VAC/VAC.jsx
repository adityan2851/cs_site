import vac from "../../../assets/pdfs/students/vsc.pdf";
import PDFViewer from "../../../components/PDFViewer/PDFViewer";

const VAC = () => {
  const pdfURL = "https://stjosephscse.com/pdfs/vsc.pdf";
  return (
    <div>
      <PDFViewer pdf={pdfURL} />
    </div>
  );
};

export default VAC;
