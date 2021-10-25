import React, { useState, useEffect } from "react";

import AllPages from "./AllPages";

import "./PDFViewer.css";

const zoomOutMobile = () => {
  const viewport = document.querySelector('meta[name="viewport"]');

  if (viewport) {
    viewport.content = "initial-scale=1";
    viewport.content = "width=device-width";
  }
};

const PDFViewer = ({ pdf }) => {
  const screenWidth = window.innerWidth;

  const [isMobile, setIsMobile] = useState(0);

  console.log(screenWidth);
  useEffect(() => {
    if (screenWidth <= 760) {
      zoomOutMobile();
      setIsMobile(1);
    }
  }, []);

  return (
    <>
      <div className="pdf-viewer-wrapper">
        {isMobile == 1 ? (
          <AllPages pdf={pdf} width={screenWidth} />
        ) : (
          <embed
            src={pdf}
            type="application/pdf"
            height="700px"
            width="80%"
          ></embed>
        )}
      </div>
    </>
  );
};

export default PDFViewer;
