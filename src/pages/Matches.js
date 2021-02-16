import React from "react";
import { withRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TableMatches from "../components/TableMatches";

const Matches = () => {
  return (
    <div className="container">
      <Sidebar />
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          float: "right",
          width: "85.8%",
          height: "100%",
        }}
      >
        <TableMatches />
      </div>
    </div>
  );
};

export default withRouter(Matches);
