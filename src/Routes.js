import React from "react";
import { Route } from "react-router";
import Signup from "./components/Signup";
import Main from "./components/Main";
import UserProfile from "./components/UserProfile";
import Splash from "./components/Splash";

let config = {
 postUrl : 'http://localhost:3001/api/posts/',
 citiesPostUrl : 'http://localhost:3001/api/posts/cities/',
 citiesUrl : 'http://localhost:3001/api/cities/',
 loginUrl : 'http://localhost:3001/login',
 defaultPageContext : "",
 isAuthenticated : false,
 defaultCityId : 1,
 defaultUserId: 1
}
var routes = (
  <div>

        <Route path="/" component={Main} config={config} />
      ] <Route path="/cities/:id" omponent={Main} config={config}/>
        <Route path="/signup" component={Signup}  config={config}/>
        <Route path="/login" component={Main}  config={config}/>
        <Route path="/user" component={UserProfile}  config={config}/>
  </div>
);

export default routes;
