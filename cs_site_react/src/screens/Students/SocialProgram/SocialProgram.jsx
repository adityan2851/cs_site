import ngo from "../../../assets/pdfs/students/ngo.pdf";
import PDFViewer from "../../../components/PDFViewer/PDFViewer";
const SocialProgram = () => {
  return (
    <div>
      <PDFViewer pdf={ngo} />
    </div>
  );
};

export default SocialProgram;
