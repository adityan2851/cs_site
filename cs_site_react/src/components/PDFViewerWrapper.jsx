import React from "react";
import { useLocation } from "react-router";
import PDFViewer from "./PDFViewer/PDFViewer";

const PDFViewerWrapper = () => {
  const location = useLocation();
  const pdfLink = location.state.pdfLink;
  return <PDFViewer pdf={pdfLink} />;
};

export default PDFViewerWrapper;
