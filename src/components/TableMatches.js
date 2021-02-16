import React, { Component } from "react";
import MaterialTable from "material-table";
import { getMatches } from "../api";

export default class TableMatches extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { title: "Me", field: "Me" },
        { title: "Partner", field: "Partner" },
        { title: "Like", field: "Partner_Like" },
      ],
      data: [],
    };
  }
  async componentDidMount() {
    let s = await getMatches();
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
          title="Matches List"
          columns={this.state.columns}
          data={this.state.data}
        />
      </React.Fragment>
    );
  }
}
