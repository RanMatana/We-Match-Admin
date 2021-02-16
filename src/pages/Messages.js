import React from "react";
import { withRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TableMessages from "../components/TableMessages";

const Messages = () => {
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
        <TableMessages />
      </div>
    </div>
  );
};

export default withRouter(Messages);
