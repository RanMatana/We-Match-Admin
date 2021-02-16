import React, { Component } from "react";
import MaterialTable from "material-table";
import { getLikes } from "../api";

export default class TableLikes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { title: "Place", field: "Place_ID" },
        { title: "User", field: "User_ID" },
      ],
      data: [],
    };
  }
  async componentDidMount() {
    let s = await getLikes();
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
          title="Likes List"
          columns={this.state.columns}
          data={this.state.data}
        />
      </React.Fragment>
    );
  }
}
