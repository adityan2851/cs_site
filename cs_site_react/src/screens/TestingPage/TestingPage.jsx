import React from "react";
import { Link } from "react-router-dom";

const TestingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Testing Page</h1>

      <Link to="/19" className="btn btn-primary">
        View
      </Link>
    </div>
  );
};

export default TestingPage;
