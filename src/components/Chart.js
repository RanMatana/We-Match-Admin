import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { getPlaces } from "../api";

export default class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charData: {},
    };
  }
  async componentDidMount() {
    await this.init();
  }

  async init() {
    let s = await getPlaces();
    let temp_names = [];
    let temp_req = Array.apply(null, new Array(s.length)).map(
      Number.prototype.valueOf,
      0
    );

    for (let i = 0; i < s.length; i++) {
      temp_names.push(s[i].Name);
    }
    for (let i = 0; i < s.length; i++) {
      temp_req[i] = s[i].Likes;
    }
    this.setState({ names: temp_names, req: temp_req }, () => {
      this.setState({
        charData: {
          labels: this.state.names,
          datasets: [
            {
              label: "Popolation",
              data: this.state.req,
              backgroundColor: [
                "rgba(255,99,132,0.6)",
                "rgba(54,162,235,0.6)",
                "rgba(255,206,86,0.6)",
                "rgba(75,192,192,0.6)",
                "rgba(153,102,255,0.6)",
                "rgba(255,159,64,0.6)",
                "rgba(255,99,132,0.6)",
                "rgba(54,162,235,0.6)",
                "rgba(255,206,86,0.6)",
                "rgba(75,192,192,0.6)",
                "rgba(153,102,255,0.6)",
                "rgba(255,159,64,0.6)",
              ],
            },
          ],
        },
      });
    });
  }

  render() {
    return (
      <Line
        data={this.state.charData}
        options={{
          title: {
            display: true,
            text: "Rating",
            fontSize: 35,
            fullWidth: true,
          },
          legend: {
            display: false,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    );
  }
}
