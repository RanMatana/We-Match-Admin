import React, { Component } from "react";
import MaterialTable from "material-table";
import { getUsersInPlaces, updateUserCurrentPlaces } from "../api";

export default class TableUsersInPlaces extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { title: "Place ID", field: "Place_ID" },
        { title: "User ID", field: "User_ID" },
        { title: "Date", field: "Date" },
      ],
      data: [],
    };
  }
  async componentDidMount() {
    let s = await getUsersInPlaces();
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
          title="Users In Places List"
          columns={this.state.columns}
          data={this.state.data}
        />
      </React.Fragment>
    );
  }
}
