import React from "react";
import { withRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TableUsersInPlaces from "../components/TableUsersInPlaces";

const UsersInPlaces = () => {
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
        <TableUsersInPlaces />
      </div>
    </div>
  );
};

export default withRouter(UsersInPlaces);
