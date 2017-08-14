import React from "react";
import { Route } from "react-router";
import Signup from "./components/Signup";
import Main from "./components/Main";
import UserProfile from "./components/UserProfile";

var routes = (
  <div>
    <Route path="/" component={Main} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Main} />
    <Route path="/user" component={UserProfile} />
  </div>
);

export default routes;
