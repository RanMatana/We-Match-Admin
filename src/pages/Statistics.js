import React from "react";
import Chart from "../components/Chart";
import Sidebar from "../components/Sidebar";

export default function Statistics() {
  return (
    <div className="container">
      <Sidebar />
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          float: "right",
          width: "80%",
          height: "100%",
        }}
      >
        <Chart />
      </div>
    </div>
  );
}
