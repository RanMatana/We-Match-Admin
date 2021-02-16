import React, { Component } from "react";
import MaterialTable from "material-table";
import { getPlaces } from "../api";

export default class TablePlaces extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { title: "Place Name", field: "Name" },
        { title: "Address", field: "Address" },
        { title: "Area", field: "Area" },
        { title: "Latitude", field: "Latitude" },
        { title: "Longitude", field: "Longitude" },
        { title: "Photo", field: "Photo" },
        { title: "Logo", field: "Logo" },
        { title: "Likes", field: "Likes" },
      ],
      data: [],
    };
  }
  async componentDidMount() {
    let s = await getPlaces();
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
          title="Places List"
          columns={this.state.columns}
          data={this.state.data}
        />
      </React.Fragment>
    );
  }
}
