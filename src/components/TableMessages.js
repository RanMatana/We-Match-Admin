import React, { Component } from "react";
import MaterialTable from "material-table";
import { getMessages } from "../api";

export default class TableMessages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { title: "From", field: "From_User" },
        { title: "To", field: "To_User" },
        { title: "Date", field: "Date" },
        { title: "Text", field: "Text" },
      ],
      data: [],
    };
  }
  async componentDidMount() {
    let s = await getMessages();
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
          title="Messages List"
          columns={this.state.columns}
          data={this.state.data}
        />
      </React.Fragment>
    );
  }
}
