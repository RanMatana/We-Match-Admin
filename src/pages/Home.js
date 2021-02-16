import React from "react";
import SideBar from "../components/Sidebar";
import { TextField, Button } from "@material-ui/core";
import { addPlace, imageUpload } from "../api";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit = async () => {
    if (
      this.state.name &&
      this.state.address &&
      this.state.area &&
      this.state.latitude &&
      this.state.longitude &&
      this.state.about &&
      this.state.photo &&
      this.state.logo
    ) {
      let urlLogo = await imageUpload(
        this.state.logoFile,
        `${this.state.name}_Logo`
      );
      let urlImage = await imageUpload(
        this.state.imgFile,
        `${this.state.name}_Photo`
      );
      await addPlace(
        1,
        this.state.name,
        this.state.address,
        this.state.area,
        this.state.latitude,
        this.state.longitude,
        this.state.about,
        urlImage,
        urlLogo,
        0
      );
      this.props.history.push({
        pathname: "/places/",
      });
    } else alert("Please fill in all fields");
  };
  render() {
    return (
      <div className="container">
        <SideBar />
        <div className="container-cover">
          <div className="container-home">
            <div className="field-home">
              <Button
                variant="contained"
                color="secondary"
                onClick={this.submit}
                className="submit-btn"
              >
                Submit
              </Button>
            </div>
            <h1 style={{ textAlign: "center" }}>Create a New Place</h1>
            <form className="grid-home">
              <div>
                <div className="field-home">
                  <TextField
                    label="Name"
                    onChange={(e) => this.setState({ name: e.target.value })}
                  />
                </div>
                <div className="field-home">
                  <TextField
                    label="Address"
                    onChange={(e) => this.setState({ address: e.target.value })}
                  />
                </div>
                <div className="field-home">
                  <TextField
                    label="Area"
                    onChange={(e) => this.setState({ area: e.target.value })}
                  />
                </div>
                <div className="field-home">
                  <TextField
                    label="Latitude"
                    onChange={(e) =>
                      this.setState({ latitude: e.target.value })
                    }
                  />
                </div>
                <div className="field-home">
                  <TextField
                    label="Longitude"
                    onChange={(e) =>
                      this.setState({ longitude: e.target.value })
                    }
                  />
                </div>
                <div className="field-home">
                  <TextField
                    label="About"
                    onChange={(e) => this.setState({ about: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <div className="field-home">
                  <p>Choose logo</p>
                  <input
                    type="file"
                    accept="image/*"
                    id="logo"
                    onChange={(e) =>
                      this.setState({
                        logo: URL.createObjectURL(e.target.files[0]),
                        logoFile: e.target.files[0],
                      })
                    }
                  />
                </div>
                <div className="field-home">
                  <p>Choose Photo</p>
                  <input
                    type="file"
                    accept="image/*"
                    id="logo"
                    onChange={(e) =>
                      this.setState({
                        photo: URL.createObjectURL(e.target.files[0]),
                        imgFile: e.target.files[0],
                      })
                    }
                  />
                </div>
                <div className="container-images">
                  {this.state.logo && (
                    <img
                      width="250px"
                      height="200px"
                      src={this.state.logo}
                      alt="logo"
                    />
                  )}
                  {this.state.photo && (
                    <img
                      width="250px"
                      height="200px"
                      src={this.state.photo}
                      alt="place"
                    />
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
