import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles.css";
import {recordClick} from './components/related-products/ClickRecord.js'

window.onclick = (e) => {
    console.log(e.target.className)
    recordClick(e.target.className)
}


var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);