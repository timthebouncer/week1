import React from 'react';
import { setupMSW } from './mocks/browser'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,HashRouter} from "react-router-dom";
import Routes from "./route/route";

setupMSW().then(() =>
  ReactDOM.render( <Router><App /></Router>, document.getElementById('root'))
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
