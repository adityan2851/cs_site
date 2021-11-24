import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import loadAnim from "../../assets/animations/loading-anim.json";
import Animation from "../Animation";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const loadingAnim = () => <Animation animation={loadAnim} />;

const onLoadProgressing = ({ loaded, total }) => null;
export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;

  return (
    <Document
      file={pdf}
      onLoadSuccess={onDocumentLoadSuccess}
      loading={loadingAnim}
      onLoadProgress={onLoadProgressing}
      error={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "grey",
            paddingTop: "30px",
          }}
        >
          Failed to Load the PDF
        </div>
      }
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          width={props.width <= 760 ? props.width : props.width / 2}
        />
      ))}
    </Document>
  );
}
