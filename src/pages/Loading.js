import React, { useEffect } from "react";
import Header from "../asstes/header.png";
import Logo from "../asstes/Logo.png";
import { withRouter } from "react-router-dom";

const Loading = (props) => {
  useEffect(() => {
    if (props.location.state === undefined) {
      setTimeout(() => {
        goHome();
      }, 3000);
    }
  });
  const goHome = () => {
    props.history.push({
      pathname: "/home/",
    });
  };
  return (
    <div className="loading">
      <div className="login-again" onClick={() => goHome()} />
      <img className="header" src={Header} alt="header" width="300" />
      <span className="react-logo">
        <img src={Logo} className="nucleo" alt="logo" />
      </span>
    </div>
  );
};
export default withRouter(Loading);
