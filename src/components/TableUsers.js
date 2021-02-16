import React, { Component } from "react";
import MaterialTable from "material-table";
import { getAllUsers } from "../api";

export default class TableUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { title: "User name", field: "Username" },
        { title: "Email", field: "Email" },
        { title: "Gender", field: "Gender" },
        { title: "Interested", field: "Interested" },
        { title: "Photo", field: "Photo" },
        { title: "Latitude", field: "Latitude" },
        { title: "Longitude", field: "Longitude" },
        { title: "Token", field: "Token" },
        { title: "Range", field: "Range" },
        { title: "Birth", field: "Birth" },
        { title: "About", field: "About" },
      ],
      data: [],
    };
  }
  async componentDidMount() {
    let s = await getAllUsers();
    console.log("returned value= " + s);

    if (s != null) {
      this.setState({
        data: s,
      });
    } else {
      console.log("No Sucess");
    }
  }
  render() {
    return (
      <React.Fragment>
        <MaterialTable
          title="Users List"
          columns={this.state.columns}
          data={this.state.data}
        />
      </React.Fragment>
    );
  }
}
