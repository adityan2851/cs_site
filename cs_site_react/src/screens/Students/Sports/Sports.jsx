import sports from "../../../assets/pdfs/students/sports.pdf";
import PDFViewer from "../../../components/PDFViewer/PDFViewer";
const Sports = () => {
  return (
    <div>
      <PDFViewer pdf={sports} />
    </div>
  );
};

export default Sports;
