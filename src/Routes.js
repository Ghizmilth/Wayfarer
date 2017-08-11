import React from "react";
import { Route } from "react-router";
import PostBox from "./components/PostBox";
import Signup from "./components/Signup";
import Main from "./components/Main";

var routes = (
  <div>
    <Route path="/" component={Main} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Main} />
  </div>
);

export default routes;
