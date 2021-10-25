import PDFViewer from "../../../components/PDFViewer/PDFViewer";
import projectExpo from "../../../assets/pdfs/students/pe.pdf";
const ProjectExpo = () => {
  return (
    <div>
      <PDFViewer pdf={projectExpo} />
    </div>
  );
};

export default ProjectExpo;
