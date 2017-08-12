<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
//import {Router, browserHistory} from 'react-router'
import Main from './components/Main';
=======
import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory } from "react-router";
import Main from "./components/Main";
import routes from "./Routes.js";
>>>>>>> 61dc4a9b6bd835761f58c9c5cb4935438dc8f964
//import './index.css';

//ReactDOM.render(<Main />, document.getElementById("root"));

ReactDOM.render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById("root")
);
