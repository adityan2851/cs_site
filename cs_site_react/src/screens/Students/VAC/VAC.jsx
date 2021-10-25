import vac from "../../../assets/pdfs/students/vsc.pdf";
import PDFViewer from "../../../components/PDFViewer/PDFViewer";
const VAC = () => {
  return (
    <div>
      <PDFViewer pdf={vac} />
    </div>
  );
};

export default VAC;
