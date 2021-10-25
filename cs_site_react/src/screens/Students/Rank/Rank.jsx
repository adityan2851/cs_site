import rank from "../../../assets/pdfs/students/rank.pdf";
import PDFViewer from "../../../components/PDFViewer/PDFViewer";
const Rank = () => {
  return (
    <div>
      <PDFViewer pdf={rank} />
    </div>
  );
};
export default Rank;
