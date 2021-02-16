import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loading from "./pages/Loading";
import "./App.css";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import Users from "./pages/Users";
import Places from "./pages/Places";
import UsersInPlaces from "./pages/UsersInPlaces";
import Messages from "./pages/Messages";
import Likes from "./pages/Likes";
import Matches from "./pages/Matches";

// import Home from './Pages/Home';
// import StatisticsLikes from './Pages/StatisticsLikes';
// import StatisticsReq from './Pages/StatisticsReq';
// import Users from './Pages/Users';
// import Places from './Pages/Places';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Loading />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/rating">
          <Statistics />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/places">
          <Places />
        </Route>
        <Route path="/usersinplaces">
          <UsersInPlaces />
        </Route>
        <Route path="/messages">
          <Messages />
        </Route>
        <Route path="/matches">
          <Matches />
        </Route>
        <Route path="/likes">
          <Likes />
        </Route>
        {/* <Route path="/statisticslikes" >
          <StatisticsLikes />
        </Route>
        <Route path="/statisticsreqs" >
          <StatisticsReq />
        </Route>
        <Route path="/users" >
          <Users />
        </Route>
        <Route path="/places" >
          <Places />
        </Route>  */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
