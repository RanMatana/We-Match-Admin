import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import Home from "@material-ui/icons/Home";
import BuildIcon from "@material-ui/icons/Build";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import Header from "../asstes/header.png";
import Logo from "../asstes/Logo.png";

const Sidebar = () => {
  return (
    <div style={{ height: "100%", position: "absolute",borderRight:'3px solid black' }}>
      <ProSidebar>
        <div className="header-sidebar">
          <img src={Header} alt="header" width="200" />
        </div>
        <Menu iconShape="square">
          <MenuItem icon={<Home />}>
            Home
            <Link to="/home/" />
          </MenuItem>
          <MenuItem icon={<EqualizerIcon />}>
            Statistics
            <Link to="/rating/" />
          </MenuItem>

          <SubMenu icon={<BuildIcon />} title="Management">
            <MenuItem>
              Users
              <Link to="/users/" />
            </MenuItem>
            <MenuItem>
              Places
              <Link to="/places/" />
            </MenuItem>
            <MenuItem>
              Users In Places
              <Link to="/usersinplaces/" />
            </MenuItem>
            <MenuItem>
              Messages
              <Link to="/messages/" />
            </MenuItem>
            <MenuItem>
              Matches
              <Link to="/matches/" />
            </MenuItem>
            <MenuItem>
              Likes
              <Link to="/Likes/" />
            </MenuItem>
          </SubMenu>
          <MenuItem icon={<PowerSettingsNewIcon />}>
            Log out
            <Link to={{ pathname: "/", state: { off: true } }} />
          </MenuItem>
        </Menu>
        <div className="footer-sidebar">
          <img src={Logo} alt="logo" />
        </div>
      </ProSidebar>
    </div>
  );
};
export default Sidebar;
