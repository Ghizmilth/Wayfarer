import React, { Component } from "react";
import Header from "./Header";
import CityList from "./CityList";

class UserProfile extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <h2>About the user:</h2>
        </div>
      </div>
    );
  }
}

export default UserProfile;
