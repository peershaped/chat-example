import React from 'react';
import ReactDOM from "react-dom";
import { Router } from 'react-router';
import "bootstrap/dist/css/bootstrap.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { history } from "./history";
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
reportWebVitals();
